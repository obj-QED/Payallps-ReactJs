import React from 'react';
import { SEO } from '../components/SEO';
import { Nav } from '../components/Nav';
import { Layout } from '../components/Layout';
import { Footer } from '../components/Footer';
import { useStaticQuery, graphql } from 'gatsby';
import ArrowRight from '../assets/svg/slick-arrow__right.svg';
import ArrowLeft from '../assets/svg/slick-arrow__left.svg';
import ArrowRightSVG from '../assets/svg/step-arrow-right.svg';
import { CtaBlueSection } from '../components/CtaBlueSection';
import moment from 'moment';
import ReactMarkdownWithHtml from 'react-markdown/with-html';

import Slider from 'react-slick';

const History = ({ content }) => {
  return (
    <div className="leading-6 text-gray-800 whitespace-pre-line text-xsm md:mt-10">
      <ReactMarkdownWithHtml
        escapeHtml={false}
        allowDangerousHtml
        linkTarget="_blank"
        source={content}
        renderers={{ paragraph: 'p' }}
        className="founders-post-content"
      />
    </div>
  );
};

const Sign = ({ name, title }) => (
  <div>
    <p className="mt-10 mb-2 font-bold leading-6 text-blue-900">{name}</p>
    <p className="font-semibold text-gray-500">{title}</p>
  </div>
);

const Intro = ({ data, quote }) => (
  <div className="founder-info lg:mb-10">
    <div className="founder-quote">
      <div className="mb-8 italic text-gray-700 whitespace-pre-line">
        <h1 className="mb-1 text-xl not-italic font-bold text-gray-800 md:text-3xl md:mb-14">
          {data.Title}
        </h1>
        <img
          className="md:mb-8"
          src={quote.childImageSharp.fixed.src}
          alt="quote"
        />
        {data.Quote}
      </div>
      <div className="founder-book">
        <a
          className="book-prew lg:text-right"
          target="_blank"
          href={data.Main_cover_file_link}
        >
          <img
            src={data.Main_cover_image.localFile.childImageSharp.fixed.src}
            alt='Banking CIO Outlook'
          />
          <span className="block book-prew__title md:text-right">
            {data.Main_cover_title}
          </span>
          <span className="block book-prew__descrp md:text-right">
            {data.Main_cover_description}
          </span>
          <span className="block book-prew__date md:text-right lg:hidden">
            {data.Main_cover_date}
          </span>
        </a>
      </div>
    </div>
  </div>
);

