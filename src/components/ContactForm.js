import React, { useState, useCallback, useEffect } from 'react';
import { Link } from '../components/Link';
import { useForm } from 'react-hook-form';
import HubspotForm from 'react-hubspot-form';

import { Input, Textarea, PhoneInput } from '../components/Input';
import { Radio } from '../components/Radio';
import { emailPattern, phonePattern } from '../validation/patterns';
import ArrowRightIcon from '../assets/svg/arrow-right.svg';
import classNames from 'classnames';
import { LoadingSwitch } from '../components/Loading';
import Recaptcha from '../components/Recaptcha';

const isClient = typeof window === 'object';
if (isClient) {
  window.jQuery = window.jQuery || (() => ({
    // these are all methods required by HubSpot
    change: () => {},
    trigger: () => {},
    serializeArray: () => {},
  }));
}

const SubmitedMessage = ({ isModal }) => (
  <div
    className={classNames('flex items-center h-full', {
      'text-center max-w-xs': isModal,
    })}
  >
    <div>
      <h2 className="mb-4 text-xl font-bold text-blue-900">
        Thank you for your request!
      </h2>
      <p className="font-bold text-gray-700">
        We'll get back to you within 48 business hours.
      </p>
    </div>
  </div>
);

const ContactForm = ({ isModal, sentTo, children }) => {
  const [isSubmited, setSubmited] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    errors,
    handleSubmit,
    triggerValidation,
    watch,
    setValue,
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      company: 'bank',
    },
  });

  useEffect(() => {
    register({ name: 'captchaToken' }, { required: true });
  }, []);

  const onVerifyCaptcha = useCallback(token => {
    setValue('captchaToken', token);
    triggerValidation('captchaToken');
  });

  const onSubmit = async data => {
    setLoading(true);

    const fetchApi = await fetch('https://formspree.io/xpzjvnqj', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    setTimeout(() => fetchApi, 1000);

    setLoading(false);
    setSubmited(true);
  };

  const companyValue = watch('company');

  return (
    <div className="w-full max-w-screen-sm pb-4 h-full flex items-center justify-center">
      <div>
        <HubspotForm
          portalId='4785555'
          formId='8e74fb6b-9aa9-425a-9037-29cc9ca44244'
          onSubmit={() => { setSubmited(true); }}
          onReady={(form) => {
            let myiFrame = document.getElementsByClassName("hs-form-iframe")[0];
            let doc = myiFrame.contentDocument;
            doc.body.innerHTML = doc.body.innerHTML + '<style>@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap"); .inputs-list { padding-left: 0 !important; } .hs-form-booleancheckbox-display input:checked + span:after { content:"";position: absolute;top: 5px;left: 5px;width: 11px;height: 7px; background-size: 11px 7px; background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAQCAYAAAAMJL+VAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADdSURBVHgBtY/BDYIwGEa/lnjg5giM0BWcxEaI8cgGuoFXLwbdwA2ME8gIrGA8kIC0Wo0EsEiL+E5/m+a9/sAfyHwW3eZsqmaCgVFyScDV7FBwBwNSlSsKgQt9H2TIxviBplxI7N1tzJ+BPGDL7IpzumAeepAFbK2Tq5nUyhKJGGHibuIEhqjPCWClkytoIXEqXxN4NMfRdJMu+Uv5IJ0xTimi8tZgExN5GbCNmMprAdOIjfwj0BWxlWsDbRFCcJBAaCNvDWgjFUzlXwNtERt5Z6AZsZUboyKpz3bowR0tRaoP/2HRjAAAAABJRU5ErkJggg=="); } .hs-form-booleancheckbox-display input + span:before { content:""; position: absolute; top: -2px;left: 0; width: 20px; height: 20px;border: 1px solid #EBEAED; border-radius: 2px; box-sizing: border-box; } .hs-form-booleancheckbox-display input + span { position: relative; padding-left: 26px; font-weight: 600; } .hs-form-booleancheckbox-display input { display: none; } .hs-form-radio-display input:checked + span:after { content: ""; display: block; position: absolute; left: 3px; top: 5px; background: #7AB5EE; width: 6px; height: 6px; border-radius: 50%; } .hs-form-radio-display input:checked + span:before { border-color: #7AB5EE; } .hs-form-radio-display span:before { content: ""; display: block; position: absolute; left: 0; top: 2px; border: 1px solid #D8D8D8; width: 12px; height: 12px; border-radius: 50%; box-sizing: border-box; } .hs-form-radio-display span { position: relative; padding-left: 20px;  } .hs-form-radio-display input { display: none; } .hs_error_rollup { position: absolute; margin-top: -10px; } .submitted-message { padding-left: 12px;} .hs-button.primary:hover { background: #2A5DCA !important; } .hs-button.primary { width: 100%; border: 0; font-family: "Montserrat" !important; background: #357CF2 !important; transition: background .15s ease-in-out;  text-transform: uppercase; height: 50px; font-weight: 600; outline: none !important; }  .hubspot-link__container.sproket { display: none !important;} .hs-interested_in_becoming ul { display: flex; } .hs-fieldtype-radio > label { display: none; font-weight: 600; font-size: 14px; padding: 4px 0; } .hs-fieldtype-radio ul > li > label { font-weight: 400; font-size: 15px; } .hs-fieldtype-text input:focus, .hs-fieldtype-textarea textarea:focus { border-color: #7AB5EE; } .hs-fieldtype-text input::placeholder, .hs-fieldtype-textarea textarea::placeholder { font-weight: 400; color: #87949e; font-family: "Montserrat";} .hs-fieldtype-textarea textarea { height: 96px; resize: none; } .hs-fieldtype-text input { height: 56px; } .hs-fieldtype-text input, .hs-fieldtype-textarea textarea { padding:15px 20px !important; background: #fff !important; border-radius: 0; border: 1px solid #ebeaed;font-size: 14px;color: #363C40;font-weight: 500; font-family: "Montserrat";} .hs-fieldtype-text label, .hs-fieldtype-textarea label { display: none; } label { color: #2f323a !important; cursor: pointer; font-family: "Montserrat" !important; } .hs-error-msgs.inputs-list label.hs-error-msg { display: block; color: #E34F6E !important; } .inputs-list.multi-container { display: flex; } </style>';
          }}
          loading={<div>Loading...</div>}
        />

        {!isSubmited && <div className="mb-5 text-gray-800 text-13px">
          By submitting your contact details you agree to our
          <Link to="/privacy-policy" className="ml-1 text-blue-600">
            Privacy Policy.
          </Link>
        </div>}
      </div>

      {/*{isSubmited ? (
        <SubmitedMessage isModal={isModal} />
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-screen-sm"
        >
          {children}
          <div
            className={classNames('flex flex-col ', {
              'md:flex-row': !isModal,
            })}
          >
            <Input
              name="firstName"
              label="First Name"
              className={classNames('flex-1', {
                'md:mr-5': !isModal,
              })}
              error={errors.firstName}
              inputRef={register({
                required: true,
                maxLength: {
                  value: 255,
                  message: 'First Name too long',
                },
              })}
            />
            <Input
              name="lastName"
              label="Last Name"
              className="flex-1"
              error={errors.lastName}
              inputRef={register({
                required: true,
                maxLength: {
                  value: 255,
                  message: 'Last Name too long',
                },
              })}
            />
          </div>
          <div>
            <Input
              name="companyName"
              label="Company Name"
              error={errors.companyName}
              inputRef={register({
                required: true,
              })}
            />
            <Input
              name="email"
              label="Email"
              error={errors.email}
              inputRef={register({
                required: true,
                validate: {
                  email: value => emailPattern.test(value),
                },
                maxLength: {
                  value: 325,
                  message: 'Please provide a valid email',
                },
              })}
            />
          </div>
          <div
            className={classNames(
              'flex flex-col justify-between mb-5 mt-1 xl:mb-9 xl:mt-4  md:flex-row',
              {
                'mr-20': !isModal,
              }
            )}
          >
            <Radio
              value="bank"
              label="Bank"
              name="company"
              checked={companyValue === 'bank'}
              inputRef={register({
                required: true,
              })}
            />
            <Radio
              value="entity"
              label="Regulated Entity"
              name="company"
              checked={companyValue === 'entity'}
              inputRef={register({
                required: true,
              })}
            />
            <Radio
              value="business"
              label="Business"
              name="company"
              checked={companyValue === 'business'}
              inputRef={register({
                required: true,
              })}
            />
          </div>
          <div>
            <PhoneInput
              name="phoneNumber"
              label="Phone Number"
              error={errors.phoneNumber}
              inputRef={register({
                required: true,
                pattern: {
                  value: phonePattern,
                  message: 'Only numbers allowed',
                },
              })}
            />
            <Textarea
              name="interested"
              label="I’m interested in"
              error={errors.interested}
              maxCharacters={3000}
              inputRef={register({
                required: true,
              })}
            />
          </div>
          <div className="flex flex-col items-center justify-start mb-5 md:flex-row">
            <div>
              <Recaptcha
                sitekey="6Lei1vIUAAAAABMPZ6tg4KQxCT786VpJHpVqgwFg"
                className="h-16 mr-4 max-w-xxs"
                verifyCallback={onVerifyCaptcha}
                badge="inline"
              />
              {errors.captchaToken && (
                <p className="ml-5 text-xs font-medium text-red-500">
                  Required
                </p>
              )}
            </div>
            <button
              disabled={loading}
              type="submit"
              className="inline-flex items-center justify-center w-full px-10 py-4 m-auto mt-0 text-sm font-bold text-center text-white uppercase transition-colors duration-200 bg-blue-600 rounded-sm hover:bg-blue-700"
            >
              <LoadingSwitch loading={loading}>
                <span className="mr-4">Submit Message</span>
                <ArrowRightIcon className="-mt-1" />
              </LoadingSwitch>
            </button>
          </div>
          {!isModal ? (
            <div className="mb-5 text-gray-800 text-13px">
              By submitting your contact details you agree to our
              <Link to="/privacy-policy" className="ml-1 text-blue-600">
                Privacy Policy.
              </Link>
            </div>
          ) : null}
        </form>
      )}*/}
    </div>
  );
};

export default ContactForm;
