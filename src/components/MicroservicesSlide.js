import React, { Fragment } from 'react';
import BankPlatform from '../assets/svg/microservices/bank-platform.svg';
import Sigmap from '../assets/svg/microservices/sigmap.svg';
import Account from '../assets/svg/microservices/account.svg';
import Fingerprint from '../assets/svg/microservices/fingerprint.svg';
import Application from '../assets/svg/microservices/application.svg';
import Communal from '../assets/svg/microservices/communal.svg';
import Communication from '../assets/svg/microservices/communication.svg';
import Entity from '../assets/svg/microservices/entity.svg';
import Fee from '../assets/svg/microservices/fee.svg';
import FxTrade from '../assets/svg/microservices/fx-trade.svg';
import Liquidity from '../assets/svg/microservices/liquidity.svg';
import NetSettlement from '../assets/svg/microservices/net-settlement.svg';
import Partner from '../assets/svg/microservices/partner.svg';
import System from '../assets/svg/microservices/system.svg';
import Universal from '../assets/svg/microservices/universal.svg';
import FirstMileArrow from '../assets/svg/first-mile.svg';
import LastMileArrow from '../assets/svg/last-mile.svg';

const AccountType = ({ label }) => (
  <div
    className="w-full mx-2 mb-8 text-center lg:mb-4"
    style={{ width: '14.375rem' }}
  >
    <BankPlatform className="m-auto mb-6 sm:mb-0 sm:block lg:mb-4" />
    <div className="flex items-center justify-center w-full px-4 py-4 mt-4 bg-blue-800 rounded-full lg:px-10">
      <Account />
      <span
        className="ml-3 font-bold text-left text-white uppercase whitespace-no-wrap text-xxxs"
        dangerouslySetInnerHTML={{ __html: label }}
      />
    </div>
  </div>
);

const Accounts = () => (
  <div className="flex flex-col items-center justify-between w-full px-10 mb-3 mt-18 md:mt-15 lg:mt-0 md:flex-row md:px-0">
    <AccountType label={'Business Payer <br/>Account'} />
    <AccountType label={'Currency <br/>account trader'} />
    <AccountType label={'Recipient <br/>account'} />
  </div>
);

const LeftTopCorner = () => (
  <Fragment>
    <div
      className="absolute top-0 left-0 z-10 w-2 h-3 bg-white"
      style={{ top: -1, left: -1 }}
    />
    <div
      className="absolute top-0 left-0 z-10 w-2 h-3 bg-blue-600"
      style={{ top: 1, left: 1 }}
    />
  </Fragment>
);

const RightTopCorner = () => (
  <Fragment>
    <div
      className="absolute top-0 right-0 z-10 w-2 h-3 bg-white"
      style={{ top: -1, right: -1 }}
    />
    <div
      className="absolute top-0 right-0 z-10 w-2 h-3 bg-blue-600"
      style={{ top: 1, right: 1 }}
    />
  </Fragment>
);

const RightBottomCorner = () => (
  <Fragment>
    <div
      className="absolute bottom-0 right-0 z-10 w-2 h-3 bg-white"
      style={{ bottom: -1, right: -1 }}
    />
    <div
      className="absolute bottom-0 right-0 z-10 w-2 h-3 bg-blue-600"
      style={{ bottom: 1, right: 1 }}
    />
  </Fragment>
);

const LeftBottomCorner = () => (
  <Fragment>
    <div
      className="absolute left-0 right-0 z-10 w-2 h-3 bg-white"
      style={{ bottom: -1, left: -1 }}
    />
    <div
      className="absolute left-0 right-0 z-10 w-2 h-3 bg-blue-600"
      style={{ bottom: 1, left: 1 }}
    />
  </Fragment>
);

const AllFourCorners = () => (
  <Fragment>
    <LeftBottomCorner />
    <RightBottomCorner />
    <RightTopCorner />
    <LeftTopCorner />
  </Fragment>
);

const cellList = [
  {
    icon: <Fingerprint />,
    label: 'GLOBAL COMPLIANCE<br/>CONFIGURATOR',
  },
  {
    icon: <System />,
    label: 'System of Record<br/>for All Accounts',
  },
  {
    icon: <Fee />,
    label: 'Fee<br/>Management',
  },
  {
    icon: <Entity />,
    label: 'Entity profile<br/>configurator',
  },
  {
    icon: <Universal />,
    label: 'Universal<br/>Connector',
  },
  {
    icon: <NetSettlement />,
    label: 'net settlement<br/>engine',
  },
  {
    icon: <Communication />,
    label: 'Communications<br/>engine',
  },
  {
    icon: <Communal />,
    label: 'COMMUNAL SHARING OF<br/>KYB & PAYMENT DETAILS',
  },
  {
    icon: <FxTrade />,
    label: 'FX TRADE &<br/> MANAGER',
  },
  {
    icon: <Partner />,
    label: 'payment partner/<br/>fi matching',
  },
  {
    icon: <Application />,
    label: 'Application-<br/>Enrollment Processor ',
  },
  {
    icon: <Liquidity />,
    label: 'LIQUIDITY<br/>ENABLER',
  },
];

