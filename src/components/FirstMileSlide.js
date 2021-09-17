import React from 'react';
import Buissines from '../assets/svg/firstmile/bussines.svg';
import ApiIcon from '../assets/svg/firstmile/api-icon.svg';
import Arrow from '../assets/svg/firstmile/arrow.svg';
import Bank from '../assets/svg/firstmile/bank.svg';
import Enchanted from '../assets/svg/firstmile/enchanted.svg';
import Funding from '../assets/svg/firstmile/funding.svg';
import Checked from '../assets/svg/firstmile/checked.svg';
import InstantPayments from '../assets/svg/firstmile/instant-payments.svg';
import Legitimacy from '../assets/svg/firstmile/legitimacy.svg';
import Local from '../assets/svg/firstmile/local.svg';
import PayerAccount from '../assets/svg/firstmile/payer-account.svg';
import SigmappArrow from '../assets/svg/firstmile/sigmap-arrow.svg';
import Source from '../assets/svg/firstmile/source.svg';
import Virtual from '../assets/svg/firstmile/virtual.svg';
import WebIcon from '../assets/svg/firstmile/web-icon.svg';

const Sigmapp = ({ onNext }) => (
  <div
    onClick={onNext}
    className="flex-col items-center self-center self-stretch justify-center hidden w-32 text-center cursor-pointer lg:mb-11 lg:mt-12 lg:mr-8 lg:flex firstMile firstMile--blue md:mx-12 lg:block xxl:mx-4"
  >
    <div className="text-center">
      <SigmappArrow />
    </div>
    <div className="mt-10 mb-4 font-bold tracking-wide text-blue-700 uppercase text-13px">
      Sigmapp
    </div>
    <div className="font-bold text-white text-gray-800 uppercase text-xxxs">
      PAYMENT <br />
      PLATFORM
    </div>
  </div>
);

const SigmappMobile = ({ onNext }) => (
  <div
    className="flex items-center self-center self-stretch justify-center block m-5 md:mt-24 lg:hidden"
    onClick={onNext}
  >
    <div className="flex-1 w-full">
      <hr className="w-full bg-blue-200" style={{ height: 1 }}></hr>
    </div>
    <div className="flex flex-col items-center mx-10 text-center">
      <div className="text-center">
        <SigmappArrow />
      </div>
      <div className="mt-10 mb-4 font-bold tracking-wider text-blue-700 uppercase text-13px">
        Sigmapp
      </div>
      <div className="font-bold text-white text-gray-800 uppercase text-xxxs">
        PAYMENT <br />
        PLATFORM
      </div>
    </div>
    <div className="flex-1 w-full">
      <hr className="w-full bg-blue-200 " style={{ height: 1 }}></hr>
    </div>
  </div>
);

const BuissnesPayer = () => (
  <div className="flex flex-col md:flex-row lg:ml-8 md:ml-0">
    <div className="text-center md:mb-4">
      <Buissines className="mb-5 lg:mt-5" />
      <h2 className="font-bold leading-4 tracking-wide text-gray-800 uppercase text-xxs">
        BUSINESS <br /> PAYER
      </h2>
    </div>
    <div className="h-6 m-auto mt-2 lg:ml-1 md:mt-20 lg:mt-20">
      <Arrow className="transform rotate-90 md:rotate-0" />
    </div>
  </div>
);

