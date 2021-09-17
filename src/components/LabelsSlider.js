import React, { useState, useMemo } from 'react';
import { useTransition, animated } from 'react-spring';
import classNames from 'classnames';
import { useEffect } from 'react';

export const LabelsSlider = ({ labels }) => {
  const [activeLabel, setActiveLabel] = useState(0);

  const transitions = useTransition(activeLabel, p => p, {
    from: {
      opacity: 0,
      transform: 'translate3d(100%,0,0)',
    },
    enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
    initial: {
      transform: 'translate3d(0%,0,0)',
    },
  });

  const animatedLabels = useMemo(
    () =>
      labels.map(label => ({ style }) => (
        <animated.div
          style={style}
          className="absolute h-16 text-lg font-bold text-green-500 origin-left transform lg:text-2xl"
        >
          {label}
        </animated.div>
      )),
    [labels]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeLabel === labels.length - 1) {
        setActiveLabel(0);
      } else {
        setActiveLabel(activeLabel + 1);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [setActiveLabel, activeLabel]);

  return (
    <div className="relative">
      {transitions.map(({ item, props, key }) => {
        const Label = animatedLabels[item];

        return <Label key={key} style={props} />;
      })}

      {labels.map((label, key) => (
        <button
          key={key}
          type="button"
          className={classNames(
            'h-2 rounded-full focus:outline-none transition-all duration-200 mt-24 lg:mt-20',
            {
              'bg-blue-300 w-4': activeLabel === key,
              'bg-white opacity-1 w-2': activeLabel !== key,
              'mr-3': key !== labels.length - 1,
            }
          )}
          onClick={() => setActiveLabel(key)}
        />
      ))}
    </div>
  );
};