const GridCell = ({ icon, label }) => (
  <div className="relative z-20 px-4 pb-5 bg-blue-600 pt-7">
    <AllFourCorners />
    {icon}
    <div
      className="mt-4 font-bold text-left text-white uppercase whitespace-no-wrap text-9px lg:text-xxxs"
      dangerouslySetInnerHTML={{ __html: label }}
    />
  </div>
);

const MicroservicesGrid = () => (
  <div className="px-2 text-center">
    <h5 className="text-lg font-semibold leading-6 text-white uppercase mb-18 md:mb-6 ">
      MICROSERVICES
    </h5>
    <div className="grid grid-cols-1 grid-cols-2 gap-2 md:grid-cols-4 md:grid-rows-3">
      {cellList.map((cell, key) => (
        <GridCell key={key} icon={cell.icon} label={cell.label} />
      ))}
    </div>
  </div>
);

const FirstMile = ({ onPrev }) => (
  <div
    className="flex-col items-center self-center self-stretch justify-center hidden w-32 text-center cursor-pointer lg:mb-11 lg:mt-12 lg:ml-8 lg:flex firstMile firstMile--blue md:mx-12 lg:block"
    onClick={onPrev}
  >
    <div className="text-center">
      <FirstMileArrow />
    </div>
    <div className="mt-10 mb-4 font-bold tracking-wider text-green-500 uppercase text-13px">
      First Mile
    </div>
    <div className="font-bold text-white uppercase text-xxxs">
      disburser <br /> options
    </div>
  </div>
);

const MobileControl = ({ onPrev, onNext }) => (
  <div className="flex justify-between m-3 mt-12 md:mt-5 lg:hidden">
    <FirstMileMobile onPrev={onPrev} />
    <LastMileMobile onNext={onNext} />
  </div>
);

const FirstMileMobile = ({ onPrev }) => (
  <div
    className="flex flex-col items-center justify-center flex-1 py-4 text-center border-r border-gray-200"
    onClick={onPrev}
  >
    <div className="text-center">
      <FirstMileArrow />
    </div>
    <div className="mt-10 mb-4 font-bold tracking-wider text-green-500 uppercase text-13px">
      First Mile
    </div>
    <div className="font-bold text-white uppercase text-xxxs">
      disburser <br /> options
    </div>
  </div>
);

const LastMile = ({ onNext }) => (
  <div
    onClick={onNext}
    className="flex-col items-center self-center self-stretch justify-center hidden w-32 text-center cursor-pointer lg:mb-11 lg:mt-12 lg:mr-8 lg:flex firstMile firstMile--blue md:mx-12 lg:block"
  >
    <div className="text-center">
      <LastMileArrow />
    </div>
    <div className="mt-10 mb-4 font-bold tracking-wider text-green-500 uppercase text-13px">
      Last Mile
    </div>
    <div className="font-bold text-white uppercase text-xxxs">
      recipient <br /> options
    </div>
  </div>
);

const LastMileMobile = ({ onNext }) => (
  <div
    tabIndex="1"
    role="button"
    aria-pressed="false"
    onClick={onNext}
    className="flex flex-col items-center justify-center flex-1 py-4 text-center"
  >
    <div className="text-center">
      <LastMileArrow />
    </div>
    <div className="mt-10 mb-4 font-bold tracking-wider text-green-500 uppercase text-13px">
      Last Mile
    </div>
    <div className="font-bold text-white uppercase text-xxxs">
      recipient <br /> options
    </div>
  </div>
);

const MicroservicesContent = ({ onPrev, onNext }) => (
  <div className="relative flex flex-col">
    <SigmapLogo />
    <Accounts />
    <MicroservicesGrid />
    <MobileControl onPrev={onPrev} onNext={onNext} />
  </div>
);

const SigmapLogo = () => (
  <div
    className="absolute top-0 py-2 m-auto -mt-3 bg-blue-700 border-blue-700 rounded-sm lg:-mt-16 px-15"
    style={{
      boxShadow: '0px 14px 40px rgba(44, 45, 51, 0.2)',
      left: '50%',
      transform: 'translate(-50%,0)',
    }}
  >
    <Sigmap />
  </div>
);

export const MicroservicesSlide = ({ onPrev, onNext }) => {
  return (
    <div className="relative w-full m-auto max-w-slide max-h-slide">
      <div
        className="flex items-center justify-center bg-blue-700"
        style={{
          minHeight: 706,
        }}
      >
        <FirstMile onPrev={onPrev} />
        <MicroservicesContent onPrev={onPrev} onNext={onNext} />
        <LastMile onNext={onNext} />
      </div>
    </div>
  );
};
