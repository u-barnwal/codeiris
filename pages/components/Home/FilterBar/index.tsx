import clsx from 'clsx';
import Button from 'pages/components/atomic/button';
import {
  ClockIcon,
  StarIcon,
  TreadingUpIcon,
  PencilIcon,
} from 'pages/components/Icons';
import LinkButton from 'pages/components/Shared/LinkButton';
import Votes from 'pages/components/Shared/Post/Votes';
import React from 'react';
import FilterDropdown from './FilterDropdown';

export type FilterProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

function FilterBar({ className, handleSort }) {
  return (
    <div className={clsx('flex items-center', className)}>
      <div className="bg-white rounded-lg shadow-lg flex flex-1 p-4">
        <FilterDropdown color="success" Icon={StarIcon} handleSort={handleSort}>
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
          Icon={TreadingUpIcon}
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
          Icon={ClockIcon}
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
