import React from 'react';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import { Link } from 'gatsby';
import NotFoundIcon from '../assets/svg/not-found.svg';

const NotFoundPage = () => (
  <Layout>
    <SEO title="Page not found" />
    <Nav />
    <div className="container flex flex-col items-center justify-center px-6 mx-auto my-24 text-center bg-white xxl:-mt-7 lg:px-16">
      <div className="mb-15">
        <NotFoundIcon />
      </div>
      <h1 className="mb-8 text-base font-bold leading-6 text-red-500 uppercase">
        SORRY, LOOKS LIKE WE COULDN’T FIND WHAT YOU WERE LOOKING FOR
      </h1>
      <h2 className="text-xl font-bold leading-10 text-blue-900 md:text-3xl mb-15">
        But we have a compelling platform and network of banks
        <br className="hidden lg:block" /> enabling instant cross-border B2B &
        B2C Payments
      </h2>
      <h3 className="text-lg font-bold text-gray-800 mb-11 lg:px-38">
        Offer your clients the possibility to pay anyone, anywhere through a
        <br className="hidden lg:block" />
        single API. You can help them decrease transaction time and give those
        <br className="hidden lg:block" />
        paid a multitude of valuable options to handle their money.
      </h3>
      <div>
        <Link
          to="/platform"
          className="inline-flex items-center justify-center px-12 py-4 m-auto text-sm font-bold text-center text-blue-700 uppercase transition-colors duration-200 bg-white border-2 border-blue-700 rounded-sm hover:text-blue-600 hover:border-blue-600"
        >
          SEE HOW IT WORKS
        </Link>
      </div>
    </div>
    <Footer />
  </Layout>
);

export default NotFoundPage;
