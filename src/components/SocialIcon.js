import React from 'react';
import classNames from 'classnames';
import { Link } from '../components/Link';

export const SocialIcon = ({ icon, url, dark = false }) => (
  <Link
    to={url}
    className={classNames(
      'inline-flex items-center justify-center w-8 h-8  transition-colors duration-200  rounded-full hover:bg-blue-700 hover:text-blue-100',
      {
        'text-gray-300 bg-gray-600 ': dark,
        'text-gray-400 bg-gray-200': !dark,
      }
    )}
  >
    {icon}
  </Link>
);
