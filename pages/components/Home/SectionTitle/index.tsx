import clsx from 'clsx';
import React from 'react';

function SectionTitle({ color, Icon, children, className = '' }) {
  return (
    <div className={clsx('flex items-center', className)}>
      <div className={`rounded-full mr-3 bg-${color} p-2`}>
        {<Icon color="white" size={4} />}
      </div>{' '}
      <span className="font-semibold text-dark">{children}</span>
    </div>
  );
}

export default SectionTitle;
