import React from 'react';

export const CookiesTable = () => (
  <table className="block w-full px-1 overflow-auto border-collapse">
    <thead className="font-bold tracking-wide text-left text-gray-400 uppercase border-b-2 border-gray-400">
      <tr>
        <th className="px-4 py-5 border-none text-xxs border-gray-150">
          Cookie Name(s)
        </th>
        <th className="px-4 py-5 border-none text-xxs border-gray-150">
          Source
        </th>
        <th className="px-4 py-5 border-none text-xxs border-gray-150">
          Purpose
        </th>
        <th className="px-4 py-5 border-none text-xxs border-gray-150">
          Strictly Necessary
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td
          colSpan="4"
          className="p-4 pb-5 text-sm text-gray-800 border pt-9 border-gray-150"
          valign="top"
        >
          <p className="font-bold tracking-wide text-xxs">
            COOKIES SET DIRECTLY BY WWW.PAYALL.COM
          </p>
        </td>
      </tr>
      <tr>
        <td
          className="p-4 text-sm text-gray-800 capitalize border border-gray-150"
          valign="top"
        >
          payall_payment_systems_session
        </td>
        <td
          className="p-4 text-sm text-gray-800 capitalize border border-gray-150"
          valign="top"
        >
          Payall
        </td>
        <td
          className="max-w-full p-4 text-sm text-gray-800 capitalize border border-gray-150"
          valign="top"
        >
          to identify the user's session instance in the Payall application
        </td>
        <td
          className="p-4 text-sm text-gray-800 capitalize border border-gray-150"
          valign="top"
        >
          yes
        </td>
      </tr>
      <tr>
        <td
          className="p-4 text-sm text-gray-800 capitalize border border-gray-150"
          valign="top"
        >
          XSRF-TOKEN
        </td>
        <td
          className="p-4 text-sm text-gray-800 capitalize border border-gray-150"
          valign="top"
        >
          Payall
        </td>
        <td
          className="p-4 text-sm text-gray-800 capitalize border border-gray-150"
          valign="top"
        >
          to protect your application from cross-site request forgery (CSRF)
          attacks.
        </td>
        <td
          className="p-4 text-sm text-gray-800 capitalize border border-gray-150"
          valign="top"
        >
          yes
        </td>
      </tr>
      <tr>
        <td
          className="p-4 text-sm text-gray-800 capitalize border border-gray-150"
          valign="top"
        >
          cookies_consent
        </td>
        <td
          className="p-4 text-sm text-gray-800 capitalize border border-gray-150"
          valign="top"
        >
          Payall
        </td>
        <td
          className="p-4 text-sm text-gray-800 capitalize border border-gray-150"
          valign="top"
        >
          to remember if user gave consent
        </td>
        <td
          className="p-4 text-sm text-gray-800 capitalize border border-gray-150"
          valign="top"
        >
          yes
        </td>
      </tr>
      <tr>
        <td
          className="p-4 text-sm text-gray-800 capitalize border border-gray-150"
          valign="top"
        >
          authToken
        </td>
        <td
          className="p-4 text-sm text-gray-800 capitalize border border-gray-150"
          valign="top"
        >
          Payall
        </td>
        <td
          className="p-4 text-sm text-gray-800 capitalize border border-gray-150"
          valign="top"
        >
          to identify the user in the Payall application
        </td>
        <td
          className="p-4 text-sm text-gray-800 capitalize border border-gray-150"
          valign="top"
        >
          yes
        </td>
      </tr>
      <tr>
        <td
          colSpan="4"
          className="p-4 pb-5 text-sm text-gray-800 border pt-9 border-gray-150"
          valign="top"
        >
          <p className="font-bold tracking-wide text-xxs">
            COOKIES SET BY THIRD-PARTY SERVICES INSTALLED ON THIS SITE
          </p>
        </td>
      </tr>
      <tr>
        <td
          className="p-4 text-sm text-gray-800 capitalize border border-gray-150"
          valign="top"
        >
          _ga <br /> _gid <br /> _gat_UA
        </td>
        <td
          className="p-4 text-sm text-gray-800 capitalize border border-gray-150"
          valign="top"
        >
          Google Analytics
        </td>
        <td
          className="p-4 text-sm text-gray-800 capitalize border border-gray-150"
          valign="top"
        >
          These are performance cookies which we use to collect information
          about how our visitors use the website. We use this information to
          compile reports and to improve the website experience. The cookies
          collect information such as: the number of visitors to the website,
          where visitors have come from and the pages they visited.
        </td>
        <td
          className="p-4 text-sm text-gray-800 capitalize border border-gray-150"
          valign="top"
        ></td>
      </tr>
    </tbody>
  </table>
);
