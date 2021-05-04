import clsx from 'clsx';
import React from 'react';

export type ContainerProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

function Container({ children, className, ...rest }: ContainerProps) {
  return (
    <div className={clsx('container px-40', className)} {...rest}>
      {children}
    </div>
  );
}

export default Container;
