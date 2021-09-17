import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import classNames from 'classnames';
import { useSpring, animated, interpolate } from 'react-spring'
import VisibilitySensor from "react-visibility-sensor";
import Slider from "react-slick";
import scrollTo from 'gatsby-plugin-smoothscroll';
import chunk from 'lodash/chunk';
import ReactMarkdown from 'react-markdown';

import { Layout } from '../components/Layout';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';
import ArrowRight from '../assets/svg/step-arrow-right.svg';
import CheckIcon from '../assets/svg/check.svg';
import PrepaidCardsScreen from '../assets/svg/prepaid_cards_screen.svg';
import MapIcon from '../assets/svg/map.svg';
import SaveWalletIcon from '../assets/svg/save-wallet.svg';
import SaveHedgeIcon from '../assets/svg/save-hedge.svg';
import BankCircleIcon from '../assets/svg/bank-circle.svg';
import CashCircleIcon from '../assets/svg/cash-circle.svg';
import ShareCircleIcon from '../assets/svg/share-circle.svg';
import HandGiveCircleIcon from '../assets/svg/hand-give-circle.svg';
import TransactionCircleIcon from '../assets/svg/transaction-circle.svg';
import PrepaidIcon from '../assets/svg/prepaid.svg';
import CurrentBankIcon from '../assets/svg/firstlastmile-page/current-bank.svg';
import FeesConstsIcon from '../assets/svg/firstlastmile-page/fees-costs.svg';
import GradeSecurityIcon from '../assets/svg/firstlastmile-page/grade-security.svg';
import PaymentProcessIcon from '../assets/svg/firstlastmile-page/payment-process.svg';
import PaymentTimeIcon from '../assets/svg/firstlastmile-page/payment-time.svg';
import RisksIcon from '../assets/svg/firstlastmile-page/risks.svg';
import SelfEnrolmentIcon from '../assets/svg/firstlastmile-page/self-enrolment.svg';
import SuspiciousPaymentsProtectIcon from '../assets/svg/firstlastmile-page/suspicious-payments-protect.svg';
import { CtaBlueSection } from '../components/CtaBlueSection';
import { Link } from 'react-router-dom';

const phrases = ['Simplify', 'De-Risk', 'Modernize'];
const subPhrases = ['Pay anyone. Anywhere.', 'Automate manual & slow processes', 'Deliver payments 24/7'];

