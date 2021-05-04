import clsx from 'clsx';
import React from 'react';

export interface SectionProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  color: string;
  icon: React.ReactNode;
}

function SectionTitle({ color, icon, children, className }: SectionProps) {
  return (
    <div className={clsx('flex items-center', className)}>
      <div className={`rounded-full mr-3 bg-${color} p-2`}>{icon}</div>{' '}
      <span className="font-semibold text-dark">{children}</span>
    </div>
  );
}

export default SectionTitle;
