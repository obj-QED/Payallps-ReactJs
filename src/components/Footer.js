import React, { useState, useEffect } from 'react';
import FacebookIcon from '../assets/svg/facebook.svg';
import TwitterIcon from '../assets/svg/twitter.svg';
import LinkedinIcon from '../assets/svg/linkedin.svg';
import Logo from '../assets/svg/payall.svg';
import { Button } from '../components/Button';
import { Link } from '../components/Link';
import classNames from 'classnames';
import { SocialIcon } from '../components/SocialIcon';
const isClient = typeof window === 'object';

const FooterLinksCol = ({ title, links }) => (
  <div>
    <p className="mb-6 font-bold text-blue-100 uppercase text-xxs">{title}</p>
    <ul>
      {links.map((link, key) => (
        <li
          key={key}
          className={classNames({
            'mb-3': key !== links.length - 1,
          })}
        >
          <Link
            to={link.url}
            external={link.external}
            className="font-semibold text-white transition-colors duration-200 hover:text-blue-300"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export const Footer = ({ cutted = true, transparent = false }) => {
  const [legalDisclosureVisible, setLegalDisclosureVisible] = useState(false);

  useEffect(() => {
    if (legalDisclosureVisible && isClient) {
      window.scrollBy(0, 450);
    }
  }, [legalDisclosureVisible]);

  return (
    <footer className={classNames({ 'bg-gray-800': !transparent })}>
      <div className={classNames("container px-6 pt-10 pb-10 mx-auto lg:px-16", { 'pt-20': !cutted })}>
        {!cutted && <>
          <div className="flex flex-col mb-8 lg:flex-row">
            <div className="flex-1 mb-12 lg:mb-0">
              <Link to="/">
                <Logo className="text-white" />
              </Link>
            </div>
            <div className="flex-1 mb-12 lg:mb-0">
              <FooterLinksCol
                title="Product"
                links={[
                  // {
                  //   label: 'Banks',
                  //   url: '/',
                  // },
                  {
                    label: 'Platform',
                    url: '/platform',
                  },
                  // {
                  //   label: 'Recipient Options',
                  //   url: '/',
                  // },
                  // {
                  //   label: 'Use Cases',
                  //   url: '/',
                  // },
                  {
                    label: 'APIs',
                    url: 'https://developers.payall.com/',
                  },
                  {
                    label: 'Payment Options',
                    url: '/business-payers',
                  },
                ]}
              />
            </div>
            <div className="flex-1 mb-12 lg:mb-0">
              <FooterLinksCol
                title="Company"
                links={[
                  {
                    label: 'Founder’s Message',
                    url: '/founders-message',
                  },
                  {
                    label: 'Leadership',
                    url: '/leadership',
                  },
                  {
                    label: 'Contact Us',
                    url: '/contact',
                  },
                ]}
              />
            </div>
            <div className="flex-1 mb-12 lg:mb-0">
              <FooterLinksCol
                title="Ready Capabilities"
                links={[
                  {
                    label: 'Instant Payments',
                    url: 'https://lp.payall.com/instant-payments/',
                  },
                  {
                    label: 'Network Branded Cards',
                    url: 'https://lp.payall.com/network-branded-cards/',
                  },
                  {
                    label: 'Product Overview',
                    url: 'https://payall.com/products',
                  },
                ]}
              />
            </div>
            <div className="flex-1 lg:text-right">
              <ul className="mb-5 -mt-1">
                <li className="leading-none">
                  <a
                    href="mailto:contact@payallps.com"
                    className="inline-block text-xs text-white transition-colors duration-200 hover:text-blue-300"
                  >
                    contact@payallps.com
                  </a>
                </li>
                <li className="leading-none">
                  <a
                    href="mailto:sales@payallps.com"
                    className="inline-block text-xs text-white transition-colors duration-200 hover:text-blue-300"
                  >
                    sales@payallps.com
                  </a>
                </li>
              </ul>
              <ul className="-mt-1 mb-7">
                <li className="leading-none">
                  <a
                    href="tel:1-888-729-2551"
                    className="inline-block text-xs text-white transition-colors duration-200 hover:text-blue-300"
                  >
                    1-888-PAYALL1
                  </a>
                </li>
                <li className="leading-none">
                  <a
                    href="tel:1-888-729-2551"
                    className="inline-block text-xs text-white transition-colors duration-200 hover:text-blue-300"
                  >
                    1-888-729-2551
                  </a>
                </li>
              </ul>
              <ul className="mb-5">
                <li className="leading-none">
                  <span className="inline-block text-xs text-blue-100">
                    820 W. 41st Street, Suite 216
                  </span>
                </li>
                <li className="leading-none">
                  <span className="inline-block text-xs text-blue-100">
                    Miami Beach, FL 33140
                  </span>
                </li>
              </ul>
              <ul className="mb-5">
                <li className="leading-none">
                  <span className="inline-block text-xs text-blue-100">
                    P.O. Box 39849
                  </span>
                </li>
                <li className="leading-none">
                  <span className="inline-block text-xs text-blue-100">
                    Ft. Lauderdale, FL 33339
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col justify-between lg:items-center lg:flex-row mb-9">
            <div className="mb-6 lg:mb-0">
              <Button
                to="https://consumer.payall.com/login"
                variant="blue-dark"
                className="px-10"
              >
                Login
              </Button>
            </div>
            <div className="flex items-center">
              <span className="inline-block mr-4">
                <SocialIcon
                  dark
                  icon={<FacebookIcon />}
                  url="https://www.facebook.com/payallps/"
                />
              </span>
              <span className="mr-4">
                <SocialIcon
                  dark
                  icon={<TwitterIcon />}
                  url="https://twitter.com/payallps"
                />
              </span>
              <span>
                <SocialIcon
                  dark
                  icon={<LinkedinIcon />}
                  url="https://www.linkedin.com/company/payall-payment-systems/"
                />
              </span>
            </div>
          </div>
        </>}

        <div className="flex flex-col justify-between lg:items-center lg:flex-row">
          <p className="mb-6 text-xs text-gray-400 lg:mb-0">
            Payall Payment Systems © {new Date().getFullYear()}. All Rights
            Reserved.
          </p>
          <ul className="flex flex-col lg:items-center lg:flex-row">
            <li className="mr-10">
              <Link
                to="/privacy-policy"
                className="text-xs text-white transition-colors duration-200 hover:text-blue-300"
              >
                Privacy Policy
              </Link>
            </li>
            <li className="mr-10">
              <Link
                to="/terms/terms-of-use"
                className="text-xs text-white transition-colors duration-200 hover:text-blue-300"
              >
                Terms of Use
              </Link>
            </li>
            <li className="mr-10">
              <Link
                to="/cookies-policy"
                className="text-xs text-white transition-colors duration-200 hover:text-blue-300"
              >
                Cookies
              </Link>
            </li>
            <li>
              <button
                className="text-xs text-white transition-colors duration-200 appearance-none hover:text-blue-300 focus:outline-none"
                onClick={() =>
                  setLegalDisclosureVisible(!legalDisclosureVisible)
                }
              >
                Legal Disclosure
              </button>
            </li>
          </ul>
        </div>
      </div>
      {legalDisclosureVisible && (
        <div className="container px-6 mx-auto lg:px-16">
          <div className="pt-10 text-xs text-gray-300 border-t border-gray-400 pb-15">
            All logos, trademarks, brand names, service marks, trade names,
            trade dress or company names used on this website that are not owned
            by Payall Payment Systems, Inc. or its respective affiliates and
            licensors are the property of their respective owners and are used
            for identification purposes only. Such use or reference does not
            imply any product endorsement or affiliation with Payall Payment
            Systems, Inc.
            <br />
            <br />
            Mastercard is a registered trademark of MasterCard International
            Incorporated. Any reference to MasterCard is subject to the terms
            and conditions of Wave Crest Holdings, an e-money issuer authorized,
            regulated and licensed by the Gibraltar Financial Services
            Commission (FSC0056BNK) whose registered office is 57/63 Line Wall
            Road, Gibraltar and a principal Member of MasterCard.
            <br />
            <br />
            Visa is a registered trademark of Visa International Service
            Association.
            <br />
            <br />
            Diners Club ® is a registered trademark of Diners Club
            International.
            <br />
            <br />
            Discover ® Card is a registered trademark of Discover Financial
            Services.
            <br />
            <br />
            American Express ® is a registered trademark of American Express
            Company.
            <br />
            <br />
            JCB is a registered trademark of JCB Co., Ltd.
            <br />
            <br />
            UnionPay is a registered trademark of China UnionPay Co., Ltd.
          </div>
        </div>
      )}
    </footer>
  );
};
