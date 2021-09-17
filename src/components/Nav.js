import React, { useState, useMemo } from 'react';
import MenuBurger from '../assets/svg/menu.svg';
import Logo from '../assets/svg/payall.svg';
import LogoWhite from '../assets/svg/payall-white.svg';
import { Link } from 'gatsby';
import ReactTooltip from 'react-tooltip';
import classNames from 'classnames';

export const Nav = ({
  theme = 'light',
  isBorderBottom = true,
  isShadowBottom = true,
  noMargin,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = useMemo(
    () => [
      {
        label: 'Banks',
      },
      // {
      //   url: '/platform',
      //   label: 'Platform',
      // },
      {
        label: 'Business Payers',
        url: '/business-payers',
      },
      // {
      //   label: 'Specialty Use Cases',
      // },
      // {
      //   url: '/leadership',
      //   label: 'About',
      // },
      // {
      //   url: '/global-payment-options',
      //   label: 'Payment options',
      // },
      {
        url: '/leadership',
        label: 'Leadership',
      },
      {
        url: '/founders-message',
        label: 'Founder’s Message',
      },
      {
        url: '/newsroom',
        label: 'Newsroom',
      },
      {
        url: '/contact',
        label: 'Contact Us',
      },
    ],
    []
  );

  return (
    <div
      className={classNames('relative z-50', {
        'bg-white': theme === 'light',
        'shadow-md': isShadowBottom,
        'xxl:mb-32': !noMargin,
      })}
    >
      <ReactTooltip backgroundColor="#387FF2" />

      <div
        className={classNames('z-10 container px-6 mx-auto lg:px-16', {
          'mb-10 lg:mb-16': !noMargin,
        })}
      >
        <nav
          className={classNames(
            'flex items-center justify-between py-5 max-w-screen-xl',
            {
              'border-b border-gray-400': theme === 'dark' && isBorderBottom,
            }
          )}
        >
          <Link to="/">
            {theme === 'white' ? (
              <LogoWhite />
            ) : (
              <Logo
                className={classNames('w-26', {
                  'text-white': theme === 'dark',
                  'text-gray-800': theme === 'light',
                })}
              />
            )}
          </Link>
          <ul className="nav__menu items-center hidden lg:flex">
            {links.map((link, key) => (
              <li key={key}>
                {link.url ? (
                  <Link
                    to={link.url}
                    activeClassName="text-blue-600 border-b-2 border-blue-600 font-bold pb-6.4"
                    activeStyle={{ color: '#157BFA' }}
                    className={classNames(
                      'text-white text-sm font-semibold transition-colors duration-200 hover:text-blue-600',
                      {
                        'mr-5': key !== links.length - 1,
                        'text-gray-800': theme === 'light',
                      }
                    )}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <span
                    data-tip="Coming soon"
                    className={classNames(
                      'text-white text-sm font-semibold transition-colors duration-200',
                      {
                        'mr-5': key !== links.length - 1,
                        'text-gray-800': theme === 'light',
                      }
                    )}
                  >
                    {link.label}
                  </span>
                )}
              </li>
            ))}
          </ul>
          <div className="humburger relative lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center justify-center w-12 h-12 text-gray-300 rounded focus:outline-none"
            >
              <MenuBurger className="w-1/2" />
            </button>
            <div
              className={classNames(
                'absolute right-0 top-0 mt-12 bg-white shadow-xl rounded p-3 transition-opacity duration-200 w-48',
                {
                  'opacity-100': menuOpen,
                  'opacity-0': !menuOpen,
                }
              )}
            >
              <ul className="flex flex-col">
                {links.map((link, key) => (
                  <li key={key}>
                    {link.url ? (
                      <Link
                        to={link.url}
                        className="text-gray-900 uppercase text-xxs"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <span
                        data-tip="Coming soon"
                        className={classNames(
                          'text-gray-900 uppercase text-xxs',
                          {
                            'mr-5': key !== links.length - 1,
                            'text-gray-800': theme === 'light',
                          }
                        )}
                      >
                        {link.label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
