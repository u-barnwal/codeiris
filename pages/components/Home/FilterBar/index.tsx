import clsx from 'clsx';
import Button from 'pages/components/atomic/button';
import { ClockIcon, StarIcon, UserGroupIcon } from 'pages/components/Icons';
import React from 'react';
import FilterDropdown from './FilterDropdown';

function FilterBar({ className = '' }) {
  return (
    <div className={clsx('flex items-center', className)}>
      <div className="bg-white rounded-md flex flex-1 p-4">
        <FilterDropdown color="success" Icon={StarIcon}>
          Most Popular
        </FilterDropdown>

        <FilterDropdown color="info" Icon={UserGroupIcon} className="mx-5">
          Highest Votes
        </FilterDropdown>

        <FilterDropdown color="warning" Icon={ClockIcon}>
          Latest Thread
        </FilterDropdown>
      </div>

      <div>
        <Button className="ml-10">Write New Thread</Button>
      </div>
    </div>
  );
}

export default FilterBar;
