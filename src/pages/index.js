import React, { useEffect, useRef, useState, useMemo } from 'react';
import { useStaticQuery, graphql, Link, a } from 'gatsby';
import Slider from 'react-slick';
import { useSpring, animated } from 'react-spring';
import { useMediaQuery } from 'react-responsive';
import classNames from 'classnames';
import get from 'lodash/get';

import { Layout } from '../components/Layout';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';
import VisibilitySensor from 'react-visibility-sensor';
import { Button } from '../components/Button';

import ArrowRightIcon from '../assets/svg/arrow-right.svg';
import ArrowIcon from '../assets/svg/arrow-transparent.svg';

import moment from 'moment';
import ReactMarkdownWithHtml from 'react-markdown/with-html';

const isClient = typeof window === 'object';

const AnimatedDiv = ({ gradient, headerRef, y, activeSlide, slideToShow }) => (
  <animated.div
    className={classNames('home__header-gradient green', {
      active: activeSlide === slideToShow,
    })}
    style={{
      background: y.interpolate({
        range: [
          headerRef.current?.offsetTop,
          headerRef.current?.offsetTop + 125,
          headerRef.current?.offsetTop +
          (isClient ? window.innerHeight * 0.5 - 140 : 0),
          headerRef.current?.offsetTop +
          (isClient ? window.innerHeight - 300 : 0),
          headerRef.current?.offsetTop +
          (isClient ? window.innerHeight - 150 : 0),
          headerRef.current?.offsetTop +
          (isClient ? window.innerHeight * 3 : 0),
        ],
        output: [
          gradient,
          gradient,
          'linear-gradient(250.07deg, rgba(26, 27, 29, 0.95), rgba(13, 21, 40, 1))',
          'linear-gradient(250.07deg, rgba(26, 27, 29, 0.95), rgba(13, 21, 40, 1))',
          'linear-gradient(250.07deg, rgba(12,81,206,.9), rgba(21,25,31,.9))',
          'linear-gradient(250.07deg, rgba(12,81,206,.9), rgba(21,25,31,.9))',
        ],
      }),
    }}
  />
);

