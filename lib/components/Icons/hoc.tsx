import clsx from 'clsx';

export default function Icon({
  size = -1,
  height = 6,
  width = 6,
  className = '',
  onClick = null,
  children,
  color = 'currentColor',
}) {
  height = size != -1 ? size : height;
  width = size != -1 ? size : width;

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
      stroke={color}
      onClick={onClick}
    >
      {children}
    </svg>
  );
}
