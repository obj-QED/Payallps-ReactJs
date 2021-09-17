import React from 'react';
import IconWeb from '../assets/svg/lastmile/iconWeb.svg';
import IconApp from '../assets/svg/lastmile/iconApp.svg';
import ArrowGreen from '../assets/svg/lastmile/arrowGreen.svg';
import SigmappArrow from '../assets/svg/firstmile/sigmap-arrow.svg';
import PayerAccount from '../assets/svg/firstmile/payer-account.svg';
import IconSave from '../assets/svg/lastmile/iconSave.svg';
import IconShare from '../assets/svg/lastmile/IcnShare.svg';
import IconSave1 from '../assets/svg/lastmile/IcnSave-1.svg';
import IcnTransact from '../assets/svg/lastmile/IcnTransact.svg';
import IcnTransfer from '../assets/svg/lastmile/IcnTransfer.svg';
import IcnGet from '../assets/svg/lastmile/IcnGet.svg';
import IcnEarn from '../assets/svg/lastmile/IcnEarn.svg';
import { useStaticQuery, graphql } from 'gatsby';

const ApiOrDev = () => (
  <div
    className="flex items-center justify-between px-4 py-2 mx-auto bg-blue-100 rounded lg:mt-24 lg:mb-12"
    style={{ width: 189 }}
  >
    <IconWeb />
    <div className="font-bold leading-4 tracking-wide text-blue-800 uppercase text-xxs">
      WEB
    </div>
    <div className="italic font-bold leading-4 tracking-wider text-gray-400 text-9px">
      or
    </div>
    <div className="font-bold leading-4 tracking-wide text-blue-800 uppercase text-xxs">
      APP
    </div>
    <IconApp />
  </div>
);

