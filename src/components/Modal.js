import React from 'react';
import { useTransition, animated } from 'react-spring';

export const Modal = ({ showModal = false, outsideRef, children }) => {
  const transitions = useTransition(showModal, null, {
    from: { opacity: 0, transform: 'translateX(100%)' },
    enter: { opacity: 1, transform: 'translateX(0)' },
    leave: { opacity: 0, transform: 'translateX(100%)' },
  });

  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <div
          key={key}
          className="fixed top-0 left-0 flex items-center justify-end w-full h-full modal-base"
        >
          <animated.div
            style={props}
            ref={outsideRef}
            className="relative w-full h-full max-w-xl px-8 pb-0 overflow-auto bg-white lg:px-12 modal-base__card"
          >
            {children}
          </animated.div>
        </div>
      )
  );
};
