import clsx from 'clsx';
import Button from 'pages/components/atomic/button';
import React from 'react';
import FilterDropDown from './FilterDropDown';

function FilterBar({ className = '' }) {
  return (
    <div className={clsx('flex items-center', className)}>
      <div className="bg-white rounded-md flex flex-1 p-4 justify-center">
        <FilterDropDown Icon={''}>Most Popular</FilterDropDown>
        <FilterDropDown Icon={''} className="mx-5">
          Highest Votes
        </FilterDropDown>
        <FilterDropDown Icon={''}>Latest Thread</FilterDropDown>
      </div>

      <div>
        <Button className="ml-10">Write New Thread</Button>
      </div>
    </div>
  );
}

export default FilterBar;
