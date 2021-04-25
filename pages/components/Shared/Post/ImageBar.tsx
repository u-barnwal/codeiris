import clsx from 'clsx';
import React from 'react';

function ImageBar({ image, className = '' }) {
  return (
    <div className={clsx('', className)}>
      <img
        src={image}
        className="object-cover w-full rounded-md"
        style={{ height: '30px' }}
      />
    </div>
  );
}

export default ImageBar;
