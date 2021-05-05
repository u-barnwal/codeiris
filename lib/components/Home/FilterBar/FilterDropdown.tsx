import clsx from 'clsx';
import React from 'react';

export interface FilterDropdownProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  color?: string;
  Icon?: React.ReactNode;
  handleSort: () => {};
}

function FilterDropdown({
  color,
  Icon,
  children,
  className,
  handleSort,
}: FilterDropdownProps) {
  return (
    <div
      className={clsx(
        'rounded-full border pl-2 pr-4 py-1 flex items-center',
        className,
      )}
    >
      <div className={`rounded-full mr-2 bg-${color} p-2`}>{Icon}</div>

      <select className="bg-white text-sm outline-none">
        {children.map((ele) => (
          <option onClick={() => handleSort(ele.order)}>{ele.name}</option>
        ))}
      </select>
    </div>
  );
}

export default FilterDropdown;
