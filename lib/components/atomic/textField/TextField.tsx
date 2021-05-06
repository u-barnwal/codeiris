import React, { useState } from 'react';
import clsx from 'clsx';
import { IntentProps } from '../../../common/props/IntentProps';

export interface TextFieldProps
  extends React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    IntentProps {
  label?: string;
  placeholder?: string;
  required?: boolean;
}

function TextField({
  value,
  onChange,
  label,
  placeholder = label,
  className,
  required = false,
  ...rest
}: TextFieldProps) {
  const [focus, setFocus] = useState(false);

  return (
    <>
      <div className={clsx('flex flex-col', className)}>
        <span
          className={clsx(
            'transition-all text-xs mb-1',
            focus ? 'text-primary' : 'text-gray-800',
          )}
        >
          {label} {required && <span className="text-red-600">*</span>}
        </span>

        <input
          value={value}
          onChange={onChange}
          placeholder={focus ? '' : placeholder}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          className="border-b-2 border-gray-400 placeholder-gray-400 text-gray-700 outline-none focus:border-primary text-lg transition-all pb-1"
          {...rest}
        />
      </div>
    </>
  );
}

export default TextField;
