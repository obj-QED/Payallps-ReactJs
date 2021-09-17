import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import classNames from 'classnames';
import { useSpring, animated, interpolate } from 'react-spring';
import VisibilitySensor from 'react-visibility-sensor';

import { Layout } from '../components/Layout';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';

const BanksPage = () => {
  const data = useStaticQuery(graphql`
    query BanksQuery {
      businessTransfersImage: file(
        absolutePath: { regex: "/business_transfers.webp/" }
      ) {
        childImageSharp {
          fixed(quality: 100, width: 900) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      metaImage: file(absolutePath: { regex: "/homepage.webp/" }) {
        childImageSharp {
          fixed(quality: 100, width: 1200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  const [{ y }, set] = useSpring(() => ({ y: 0 }));

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);

    const handleScroll = () => {
      set({ y: window.scrollY });
    };
    const handleWindowSizeChange = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const screensRef = useRef();

  return (
    <Layout>
      <SEO
        title="Unique Cross-Border Payment Product"
        description="Payall powers a unique Cross-Border payment product through an easy and safe alternative to correspondent banking that delights regulators, business payers and recipients."
        image={data.metaImage.childImageSharp.fixed.src}
      />
      <header>
        <Nav isBorderBottom={false} isShadowBottom={false} />
      </header>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <VisibilitySensor partialVisibility="top">
        {({ isVisible }) => (
          <div className="overflow-hidden">
            <div className="container mx-auto relative" ref={screensRef}>
              <div className="banks__role-wrapper">
                <animated.div
                  className="banks__role-wrapper-bg z-0"
                  style={{
                    transform: y.interpolate({
                      range: [
                        0,
                        screensRef.current?.offsetTop -
                          (windowHeight * 2) / 5,
                        screensRef.current?.offsetTop,
                        screensRef.current?.offsetTop,
                      ],
                      output: [
                        'scale(1)',
                        'scale(1)',
                        `scale(${windowWidth > 1800 ? 3.5 : 2})`,
                        `scale(${windowWidth > 1800 ? 3.5 : 2})`,
                      ],
                    }),
                  }}
                />
              </div>
              <div className="relative z-10">
                Role
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </div>
            </div>
          </div>
        )}
      </VisibilitySensor>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Footer />
    </Layout>
  );
};

export default BanksPage;
