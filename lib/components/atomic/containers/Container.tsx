import clsx from 'clsx';
import React from 'react';

export type ContainerProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

function Container({ children, className, ...rest }: ContainerProps) {
  return (
    <div
      className={clsx('container mx-auto lg:px-40 px-4', className)}
      {...rest}
    >
      {children}
    </div>
  );
}

export default Container;