const AutomatedSelfEnrolment = () => (
  <div
    className="w-full px-5 py-8 mx-7 md:mx-1 bg-gray-150"
    style={{ boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)' }}
  >
    <div className="mb-2 text-xs font-bold leading-5 tracking-wider text-center text-blue-900 uppercase">
      AUTOMATED
      <br />
      SELF-ENROLLMENT
    </div>
    <div className="px-3 py-1 mb-10 text-center text-white uppercase bg-blue-400 rounded-sm text-xxxs">
      White Label for BankS
    </div>
    <div className="flex items-center mb-4 font-bold bg-blue-200 rounded-full ">
      <Enchanted className="m-2" />
      <div className="flex items-start justify-between">
        <Checked className="mt-1 mr-2 " />
        <div className="mr-5 text-gray-800 uppercase whitespace-no-wrap text-9px">
          Enhanced KYB/KYC
          <br />
          Verification
        </div>
      </div>
    </div>
    <div className="flex items-center mb-4 font-bold bg-blue-200 rounded-full">
      <Legitimacy className="m-2" />
      <div className="flex items-start justify-between">
        <Checked className="mt-1 mr-2 " />
        <div className="mr-5 text-gray-800 uppercase whitespace-no-wrap text-9px">
          Legitimacy <br />
          of Payments
        </div>
      </div>
    </div>
    <div className="flex items-center mb-4 font-bold bg-blue-200 rounded-full">
      <Source className="m-2" />
      <div className="flex items-start justify-between">
        <Checked className="mt-1 mr-2 " />
        <div className="mr-5 text-gray-800 uppercase whitespace-no-wrap text-9px">
          Source <br />
          of Funds
        </div>
      </div>
    </div>
    <div className="flex items-center font-bold bg-blue-200 rounded-full">
      <Local className="m-2" />
      <div className="flex items-start justify-between">
        <Checked className="mt-1 mr-2 " />
        <span className="mr-5 text-gray-800 uppercase whitespace-no-wrap text-9px">
          LOCAL FI <br />
          AUTHENTICATION
        </span>
      </div>
    </div>
  </div>
);

const AccountFunding = () => (
  <div className="flex flex-col w-full mx-auto max-w-xxs lg:flex-row">
    <div className="flex flex-col w-full mx-auto md:flex-row">
      <div className="h-6 m-auto mt-2 md:-ml-4 md:mr-1 md:mt-14 lg:mx-2 lg:mt-14">
        <Arrow className="transform rotate-90 md:rotate-0" />
      </div>
      <div className="flex items-center justify-center py-4 bg-blue-600 rounded-md lg:justify-between md:flex-col px-7 md:px-3">
        <Funding className="mt-1 mb-0 mr-5 md:mr-0 md:mb-5" />
        <p className="font-bold tracking-wider text-white uppercase text-xxxs">
          account <br />
          funding
        </p>
      </div>
    </div>
    <div className="h-6 m-auto mt-2 md:ml-10 lg:mx-2 lg:mt-14">
      <Arrow className="transform rotate-90 lg:rotate-0" />
    </div>
  </div>
);

const BuissinessPayerAccount = () => (
  <div className="flex flex-col md:flex-row">
    <div className="text-center md:mb-4">
      <PayerAccount className="mx-auto mb-5 lg:mt-5" />
      <h2 className="font-bold leading-4 tracking-wide text-gray-800 uppercase whitespace-no-wrap text-xxs">
        BUSINESS PAYER <br /> Account
      </h2>
    </div>
    <div className="h-6 m-auto mt-2 lg:mx-2 md:mt-20 lg:mt-20">
      <Arrow className="transform rotate-90 md:rotate-0" />
    </div>
  </div>
);

const FirstMileTitle = () => (
  <div className="top-0 flex items-center justify-center my-8 text-center md:mb-12 md:absolute lg:mt-15 md:left-0 md:ml-32 lg:left-auto lg:ml-auto">
    <div className="font-bold leading-10 text-blue-700 uppercase border-b-2 border-blue-700 text-1xl">
      FIRST MILE
    </div>
  </div>
);
const ApiOrDev = () => (
  <div className="flex items-center justify-between px-4 py-2 bg-blue-100 rounded">
    <ApiIcon />
    <div className="font-bold leading-4 tracking-wide text-blue-800 uppercase text-xxs">
      API
    </div>
    <div className="italic font-bold leading-4 tracking-wider text-gray-400 text-9px">
      or
    </div>
    <div className="font-bold leading-4 tracking-wide text-blue-800 uppercase text-xxs">
      web
    </div>
    <WebIcon />
  </div>
);

const PaymentOptions = () => (
  <div
    className="p-4 bg-gray-150"
    style={{ boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)', borderRadius: 9 }}
  >
    <div className="mt-6 mb-12 text-xs font-bold leading-5 tracking-wider text-center text-blue-900 uppercase">
      Payment
      <br />
      Options
    </div>
    <div>
      <div className="flex mb-12 ml-3">
        <Bank className="mr-5" />

        <div className="font-bold leading-4 text-gray-800 uppercase whitespace-no-wrap text-xxs">
          INSTANT <br />
          BANK <br />
          TRANSFERS
        </div>
      </div>
      <div className="flex mb-12 ml-3">
        <Virtual className="mr-5" />
        <div className="font-bold leading-4 text-gray-800 uppercase whitespace-no-wrap text-xxs">
          Virtual <br />
          or Physical
          <br />
          Prepaid
        </div>
      </div>
      <div className="flex mb-12 ml-3">
        <InstantPayments className="mr-5" />
        <div className="font-bold leading-4 text-gray-800 uppercase whitespace-no-wrap text-xxs">
          INstant Payment <br />
          to Recipient <br />
          Account
        </div>
      </div>
    </div>
    <ApiOrDev />
  </div>
);

export const FirstMileSlide = ({ onNext }) => {
  return (
    <div className="relative w-full m-auto max-w-slide max-h-slide">
      <div
        className="flex flex-col items-center justify-center bg-gray-100 lg:flex-row"
        style={{
          minHeight: 706,
        }}
      >
        <FirstMileTitle />
        <div className="flex flex-col items-center justify-center flex-1 md:flex-row md:mt-40 lg:mt-20 lg:mb-5">
          <BuissnesPayer />
          <AutomatedSelfEnrolment />
          <div className="flex flex-col items-center justify-center md:ml-4 lg:mx-2 lg:mx-auto lg:flex-row">
            <AccountFunding />
            <BuissinessPayerAccount />
          </div>
          <PaymentOptions />
        </div>
        <Sigmapp onNext={onNext} />
        <SigmappMobile onNext={onNext} />
      </div>
    </div>
  );
};
