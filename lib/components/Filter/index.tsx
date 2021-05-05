import { useQuery } from '@apollo/client';
import { GetTagsDocument, GetTagsQuery, QueryGetTagsArgs } from '../../../gql';
import Dropdown from '../atomic/dropdown/Dropdown';
import { useState } from 'react';
import Button from '../atomic/button';

function Filter({ onFilter, tags, setTags }) {
  const [tag, setTag] = useState({ name: '', id: '' });
  const [current, setCurrent] = useState('');
  const { data, error, loading } = useQuery<GetTagsQuery, QueryGetTagsArgs>(
    GetTagsDocument,
    { variables: { after: current, first: 10, contain: tag.name } },
  );

  return (
    <div className="flex flex-row container mx-auto mb-5">
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
        <div className="flex flex-row content-center flex-wrap bg-white  max-w-md">
          {tags.map((ele) => (
            <span className="rounded-full px-3 mx-1 my-1 bg-primary self-center text-white">
              {ele.name}
              <span
                onClick={() =>
                  setTags((prev) => prev.filter((ele2) => ele2 !== ele))
                }
                className="ml-2"
              >
                x
              </span>
            </span>
          ))}
          <input
            className="h-12 px-2 max-w-md"
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

      <div className="self-center ml-4">
        <Button
          onClick={() => {
            if (tag.name !== '') {
              setTags((prev) => [...prev, tag.name]);
              setTag({ id: null, name: '' });
            }
            onFilter();
          }}
        >
          Filter
        </Button>
      </div>
    </div>
  );
}

export default Filter;
