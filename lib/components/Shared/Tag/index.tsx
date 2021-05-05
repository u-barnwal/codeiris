import clsx from 'clsx';
import React from 'react';

function Tag({ children, color = 'text-gray-500', className = '' }) {
  return (
    <div
      className={clsx(
        'inline-block mr-3 border rounded-md py-1 px-4 text-xs',
        color,
        className,
      )}
    >
      {children}
    </div>
  );
}

export default Tag;
