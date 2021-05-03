import clsx from 'clsx';
import Button from 'pages/components/atomic/button';
import {
  ClockIcon,
  StarIcon,
  TreadingUpIcon,
  PencilIcon,
} from 'pages/components/Icons';
import React from 'react';
import FilterDropdown from './FilterDropdown';

export type FilterProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

function FilterBar({ className }: FilterProps) {
  return (
    <div className={clsx('flex items-center', className)}>
      <div className="bg-white rounded-lg shadow-lg flex flex-1 p-4">
        <FilterDropdown color="success" Icon={StarIcon}>
          Most Popular
        </FilterDropdown>

        <FilterDropdown color="info" Icon={TreadingUpIcon} className="mx-5">
          Highest Votes
        </FilterDropdown>

        <FilterDropdown color="warning" Icon={ClockIcon}>
          Latest Thread
        </FilterDropdown>
      </div>

      <div>
        <Button
          icon={<PencilIcon className="mr-2" size={3} />}
          className="ml-10 shadow-2xl"
        >
          Write New Thread
        </Button>
      </div>
    </div>
  );
}

export default FilterBar;
