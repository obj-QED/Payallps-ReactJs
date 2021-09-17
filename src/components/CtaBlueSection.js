import React from 'react';
import { Button } from '../components/Button';
import LogoLetter from '../assets/svg/logo-letter.svg';

export const CtaBlueSection = ({ children, link }) => {
  return (
    <section className="relative flex justify-center overflow-hidden bg-blue-700 py-15">
      <LogoLetter className="absolute top-0 left-0 z-0 h-full" />
      <div className="relative px-6 text-center">
        {children}
        <div className="text-center">
          <Button
            variant="white"
            size="large"
            to={link.to}
            className="block w-62"
          >
            {link.label}
          </Button>
        </div>
      </div>
    </section>
  );
};
