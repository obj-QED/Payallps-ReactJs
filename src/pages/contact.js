import React from 'react';
import { SEO } from '../components/SEO';
import { Nav } from '../components/Nav';
import { Layout } from '../components/Layout';
import { Footer } from '../components/Footer';
import CaretRight from '../assets/svg/caret-right.svg';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { SocialIcon } from '../components/SocialIcon';
import FacebookIcon from '../assets/svg/facebook.svg';
import TwitterIcon from '../assets/svg/twitter.svg';
import LinkedinIcon from '../assets/svg/linkedin.svg';
import ContactForm from '../components/ContactForm';
import { Link } from '../components/Link';

const AddressDetailsCol = () => (
  <div className="mb-5">
    <p className="mb-4 font-bold text-gray-400 uppercase text-xxs">Email</p>
    <ul className="mb-8 list-none">
      <li>
        <a
          href="mailto:contact@payallps.com"
          className="font-semibold text-blue-700"
        >
          contact@payallps.com
        </a>
      </li>
      <li>
        <a
          href="mailto:sales@payallps.com"
          className="font-semibold text-blue-700"
        >
          sales@payallps.com
        </a>
      </li>
    </ul>
    <p className="mb-4 font-bold text-gray-400 uppercase text-xxs">Phone</p>
    <ul className="mb-8 list-none">
      <li>
        <a href="tel:1-888-729-2551" className="font-semibold text-blue-700">
          1-888-PAYALL1
        </a>
      </li>
      <li>
        <a href="tel:1-888-729-2551" className="font-semibold text-blue-700">
          1-888-729-2551
        </a>
      </li>
    </ul>
    <p className="mb-4 font-bold text-gray-400 uppercase text-xxs">Address</p>
    <ul className="mb-8 list-none xl:mb-16">
      <li className="mb-6 font-semibold text-gray-800">
      1111 Lincoln Road, Suite 606,<br/> Miami Beach, FL 33139
      </li>
      <li className="font-semibold text-gray-800">
        P.O. Box 39849
        <br />Ft. Lauderdale, FL 33339
      </li>
    </ul>
    <div className="flex flex-col justify-between lg:items-center lg:flex-row mb-9">
      <div className="flex items-center">
        <span className="inline-block mr-4">
          <SocialIcon
            icon={<FacebookIcon />}
            url="https://www.facebook.com/payallps/"
          />
        </span>
        <span className="mr-4">
          <SocialIcon
            icon={<TwitterIcon />}
            url="https://twitter.com/payallps"
          />
        </span>
        <span>
          <SocialIcon
            icon={<LinkedinIcon />}
            url="https://www.linkedin.com/company/payall-payment-systems/"
          />
        </span>
      </div>
    </div>
  </div>
);

const Wrapper = () => (
  <div className="container relative flex flex-col justify-between px-6 py-10 mx-auto lg:py-20 md:flex-row lg:px-16">
    <AddressDetailsCol />
    <ContactForm />
  </div>
);

const WhiteLabelBlock = () => (
  <div className="pb-12 bg-gray-150 pt-14">
    <div className="container relative flex flex-col justify-between px-6 mx-auto md:flex-row lg:px-16">
      <p className="max-w-screen-md mb-5 leading-6 text-gray-800 text-xsm md:mb-0">
        Payall offers a wide range of features and deployment options, including
        a white-label PaaS to support our primary markets and individual,
        strategic clients.
      </p>
      <div className="self-end ">
        <Link
          to="https://developers.payall.com/"
          className="flex items-center w-40 text-sm leading-6 text-blue-700"
        >
          API Documentation
          <CaretRight className="ml-2" />
        </Link>
      </div>
    </div>
  </div>
);

const ContactPage = () => {
  const data = useStaticQuery(graphql`
    query ContactQuery {
      headerBackground: file(
        absolutePath: { regex: "/contact-gradient.webp/" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1440) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      site {
        siteMetadata {
          title
          description
        }
      }
      metaImage: file(absolutePath: { regex: "/contact-us.webp/" }) {
        childImageSharp {
          fixed(quality: 100, width: 1200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO
        title="Contact Us"
        description="Payall Payment Systems is the technology partner for banks and regulated entities to enable a truly global friction-less payment system."
        image={data.metaImage.childImageSharp.fixed.src}
      />
      <BackgroundImage
        Tag="header"
        fluid={data.headerBackground.childImageSharp.fluid}
        backgroundColor={`#000000`}
        className="relative overflow-hidden bg-center bg-no-repeat bg-cover"
      >
        <div
          style={{
            background:
              'linear-gradient(41.57deg, #191A20 36.49%, rgba(45, 48, 59, 0.77) 128.65%)',
          }}
          className="absolute inset-0 z-0 w-full h-full "
        />
        <Nav />
        <div className="container relative z-10 flex flex-col justify-between px-6 mx-auto lg:px-16">
          <div className="mb-10 xxl:mb-26">
            <h5 className="mb-10 text-sm font-bold tracking-widest text-gray-200 uppercase">
              Upgrading Cross-Border Payments
            </h5>
            <h1 className="w-10/12 mb-6 text-xl font-bold text-white lg:text-1xl lg:mb-14">
              Providing Banks, Regulated Entities and Businesses the Technology
              to handle Frictionless Cross-Border B2C & B2B Payments
            </h1>
          </div>
        </div>
      </BackgroundImage>
      <Wrapper />
      <WhiteLabelBlock />
      <Footer />
    </Layout>
  );
};

export default ContactPage;
