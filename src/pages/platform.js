import React from 'react';
import { SEO } from '../components/SEO';
import { Nav } from '../components/Nav';
import { Layout } from '../components/Layout';
import { Footer } from '../components/Footer';
import { useStaticQuery, graphql } from 'gatsby';
import ActiveDot from '../assets/svg/active-dot.svg';
import BackgroundImage from 'gatsby-background-image';
import { CtaBlueSection } from '../components/CtaBlueSection';
import { PlatformSlider } from '../components/PlatformSlider';

const PlatformPage = () => {
  const data = useStaticQuery(graphql`
    query PlatformQuery {
      headerBackground: file(
        absolutePath: { regex: "/platform-gradient.webp/" }
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
        }
      }
      metaImage: file(absolutePath: { regex: "/platform.webp/" }) {
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
        title="Innovating Cross-Border Payments & Correspondent Banking"
        description="Payall’s unique approach to Cross-Border Payments is enabled by proprietary technology, specialized in enabling software and a safe, modern alternative to the classic correspondent bank model."
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
              'linear-gradient(41.49deg, #191A20 36.49%, rgba(45, 48, 59, 0.77) 128.65%)',
          }}
          className="absolute inset-0 z-0 w-full h-full "
        />
        <Nav />
        <div className="container relative z-10 flex flex-col justify-between px-6 mx-auto lg:px-16">
          <div className="mb-10 xxl:mb-26">
            <h5 className="mb-10 text-sm font-bold tracking-widest text-gray-200 uppercase">
              Pay anyone, anywhere
            </h5>
            <h3 className="w-10/12 mb-6 text-xl font-bold text-white lg:text-4xl lg:mb-14">
              Our Platform
            </h3>
            <ul className="text-base font-bold leading-7.5 text-white list-none lg:text-xl pl-5">
              <li>
                <ActiveDot className="absolute mt-2 -ml-5" /> Proprietary
                technology
              </li>
              <li>
                <ActiveDot className="absolute mt-2 -ml-5" /> Specialized
                enabling software
              </li>
              <li>
                <ActiveDot className="absolute mt-2 -ml-5" />
                Safe, modern alternative to the classic correspondent bank mode
              </li>
            </ul>
          </div>
        </div>
      </BackgroundImage>

      <PlatformSlider />
      <CtaBlueSection
        link={{
          to: '/contact',
          label: 'Enroll',
        }}
      >
        <div className="max-w-screen-sm">
          <h2 className="mb-10 text-3xl font-bold text-white lg:text-35px">
            Let's redefine payment services for your clients
          </h2>
        </div>
      </CtaBlueSection>
      <Footer />
    </Layout>
  );
};

export default PlatformPage;