const AndroidPhone = () => {
  const data = useStaticQuery(graphql`
    query Phone {
      whitephoneApp: file(absolutePath: { regex: "/whitephone.webp/" }) {
        childImageSharp {
          fixed(quality: 100, width: 271) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="relative z-0 self-end -mr-2 -mb-18 md:-mx-10 md:-mr-32 md:mb-0 md:z-20 lg:mb-0 lg:-mr-26 ">
      <img
        src={data.whitephoneApp.childImageSharp.fixed.src}
        alt="You got paid!"
        className="max-w-none"
        style={{
          width: '350px',
        }}
      />
    </div>
  );
};

const Sigmapp = ({ onPrev }) => (
  <div
    className="flex-col items-center self-center self-stretch justify-center hidden w-32 text-center cursor-pointer lg:mb-11 lg:mt-12 lg:ml-8 lg:flex firstMile firstMile--blue md:mx-12 lg:block"
    onClick={onPrev}
  >
    <div className="text-center">
      <SigmappArrow className="transform rotate-180" />
    </div>
    <div className="mt-10 mb-4 font-bold tracking-wider text-blue-700 uppercase text-13px">
      Sigmapp
    </div>
    <div className="font-bold text-white text-gray-800 uppercase text-xxxs">
      PAYMENT <br />
      PLATFORM
    </div>
  </div>
);

const SigmappMobile = ({ onPrev }) => (
  <div
    className="flex items-center self-center self-stretch justify-center block mx-5 mt-32 mb-5 md:mt-20 lg:hidden"
    onClick={onPrev}
  >
    <div className="flex-1 w-full">
      <hr className="w-full bg-blue-200 " style={{ height: 1 }}></hr>
    </div>
    <div className="flex flex-col items-center mx-10 text-center">
      <div className="text-center">
        <SigmappArrow className="transform rotate-180" />
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

const MultipleOptions = () => (
  <div
    className="z-20 max-w-sm px-6 py-8 bg-gray-150 lg:mr-10 lg:mx-1 lg:pb-2 md:pt-15 md:pl-15 lg:px-15 md:z-0 md:mt-10"
    style={{ boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)', borderRadius: 9 }}
  >
    <div className="text-base font-semibold leading-5 text-left text-gray-700 uppercase whitespace-no-wrap lg:text-lg mb-11 mt-7 md:mt-0">
      MULTIPLE, MODERN, LOCAL <br />
      RECIPIENT OPTIONS
    </div>

    <div className="flex items-center mb-5">
      <IconSave className="mr-4" />
      <div className="font-bold leading-5 tracking-wider text-blue-700 uppercase whitespace-no-wrap text-13px ">
        Save/Hedge
      </div>
    </div>
    <div className="flex items-center mb-5">
      <IconShare className="mr-4" />
      <div className="font-bold leading-5 tracking-wider text-blue-700 uppercase whitespace-no-wrap text-13px ">
        Share with others
      </div>
    </div>
    <div className="flex items-center mb-5">
      <IcnTransact className="mr-4" />
      <div className="font-bold leading-5 tracking-wider text-blue-700 uppercase whitespace-no-wrap text-13px ">
        Transact & Pay
      </div>
    </div>
    <div className="flex items-center mb-5">
      <IcnTransfer className="mr-4" />
      <div className="font-bold leading-5 tracking-wider text-blue-700 uppercase whitespace-no-wrap text-13px ">
        Transfer to bank
      </div>
    </div>
    <div className="flex items-center mb-5">
      <IconSave1 className="mr-4" />
      <div className="font-bold leading-5 tracking-wider text-blue-700 uppercase whitespace-no-wrap text-13px ">
        SAVE TO eWALLET <br />
        OR PHONE
      </div>
    </div>
    <div className="flex items-center mb-5">
      <IcnGet className="mr-4" />
      <div className="font-bold leading-5 tracking-wider text-blue-700 uppercase whitespace-no-wrap text-13px ">
        Get Cash
      </div>
    </div>
    <div className="flex items-center mb-5">
      <IcnEarn className="mr-4" />
      <div className="font-bold leading-5 tracking-wider text-blue-700 uppercase whitespace-no-wrap text-13px ">
        Earn
      </div>
    </div>
  </div>
);

const RecipientAccount = () => (
  <div className="flex flex-col self-stretch md:flex-row">
    <div className="flex flex-col items-center justify-between text-center lg:mb-0 md:mb-10">
      <div className="flex-1"></div>
      <div className="flex flex-col items-center text-center lg:mb-0 md:mb-32">
        <PayerAccount className="mx-auto mb-5 " />
        <h2 className="mb-12 font-bold leading-4 tracking-wide text-gray-800 uppercase sm:mb-5 text-xxs">
          RECIPIENT <br /> Account
        </h2>
      </div>
      <div className="w-full">
        <ApiOrDev />
      </div>
    </div>

    <div className="self-end h-8 mx-auto mt-10 mb-10 md:self-center lg:self-end md:-mb-10 lg:mb-56 md:-mx-6 lg:mx-2">
      <ArrowGreen className="transform rotate-90 md:rotate-0" />
    </div>
  </div>
);

const LastMileTitle = () => (
  <div className="top-0 flex items-center justify-center my-8 text-center md:mb-12 md:left-0 md:ml-38 md:absolute lg:mt-15 lg:ml-auto lg:left-auto">
    <div className="font-bold leading-10 text-blue-700 uppercase border-b-2 border-blue-700 text-1xl">
      Last mile
    </div>
  </div>
);

export const LastMileSlide = ({ onPrev }) => {
  return (
    <div className="relative w-full mx-auto max-w-slide max-h-slide">
      <div
        className="flex flex-col items-center justify-center bg-gray-100 lg:flex-row"
        style={{
          minHeight: 706,
        }}
      >
        <LastMileTitle />

        <Sigmapp onPrev={onPrev} />
        <div className="relative flex flex-col items-center justify-center flex-1 md:flex-row lg:mb-5">
          <RecipientAccount />
          <AndroidPhone />
          <MultipleOptions />
        </div>
        <SigmappMobile onPrev={onPrev} />
      </div>
    </div>
  );
};
