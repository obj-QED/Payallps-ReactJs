import { useEffect } from 'react';

export const useOnClickOutside = ({ ref }, handler) => {
  useEffect(() => {
    const listener = event => {
      if (!ref?.current?.contains(event.target)) {
        handler(event);
      }
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};
