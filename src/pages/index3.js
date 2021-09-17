import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Image from 'gatsby-image';
import classNames from 'classnames';
import BackgroundImage from 'gatsby-background-image';
import { Layout } from '../components/Layout';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import { CtaBlueSection } from '../components/CtaBlueSection';
import Dots from '../assets/svg/dots.svg';
import BusinessIcon from '../assets/svg/business.svg';
import BusinessSmallIcon from '../assets/svg/business-small.svg';
import SendingBankIcon from '../assets/svg/sending-bank.svg';
import ReceivingBankIcon from '../assets/svg/receiving-bank.svg';
import RecipientIcon from '../assets/svg/recipient.svg';
import CheckIcon from '../assets/svg/check.svg';
import ArrowRightIcon from '../assets/svg/arrow-right.svg';
import GlobalIcon from '../assets/svg/global.svg';
import FingerprintIcon from '../assets/svg/fingerprint.svg';
import PeopleIcon from '../assets/svg/people.svg';
import HandGiveIcon from '../assets/svg/hand-give.svg';
import BankPlaceIcon from '../assets/svg/bank-place.svg';
import PlusIcon from '../assets/svg/plus.svg';
import SaveHedgeIcon from '../assets/svg/save-hedge.svg';
import SaveWalletIcon from '../assets/svg/save-wallet.svg';
import ShareCircleIcon from '../assets/svg/share-circle.svg';
import CashCircleIcon from '../assets/svg/cash-circle.svg';
import TransactionCircleIcon from '../assets/svg/transaction-circle.svg';
import HandGiveCircleIcon from '../assets/svg/hand-give-circle.svg';
import BankCircleIcon from '../assets/svg/bank-circle.svg';
import CogCircleIcon from '../assets/svg/cog-circle.svg';
import SmallClockIcon from '../assets/svg/small-clock.svg';
import LetterIcon from '../assets/svg/letter.svg';
import AppWindowIcon from '../assets/svg/app-window.svg';
import SigmapIcon from '../assets/svg/sigmap.svg';
import PhoneLetterIcon from '../assets/svg/phone-letter.svg';
import PeopleSmallIcon from '../assets/svg/people-small.svg';
import StepArrowRight from '../assets/svg/step-arrow-right.svg';
import StepArrowDown from '../assets/svg/step-arrow-down.svg';
import LogoBlue from '../assets/svg/payall-blue.svg';
import BankSmallIcon from '../assets/svg/bank-small.svg';
import FingerprintSmallIcon from '../assets/svg/fingerprint-small.svg';
import ChecklistSmallIcon from '../assets/svg/checklist-small.svg';
import PaperPenSmallIcon from '../assets/svg/paper-pen-small.svg';
import { Button } from '../components/Button';
import { LabelsSlider } from '../components/LabelsSlider';
import { SEO } from '../components/SEO';