const BusinessPage = () => {
  const data = useStaticQuery(graphql`
    query BusinessQuery {
      strapiInstantPayment {
        title
        sub_title
        sub_title_repeats {
          first
          second
          third
        }
        title_repeats {
          first
          second
          third
        }
        bank_transfers_label
        bank_transfers_title
        bank_transfers_description
        bank_transfers_description
        prepaid_cards_title
        prepaid_cards_description
        recipients_title
        recipients_description
        partner_network_title
        partner_network_description
        partner_network_slides {
          id
          title
          description
          icon_name
        }
        bank_transfers_detailed_title
        bank_transfers_detailed_description
        bank_transfers_detailed_bg_text
        bank_transfers_detailed_link_name
        bank_transfers_detailed_list {
          item
        }
        prepaid_cards_detailed_link_name
        prepaid_cards_detailed_title
        prepaid_cards_detailed_description
        prepaid_cards_detailed_bg_text
        prepaid_cards_detailed_list {
          item
        }
        recipients_detailed_title
        recipients_detailed_description
        recipients_detailed_bg_text
        recipients_detailed_list {
          item
        }
        benefits_link_name
        benefits_list {
          title
          description
          icon_name
        }
        markets_title
        markets_list {
          item
        }
        implementation_title
        implementation_description
        api_title
        api_link_name
        api_list {
          item
        }
        webapp_title
        webapp_link_name
        webapp_list {
          item
        }
      }
      businessSlider: allMdx(
        sort: { fields: frontmatter___id, order: ASC }
        filter: { fileAbsolutePath: { regex: "/business/slider/" } }
      ) {
        edges {
          node {
            body
            frontmatter {
              name
              slug
              icon
            }
          }
        }
      }
      businessTransfersImage: file(absolutePath: { regex: "/business_transfers.webp/" }) {
        childImageSharp {
          fixed(quality: 100, width: 900) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      gfaScreenImage: file(absolutePath: { regex: "/gfa_screen.png/" }) {
        childImageSharp {
          fixed(quality: 100, width: 1171) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      pcImage1: file(absolutePath: { regex: "/pc1.webp/" }) {
        childImageSharp {
          fixed(quality: 100, width: 512) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      pcImage2: file(absolutePath: { regex: "/pc2.webp/" }) {
        childImageSharp {
          fixed(quality: 100, width: 512) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      pcImage3: file(absolutePath: { regex: "/pc3.webp/" }) {
        childImageSharp {
          fixed(quality: 100, width: 512) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      pcImage4: file(absolutePath: { regex: "/pc4.webp/" }) {
        childImageSharp {
          fixed(quality: 100, width: 512) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      pcImage5: file(absolutePath: { regex: "/pc5.webp/" }) {
        childImageSharp {
          fixed(quality: 100, width: 512) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      pcMSImage: file(absolutePath: { regex: "/prepaid-card-ms.webp/" }) {
        childImageSharp {
          fixed(quality: 100, width: 873) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      pcUPImage: file(absolutePath: { regex: "/prepaid-card-up.webp/" }) {
        childImageSharp {
          fixed(quality: 100, width: 873) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      pcVisaImage: file(absolutePath: { regex: "/prepaid-card-visa.webp/" }) {
        childImageSharp {
          fixed(quality: 100, width: 873) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      btImage1: file(absolutePath: { regex: "/bt1.webp/" }) {
        childImageSharp {
          fixed(quality: 100, width: 1568) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      btImage2: file(absolutePath: { regex: "/bt2.webp/" }) {
        childImageSharp {
          fixed(quality: 100, width: 1568) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      btImage3: file(absolutePath: { regex: "/bt3.webp/" }) {
        childImageSharp {
          fixed(quality: 100, width: 1568) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      btImage4: file(absolutePath: { regex: "/bt4.webp/" }) {
        childImageSharp {
          fixed(quality: 100, width: 1568) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      btImage5: file(absolutePath: { regex: "/bt5.webp/" }) {
        childImageSharp {
          fixed(quality: 100, width: 1568) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      btImage6: file(absolutePath: { regex: "/bt6.webp/" }) {
        childImageSharp {
          fixed(quality: 100, width: 1568) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      upaImage1: file(absolutePath: { regex: "/upa1.webp/" }) {
        childImageSharp {
          fixed(quality: 100, width: 480) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      upaImage2: file(absolutePath: { regex: "/upa2.webp/" }) {
        childImageSharp {
          fixed(quality: 100, width: 480) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      upaImage3: file(absolutePath: { regex: "/upa3.webp/" }) {
        childImageSharp {
          fixed(quality: 100, width: 480) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      upaImage4: file(absolutePath: { regex: "/upa4.webp/" }) {
        childImageSharp {
          fixed(quality: 100, width: 480) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      upaImage5: file(absolutePath: { regex: "/upa5.webp/" }) {
        childImageSharp {
          fixed(quality: 100, width: 480) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      upaImage6: file(absolutePath: { regex: "/upa6.webp/" }) {
        childImageSharp {
          fixed(quality: 100, width: 480) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      prepaidCardsImage: file(absolutePath: { regex: "/prepaid_cards.webp/" }) {
        childImageSharp {
          fixed(quality: 100, width: 577) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      businessWomanImage: file(absolutePath: { regex: "/business_woman.webp/" }) {
        childImageSharp {
          fixed(quality: 100, width: 681) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      reviewsImage: file(absolutePath: { regex: "/reviews.webp/" }) {
        childImageSharp {
          fixed(quality: 100, width: 1440) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      businessIntroImage: file(absolutePath: { regex: "/business_intro.png/" }) {
        childImageSharp {
          fixed(quality: 100, width: 1120) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      businessPayToImage: file(absolutePath: { regex: "/business_pay_to.webp/" }) {
        childImageSharp {
          fixed(quality: 100, width: 1119) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      metaImage: file(absolutePath: { regex: "/og-payment-options.webp/" }) {
        childImageSharp {
          fixed(quality: 100, width: 701) {
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

  const bankTransferImages = [
    data.btImage1.childImageSharp.fixed.src,
    data.btImage2.childImageSharp.fixed.src,
    data.btImage3.childImageSharp.fixed.src,
    data.btImage4.childImageSharp.fixed.src,
    data.btImage5.childImageSharp.fixed.src,
    data.btImage6.childImageSharp.fixed.src,
  ];

  const prepaidCardsScreenImages = [
    data.pcImage1.childImageSharp.fixed.src,
    data.pcImage2.childImageSharp.fixed.src,
    data.pcImage3.childImageSharp.fixed.src,
    data.pcImage4.childImageSharp.fixed.src,
    data.pcImage5.childImageSharp.fixed.src,
  ];

  const prepaidCardsImages = [
    data.pcVisaImage.childImageSharp.fixed.src,
    data.pcMSImage.childImageSharp.fixed.src,
    data.pcUPImage.childImageSharp.fixed.src,
  ];

  const upaImages = [
    data.upaImage1.childImageSharp.fixed.src,
    data.upaImage2.childImageSharp.fixed.src,
    data.upaImage3.childImageSharp.fixed.src,
    data.upaImage4.childImageSharp.fixed.src,
    data.upaImage5.childImageSharp.fixed.src,
    data.upaImage6.childImageSharp.fixed.src,
  ];

  const [paymentActiveSlide, setPaymentActiveSlide] = useState(0);

  const [previewBankTransfersScreen, setPreviewBankTransfersScreen] = useState(false);
  const [previewPrepaidCardsScreen, setPreviewPrepaidCardsScreen] = useState(false);
  const [previewGFAScreen, setPreviewGFAScreen] = useState(false);

  const [phraseNum, setPhraseNum] = useState(0);
  const [subPhraseNum, setSubPhraseNum] = useState(0);
  const [instantBankTransferImageNum, setInstantBankTransferImageNum] = useState(0);
  const [prepaidCardImageNum, setPrepaidCardImageNum] = useState(0);
  const [prepaidCardNum, setPrepaidCardNum] = useState(0);
  const [upaImageNum, setUpaImageNum] = useState(0);

  useEffect(() => {
    const intervalPhrase = setInterval(() => { setPhraseNum(phraseNum => { return phraseNum === 2 ? 0 : phraseNum + 1; }); }, 5500);
    const intervalSubPhrase = setInterval(() => { setSubPhraseNum(subPhraseNum => { return subPhraseNum === 2 ? 0 : subPhraseNum + 1; }); }, 5500);
    const intervalBankTransferImage = setInterval(() => { setInstantBankTransferImageNum(instantBankTransferImageNum => { return instantBankTransferImageNum === bankTransferImages.length - 1 ? 0 : instantBankTransferImageNum + 1; }); }, 4000);
    const intervalPrepaidCardScreenImage = setInterval(() => { setPrepaidCardImageNum(prepaidCardImageNum => { return prepaidCardImageNum === prepaidCardsScreenImages.length - 1 ? 0 : prepaidCardImageNum + 1; }); }, 4000);
    const intervalPrepaidCardImage = setInterval(() => { setPrepaidCardNum(prepaidCardNum => { return prepaidCardNum === prepaidCardsImages.length - 1 ? 0 : prepaidCardNum + 1; }); }, 9000);
    const intervalUPAImage = setInterval(() => { setUpaImageNum(upaNum => { return upaNum === upaImages.length - 1 ? 0 : upaNum + 1; }); }, 4000);

    return () => {
      clearInterval(intervalPhrase);
      clearInterval(intervalSubPhrase);
      clearInterval(intervalBankTransferImage);
      clearInterval(intervalPrepaidCardScreenImage);
      clearInterval(intervalPrepaidCardImage);
      clearInterval(intervalUPAImage);
    };
  }, []);

  const phrase = useCallback((phraseNum) => (
    <span className="title text-gray-900 mr-4">
      <span className={classNames('block', { 'bg-orange-500': phraseNum === 'first', 'bg-blue-500': phraseNum === 'second', 'bg-green-500': phraseNum === 'third' })} />
      <span className='title-text bg-white px-4 md:w-64 lg:w-120'>{data.strapiInstantPayment.title_repeats[phraseNum]}</span>
    </span>
  ));

  const subPhrase = useCallback((subPhraseNum) => (
    <span className="sub-title">{data.strapiInstantPayment.sub_title_repeats[subPhraseNum]}</span>
  ));

  const [{ y }, set] = useSpring(() => ({ y: 0 }));
  useEffect(() => {
    const handleScroll = () => { set({ y: window.scrollY }) };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const screensRef = useRef();

  const interpScreens = interpolate([y], o => {
    const offsetTop = screensRef.current?.offsetTop || 0;
    if (y.value > offsetTop) {
      return `translate(-${(o - offsetTop ) * 0.4}px,0)`;
    }
    return `translate(0,0)`;
  });

  let sliderPayment;

  return (
    <Layout>
      <SEO
        title="Global Payment Options"
        description="Global Payments - Instant Bank Transfers, Prepaid Issuing or Payment to a Global Account for maximum choice."
        image={data.metaImage.childImageSharp.fixed.src}
        ogDescription="Global payment options available to businesses on the Payall platform include instant bank transfers, card issuing and universal payment accounts."
        meta={[]}
      />
      <header className="business__header z-20 relative overflow-hidden bg-center bg-no-repeat bg-cover bg-gray-900 md:h-screen">

        <Nav theme="dark" isBorderBottom={false} isShadowBottom={false} />

        <div className="business__header-content flex flex-col justify-center relative container w-full mx-auto px-6 pb-12 text-center lg:text-left lg:px-16" style={{ height: 'calc(100% - 12rem)' }}>
          <div className='flex items-center font-bold text-white text-2xl md:text-4xl lg:text-7xl mb-10 justify-center lg:justify-start'>
            {phraseNum === 0 && phrase('first')}
            {phraseNum === 1 && phrase('second')}
            {phraseNum === 2 && phrase('third')}
            {data.strapiInstantPayment.title}
          </div>

          <div className='text-base md:text-xl font-bold text-white max-w-xl leading-6 mx-auto lg:mx-0'>
            {data.strapiInstantPayment.sub_title}
          </div>


          <div className='mt-16 md:mt-32 text-yellow-500 text-base md:text-1xl font-bold'>
            {subPhraseNum === 0 && subPhrase('first')}
            {subPhraseNum === 1 && subPhrase('second')}
            {subPhraseNum === 2 && subPhrase('third')}
          </div>
        </div>

        <div className="subphrase-progress bg-yellow-500"></div>
      </header>

      <VisibilitySensor partialVisibility='top'>
        {({ isVisible}) => (
          <div className="business__screens-wrapper relative z-10" ref={screensRef}>
            <div className="bg-white h-full z-10 w-1/2 absolute top-0 left-0"></div>
            <div className='flex justify-between container w-full mx-auto px-6 lg:px-16'>
              <div className='relative z-20 bg-white w-full pb-16 md:w-1/2 md:pb-0'>
                <div className='business__screens-item'>
                  <div className='business__screens-content font-semibold md:sticky top-0 pt-16 lg:pt-24'>
                    <h1 className='text-gray-900 text-lg pb-6 lg:pb-12'>{data.strapiInstantPayment.bank_transfers_label}</h1>
                    <div className='text-gray-400 text-base pb-4'>&mdash; 01.</div>
                    <VisibilitySensor partialVisibility>
                      {({ isVisible: isVisibleScreen }) => (
                        <h2 className={classNames('text-1xl leading-7 md:leading-10 md:text-3xl lg:text-6xl lg:leading-20 text-gray-900 font-bold pb-6 lg:pb-14 business__screen-on-visible', { 'business__screen-on-visible-show': isVisibleScreen })}>
                          <ReactMarkdown escapeHtml={false} source={data.strapiInstantPayment.bank_transfers_title} />
                        </h2>
                      )}
                    </VisibilitySensor>
                    <div className='text-xsm lg:text-lg text-gray-900 pb-8 pr-6 lg:pb-16'>
                      <ReactMarkdown escapeHtml={false} source={data.strapiInstantPayment.bank_transfers_description} />
                    </div>
                    <button onClick={() => scrollTo('#instant-payments-screen')} className='text-base text-blue-700 font-semibold focus:outline-none'>
                      <span className='inline-block pb-4'>Learn more</span>
                      <ArrowRight />
                    </button>
                  </div>
                </div>
                <div className='business__screens-item lg:h-screen lg:pt-0'>
                  <div className='business__screens-content font-semibold md:sticky top-0 pt-16 lg:pt-24'>
                    <div className='text-gray-400 text-base pb-4'>&mdash; 02.</div>
                    <VisibilitySensor partialVisibility>
                      {({ isVisible: isVisibleScreen }) => (
                        <h2 className={classNames('text-1xl leading-7 md:leading-10 md:text-3xl lg:text-6xl lg:leading-20 text-gray-900 font-bold pb-6 lg:pb-14 business__screen-on-visible', { 'business__screen-on-visible-show': isVisibleScreen })}>
                          <ReactMarkdown escapeHtml={false} source={data.strapiInstantPayment.prepaid_cards_title} />
                        </h2>
                      )}
                    </VisibilitySensor>
                    <div className='text-xsm lg:text-lg text-gray-900 pb-8 lg:pb-16 pr-6'>
                      <ReactMarkdown escapeHtml={false} source={data.strapiInstantPayment.prepaid_cards_description} />
                    </div>
                    <button onClick={() => scrollTo('#prepaid-cards-screen')} className='text-base text-green-900 font-semibold focus:outline-none'>
                      <span className='inline-block pb-4'>Learn more</span>
                      <ArrowRight />
                    </button>
                  </div>
                </div>
                <div className='business__screens-item lg:h-screen md:mb-16 lg:pt-0'>
                  <div className='business__screens-content font-semibold md:sticky top-0 pt-16 lg:pt-24'>
                    <div className='text-gray-400 text-base pb-4'>&mdash; 03.</div>
                    <VisibilitySensor partialVisibility>
                      {({ isVisible: isVisibleScreen }) => (
                        <h2 className={classNames('text-1xl leading-7 md:leading-10 md:text-3xl lg:text-6xl lg:leading-20 text-gray-900 font-bold pb-6 lg:pb-14 business__screen-on-visible', { 'business__screen-on-visible-show': isVisibleScreen })}>
                          <ReactMarkdown escapeHtml={false} source={data.strapiInstantPayment.recipients_title} />
                        </h2>
                      )}
                    </VisibilitySensor>
                    <div className='text-xsm lg:text-lg text-gray-900 pb-8 pr-6 lg:pb-16'>
                      <ReactMarkdown escapeHtml={false} source={data.strapiInstantPayment.recipients_description} />
                    </div>
                    <button onClick={() => scrollTo('#recipient-screen')} className='text-base text-orange-500 font-semibold focus:outline-none'>
                      <span className='inline-block pb-4'>Learn more</span>
                      <ArrowRight />
                    </button>
                  </div>
                </div>
              </div>
              <animated.div
                className='w-1/2 absolute right-0 h-full hidden md:block'
                style={{
                  background: y.interpolate({
                    range: [
                      screensRef.current?.offsetTop + 200,
                      (screensRef.current?.offsetTop * 1.5 + screensRef.current?.offsetHeight) / 2,
                      (screensRef.current?.offsetTop * 1.5 + screensRef.current?.offsetHeight) / 2 + 250
                    ],
                    output: [
                      'linear-gradient(124.64deg, #1A5BD1 29.67%, #1750B6 100%)',
                      'linear-gradient(124.64deg, #2398B1 29.67%, #3BA28F 100%)',
                      'linear-gradient(124.64deg, #FFB63E 29.67%, #F6672A 100%)'
                    ]
                  })
                }}
              >
                <div className="sticky top-0 overflow-hidden">
                  <animated.div
                    className={classNames(
                      'flex items-center py-32 h-screen'
                    )}
                    style={{ transform: interpScreens }}
                  >
                    <div className="p-6 business__screens-image-wrapper">
                      <img
                        src={data.btImage1.childImageSharp.fixed.src}
                        alt='Instant Bank Transfers'
                      />
                    </div>
                    <div className="p-6 business__screens-image-wrapper">
                      <div style={{ transform: 'scale(0.8)' }}>
                        <PrepaidCardsScreen />
                      </div>
                    </div>
                    <div className="p-6 business__screens-image-wrapper">
                      <img
                        src={data.gfaScreenImage.childImageSharp.fixed.src}
                        alt='Payment to UPA'
                      />
                    </div>
                  </animated.div>
                </div>
              </animated.div>
            </div>
          </div>
        )}
      </VisibilitySensor>

      <VisibilitySensor partialVisibility='top' intervalDelay={50}>
        {({ isVisible}) => (
          <VisibilitySensor partialVisibility='bottom' intervalDelay={50}>
            {({ isVisible: isVisibleBottom }) => (
              <div className='relative'>
                <div className={classNames('business__map-container w-full py-20 lg:py-40', [isVisible || isVisibleBottom ? 'absolute' : 'fixed top-0'], { 'top-0': isVisible, 'bottom-0': isVisibleBottom })}>
                  <VisibilitySensor partialVisibility>
                    {({ isVisible: isVisibleMap }) => (
                      <div className={classNames('business__map-icon', { isVisible: isVisibleMap, 'business__map-icon-bottom': isVisibleBottom })}>
                        <div className="business__blob dot-1"></div>
                        <div className="business__blob dot-2"></div>
                        <div className="business__blob dot-3"></div>
                        <div className="business__blob dot-4"></div>
                        <div className="business__blob dot-5"></div>
                        <div className="business__blob dot-6"></div>
                        <div className="business__blob dot-7"></div>
                        <div className="business__blob dot-8"></div>
                        <div className="business__blob dot-9"></div>
                        <div className="business__blob dot-10"></div>
                        <div className="business__blob dot-11"></div>
                        <div className="business__blob dot-12"></div>
                        <div className="business__blob dot-13"></div>
                        <div className="business__blob dot-14"></div>
                        <div className="business__blob dot-15"></div>
                        <div className="business__blob dot-16"></div>
                        <MapIcon />
                      </div>
                    )}
                  </VisibilitySensor>
                </div>

                <div className='business__map-content relative z-10 overflow-hidden'>
                  <h2 className="mx-auto pt-6 uppercase px-6 max-w-xl text-white text-1xl leading-8 md:leading-10 md:text-3xl lg:text-5xl lg:tracking-wider lg:leading-18 xxl:text-6xl xxl:leading-22 font-bold pb-6 lg:pb-14">
                    <ReactMarkdown escapeHtml={false} source={data.strapiInstantPayment.partner_network_title} />
                  </h2>

                  <div className='container w-full mx-auto px-6 lg:px-16 py-20 lg:pt-32 lg:pb-56'>
                    <h3 className="text-green-500 text-xl leading-7 md:leading-10 md:text-2xl lg:text-4xl lg:leading-14 font-bold pb-6 lg:pb-14">
                      <ReactMarkdown escapeHtml={false} source={data.strapiInstantPayment.partner_network_description} />
                    </h3>

                    <div className='flex justify-between'>
                      <div className="w-1/2 hidden md:block">
                        <ul className='flex flex-col'>
                          {data.strapiInstantPayment.partner_network_slides.map((item, index) => (
                            <li
                              key={item.id}
                            >
                              <span
                                className={classNames('cursor-pointer text-white font-bold text-base py-2 px-2 my-1 inline-block', { 'bg-white text-gray-900': paymentActiveSlide === index })}
                                onClick={() => sliderPayment.slickGoTo(index)}
                              >{item.title}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex justify-start w-full md:w-1/2">
                        <div className="business__payment-slider">
                          <Slider
                            ref={s => sliderPayment = s}
                            dots={false}
                            speed={250}
                            slidesToShow={2}
                            slidesToScroll={1}
                            focusOnSelect
                            autoplay={true}
                            autoplaySpeed={4000}
                            beforeChange={(current, next) => setPaymentActiveSlide(next)}
                            >

                            {data.strapiInstantPayment.partner_network_slides.map((item, index) => (
                              <div key={item.id}>
                                <div className='bg-white px-8 py-10 lg:px-12 lg:py-14 mx-2'>
                                  {item.icon_name === 'current_bank' && <CurrentBankIcon /> }
                                  {item.icon_name === 'fees_costs' && <FeesConstsIcon /> }
                                  {item.icon_name === 'grade_security' && <GradeSecurityIcon /> }
                                  {item.icon_name === 'payment_process' && <PaymentProcessIcon /> }
                                  {item.icon_name === 'payment_time' && <PaymentTimeIcon /> }
                                  {item.icon_name === 'risks' && <RisksIcon /> }
                                  {item.icon_name === 'self_enrolment' && <SelfEnrolmentIcon /> }
                                  {item.icon_name === 'suspicious_payments_protect' && <SuspiciousPaymentsProtectIcon /> }
                                  <h4 className='text-gray-900 font-bold text-xsm my-6'>
                                    <ReactMarkdown escapeHtml={false} source={item.title} />
                                  </h4>
                                  <div className='text-gray-400 text-sm pb6 border-b-2 pb-10 border-gray-200'>
                                    <ReactMarkdown escapeHtml={false} source={item.description} />
                                  </div>
                                </div>
                              </div>
                            ))}
                          </Slider>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </VisibilitySensor>
        )}
      </VisibilitySensor>

      <div id="instant-payments-screen" className='overflow-hidden'>
        <div className="container relative w-full mx-auto px-6 lg:px-16 pt-20 lg:pt-40">
          <div className={classNames('business__promo-preview business-transfers', { 'isPreview': previewBankTransfersScreen })}>
            <div className='business__promo-preview-text'>
              <ReactMarkdown escapeHtml={false} source={data.strapiInstantPayment.bank_transfers_detailed_bg_text} />
            </div>

            <div className="business__promo-preview-img-wrapper">
              {/*<span
                className='business__promo-preview-img-toggle uppercase text-gray-900 text-sm font-semibold'
                onClick={() => setPreviewBankTransfersScreen(!previewBankTransfersScreen)}
              >
                {previewBankTransfersScreen ? <CloseCheck /> : <CaretRight className='icon' />}
                {previewBankTransfersScreen ? 'Hide' : 'Show'}
              </span>*/}

              <div className="business__promo-preview-img-view image-apear-animated">
                {bankTransferImages.map((src, index) => (
                  <img src={src} key={index} alt='Instant bank transfer preview' className={classNames({
                    active: instantBankTransferImageNum === index,
                    prev: instantBankTransferImageNum === 0 ? bankTransferImages.length - 1 === index: instantBankTransferImageNum - 1 === index,
                    next: bankTransferImages.length - 1 === instantBankTransferImageNum ? index === 0 : instantBankTransferImageNum + 1 === index
                  })} />
                ))}
              </div>
            </div>
          </div>

          <div className={classNames('business__promo-content', { 'isPreview': previewBankTransfersScreen })}>
            <VisibilitySensor partialVisibility>
              {({ isVisible: isVisibleScreen }) => (
                <h2 className={classNames('text-1xl leading-7 md:leading-10 md:text-3xl lg:text-6xl lg:leading-20 text-gray-900 font-bold pb-6 lg:pb-14 business__screen-on-visible', { 'business__screen-on-visible-show': isVisibleScreen })}>
                  <ReactMarkdown escapeHtml={false} source={data.strapiInstantPayment.bank_transfers_detailed_title} />
                </h2>
              )}
            </VisibilitySensor>

            <div className='font-semibold text-xsm lg:text-lg text-gray-900 pb-8 lg:pb-16'>
              <ReactMarkdown escapeHtml={false} source={data.strapiInstantPayment.bank_transfers_detailed_description} />
            </div>

            <div className="flex flex-wrap bg-gray-100 p-6 md:p-12 lg:p-24 ">
              <ul className='font-semibold text-xs md:text-xsm lg:text-base md:mr-32' style={{ width: '340px' }}>
                {data.strapiInstantPayment.bank_transfers_detailed_list.map(({ item }, index) => (
                  <li key={index} className='pb-5'>{item}</li>
                ))}
              </ul>
              <a href='/contact' target="_blank" className='business__arrow-link group inline-flex font-semibold items-center self-end text-blue-700  mt-12 text-xs md:text-xsm lg:text-base'>
                <span className='mr-6 border-b-2 border-blue-700'>
                  <a href="/contact">
                    <span>US 24/7 Instant Payments</span>
                  </a>
                </span>
                <div className='business__arrow-link-icon flex justify-center items-center border-1 border border-blue-200 rounded-full'>
                  <ArrowRight className='transition ease-in-out duration-150 w-8 lg:w-12' />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="prepaid-cards-screen" className="container relative flex lg:justify-end w-full mx-auto px-6 lg:px-16 pt-20 lg:pt-40">
        <div className={classNames('business__promo-preview prepaid-cards', { 'isPreview': previewPrepaidCardsScreen })}>
          <div className='business__promo-preview-text'>
            <ReactMarkdown escapeHtml={false} source={data.strapiInstantPayment.prepaid_cards_detailed_bg_text} />
          </div>

          <div className="business__promo-preview-img-wrapper">
            {/*<span
              className='business__promo-preview-img-toggle uppercase text-gray-900 text-sm font-semibold'
              onClick={() => setPreviewPrepaidCardsScreen(!previewPrepaidCardsScreen)}
            >
              {previewPrepaidCardsScreen ? <CloseCheck /> : <CaretRight className='icon' />}
              {previewPrepaidCardsScreen ? 'Hide' : 'Show'}
            </span>*/}

            <div className='business__prepaid-cards-images-wrapper'>
              <div className="business__prepaid-cards-mobile-wrapper image-apear-animated">
                {prepaidCardsScreenImages.map((src, index) => (
                  <img src={src} key={index} alt='Prepaid card mobile' className={classNames({
                    active: prepaidCardImageNum === index,
                    prev: prepaidCardImageNum === 0 ? prepaidCardsScreenImages.length - 1 === index: prepaidCardImageNum - 1 === index,
                    next: prepaidCardsScreenImages.length - 1 === prepaidCardImageNum ? index === 0 : prepaidCardImageNum + 1 === index
                  })} />
                ))}
              </div>

              <div className="business__prepaid-cards-wrapper">
                {prepaidCardNum === 0 && <img src={prepaidCardsImages[0]} className='image-animated-shift' alt='Prepaid card' />}
                {prepaidCardNum === 1 && <img src={prepaidCardsImages[1]} className='image-animated-shift' alt='Prepaid card' />}
                {prepaidCardNum === 2 && <img src={prepaidCardsImages[2]} className='image-animated-shift' alt='Prepaid card' />}
              </div>
            </div>
          </div>
        </div>

        <div className={classNames('w-full lg:w-1/2 business__promo-content', { 'isPreview': previewPrepaidCardsScreen })}>
          <VisibilitySensor partialVisibility>
            {({ isVisible: isVisibleScreen }) => (
              <h2 className={classNames('text-1xl leading-7 md:leading-10 md:text-3xl lg:text-6xl lg:leading-20 text-gray-900 font-bold pb-6 lg:pb-14 business__screen-on-visible', { 'business__screen-on-visible-show': isVisibleScreen })}>
                <ReactMarkdown escapeHtml={false} source={data.strapiInstantPayment.prepaid_cards_detailed_title} />
              </h2>
            )}
          </VisibilitySensor>

          <div className='font-semibold text-xsm lg:text-lg text-gray-900'>
            <ReactMarkdown escapeHtml={false} source={data.strapiInstantPayment.prepaid_cards_detailed_description} />
          </div>

          <div className="p-6 pl-0 md:pl-0 md:p-12 lg:p-16 lg:pl-16">
            <ul className='font-semibold text-xs md:text-xsm lg:text-base md:mr-32' style={{ width: '340px' }}>
              {data.strapiInstantPayment.prepaid_cards_detailed_list.map(({ item }, index) => (
                <li key={index} className='pb-5'>{item}</li>
              ))}
            </ul>
            <a href='/contact' target="_blank" className='business__arrow-link group inline-flex font-semibold items-center self-end text-blue-700  mt-10 mb-4 text-xs md:text-xsm lg:text-base'>
              <span className='mr-6 border-b-2 border-blue-700 111'>
                {data.strapiInstantPayment.prepaid_cards_detailed_link_name}
              </span>

              <div className='business__arrow-link-icon flex justify-center items-center border-1 border border-blue-200 rounded-full'>
                <ArrowRight className='transition ease-in-out duration-150 w-8 lg:w-12' />
              </div>
            </a>
          </div>
        </div>
      </div>

      <div id="recipient-screen" className='bg-blue-200 overflow-hidden'>
        <div className="container flex justify-between relative w-full mx-auto px-6 lg:px-16 pt-20 pb-16 lg:pt-40 lg:pb-0">
          <div className={classNames('business__promo-content', { 'isPreview': previewGFAScreen })}>
            <VisibilitySensor partialVisibility>
              {({ isVisible: isVisibleScreen }) => (
                <h2 className={classNames('text-1xl leading-7 md:leading-10 md:text-3xl lg:text-6xl lg:leading-20 text-gray-900 font-bold pb-6 lg:pb-14 business__screen-on-visible', { 'business__screen-on-visible-show': isVisibleScreen })}>
                  <ReactMarkdown escapeHtml={false} source={data.strapiInstantPayment.recipients_detailed_title} />
                </h2>
              )}
            </VisibilitySensor>

            <div className='font-semibold max-w-md text-xsm lg:text-lg text-gray-900 pb-8'>
              <ReactMarkdown escapeHtml={false} source={data.strapiInstantPayment.recipients_detailed_description} />
            </div>

            <ul className='business__recipient-list font-semibold text-xs md:text-xsm lg:text-base md:mr-32' style={{ width: '340px' }}>
              {data.strapiInstantPayment.recipients_detailed_list.map(({ item }, index) => (
                <li key={index} className='pb-5 flex'>
                  <CheckIcon className='business__recipient-list-icon text-blue-100 fill-current mr-3' />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className={classNames('business__promo-preview payment-gfa', { 'isPreview': previewGFAScreen })}>
            <div className='business__promo-preview-text'>
              <ReactMarkdown escapeHtml={false} source={data.strapiInstantPayment.recipients_detailed_bg_text} />
            </div>

            <div className="business__promo-preview-img-wrapper">
              {/*<span
                className='business__promo-preview-img-toggle uppercase text-gray-900 text-sm font-semibold'
                onClick={() => setPreviewGFAScreen(!previewGFAScreen)}
              >
                {previewGFAScreen ? <CloseCheck /> : <CaretRight className='icon' />}
                {previewGFAScreen ? 'Hide' : 'Show'}
              </span>*/}

              <img src={data.businessWomanImage.childImageSharp.fixed.src} alt='Payment to UPA' />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="container flex justify-between relative w-full mx-auto px-6 lg:px-16 py-20 lg:py-40">
          <div className="w-1/3 hidden lg:block">
            <div className="business__upa-images-container image-apear-animated">
              {upaImages.map((src, index) => (
                <img src={src} key={index} alt='Payment to UPA preview' className={classNames({
                  active: upaImageNum === index,
                  prev: upaImageNum === 0 ? upaImages.length - 1 === index: upaImageNum - 1 === index,
                  next: upaImages.length - 1 === upaImageNum ? index === 0 : upaImageNum + 1 === index
                })} />
              ))}
            </div>
            <a href='/contact' className='business__arrow-link group inline-flex font-semibold items-center self-end text-blue-700  -mt-20 ml-3 text-xs md:text-xsm lg:text-base'>
              <span className='mr-6 border-b-2 border-blue-700'>{data.strapiInstantPayment.benefits_link_name}</span>

              <div className='business__arrow-link-icon flex justify-center items-center border-1 border border-blue-200 rounded-full'>
                <ArrowRight className='transition ease-in-out duration-150 w-8 lg:w-12' />
              </div>
            </a>
          </div>

          <div className="w-full lg:w-3/5">
            <ul className='flex flex-wrap justify-between -mt-16 -mb-6'>
              {chunk(data.strapiInstantPayment.benefits_list, 2).map((item, index) => (
                <VisibilitySensor partialVisibility key={index}>
                  {({ isVisible: isVisibleScreen }) => (
                    <>
                      {item.map(({ title, description, icon_name }, index) => (
                        <li key={index} className={classNames('w-full sm:w-1/2 py-6 pr-3 lg:pl-3 business__screen-on-visible', { 'business__screen-on-visible-show': isVisibleScreen })}>
                          {icon_name === 'SaveHedgeIcon' && <SaveHedgeIcon /> }
                          {icon_name === 'BankCircleIcon' && <BankCircleIcon /> }
                          {icon_name === 'PrepaidIcon' && <PrepaidIcon /> }
                          {icon_name === 'SaveWalletIcon' && <SaveWalletIcon /> }
                          {icon_name === 'ShareCircleIcon' && <ShareCircleIcon /> }
                          {icon_name === 'CashCircleIcon' && <CashCircleIcon /> }
                          {icon_name === 'TransactionCircleIcon' && <TransactionCircleIcon /> }
                          {icon_name === 'HandGiveCircleIcon' && <HandGiveCircleIcon /> }
                          <h4 className='font-bold text-13px text-gray-900 uppercase mt-5'>{title}</h4>
                          <div className='w-64 text-gray-900 text-13px mt-2'>{description}</div>
                        </li>
                      ))}
                    </>
                  )}
                </VisibilitySensor>
              ))}

              {/*<VisibilitySensor partialVisibility>
                {({ isVisible: isVisibleScreen }) => (
                  <>
                  <li className={classNames('w-full sm:w-1/2 py-6 pr-3 lg:pl-3 business__screen-on-visible', { 'business__screen-on-visible-show': isVisibleScreen })}>
                    <SaveHedgeIcon />
                    <h4 className='font-bold text-13px text-gray-900 uppercase mt-5'>Save/Hedge</h4>
                    <div className='w-64 text-gray-900 text-13px mt-2'>Payees get the chance to invest money and start earning more straight away.</div>
                  </li>
                    <li className={classNames('w-full sm:w-1/2 py-6 pr-3 lg:pl-3 business__screen-on-visible', { 'business__screen-on-visible-show': isVisibleScreen })}>
                    <BankCircleIcon />
                    <h4 className='font-bold text-13px text-gray-900 uppercase mt-5'>Transfer to bank</h4>
                    <div className='w-64 text-gray-900 text-13px mt-2'>Payees also have the option to transfer the money to a bank account.</div>
                  </li>
                </>
               )}
              </VisibilitySensor>
              <VisibilitySensor partialVisibility>
                {({ isVisible: isVisibleScreen }) => (
                  <>
                    <li className={classNames('w-full sm:w-1/2 py-6 pr-3 lg:pl-3 business__screen-on-visible', { 'business__screen-on-visible-show': isVisibleScreen })}>
                      <PrepaidIcon />
                      <h4 className='font-bold text-13px text-gray-900 uppercase mt-5'>Prepaid card</h4>
                      <div className='w-64 text-gray-900 text-13px mt-2'>The recipient can choose to receive payments to a prepaid card.</div>
                    </li>
                    <li className={classNames('w-full sm:w-1/2 py-6 pr-3 lg:pl-3 business__screen-on-visible', { 'business__screen-on-visible-show': isVisibleScreen })}>
                      <SaveWalletIcon />
                      <h4 className='font-bold text-13px text-gray-900 uppercase mt-5'>Save to ewallet or phone</h4>
                      <div className='w-64 text-gray-900 text-13px mt-2'>Recipients can disburse money to their eWallet or phone.</div>
                    </li>
                  </>
                )}
              </VisibilitySensor>

              <VisibilitySensor partialVisibility>
                {({ isVisible: isVisibleScreen }) => (
                  <>
                    <li className={classNames('w-full sm:w-1/2 py-6 pr-3 lg:pl-3 business__screen-on-visible', { 'business__screen-on-visible-show': isVisibleScreen })}>
                      <ShareCircleIcon />
                      <h4 className='font-bold text-13px text-gray-900 uppercase mt-5'>Share with others</h4>
                      <div className='w-64 text-gray-900 text-13px mt-2'>Payees can send money to a family member or friend.</div>
                    </li>
                    <li className={classNames('w-full sm:w-1/2 py-6 pr-3 lg:pl-3 business__screen-on-visible', { 'business__screen-on-visible-show': isVisibleScreen })}>
                      <CashCircleIcon />
                      <h4 className='font-bold text-13px text-gray-900 uppercase mt-5'>Get cash</h4>
                      <div className='w-64 text-gray-900 text-13px mt-2'>Payees have the option of instantly taking out the money at any ATM.</div>
                    </li>
                  </>
                )}
              </VisibilitySensor>

              <VisibilitySensor partialVisibility>
                {({ isVisible: isVisibleScreen }) => (
                  <>
                    <li className={classNames('w-full sm:w-1/2 py-6 pr-3 lg:pl-3 business__screen-on-visible', { 'business__screen-on-visible-show': isVisibleScreen })}>
                      <TransactionCircleIcon />
                      <h4 className='font-bold text-13px text-gray-900 uppercase mt-5'>Transact & pay</h4>
                      <div className='w-64 text-gray-900 text-13px mt-2'>Within the same account you can get a virtual prepaid card and start using it to shop online.</div>
                    </li>
                    <li className={classNames('w-full sm:w-1/2 py-6 pr-3 lg:pl-3 business__screen-on-visible', { 'business__screen-on-visible-show': isVisibleScreen })}>
                      <HandGiveCircleIcon />
                      <h4 className='font-bold text-13px text-gray-900 uppercase mt-5'>Earn</h4>
                      <div className='w-64 text-gray-900 text-13px mt-2'>With this option, payees can start earning 5% interest on funds in their GFA.</div>
                    </li>
                  </>
                )}
              </VisibilitySensor>*/}
            </ul>

            <a href='/contact' className='business__arrow-link group inline-flex font-semibold items-center self-end text-blue-700  mt-8 text-xs md:text-xsm lg:text-base inline-block lg:hidden'>
              <span className='mr-6 border-b-2 border-blue-700'>{data.strapiInstantPayment.benefits_link_name}</span>

              <div className='business__arrow-link-icon flex justify-center items-center border-1 border border-blue-200 rounded-full'>
                <ArrowRight className='transition ease-in-out duration-150 w-8 lg:w-12' />
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center bg-cover bg-center bg-fixed py-12  font-bold text-white px-8 text-2xl sm:text-3xl md:text-5xl lg:text-7xl lg:leading-20' style={{ backgroundImage: `url(${data.reviewsImage.childImageSharp.fixed.src})` }}>
        <ReactMarkdown escapeHtml={false} source={data.strapiInstantPayment.markets_title} />

        <div className='business__review-text'>

          <ul className='mt-10 lg:mt-20'>
            {data.strapiInstantPayment.markets_list.map(({ item }, index) => (
              <li key={index} className='pb-6 lg:pb-16'>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/*<div className='flex justify-center business__review-wrapper py-20 pb-24 lg:pt-40 lg:pb-48'>

        <div className="business__review-slider container relative w-full mx-auto px-6 lg:px-16">
          <Slider
            dots
            infinite
            speed={400}
            slidesToShow={1}
            slidesToScroll={1}
            focusOnSelect
            customPaging = {i => {
              return <span className='business__review-slider-pagination text-xsm text-white'><i className='not-italic text-yellow-500'>0{i + 1}</i> / 04</span>;
            }}
          >
            <div className='text-white'>
              <div className='text-xl md:text-1xl lg:text-3xl font-semibold mb-12'>
                “Nulla augue mus condimentum amet adipiscing. Dui, eget imperdiet tincidunt enim congue eget pharetra nunc enim.”
              </div>

              <div className='text-xsm font-bold'>Gary Palmer</div>
              <div className='text-sm mb-20'>Executive Director, Chairman</div>
            </div>
            <div className='text-white'>
              <div className='text-xl md:text-1xl lg:text-3xl font-semibold mb-12'>
                “Nulla augue mus condimentum amet adipiscing. Dui, eget imperdiet tincidunt enim congue eget pharetra nunc enim.”
              </div>

              <div className='text-xsm font-bold'>Gary Palmer</div>
              <div className='text-sm mb-20'>Executive Director, Chairman</div>
            </div>
            <div className='text-white'>
              <div className='text-xl md:text-1xl lg:text-3xl font-semibold mb-12'>
                “Nulla augue mus condimentum amet adipiscing. Dui, eget imperdiet tincidunt enim congue eget pharetra nunc enim.”
              </div>

              <div className='text-xsm font-bold'>Gary Palmer</div>
              <div className='text-sm mb-20'>Executive Director, Chairman</div>
            </div>
            <div className='text-white'>
              <div className='text-xl md:text-1xl lg:text-3xl font-semibold mb-12'>
                “Nulla augue mus condimentum amet adipiscing. Dui, eget imperdiet tincidunt enim congue eget pharetra nunc enim.”
              </div>

              <div className='text-xsm font-bold'>Gary Palmer</div>
              <div className='text-sm mb-20'>Executive Director, Chairman</div>
            </div>
          </Slider>
        </div>

      </div>*/}

      <div className='overflow-hidden business__platform'>
        <div className="container relative w-full mx-auto px-6 lg:px-16 py-20 lg:py-40">

          <VisibilitySensor partialVisibility>
            {({ isVisible: isVisibleScreen }) => (
              <h2 className={classNames('text-1xl leading-7 md:leading-10 md:text-3xl lg:text-6xl lg:leading-20 text-gray-900 font-bold pb-6 lg:pb-14 business__screen-on-visible', { 'business__screen-on-visible-show': isVisibleScreen })}>
                <ReactMarkdown escapeHtml={false} source={data.strapiInstantPayment.implementation_title} />
              </h2>
            )}
          </VisibilitySensor>

          <div className="font-semibold max-w-3xl text-xsm lg:text-lg text-gray-900 pb-16 md:pb-20 lg:pb-32">
            <ReactMarkdown escapeHtml={false} source={data.strapiInstantPayment.implementation_description} />
          </div>

          <div className='flex items-center justify-between mb-10 md:mb-20 lg:mb-32'>
            <div className="w-full md:w-1/2">

              <VisibilitySensor partialVisibility>
                {({ isVisible: isVisibleScreen }) => (
                  <h3 className={classNames('pb-6 text-1xl lg:text-5xl lg:leading-20 text-gray-900 font-bold lg:pb-10 business__screen-on-visible', { 'business__screen-on-visible-show': isVisibleScreen })}>
                    <ReactMarkdown escapeHtml={false} source={data.strapiInstantPayment.api_title} />
                  </h3>
                )}
              </VisibilitySensor>

              <ul className='font-semibold max-w-xs text-xsm lg:text-base text-gray-900'>
                {data.strapiInstantPayment.api_list.map(({ item }, index) => (
                  <li key={index} className='pb-6'>
                    {item}
                  </li>
                ))}
              </ul>

              <a href='https://developers.payall.com/' className='business__arrow-link group inline-flex font-semibold items-center self-end text-blue-700  mt-10 text-xs md:text-xsm lg:text-base'>
                <span className='mr-6 border-b-2 border-blue-700'>{data.strapiInstantPayment.api_link_name}</span>

                <div className='business__arrow-link-icon flex justify-center items-center border-1 border border-blue-200 rounded-full'>
                  <ArrowRight className='transition ease-in-out duration-150 w-8 lg:w-12' />
                </div>
              </a>
            </div>
            <div className="hidden md:block md:w-1/2 business__platform-image">
              <img
                src={data.businessIntroImage.childImageSharp.fixed.src}
                alt='API'
              />
            </div>
          </div>

          <div className='flex items-center flex-row-reverse justify-between'>
            <div className="w-full md:w-1/2">
              <VisibilitySensor partialVisibility>
                {({ isVisible: isVisibleScreen }) => (
                  <h3 className={classNames('pb-6 text-1xl lg:text-5xl lg:leading-20 text-gray-900 font-bold lg:pb-10 business__screen-on-visible', { 'business__screen-on-visible-show': isVisibleScreen })}>
                    <ReactMarkdown escapeHtml={false} source={data.strapiInstantPayment.webapp_title} />
                  </h3>
                )}
              </VisibilitySensor>

              <ul className='font-semibold max-w-xs text-xsm lg:text-base text-gray-900'>
                {data.strapiInstantPayment.webapp_list.map(({ item }, index) => (
                  <li key={index} className='pb-6'>
                    {item}
                  </li>
                ))}
              </ul>

              <a href='https://lp.payall.com/instant-payments/?_ga=2.10763380.1919970963.1594639387-204794981.1593508051 ' className='business__arrow-link group inline-flex font-semibold items-center self-end text-blue-700  mt-10 text-xs md:text-xsm lg:text-base'>
                <span className='mr-6 border-b-2 border-blue-700'>{data.strapiInstantPayment.webapp_link_name}</span>

                <div className='business__arrow-link-icon flex justify-center items-center border-1 border border-blue-200 rounded-full'>
                  <ArrowRight className='transition ease-in-out duration-150 w-8 lg:w-12' />
                </div>
              </a>
            </div>
            <div className="hidden md:flex justify-end md:w-2/5 business__platform-image">
              <img
                src={data.businessPayToImage.childImageSharp.fixed.src}
                alt='Web App'
              />
            </div>
          </div>
        </div>
      </div>

      <CtaBlueSection link={{
        to: '/contact',
        label: 'Contact Us',
      }}>
        <div className="max-w-screen-sm">
          <h3 className="mb-10 text-3xl font-bold text-white lg:text-35px">
            Ready to make your payments process better?
          </h3>
          <p className="mb-12 text-sm font-semibold leading-snug text-center text-white lg:text-base">
            Talk to us about your needs & get a quote
          </p>
        </div>
      </CtaBlueSection>

      <Footer />
    </Layout>
  );
};

export default BusinessPage;