const NewsItem = ({ item, featured, index }) => (
  <a
    href={`/newsroom/${item.url}`}
    target="_blank"
    className={classNames('feature-list__item bg-white', {
      'w-full flex items-start': featured.length === 1,
      'feature-list__item--2x1': featured.length === 2,
      'feature-list__item--3x1 h-full': featured.length === 3 && index === 0,
      'feature-list__item--3x2': featured.length === 3 && index === 1,
      'w-full flex items-start feature-list__item--3x3 mt-4':
        featured.length === 3 && index === 2,
    })}
    key={index}
  >
    {!(featured.length >= 3 && index === 1) && (
      <div
        className={classNames({
          'cover w-full h-full lg:w-6/12 lg:h-full': featured.length === 1,
          'cover w-full h-auto lg:w-6/12': featured.length === 3 && index === 2,
        })}
        style={{
          flex:
            featured.length === 1 || (featured.length === 3 && index === 2)
              ? '0 0 40%'
              : '',
        }}
      >
        {item.image && (
          <img
            src={`https://admin.payallps.com${item.image.url}`}
            alt={item.Title}
          />
        )}
      </div>
    )}
    <div
      className={classNames('info', {
        'p-12': featured.length === 1,
        'p-8': featured.length > 1,
      })}
    >
      <ul
        className={classNames(
          'article text-gray-800 font-normal text-xs mb-2',
          {
            'order-1 my-0':
              featured.length === 1 || (featured.length === 3 && index === 2),
          }
        )}
      >
        {item.Author && (
          <li className="mr-2 author">
            <img
              src={`https://admin.payallps.com${item.Author.Avatar.url}`}
              alt={item.Author.Name}
              width="24"
              height="24"
              className="avatar"
            />
          </li>
        )}
        {item.Author && (
          <li className="font-semibold text-blue-800 name">
            {item.Author.Name}
          </li>
        )}
        {item.Author && <span className="mx-1">|</span>}
        <li className="font-semibold text-blue-800 category ">
          <a
            to={`/newsroom?category=${item.Category.toLowerCase()}`}
            target="_blank"
          >
            {item.Category}
          </a>
        </li>
        <li className="list-disc date ml-7">
          {moment(item.Posted_date).format('MMM, YYYY')}
        </li>
      </ul>

      <h3
        className={classNames(
          'title text-xl text-gray-900 leading-7 h-full',
          {
            'order-2 mb-2 text-4xl font-semibold leading-12':
              featured.length === 1,
          },
          {
            'order-2 mb-2 text-xl font-bold leading-7': featured.length > 1,
          }
        )}
      >
        {item.Title}
      </h3>

      {!(featured.length >= 3 && index === 2) && (
        <div
          className={classNames(
            'description text-gray-800 text-base font-normal',
            {
              'order-3':
                featured.length === 1 || (featured.length === 3 && index === 2),
            }
          )}
        >
          <ReactMarkdownWithHtml
            escapeHtml={false}
            allowDangerousHtml
            linkTarget="_blank"
            source={item.Short_description.replace(
              /\/uploads/g,
              'https://admin.payallps.com/uploads'
            )}
            renderers={{ paragraph: 'p' }}
            className="body-post-inner"
          />
        </div>
      )}

      <div className="group mt-4 flex items-center text-blue-700 text-base font-semibold read-more-button">
        Read More
        <ArrowIcon className="ml-4" />
      </div>
    </div>
  </a>
);

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query IndexQuery {
      strapiHomePage {
        slides {
          TopDescription
          Description
          Gradient
          TitleFirstLine
          TitleSecondLine
          id
        }
      }
      allStrapiRooms(
        sort: { order: DESC, fields: Posted_date }
        filter: { Featured: { eq: true } }
      ) {
        nodes {
          url
          strapiId
          Posted_date
          Title
          Content
          Category
          Author {
            Name
            Avatar {
              url
            }
          }
          Featured
          Short_description
          created_at
          image {
            url
          }
        }
      }
      metaImage: file(absolutePath: { regex: "/og-index.webp/" }) {
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
  const [windowHeight, setWindowHeight] = useState(0);

  const featured = get(data, 'allStrapiRooms.nodes', []).slice(0, 3);

  const headerSliders = useMemo(() => {
    return get(data, 'strapiHomePage.slides');
  }, []);

  const isMobile = useMediaQuery({ query: '(max-width: 720px)' });

  const [isPreview, setIsPreview] = useState(true);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  const [{ y }, set] = useSpring(() => ({ y: 0 }));
  useEffect(() => {
    const handleScroll = () => {
      set({ y: window.scrollY });
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);

    setTimeout(() => {
      setIsPreview(false);
    }, 2000);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const screensRef = useRef();
  const headerRef = useRef();
  const сrossBorderPaymentsRef = useRef();

  const [activeSlide, setActiveSlide] = useState(0);
  let sliderPayment;

  const isHeaderSlideDark = isClient
    ? scrollY > window.innerHeight * 0.35
    : false;
  const isHeaderSlideBlue = isClient
    ? scrollY >= window.innerHeight * 0.8
    : false;

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={classNames(className, 'custom-arrows')}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={classNames(className, 'custom-arrows')}
        onClick={onClick}
      />
    );
  }
  return (
    <Layout>
      <SEO
        title="Cross Border Processing for Banks "
        description="A new Cross Border Processor offering Correspondent Banking as a Service and enabling 24x7 Instant Cross Border Payments"
        ogDescription="A new type of processor - Correspondent Banking as a Service and enabling 24x7 Instant Coss Border Payments"
        image={data.metaImage.childImageSharp.fixed.src}
      />
      <div className="home">
        <VisibilitySensor partialVisibility>
          {({ isVisible: isVisibleHeader }) => (
            <animated.header
              ref={headerRef}
              className="home__header relative overflow-hidden bg-fixed bg-center bg-no-repeat bg-cover"
              style={{
                margin: y.interpolate({
                  range: [
                    0,
                    сrossBorderPaymentsRef.current?.offsetTop - 100,
                    сrossBorderPaymentsRef.current?.offsetTop + 100,
                    сrossBorderPaymentsRef.current?.offsetTop + 150,
                  ],
                  output: ['0px', '0', '32px', '32px'],
                }),
              }}
            >
              {headerSliders.map((item, index) => (
                <div
                  key={index}
                  className={classNames('home__header-gradient', {
                    active: activeSlide === index,
                    dark: isHeaderSlideDark,
                    'sub-blue': isHeaderSlideBlue,
                  })}
                  style={{ background: item.Gradient }}
                />
              ))}
              {/*<div className={classNames('home__header-gradient green', { 'active': activeSlide === 1, 'dark': isHeaderSlideDark, 'sub-blue': isHeaderSlideBlue })} />
              <div className={classNames('home__header-gradient green-light', { 'active': activeSlide === 2, 'dark': isHeaderSlideDark, 'sub-blue': isHeaderSlideBlue })} />
              <div className={classNames('home__header-gradient yellow', { 'active': activeSlide === 3, 'dark': isHeaderSlideDark, 'sub-blue': isHeaderSlideBlue })} />
              <div className={classNames('home__header-gradient yellow-red', { 'active': activeSlide === 4, 'dark': isHeaderSlideDark, 'sub-blue': isHeaderSlideBlue })} />
              <div className={classNames('home__header-gradient red', { 'active': activeSlide === 5, 'dark': isHeaderSlideDark, 'sub-blue': isHeaderSlideBlue })} />
              <div className={classNames('home__header-gradient violet', { 'active': activeSlide === 6, 'dark': isHeaderSlideDark, 'sub-blue': isHeaderSlideBlue })} />*/}

              {/*<AnimatedDiv gradient='linear-gradient(250.07deg, rgba(12,81,206, .9), rgba(21,25,31, .9))' y={y} headerRef={headerRef} activeSlide={activeSlide} slideToShow={0} />*/}

              <div className="flex flex-col min-h-screen">
                <div
                  className={classNames('home__preview', { show: isPreview })}
                >
                  <svg
                    width="43"
                    height="52"
                    viewBox="0 0 43 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.498 0C9.6 0 0 9.59 0 21.475V52l9.059-9.05V21.476c0-6.753 5.543-12.29 12.304-12.29 6.76 0 12.304 5.537 12.304 12.29 0 6.754-5.409 12.291-12.169 12.291h-3.245l-9.059 9.05h12.304c11.898 0 21.498-9.59 21.498-21.476C42.996 9.455 33.26 0 21.498 0z"
                      fill="#1A5BD1"
                    />
                  </svg>
                </div>

                <div style={{ zIndex: isPreview ? '9999' : '50' }}>
                  <Nav
                    theme={isPreview ? 'light' : 'white'}
                    isBorderBottom={false}
                    isShadowBottom={false}
                    noMargin
                  />
                </div>

                <div className="home__header-content flex-1 container relative z-10 flex flex-col justify-center px-6 mx-auto lg:px-16">
                  <div
                    className={classNames('home__header-slider', {
                      hidden: isPreview,
                    })}
                  >
                    <Slider
                      ref={s => (sliderPayment = s)}
                      dots={true}
                      arrows={false}
                      speed={350}
                      slidesToShow={1}
                      slidesToScroll={1}
                      focusOnSelect
                      autoplay={isAutoplay && !isHeaderSlideBlue}
                      autoplaySpeed={5000}
                      swipe={false}
                      appendDots={dots => (
                        <ul
                          className="slick-dots"
                          onClick={() => {
                            // setIsAutoplay(false);
                          }}
                        >
                          {' '}
                          {dots}{' '}
                        </ul>
                      )}
                      beforeChange={(current, next) => setActiveSlide(next)}
                    >
                      {headerSliders.map((item, index) => (
                        <div key={index}>
                          <p className="home__header-slider-top-description">
                            {item.TopDescription}
                          </p>
                          <h1 className="home__header-slider-title mb-12 text-white font-semibold">
                            {item.TitleFirstLine}
                            <br />
                            {item.TitleSecondLine}
                          </h1>
                          <p
                            className="home__header-content-description text-lg md:text-1xl text-white font-semibold"
                            style={{ maxWidth: '900px' }}
                          >
                            {item.Description}
                          </p>
                        </div>
                      ))}
                    </Slider>
                  </div>

                  {/*<div className="home__header-arrow" />*/}
                </div>
              </div>

              <section className="home__world" ref={сrossBorderPaymentsRef}>
                <div className="home__world-container container min-h-screen px-6 py-18 mx-auto lg:px-16 flex flex-col">
                  <div>
                    <VisibilitySensor partialVisibility>
                      {({ isVisible: isVisibleScreen }) => (
                        <div
                          className={classNames(
                            'headline__screen-on-visible text-center flex flex-col items-start',
                            {
                              'headline__screen-on-visible-show': isVisibleScreen,
                            }
                          )}
                        >
                          <animated.h2
                            // className="text-4xl leading-12 md:text-5xl lg:leading-12 mb-4 text-white font-semibold"
                            className="home__world-title text-white font-semibold text-center"
                            style={{
                              height: '90px',
                              whiteSpace: 'nowrap',
                              fontSize: y.interpolate({
                                range: [
                                  0,
                                  сrossBorderPaymentsRef.current?.offsetTop -
                                  250,
                                  сrossBorderPaymentsRef.current?.offsetTop,
                                ],
                                output: [
                                  isMobile ? '3rem' : '3.5rem',
                                  isMobile ? '1.3rem' : '2.75rem',
                                  isMobile ? '1.3rem' : '2.75rem',
                                ],
                              }),
                            }}
                          >
                            A New Form of Bank Processor
                          </animated.h2>

                          <VisibilitySensor>
                            {({ isVisible }) => (
                              <p
                                className={classNames(
                                  'headline__screen-on-visible text-base md:text-1xl text-white font-semibold',
                                  {
                                    'headline__screen-on-visible-show': isVisible,
                                  }
                                )}
                              >
                                Powering Cross-Border Payments
                              </p>
                            )}
                          </VisibilitySensor>
                        </div>
                      )}
                    </VisibilitySensor>
                  </div>

                  <div className="home__world-lines-wrapper">
                    <div className="home__world-lines-mobile">
                      <div className="home__world-line-item-wrapper">
                        <div
                          className={classNames(
                            'home__world-line-item item-4 active',
                            [`bg-${activeSlide}`]
                          )}
                        >
                          Cross-Border Processor
                        </div>
                      </div>
                      <div className="home__world-line-item-wrapper">
                        <div
                          className={classNames(
                            'home__world-line-item item-3',
                            [`bg-${activeSlide}`]
                          )}
                        >
                          Acquiring Processor
                        </div>
                      </div>
                      <div className="home__world-line-item-wrapper">
                        <div
                          className={classNames(
                            'home__world-line-item item-2',
                            [`bg-${activeSlide}`]
                          )}
                        >
                          Issuing Processor
                        </div>
                      </div>
                      <div className="home__world-line-item-wrapper">
                        <div
                          className={classNames(
                            'home__world-line-item item-1',
                            [`bg-${activeSlide}`]
                          )}
                        >
                          Core Processor
                        </div>
                      </div>
                    </div>

                    <VisibilitySensor partialVisibility>
                      {({ isVisible: isVisibleScreen }) => (
                        <div
                          className={classNames('home__world-lines', {
                            isVisible: isVisibleScreen,
                          })}
                        >
                          <div className="home__world-line-item-wrapper">
                            <div
                              className={classNames(
                                'home__world-line-item item-4 active',
                                [`bg-${activeSlide}`]
                              )}
                            >
                              Cross-Border Processor
                            </div>
                          </div>
                          <div className="home__world-line-item-wrapper">
                            <div
                              className={classNames(
                                'home__world-line-item item-3',
                                [`bg-${activeSlide}`]
                              )}
                            >
                              Acquiring Processor
                            </div>
                          </div>
                          <div className="home__world-line-item-wrapper">
                            <div
                              className={classNames(
                                'home__world-line-item item-2',
                                [`bg-${activeSlide}`]
                              )}
                            >
                              Issuing Processor
                            </div>
                          </div>
                          <div className="home__world-line-item-wrapper">
                            <div
                              className={classNames(
                                'home__world-line-item item-1',
                                [`bg-${activeSlide}`]
                              )}
                            >
                              Core Processor
                            </div>
                          </div>
                        </div>
                      )}
                    </VisibilitySensor>
                  </div>
                </div>
              </section>
            </animated.header>
          )}
        </VisibilitySensor>

        <section className="home__news">
          <div className="container px-4 md:px-6 py-12 md:py-18 mx-auto lg:px-16 flex flex-col">
            <div>
              <h3 className="text-3xl text-white font-bold md:mb-6 mb-8">
                Latest News
              </h3>
            </div>

            <div className="home__news-mobile" style={{ width: featured.length === 1 ? '100%' : '185%' }}>
              <Slider
                dots={false}
                arrows={true}
                speed={350}
                slidesToShow={featured.length === 1 ? 1 : 2}
                slidesToScroll={1}
                focusOnSelect
                autoplay={false}
                swipe={true}
                infinite={true}
                nextArrow={<SampleNextArrow />}
                prevArrow={<SampleNextArrow />}
              >
                {(featured.length === 1 ? featured : [...featured, ...featured]).map((item, index) => (
                  <div className={classNames("h-full", { 'pr-3': featured.length > 1 })} key={index}>
                    <a
                      href={`/newsroom/${item.url}`}
                      target="_blank"
                      className={classNames(
                        'feature-list__item bg-white w-full block text-gray-900 h-full'
                      )}
                    >
                      <div>
                        {item.image && (
                          <img
                            src={`https://admin.payallps.com${item.image.url}`}
                            alt={item.Title}
                          />
                        )}
                      </div>
                      <div className={classNames('info md:py-6 md:px-5 p-8')}>
                        <ul
                          className={classNames(
                            'article text-gray-800 font-normal text-xs mb-3'
                          )}
                        >
                          <li className="font-semibold text-blue-800 category ">
                            <a
                              to={`/newsroom?category=${item.Category.toLowerCase()}`}
                              target="_blank"
                            >
                              {item.Category}
                            </a>
                          </li>
                          <li className="list-disc date ml-7">
                            {moment(item.Posted_date).format('MMM, YYYY')}
                          </li>
                        </ul>

                        <h3
                          className={classNames(
                            'order-2 mb-3 text-lg font-bold leading-7'
                          )}
                        >
                          {item.Title}
                        </h3>

                        <div
                          className={classNames(
                            'description text-gray-800 text-base	font-normal'
                          )}
                        >
                          <ReactMarkdownWithHtml
                            escapeHtml={false}
                            allowDangerousHtml
                            linkTarget="_blank"
                            source={item.Short_description.replace(
                              /\/uploads/g,
                              'https://admin.payallps.com/uploads'
                            )}
                            renderers={{ paragraph: 'p' }}
                            className="body-post-inner"
                          />
                        </div>

                        <div className="mt-4 flex items-center text-blue-700 text-base font-semibold read-more-button">
                          Read More
                          <ArrowIcon className="ml-4" />
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </Slider>
            </div>

            <div className="home__news-desktop">
              {featured.length <= 2 && (
                <div className={classNames('flex flex-wrap feature-list justify-between', {})}>
                  {featured.map((item, index) => (
                    <NewsItem
                      key={index}
                      item={item}
                      index={index}
                      featured={featured}
                    />
                  ))}
                </div>
              )}

              {featured.length === 3 && (
                <div className={classNames('flex flex-wrap feature-list', {})}>
                  <div className="w-1/2 pr-2">
                    <NewsItem
                      item={featured[0]}
                      index={0}
                      featured={featured}
                    />
                  </div>
                  <div className="w-1/2 pl-2">
                    <NewsItem
                      item={featured[1]}
                      index={1}
                      featured={featured}
                    />
                    <NewsItem
                      item={featured[2]}
                      index={2}
                      featured={featured}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <VisibilitySensor partialVisibility="top">
          {({ isVisible }) => (
            <section
              className="home__learn-more min-h-full flex flex-col"
              ref={screensRef}
            >
              <animated.div
                className="home__learn-more-bg"
                style={{
                  background: y.interpolate({
                    range: [
                      0,
                      screensRef.current?.offsetTop + 100,
                      screensRef.current?.offsetTop + 300,
                      screensRef.current?.offsetTop + 650,
                    ],
                    output: [
                      'red',
                      'red',
                      'green',
                      'blue'
                    ],
                  }),
                }}
              />
              <div className="home__learn-container container flex flex-1 flex-col relative lg:pt-56 mx-auto lg:px-16 py-10 px-4">
                <VisibilitySensor partialVisibility>
                  {({ isVisible: isVisibleTitle }) => (
                    <div className={`def ${
                      (screensRef.current?.offsetTop + 100) ? 'vis' : 'novis'
                    }`}
                    >
                      <p
                        className={classNames(
                          'first-title headline__screen-on-visible home__learn-more-title text-xl md:text-3xl text-green-500 font-semibold leading-9 mb-24 md:mb-32',
                          { 'headline__screen-on-visible-show': isVisibleTitle }
                        )}
                      >
                        A global single shared platform purpose-built to power
                        instant cross-border payments and a new bank network
                        construct that transforms correspondent banking and
                        empowers recipients.
                      </p>
                    </div>
                  )}
                </VisibilitySensor>

                <VisibilitySensor partialVisibility>
                  {({ isVisible: isVisibleTitle }) => (
                    <p
                      className={classNames(
                        'headline__screen-on-visible home__learn-more-description text-base leading-5 text-white font-semibold mb-8',
                        { 'headline__screen-on-visible-show': isVisibleTitle }
                      )}
                    >
                      Does your bank provide correspondent banking services so
                      foreign banks can make domestic payments? <br />
                      If so, we have a special message for you…
                    </p>
                  )}
                </VisibilitySensor>

                <VisibilitySensor partialVisibility>
                  {({ isVisible: isVisibleTitle }) => (
                    <p
                      className={classNames(
                        'headline__screen-on-visible home__learn-more-description text-base md:text-xl text-white font-semibold mb-10',
                        { 'headline__screen-on-visible-show': isVisibleTitle }
                      )}
                    >
                      Let us simplify and improve foreign bank oversight, expand
                      and modernize payer and recipient options and ensure you
                      operate safely with transparent and communally shared KYB,
                      source of funds and economic legitimacy of payments.
                    </p>
                  )}
                </VisibilitySensor>

                <p>
                  <Button className="rounded" variant="green" size="large" to="/contact">
                    <span className="mr-4">Learn more</span>
                    <ArrowRightIcon className="-mt-1" />
                  </Button>
                </p>
              </div>

              <div className="mt-auto relative">
                <Footer cutted transparent />
              </div>
            </section>
          )}
        </VisibilitySensor>
      </div>
    </Layout>
  );
};

export default IndexPage;
