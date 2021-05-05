import { useQuery } from '@apollo/client';
import {
  GetTagsDocument,
  GetTagsQuery,
  QueryGetTagsArgs,
} from '../../../../gql';
import Dropdown from '../../atomic/dropdown/Dropdown';
import { useState } from 'react';
import Button from '../../atomic/button';
import Tag from '../Tag';
import clsx from 'clsx';

function TagsInput({ onFilter, tags, setTags, className = '' }) {
  const [tag, setTag] = useState({ name: '', id: '' });

  const [current, setCurrent] = useState('');

  const { data, error, loading } = useQuery<GetTagsQuery, QueryGetTagsArgs>(
    GetTagsDocument,
    { variables: { after: current, first: 10, contain: tag.name } },
  );

  return (
    <div
      className={clsx('flex items-end flex-wrap container mx-auto', className)}
    >
      <Dropdown
        className="origin-top-left"
        menu={
          data
            ? data.getTags.edges.map((ele) => (
                <div
                  className="cursor-pointer h-6 px-2 "
                  onClick={() => {
                    setTags((prev) => [
                      ...prev,
                      { name: ele.node.name, id: ele.node.id },
                    ]);
                    setTag({ name: '', id: null });
                  }}
                >
                  {ele.node.name}
                </div>
              ))
            : []
        }
      >
        <div className="bg-white max-w-md rounded-md overflow-hidden">
          {tags.length > 0 && (
            <div className="p-1">
              {tags.map((ele) => (
                <Tag
                  className="bg-question pl-2 pr-2 my-1 ml-1"
                  color="text-white"
                  closable={true}
                  onClose={() =>
                    setTags((prev) => prev.filter((ele2) => ele2 !== ele))
                  }
                >
                  {ele.name}
                </Tag>
              ))}
            </div>
          )}

          <input
            className="p-2 pb-0 max-w-md outline-none"
            value={tag.name}
            onChange={(event) =>
              setTag((prev) => ({ ...prev, name: event.target.value }))
            }
            placeholder="Enter Tags to filter"
            onKeyDown={(event) => {
              if (event.key == 'Enter') setTags((prev) => [...prev, tag]);
            }}
          />
        </div>
      </Dropdown>

      <Button
        className="sm:ml-4 mt-4 bg-warning"
        colorClass="text-black"
        onClick={() => {
          if (tag.name !== '') {
            setTags((prev) => [...prev, tag.name]);
            setTag({ id: null, name: '' });
          }
          onFilter();
        }}
      >
        Apply Filters
      </Button>
    </div>
  );
}

export default TagsInput;
