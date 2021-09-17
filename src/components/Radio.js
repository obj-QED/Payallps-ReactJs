import React from 'react';

const IconUnchecked = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="6" cy="6" r="5.5" stroke="#87949E" />
  </svg>
);

const IconChecked = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="6" cy="6" r="5.5" stroke="#87949E" />
    <circle cx="6" cy="6" r="3" fill="#157BFA" />
  </svg>
);

export const Radio = ({ name, value, label, checked, inputRef, ...rest }) => (
  <label className="relative flex items-center pl-5 text-sm leading-6 text-gray-800">
    {checked ? (
      <div className="mr-5 text-blue-500">
        <IconChecked />
      </div>
    ) : (
      <div className="mr-5 text-gray-300">
        <IconUnchecked />
      </div>
    )}
    <input
      role="radio"
      type="radio"
      ref={inputRef}
      aria-checked={checked}
      name={name}
      value={value}
      className="absolute top-0 w-full h-full opacity-0 cursor-pointer"
      {...rest}
    />
    {label}
  </label>
);
