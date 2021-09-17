import React, { useState } from 'react';
import classNames from 'classnames';

const messages = {
  required: 'Required',
  email: 'Please provide a valid email',
};

export const Input = ({
  label,
  icon,
  name,
  inputRef,
  error,
  disabled = false,
  className,
  type = 'text',
}) => {
  const [hasValue, setHasValue] = useState(false);

  const [isFocused, setFocused] = useState(false);

  const handleChange = event => setHasValue(event.target.value.length > 0);

  const inputPros = {
    ref: inputRef,
    type: type,
    id: name,
    name: name,
    disabled: disabled,
    rows: 20,
    col: 40,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    onChange: handleChange,
    className: classNames('block w-full form-input rounded-sm', {
      'form-error': error,
      'border-gray-200': !error,
      'h-14 form-input': type !== 'textarea',
      'form-textarea': type === 'textarea',
    }),
  };

  return (
    <div className={classNames(className, 'relative block pb-5')}>
      <label
        htmlFor={name}
        className={classNames(
          'absolute top-0 z-10  tracking-wide  ml-5 duration-300 ',
          {
            'text-xxs mt-2 leading-3': isFocused || hasValue,
            'text-sm mt-4 leading-6': !isFocused && !hasValue,
            'text-gray-400': !error,
            'text-red-500': error,
          }
        )}
      >
        {label}
      </label>
      {error && (
        <span className="absolute bottom-0 left-0 ml-5 text-xs font-medium text-red-500">
          {messages[error.type] || error.message}
        </span>
      )}
      <div className="relative">
        {type === 'textarea' ? (
          <textarea {...inputPros} />
        ) : (
          <input {...inputPros} />
        )}
        {icon && (
          <span className="absolute top-0 right-0 flex items-center justify-center w-12 h-full">
            {icon}
          </span>
        )}
      </div>
    </div>
  );
};

export const Textarea = ({
  label,
  icon,
  name,
  inputRef,
  error,
  maxCharacters = 3000,
  disabled = false,
  className,
  type = 'textarea',
}) => {
  const [value, setValue] = useState('');

  const [isFocused, setFocused] = useState(false);

  const handleChange = event => {
    setValue(event.target.value.slice(0, maxCharacters) || '');
  };

  const inputPros = {
    ref: inputRef,
    type: type,
    id: name,
    name: name,
    disabled: disabled,
    rows: 20,
    col: 40,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    onChange: handleChange,
    className: classNames('block w-full form-input rounded-sm', {
      'form-error': error,
      'border-gray-200': !error,
      'h-14 form-input': type !== 'textarea',
      'form-textarea': type === 'textarea',
    }),
  };

  return (
    <div className={classNames(className, 'relative block pb-5')}>
      <label
        htmlFor={name}
        className={classNames(
          'absolute top-0 z-10  tracking-wide  ml-5 duration-300 mt-px w-11/12 bg-white ',
          {
            'text-xxs pt-2 pb-1  leading-3': isFocused || value,
            'text-sm pt-4 pb-1 leading-6': !isFocused && !value,
            'text-gray-400': !error,
            'text-red-500': error,
          }
        )}
      >
        {label}
      </label>
      {error && (
        <span className="absolute bottom-0 left-0 ml-5 text-xs font-medium text-red-500">
          {messages[error.type] || error.message}
        </span>
      )}
      <div className="relative">
        <textarea {...inputPros} value={value} style={{ minHeight: 144 }} />
        <Counter
          number={value.length}
          maxLength={maxCharacters}
          error={error}
        />
        {icon && (
          <span
            className={classNames(
              'absolute top-0 right-0 flex items-center justify-center w-12 h-full'
            )}
          >
            {icon}
          </span>
        )}
      </div>
    </div>
  );
};

export const Counter = ({ number, maxLength, error }) => {
  return (
    <span
      className={classNames('absolute bottom-0 right-0 mb-2 mr-4 text-xs', {
        'text-gray-400': !error,
        'text-red-500': error,
      })}
    >
      {number || 0} / {maxLength}
    </span>
  );
};

export const PhoneInput = ({
  label,
  icon,
  name,
  inputRef,
  error,
  disabled = false,
  className,
  type = 'text',
}) => {
  const [value, setValue] = useState('');

  const [isFocused, setFocused] = useState(false);

  const handleChange = event => {
    setValue(event.target.value.replace(/[^0-9-()+]/g, ''));
  };

  const inputPros = {
    ref: inputRef,
    type: type,
    id: name,
    name: name,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    onChange: handleChange,
    className: classNames('block w-full form-input rounded-sm', {
      'form-error': error,
      'border-gray-200': !error,
      'h-14 form-input': type !== 'textarea',
      'form-textarea': type === 'textarea',
    }),
  };

  return (
    <div className={classNames(className, 'relative block pb-5')}>
      <label
        htmlFor={name}
        className={classNames(
          'absolute top-0 z-10  tracking-wide  ml-5 duration-300 mt-px w-11/12 bg-white ',
          {
            'text-xxs pt-2 pb-1  leading-3': isFocused || value,
            'text-sm pt-4 pb-1 leading-6': !isFocused && !value,
            'text-gray-400': !error,
            'text-red-500': error,
          }
        )}
      >
        {label}
      </label>
      {error && (
        <span className="absolute bottom-0 left-0 ml-5 text-xs font-medium text-red-500">
          {messages[error.type] || error.message}
        </span>
      )}
      <div className="relative">
        <input {...inputPros} value={value} />
        {icon && (
          <span
            className={classNames(
              'absolute top-0 right-0 flex items-center justify-center w-12 h-full'
            )}
          >
            {icon}
          </span>
        )}
      </div>
    </div>
  );
};
