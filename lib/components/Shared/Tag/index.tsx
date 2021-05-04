import React from 'react';

function Tag({ children }) {
  return (
    <div className="inline-block mr-3 border rounded-md py-1 px-4 text-xs text-gray-500">
      {children}
    </div>
  );
}

export default Tag;
