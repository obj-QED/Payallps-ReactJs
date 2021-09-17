import React, { useCallback, useMemo } from 'react';
import { useTransition, animated } from 'react-spring';
import { Link } from '../components/Link';
import { useCookies } from 'react-cookie';

export const CookieBanner = () => {
  const [cookies, setCookie] = useCookies(['cookies_consent']);

  const transitions = useTransition(!cookies['cookies_consent'], null, {
    from: { opacity: 0, transform: 'translateY(100%)' },
    enter: { opacity: 1, transform: 'translateY(0)' },
    leave: { opacity: 0, transform: 'translateY(100%)' },
  });

  const expirationDate = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + 365);
    return date;
  }, []);

  const handleClick = useCallback(() => {
    setCookie('cookies_consent', true, { path: '/', expires: expirationDate });
  }, [cookies]);

  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <animated.div
          key={key}
          style={props}
          className="fixed bottom-0 left-0 z-50 w-full px-5 py-5 transform bg-gray-800 border-t-2 border-blue-600 md:px-10 xl:px-24 lg:pb-10 lg:pt-7"
        >
          <p className="mb-5 text-center text-white text-xsm">
            To ensure a better user and browsing experience, we collect
            <Link to="/cookies-policy" className="ml-1 text-blue-600">
              cookies.
            </Link>
          </p>
          <div className="flex justify-center">
            <button
              className="inline-flex items-center justify-center py-3 m-auto font-bold text-center text-white uppercase transition-colors duration-200 bg-blue-600 rounded-sm px-9 text-xxs hover:bg-blue-700"
              onClick={handleClick}
            >
              <span className="uppercase ">I ACCEPT COOKIES</span>
            </button>
          </div>
        </animated.div>
      )
  );
};
