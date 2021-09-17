import React from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '../assets/css/blog.scss';
import '../assets/css/layout.css';
import '../assets/css/home.scss';
import '../assets/css/fonts.css';
import '../assets/css/input.css';
import '../assets/css/platform.css';
import '../assets/css/slick.scss';
import '../assets/css/headline-animations.scss';
import '../assets/css/global-payment-options.scss';
import '../assets/css/banks.scss';
import '../assets/css/leadership.scss';
import '../assets/css/nav.scss';
import '../assets/css/founder.scss';

import { CookieBanner } from '../components/CookieBanner';

export const Layout = ({ children }) => (
  <main className="antialiased" id="layout">
    {children} <CookieBanner />
  </main>
);
