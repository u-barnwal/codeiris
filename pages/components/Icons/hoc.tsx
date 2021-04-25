import clsx from 'clsx';

export const Icon = ({
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
