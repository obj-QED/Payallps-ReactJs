import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { MicroservicesSlide } from '../components/MicroservicesSlide';
import { FirstMileSlide } from '../components/FirstMileSlide';
import { LastMileSlide } from '../components/LastMileSlide';
import Slider from "react-slick";

const isClient = typeof window === 'object';

export const PlatformSlider = ({ location }) => {
  const slidesHash = useMemo(
    () => ['#first-mile', '#sigmapp', '#last-mile'],
    []
  );

  const slideIndex = useMemo(() => {
    if (isClient) {
      return slidesHash.findIndex(e => e === window.location.hash);
    }
    return null;
  }, [slidesHash]);

  useEffect(() => {
    if (slideIndex >= 0) {
      const element = document.getElementById('platform-slider');
      const yPosition =
        element.getBoundingClientRect().top + window.pageYOffset;

      if (window.location.hash) {
        setTimeout(() => {
          window.scrollTo({ top: yPosition, behavior: 'smooth' });
        }, 500);
      }
    }
  }, [slideIndex]);

  const [index] = useState(slideIndex >= 0 ? slideIndex : 1);

  const handleSlideChange = useCallback(e => {
    window.history.pushState(null, null, slidesHash[e]);
  }, [slidesHash]);

  const settings = {
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: true,
  };

  let slider;

  return (
    <div id="platform-slider" className='platform-slider'>
      <div className="relative z-10 flex flex-col justify-between mx-auto my-10 bg-white ">
        <div className="mt-10 -mb-4 pl-3 pr-16 sm:px-0 sm:text-center">
          <h1 className="text-3xl font-bold leading-10 text-gray-800">
            Single Global Multi-Currency Asset & Payments Platform
          </h1>
        </div>

        <Slider
          ref={s => slider = s}
          {...settings}
          initialSlide={1}
          afterChange={e => handleSlideChange(e)}
        >
          <div>
            <FirstMileSlide onNext={() => slider.slickGoTo(1)} />
          </div>
          <div>
            <MicroservicesSlide onNext={() => slider.slickGoTo(2)} onPrev={() => slider.slickGoTo(0)} />
          </div>
          <div>
            <LastMileSlide onPrev={() => slider.slickGoTo(1)} />
          </div>
        </Slider>
      </div>
    </div>
  );
};
