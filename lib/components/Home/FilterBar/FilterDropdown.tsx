import clsx from 'clsx';
import React from 'react';

export interface FilterDropdownProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  color?: string;
  Icon?: React.ReactNode;
}

function FilterDropdown({
  color,
  Icon,
  children,
  className,
}: FilterDropdownProps) {
  return (
    <div
      className={clsx(
        'rounded-full border pl-2 pr-4 py-1 flex items-center',
        className,
      )}
    >
      <div className={`rounded-full mr-2 bg-${color} p-2`}>
        <Icon color="white" size={4} />
      </div>

      <select className="bg-white text-sm outline-none">
        <option>{children}</option>
      </select>
    </div>
  );
}

export default FilterDropdown;
