import React from 'react';
import classNames from 'classnames';
import { Link } from '../components/Link';

export const Button = ({
  to,
  className,
  children,
  size = 'default',
  variant = 'blue',
}) => (
  <Link
    to={to}
    className={classNames(
      className,
      {
        'px-5 py-3 text-xxs ': size === 'default',
        'px-10 py-4 text-sm font-bold ': size === 'large',
        'text-white bg-blue-600  hover:bg-blue-700': variant === 'blue',
        'text-white bg-blue-700 font-bold hover:bg-blue-800':
          variant === 'blue-dark',
        'text-blue-900 bg-white hover:bg-gray-200': variant === 'white',
        'text-white bg-green-600 hover:bg-green-500': variant === 'green',
      },
      'inline-flex items-center justify-center m-auto text-center uppercase transition-colors duration-200 rounded-sm'
    )}
  >
    {children}
  </Link>
);
