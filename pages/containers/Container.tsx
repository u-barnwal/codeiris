import clsx from 'clsx';
import React from 'react';

function Container({ children, className = '' }) {
  return <div className={clsx('container px-40', className)}>{children}</div>;
}

export default Container;
