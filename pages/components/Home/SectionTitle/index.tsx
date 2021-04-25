import React from 'react';

function SectionTitle({ color, Icon, children }) {
  return (
    <div className="flex items-center">
      <div className={`rounded-full mr-3 bg-${color} p-2`}>
        {<Icon color="white" size={4} />}
      </div>{' '}
      <span className="font-semibold text-dark">{children}</span>
    </div>
  );
}

export default SectionTitle;
