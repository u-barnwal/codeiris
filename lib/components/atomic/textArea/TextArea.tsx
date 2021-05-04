import clsx from 'clsx';
import { useState } from 'react';

export interface TextAreaProps
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  label?: string;
  placeholder?: string;
  required?: boolean;
}

function TextArea({
  className,
  label,
  placeholder = label,
  required = false,
  ...rest
}: TextAreaProps) {
  const [focus, setFocus] = useState(false);

  return (
    <div className={clsx('flex flex-col', className)}>
      <span
        className={clsx(
          'transition-all text-xs mb-1',
          focus ? 'text-primary' : 'text-gray-800',
        )}
      >
        {label} {required && <span className="text-red-600">*</span>}
      </span>

      <textarea
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        placeholder={focus ? '' : placeholder}
        className={clsx(
          'border-b-2 border-gray-400 placeholder-gray-400 text-gray-700 outline-none focus:border-primary text-lg transition-all pb-1',
          className,
        )}
        {...rest}
      />
    </div>
  );
}

export default TextArea;