const SliderBlock = ({ data }) => (
  <Slider
    dots={false}
    arrows={true}
    arrows={true}
    slidesToShow={3}
    slidesToScroll={1}
    infinite={true}
    nextArrow={<ArrowLeft />}
    prevArrow={<ArrowRight />}
    responsive={[
      {
        breakpoint: 1025,
        settings: {
          dots: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ]}
  >
    {data.map(slide => (
      <div>
        <a
          className="book-prew"
          target="_blank"
          rel="noreferrer"
          href={slide.href}
        >
          <div className="mb-8 book-prew__image-wrapper">
            <img
              src={slide.Cover_image.localFile.childImageSharp.fixed.src}
              alt={slide.Title}
            />
          </div>
          <div className="info">
            <span className="block book-prew__title">{slide.Title}</span>
            <span className="block book-prew__descrpt">
              {slide.Description}
            </span>
            <br />
            <span className="block book-prew__date">
              {moment(slide.Published_date).format('MMMM D, YYYY')}
            </span>
          </div>
        </a>
      </div>
    ))}
  </Slider>
);

const Whitepaper = ({
  title,
  link,
  label,
  description,
  founderMessageWhitepaper,
}) => (
  <div className="flex items-center justify-between my-10 whitepaper">
    <div className="info">
      <h3 className="mb-8 text-6xl font-semibold leading-10">{title}</h3>
      <h4 className="mb-20 text-2xl font-semibold leading-7">{description}</h4>
      <a target="_blank" href={link} className="mt-4">
        <div className="text-base font-semibold leading-tight button">
          {label}
          <ArrowRightSVG />
        </div>
      </a>
    </div>
    <a target="_blank" href={link} className="whitepaper-cover">
      <img
        className="lg:mb-8 "
        src={founderMessageWhitepaper.childImageSharp.fixed.src}
        alt='whitepaper'
      />
    </a>
  </div>
);

const CTA = ({ title, link, action, description }) => (
  <CtaBlueSection
    link={{
      to: link,
      label: action,
    }}
  >
    <div className="max-w-screen-sm">
      <h3 className="mb-10 text-3xl font-bold text-white lg:text-35px">
        {title}
      </h3>
      <p className="mb-12 text-sm font-semibold leading-snug text-center text-white lg:text-base">
        {description}
      </p>
    </div>
  </CtaBlueSection>
);

const FoundersPage = () => {
  const data = useStaticQuery(graphql`
    query FoundersQueryData {
      allStrapiFoundersMessageSlider {
        nodes {
          Main_cover_file_link
          Main_cover_date
          Founder_title
          Main_cover_description
          Founder_name
          Media_title
          Content
          Main_cover_title
          Quote
          Title
          Whitepaper_Title
          Whitepaper_description
          Whitepaper_link
          Whitepaper_label
          Contact_us
          Contact_us_description
          Contact_us_label
          Contact_us_link
          Slides {
            Description
            Published_date
            Title
            href
            id
            Cover_image {
              localFile {
                childImageSharp {
                  fixed(quality: 100, width: 260) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
          Main_cover_image {
            localFile {
              childImageSharp {
                fixed(quality: 100, width: 260) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          created_at
          strapiId
        }
      }
      metaImage: file(absolutePath: { regex: "/og__founders-message.webp/" }) {
        childImageSharp {
          fixed(quality: 100, width: 1200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      founderMessageImage: file(
        absolutePath: { regex: "/founder-message.webp/" }
      ) {
        childImageSharp {
          fixed(quality: 100, width: 260) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      founderMessageWhitepaper: file(
        absolutePath: { regex: "/founder__whitepaper.webp/" }
      ) {
        childImageSharp {
          fixed(quality: 100, width: 486) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      founderMessageImageQuote: file(absolutePath: { regex: "/quotes.webp/" }) {
        childImageSharp {
          fixed(quality: 100, width: 45) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  console.log(data);
  return (
    <Layout>
      <SEO
        title="Reimagining Cross-Border Payments"
        description="A modern vision on enabling B2B & B2C from Payall founder, president and CEO – Gary Palmer, a pioneer of the payments industry"
        image={data.metaImage.childImageSharp.fixed.src}
      />
      <Nav />
      <div className="max-w-screen-lg px-4 mx-auto mb-20 founder-message lg:px-1 lg:mb-24">
        <Intro
          data={data.allStrapiFoundersMessageSlider.nodes[0]}
          quote={data.founderMessageImageQuote}
        />
        <History
          content={data.allStrapiFoundersMessageSlider.nodes[0].Content}
        />
        <Sign
          title={data.allStrapiFoundersMessageSlider.nodes[0].Founder_title}
          name={data.allStrapiFoundersMessageSlider.nodes[0].Founder_name}
        />
      </div>

      <div className="py-10 mt-20 founder-slider xl:mx-5">
        <div className="max-w-screen-lg px-4 mx-auto mb-20 founder-message lg:px-1 lg:mb-24">
          <h3 className="py-12 text-3xl font-bold leading-10 text-center">
            {data.allStrapiFoundersMessageSlider.nodes[0].Media_title}
          </h3>
          <SliderBlock
            data={data.allStrapiFoundersMessageSlider.nodes[0].Slides}
          />
        </div>
      </div>

      <div className="max-w-screen-lg px-4 mx-auto mb-20 founder-message lg:px-1 lg:mb-24">
        <Whitepaper
          title={data.allStrapiFoundersMessageSlider.nodes[0].Whitepaper_Title}
          link={data.allStrapiFoundersMessageSlider.nodes[0].Whitepaper_link}
          description={
            data.allStrapiFoundersMessageSlider.nodes[0].Whitepaper_description
          }
          label={data.allStrapiFoundersMessageSlider.nodes[0].Whitepaper_label}
          founderMessageWhitepaper={data.founderMessageWhitepaper}
        />
      </div>
      <div className="max-w-full">
        <CTA
          title={data.allStrapiFoundersMessageSlider.nodes[0].Contact_us}
          description={
            data.allStrapiFoundersMessageSlider.nodes[0].Contact_us_description
          }
          link={data.allStrapiFoundersMessageSlider.nodes[0].Contact_us_link}
          action={data.allStrapiFoundersMessageSlider.nodes[0].Contact_us_label}
        />
      </div>
      <Footer />
    </Layout>
  );
};

export default FoundersPage;
