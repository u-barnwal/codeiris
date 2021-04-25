import clsx from 'clsx';
import React from 'react';

function FilterDropDown({ Icon, children, className = '' }) {
  return (
    <div className={clsx('rounded-full border px-8 py-2', className)}>
      <div className="rounded-full">{Icon}</div>
      <select className="bg-white text-sm">
        <option>{children}</option>
      </select>
    </div>
  );
}

export default FilterDropDown;