const Feature = ({ title, list, icon, primary, paddingLeft = true }) => (
  <div
    className={classNames(
      'flex flex-col flex-1 pl-6 lg:pr-8 pt-8 lg:pt-32 lg:border-t-2 lg:border-b-2 pb-8 lg:pb-18 max-w-md',
      {
        'lg:pl-14': paddingLeft,
        'lg:pl-8': !paddingLeft,
        'border-gray-200': !primary,
        'lg:bg-gray-100 lg:border-blue-600': primary,
      }
    )}
  >
    {icon}
    <p className="my-6 text-base font-bold text-gray-800">{title}</p>
    <ul>
      {list.map((item, key) => (
        <li
          key={key}
          className={classNames('flex items-start', {
            'mt-4': key !== 0 && item.checked,
            'leading-tight mt-2': !item.checked,
          })}
        >
          {item.checked && <CheckIcon className="absolute mt-1 -ml-6 text-blue-600 fill-current" />}
          <span
            className={classNames('text-xs text-gray-800', {
              'font-bold': item.checked,
            })}
          >
            {item.label}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

const IconBox = ({ variant, icon, labels, withPlus = true }) => (
  <div
    className={classNames(
      'flex flex-col items-center justify-center px-1 pt-8 pb-5 rounded-sm lg:relative',
      {
        'bg-blue-700': variant === 'primary',
        'bg-gray-400': variant === 'secondary',
      }
    )}
  >
    {withPlus && (
      <div className="absolute bottom-0 flex w-8 h-8 -mb-9 lg:mb-0 lg:pt-18 lg:w-auto lg:h-full lg:right-0">
        <div className="z-10 flex items-center justify-center w-8 h-8 -mr-5 text-white bg-green-900 rounded-full">
          <PlusIcon />
        </div>
      </div>
    )}
    <div
      className={classNames(
        'flex items-center justify-center mb-5  rounded-full w-15 h-15',
        {
          'bg-blue-600 text-white': variant === 'primary',
          'bg-white text-blue-600': variant === 'secondary',
        }
      )}
      style={{
        boxShadow: '0px 22px 40px rgba(0, 0, 0, 0.12)',
      }}
    >
      {icon}
    </div>
    <p className="font-bold text-center text-white uppercase text-xxxs">
      {labels.map((label, key) => (
        <span key={key}>
          {label}
          <br />
        </span>
      ))}
    </p>
  </div>
);

const StepBox = ({
  icon,
  title,
  description,
  variant,
  cogPosition,
  tooltipContent,
  tooltipPosition = 'right',
  withSigmap,
  withCog,
  withArrow,
  arrowDirection = 'right',
  descriptionWidth,
}) => (
  <div
    className={classNames(
      'flex flex-col items-center justify-center w-full rounded-sm h-48 relative',
      {
        'bg-gray-150 justify-center': variant === 'secondary',
        'bg-blue-100 py-7': variant === 'primary',
      }
    )}
  >
    {withArrow && (
      <div
        className={classNames(
          'absolute top-0 items-center h-full text-blue-600 -mr-9 right-0 hidden lg:flex',
          {
            'transform rotate-180': arrowDirection === 'left',
          }
        )}
      >
        <StepArrowRight />
      </div>
    )}
    {variant === 'primary' && (
      <>
        {withCog && (
          <CogCircleIcon
            className={classNames('absolute text-green-900 mt-2 top-0', {
              'left-0 ml-2': cogPosition === 'left',
              'right-0 mr-2': cogPosition === 'right',
            })}
          />
        )}
        <div
          className={classNames(
            'absolute top-0 mt-2 flex items-center bg-green-900 rounded-full px-2 py-1 text-xxxs font-bold text-gray-800',
            {
              'right-0 -mr-3': tooltipPosition === 'right',
              'left-0 -ml-3': tooltipPosition === 'left',
            }
          )}
        >
          <SmallClockIcon className="mr-1" />
          {tooltipContent}
          <svg
            width="7"
            height="7"
            viewBox="0 0 7 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              marginBottom: '-0.3rem',
              transform: `scaleX(${tooltipPosition === 'left' ? -1 : 1})`,
            }}
            className={classNames('absolute bottom-0 text-green-900', {
              'ml-1': tooltipPosition === 'right',
              'mr-3 transform right-0': tooltipPosition === 'left',
            })}
          >
            <path
              d="M0.5 5.71266V1C0.5 0.447715 0.947715 0 1.5 0H5.38102C6.22614 0 6.69019 0.983335 6.15295 1.63571L2.27193 6.34837C1.67552 7.07259 0.5 6.65085 0.5 5.71266Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </>
    )}
    <div
      style={{
        boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.03)',
      }}
      className="flex items-center justify-center w-12 h-12 mb-5 text-blue-700 bg-white rounded-full"
    >
      {icon}
    </div>
    {title && (
      <p className="mb-1 font-bold text-blue-700 uppercase text-xxxs">
        {title}
      </p>
    )}
    {description && (
      <p
        className={classNames(
          'font-bold text-center text-gray-700 text-xxxs',
          descriptionWidth
        )}
        dangerouslySetInnerHTML={{ __html: description }}
      ></p>
    )}
    {withSigmap && (
      <SigmapIcon className="absolute bottom-0 right-0 mb-2 mr-2" />
    )}
  </div>
);

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query HomeQuery {
      headerBackground: file(absolutePath: { regex: "/lines-gradient.webp/" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1440) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      phoneApp: file(absolutePath: { regex: "/phone-app.webp/" }) {
        childImageSharp {
          fixed(quality: 100, width: 600) {
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

  return (
    <Layout>
      <SEO
        title="Unique Cross-Border Payment Product"
        description="Payall powers a unique Cross-Border payment product through an easy and safe alternative to correspondent banking that delights regulators, business payers and recipients."
        image={data.metaImage.childImageSharp.fixed.src}
      />
      <BackgroundImage
        Tag="header"
        fluid={data.headerBackground.childImageSharp.fluid}
        backgroundColor={`#000000`}
        className="relative min-h-screen overflow-hidden bg-center bg-no-repeat bg-cover xxl:min-h-full"
      >
        <div
          style={{
            background:
              'linear-gradient(70.71deg, #191A20 15.35%, rgba(45, 48, 59, 0.77) 130.35%)',
          }}
          className="absolute inset-0 z-0 w-full h-full"
        />
        <Nav theme="dark" />
        <div
          style={{
            background:
              'linear-gradient(0deg, #191B20 56.3%, rgba(25, 27, 32, 0) 95.77%)',
          }}
          className="absolute inset-0 z-0 w-full h-full mt-32"
        />
        <div className="container relative z-10 flex flex-col justify-between min-h-screen px-6 mx-auto xxl:min-h-full lg:px-16">
          <div className="mb-10 xxl:mb-26">
            <h1 className="mb-10 text-sm font-bold tracking-widest text-gray-200 uppercase">
              A better than FinTech product from Banks
            </h1>
            <h2 className="w-10/12 mb-6 text-xl font-bold text-white lg:text-35px lg:mb-14">
              We power a unique cross-border payment product through an easy and
              safe alternative to correspondent banking that delights
              regulators, business payers and recipients.
            </h2>
            <LabelsSlider
              labels={[
                '“Better than FinTech” for B2B and B2C cross-border payments',
                'Powering financial institutions & other regulated entities',
                'Augmented compliance',
                'Communal sharing & transparency',
                'External to core turnkey platform',
              ]}
            />
          </div>
          <div className="relative mx-auto mb-16 text-center xxl:mb-32">
            <h2 className="inline-block pb-1 text-lg font-bold tracking-widest text-blue-500 uppercase border-b-2 border-blue-500 lg:text-2xl mb-7">
              Compete and Win
            </h2>
            <Dots className="absolute top-0 z-0 mt-4 -ml-10" />
            <p className="max-w-lg text-sm font-bold leading-6 text-white lg:max-w-2xl lg:text-lg">
              Enabling businesses to pay anyone, anywhere through a simple API
              from their local bank. Using our PCI-compliant, proprietary
              software external to your bank’s core, you can simplify how
              businesses make international payments and give those they pay
              never-before-offered, valuable options to manage and access their
              money.
            </p>
          </div>
        </div>
      </BackgroundImage>
      <section className="container px-6 py-20 mx-auto bg-white lg:px-16">
        <h2 className="mb-5 text-3xl font-bold text-gray-800 md:mb-1">
          Solving big problems for all parties
        </h2>
        <h5 className="text-lg font-bold text-gray-600 mb-18">
          Our tech & business paradigm is very different
        </h5>
        <div className="relative flex flex-col mb-16 lg:flex-row">
          <div className="mt-8 mb-10 lg:absolute lg:inset-x-0 lg:mb-0">
            <h5 className="text-lg font-bold text-blue-600 uppercase lg:text-center">
              Bank-focused
            </h5>
            <h6 className="text-sm font-bold tracking-widest text-gray-400 uppercase lg:text-center">
              Compliance & Safety First
            </h6>
          </div>
          <Feature
            paddingLeft={false}
            icon={<BusinessIcon />}
            title="Business Payer"
            list={[
              {
                label: 'Up to 90% reduction in total fees & costs',
                checked: true,
              },
              {
                label:
                  'BPO automation is possible. ACH, RTP, FedWire, SWIFT, SEPA, MC send, CHAPS, etc.',
                checked: true,
              },
              {
                label: '1 API = Pay Anyone, Anywhere',
              },
              {
                label:
                  'We eliminate the risky, costly collection & handling of bank & personal details for recipients',
                checked: true,
              },
            ]}
          />
          <Feature
            primary
            icon={<SendingBankIcon />}
            title="Sending Bank"
            list={[
              {
                label: 'Innovative, new and better than FinTech product',
                checked: true,
              },
              {
                label: 'External to core',
              },
              {
                label: '1 API = Pay Anyone, Anywhere or modern/easy web',
              },
              {
                label: 'Impossible to deliver our Last-Mile options',
              },
              {
                label: 'Corresponded bank problem is solved',
              },
              {
                label: 'Nostro-Vostro costs & hassles are eliminated',
              },
            ]}
          />
          <Feature
            primary
            icon={<ReceivingBankIcon />}
            title="Receiving Bank"
            list={[
              {
                label:
                  'Risky-opaque source of funds and KYB risks are eliminated',
                checked: true,
              },
              {
                label: 'Drive customer acquisition, deposits and fee income',
                checked: true,
              },
              {
                label: 'Innovative, new & better than FinTech product',
                checked: true,
              },
              {
                label: 'External to core',
              },
              {
                label:
                  'Leverages bank assets (card issuance, domestic transfers)',
              },
            ]}
          />

          <Feature
            icon={<RecipientIcon />}
            title="Recipient"
            list={[
              {
                label: 'Payments are instant',
                checked: true,
              },
              {
                label:
                  'Differentiated, valuable options - not just “bank transfers”',
                checked: true,
              },
              {
                label: 'Many are free and others are up to 90% less',
                checked: true,
              },
            ]}
          />
        </div>
        <div className="flex justify-center">
          <Button size="large" to="/platform">
            <span className="mr-4">See how it works</span>
            <ArrowRightIcon className="-mt-1" />
          </Button>
        </div>
      </section>
      <section className="bg-gray-100">
        <div className="container flex flex-col px-6 py-20 mx-auto lg:items-center lg:px-16">
          <h2 className="mb-5 text-3xl font-bold text-gray-800 md:mb-1">
            Payall cross-border payments
          </h2>
          <p className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-15">
            From days to seconds
          </p>
          <div className="grid grid-cols-1 row-gap-5 lg:grid-cols-6 gap-11">
            <StepBox
              variant="secondary"
              title="Business"
              icon={<BusinessSmallIcon />}
              withArrow
            />
            <div className="flex items-center justify-center text-blue-600 lg:hidden">
              <StepArrowDown />
            </div>
            <div className="relative">
              <div className="flex justify-center w-full mb-5 lg:mb-0 lg:-mt-10 lg:absolute">
                <LogoBlue />
              </div>
              <StepBox
                variant="primary"
                title="Sending Bank"
                icon={<LetterIcon />}
                cogPosition="left"
                description="Enter recipient email, mobile & amount"
                tooltipContent="1-2 min"
                withCog
                withArrow
                descriptionWidth="w-1/2"
              />
            </div>
            <div className="lg:col-span-2">
              <StepBox
                variant="primary"
                icon={<AppWindowIcon />}
                cogPosition="left"
                description="Receiver account created on ledger <br/> Receiving bank matching"
                tooltipContent="5-10 sec"
                withSigmap
                withCog
                withArrow
                descriptionWidth="w-1/2"
              />
            </div>
            <StepBox
              variant="primary"
              icon={<PhoneLetterIcon />}
              cogPosition="left"
              description="Email and SMS sent to recipient"
              tooltipContent="10-30 sec"
              withCog
              withArrow
              descriptionWidth="w-1/2"
            />
            <div className="flex items-center justify-center text-blue-600 lg:hidden">
              <StepArrowDown />
            </div>
            <StepBox
              variant="secondary"
              title="Recipients"
              icon={<PeopleSmallIcon />}
            />
            <div className="items-center justify-center hidden text-blue-600 lg:col-start-6 lg:flex">
              <StepArrowDown />
            </div>
            <div className="lg:col-span-2">
              <StepBox
                variant="secondary"
                title="Receiving Bank"
                description="No action - not a part of the process - except to sponsor our tech and provide an omni-bus Account Holding Fiat"
                icon={<BankSmallIcon />}
                withCog
                cogPosition="right"
                withArrow
                arrowDirection="left"
                descriptionWidth="w-4/5"
              />
            </div>
            <div className="flex items-center justify-center text-blue-600 lg:hidden">
              <StepArrowDown />
            </div>
            <div className="relative lg:col-span-2">
              <div className="flex justify-center w-full mb-5 lg:mb-0 lg:-mt-10 lg:absolute">
                <LogoBlue />
              </div>
              <StepBox
                variant="primary"
                icon={<FingerprintSmallIcon />}
                cogPosition="right"
                description="Progressive KYC processed, receiving bank matching account created, ledger funded - email/SMS sent to recipient"
                tooltipContent="30-60 sec"
                withCog
                withArrow
                tooltipPosition="left"
                arrowDirection="left"
                withSigmap
                descriptionWidth="w-3/5"
              />
            </div>
            <StepBox
              variant="primary"
              icon={<ChecklistSmallIcon />}
              cogPosition="right"
              description="Chooses what to do with their money"
              tooltipContent="can be instant"
              withCog
              withArrow
              tooltipPosition="left"
              arrowDirection="left"
              descriptionWidth="w-1/2"
            />
            <StepBox
              variant="primary"
              icon={<PaperPenSmallIcon />}
              cogPosition="right"
              description="Response to email & SMS to enter personal details"
              tooltipContent="30-120 min"
              withCog
              tooltipPosition="left"
              arrowDirection="left"
              descriptionWidth="w-3/5"
            />
            <div className="py-6 bg-green-900 lg:col-span-2 px-7 mt-7">
              <p className="text-lg font-bold text-blue-900 uppercase">
                20 sec – 180 min
              </p>
              <p className="text-sm font-bold tracking-widest text-white uppercase">
                Funds received and accessed
              </p>
            </div>
            <div className="flex flex-col items-end justify-center pt-5 text-right text-blue-600 lg:col-start-6">
              <CogCircleIcon className="mb-2 text-green-900" />
              <p className="font-bold text-gray-900 text-xxxs">
                Payall’s automated software
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-blue-200">
        <div className="container px-6 pt-20 mx-auto lg:px-16">
          <h3 className="mb-12 text-3xl font-bold text-gray-800">
            Payall = Fedwire <span className="text-green-900">+</span> SWIFT{' '}
            <span className="text-green-900">+ + +</span>
          </h3>
          <div
            className="relative z-10 p-10 -mb-32 bg-gray-100"
            style={{
              boxShadow: '0px 14px 40px rgba(44, 45, 51, 0.2)',
            }}
          >
            <div className="flex flex-col mb-10 -mx-1 lg:mb-8 lg:flex-row">
              <div className="relative flex flex-col px-1 mb-10 lg:w-3/12 lg:mb-0">
                <IconBox
                  icon={<GlobalIcon />}
                  variant="primary"
                  labels={['Global,', 'single shared', 'platform']}
                />
                <div className="flex flex-col items-center justify-center h-32 px-8 font-bold text-center text-gray-700 bg-blue-100 rounded-sm text-xxxs">
                  <p className="mb-4">
                    Similar to Fedwire &<br />
                    TARGET2 architecture
                  </p>
                  <p>
                    Banks globally have “Reserve” accounts in multiple
                    currencies
                  </p>
                </div>
              </div>
              <div className="relative px-1 mb-10 lg:w-2/12 lg:mb-0">
                <IconBox
                  icon={<FingerprintIcon />}
                  variant="secondary"
                  labels={['Specialized', 'compliance,', 'Enhanced KYB & KYC']}
                />
              </div>
              <div className="relative px-1 mb-10 lg:w-2/12 lg:mb-0">
                <IconBox
                  icon={<PeopleIcon />}
                  variant="secondary"
                  labels={[
                    'External Core-like',
                    'account ledgers for all',
                    'participants',
                  ]}
                />
              </div>
              <div className="relative px-1 mb-10 lg:w-2/12 lg:mb-0">
                <IconBox
                  icon={<HandGiveIcon />}
                  variant="secondary"
                  labels={[
                    'Specialized software',
                    'for payment routing,',
                    'fx, liquidity & more',
                  ]}
                />
              </div>
              <div className="relative px-1 lg:w-3/12">
                <IconBox
                  icon={<BankPlaceIcon />}
                  variant="primary"
                  labels={[
                    'Local, last-mile',
                    'payment options, globally',
                    'integrated',
                  ]}
                  withPlus={false}
                />
                <div className="flex flex-col items-center justify-center h-32 px-8 font-bold text-center text-gray-700 bg-blue-100 rounded-sm text-xxxs">
                  <p>
                    ACH, SEPA, prepaid processors,
                    <br />
                    CHAPS, cash disbursers,
                    <br />
                    alternative systems
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col -mx-3 lg:flex-row">
              <div className="px-3 mb-10 lg:w-1/2 lg:mb-0">
                <div className="flex items-center justify-center px-5 text-center bg-green-900 lg:px-11 py-7">
                  <p className="font-bold tracking-wider text-blue-900 uppercase text-13px">
                    Payments INSTANTLY reconcile and reflect on our platform,
                    thus <span className="text-white">INSTANT PAYMENTS</span>
                  </p>
                </div>
              </div>
              <div className="px-3 lg:w-1/2">
                <div className="flex items-center justify-center px-5 text-center bg-green-900 lg:px-11 py-7">
                  <p className="font-bold tracking-wider text-blue-900 uppercase text-13px">
                    <span className="text-white">LAST-MILE decisions</span> are
                    at the discretion (choice) of recipients and most are
                    real-time
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-56 bg-white">
        <div className="container relative px-6 pb-10 mx-auto lg:pb-48 lg:px-16">
          <h2 className="mb-5 text-3xl font-bold text-gray-800 lg:mb-4 lg:leading-10">
            Unmatched choices for recipients
            <br className="hidden lg:block" />
            to get their payments from our
            Universal Payment Account
          </h2>
          <p className="mb-10 text-xs font-bold tracking-widest text-gray-400 uppercase lg:mb-40 lg:text-sm">
            Last-Mile options
          </p>
          <div className="absolute bottom-0 right-0 hidden mr-8 -mb-2 lg:block">
            <Image
              fixed={data.phoneApp.childImageSharp.fixed}
              alt="Payall mobile dashboard"
            />
          </div>
          <div className="flex flex-wrap font-bold text-blue-700 uppercase text-13px lg:w-1/2">
            <div className="flex items-center w-full lg:w-1/2 mb-7">
              <SaveHedgeIcon className="mr-4" />
              Save/Hedge
            </div>
            <div className="flex items-center w-full lg:w-1/2 mb-7">
              <SaveWalletIcon className="mr-4" />
              Save to ewallet or phone
            </div>
            <div className="flex items-center w-full lg:w-1/2 mb-7">
              <ShareCircleIcon className="mr-4" />
              Share with others
            </div>
            <div className="flex items-center w-full lg:w-1/2 mb-7">
              <CashCircleIcon className="mr-4" />
              Get cash
            </div>
            <div className="flex items-center w-full lg:w-1/2 mb-7">
              <TransactionCircleIcon className="mr-4" />
              Transact & Pay
            </div>
            <div className="flex items-center w-full lg:w-1/2 mb-7">
              <HandGiveCircleIcon className="mr-4" />
              Earn
            </div>
            <div className="flex items-center w-full lg:w-1/2 mb-7">
              <BankCircleIcon className="mr-4" />
              Transfer to bank
            </div>
          </div>
        </div>
      </section>
      <section className="px-6 py-20 bg-gray-100">
        <div className="relative max-w-lg p-6 mx-auto text-center border-blue-600 lg:max-w-4xl lg:py-16 lg:px-32 border-3">
          <p className="text-sm font-semibold text-gray-800 lg:leading-7 lg:text-xl">
            We’ve reimagined correspondent banking with our global network of
            regulated entities and bank partners who are committed to delivering
            instant cross-border payments that give recipients unprecedented
            options to receive and manage their money and ensuring 100% payment
            transparency and communal sharing of KYB through our platform.
          </p>
          <div
            style={{ marginBottom: '-0.9rem' }}
            className="absolute bottom-0 left-0 w-full text-center"
          >
            <Link
              to="/founders-message"
              className="inline-block px-4 text-xs font-bold text-blue-700 uppercase transition-colors duration-200 bg-gray-100 lg:text-sm lg:px-20 hover:text-blue-900"
            >
              Read our Founder’s Message
            </Link>
          </div>
        </div>
      </section>
      <CtaBlueSection
        link={{
          to: '/contact',
          label: 'Request More Info',
        }}
      >
        <div className="max-w-md">
          <h2 className="mb-5 text-3xl font-bold text-white lg:text-35px">
            Contact Us
          </h2>
          <p className="mb-12 text-sm font-semibold leading-snug text-center text-white lg:text-base">
            Let’s talk!  We’re eager to help you delight your business clients
            with modern, instant and unique B2B and B2C global payments
          </p>
        </div>
      </CtaBlueSection>
      <Footer />
    </Layout>
  );
};

export default IndexPage;
