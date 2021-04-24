import { useQuery } from '@apollo/client';
import { GetTagsDocument, GetTagsQuery, QueryGetTagsArgs } from '../../../gql';
import Dropdown from '../atomic/dropdown/Dropdown';
import { useState } from 'react';
import Button from '../atomic/button';

function Filter() {
  const [tag, setTag] = useState({ name: '', id: '' });
  const [current, setCurrent] = useState('');
  const { data, error, loading } = useQuery<GetTagsQuery, QueryGetTagsArgs>(
    GetTagsDocument,
    { variables: { after: current, first: 10, contain: tag.name } },
  );
  return (
    <div className="flex flex-row container mx-auto">
      <Dropdown
        className="origin-top-left"
        menu={
          data
            ? data.getTags.edges.map((ele) => (
                <div
                  className="cursor-pointer h-6 px-2 "
                  onClick={() =>
                    setTag({ name: ele.node.name, id: ele.node.id })
                  }
                >
                  {ele.node.name}
                </div>
              ))
            : []
        }
      >
        <input
          className="h-12 px-2 max-w-sm "
          value={tag.name}
          onChange={(event) =>
            setTag((prev) => ({ ...prev, name: event.target.value }))
          }
          placeholder="Enter Tags to filter"
        />
      </Dropdown>

      <div className="self-center">
        <Button onClick={() => {}}>Filter</Button>
      </div>
    </div>
  );
}

export default Filter;
