import clsx from 'clsx';
import Button from 'lib/components/atomic/button';
import {
  ClockIcon,
  StarIcon,
  TreadingUpIcon,
  PencilIcon,
} from 'lib/components/Icons';
import LinkButton from 'lib/components/Shared/LinkButton';
import TagsInput from 'lib/components/Shared/TagsInput';
import React from 'react';
import FilterDropdown from './FilterDropdown';

export type FilterProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;
const getIconComponent = (Icon) => <Icon color="white" size={4} />;

function FilterBar({ className = '', handleSort, onFilter, tags, setTags }) {
  return (
    <div className={clsx('flex items-center', className)}>
      <div className="bg-white rounded-lg shadow-lg  flex-1 p-4">
        <div className="flex">
          <FilterDropdown
            color="success"
            Icon={getIconComponent(StarIcon)}
            handleSort={handleSort}
          >
            {[
              {
                name: 'Most Popular',
                order: {
                  field: 'createdAt',
                  direction: 'desc',
                },
              },
              {
                name: 'Least Popular',
                order: {
                  field: 'createdAt',
                  direction: 'desc',
                },
              },
            ]}
          </FilterDropdown>

          <FilterDropdown
            color="info"
            Icon={getIconComponent(TreadingUpIcon)}
            className="mx-5"
            handleSort={handleSort}
          >
            {[
              {
                name: 'Most Votes',
                order: {
                  field: 'createdAt',
                  direction: 'desc',
                },
              },
              {
                name: 'Least Votes',
                order: {
                  field: 'createdAt',
                  direction: 'desc',
                },
              },
            ]}
          </FilterDropdown>

          <FilterDropdown
            color="warning"
            Icon={getIconComponent(ClockIcon)}
            handleSort={handleSort}
          >
            {[
              {
                name: 'New Post',
                order: {
                  field: 'createdAt',
                  direction: 'desc',
                },
              },
              {
                name: 'Old Post',
                order: {
                  field: 'createdAt',
                  direction: 'asc',
                },
              },
            ]}
          </FilterDropdown>
        </div>

        <TagsInput
          onFilter={onFilter}
          tags={tags}
          setTags={setTags}
          className="mt-2"
        />
      </div>

      <div>
        <LinkButton
          icon={<PencilIcon className="mr-2" size={3} />}
          className="ml-10 shadow-2xl"
          link="/posts/save"
        >
          Write New Thread
        </LinkButton>
      </div>
    </div>
  );
}

export default FilterBar;
