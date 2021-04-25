import clsx from 'clsx';
import React from 'react';

export interface IconProps {
  height?: number;
  width?: number;
  className?: string;
  onClick?: () => void | null;
}

const Icon = ({
  height = 6,
  width = 6,
  className = '',
  onClick = null,
  children,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(
        `h-${height} w-${width}`,
        className,
        onClick ? 'cursor-pointer' : '',
      )}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      onClick={onClick}
    >
      {children}
    </svg>
  );
};

export const BellIcon: React.FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
      />
    </Icon>
  );
};
