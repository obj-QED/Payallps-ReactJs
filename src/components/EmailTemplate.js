import React from 'react';


export const EmailTemplate = ({ data }) => (

  <table border="0" cellpadding="0" cellspacing="0" width="100%">
  <tr>
    <td bgcolor="#f7f7f7" align="center" style="padding: 100px 15px 100px 15px;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 800px;">
        <tr>
          <td bgcolor="#ffffff" align="center"
              style="box-shadow: 0 0 50px 5px rgba(0,0,0,0.1);padding: 0;border-radius: 10px;padding: 60px 20px 50px;position: relative;z-index: 1;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
              <tr>
                <td style="padding-bottom: 55px" align="center">
                  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                    <tr>
                      <td>
                        <table border="0" cellpadding="0" cellspacing="0" height="40px" width="125px"
                               style="max-width: 125px;">
                          <tr>
                            <td>
                              <img src="https://payall-static.s3-us-west-2.amazonaws.com/logo-email.webp"
                                   style="height:40px;width:125px" height="40px" width="125px" alt="Payall Logo"
                                   title="Payall Logo" />
                            </td>
                          </tr>
                        </table>
                      </td>

                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td align="center">
                  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                    <tr>
                      <td>
                        <hr
                            style="color: #EBEAED; border-color: #EBEAED; background-color: #EBEAED; height: 1px; border: 0;">
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <tr>
                <td align="center" valign="center" style="padding: 30px 0px 50px 0px;">
                  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                    <tr>
                      <th colspan="2" style="padding: 45px 0px 40px 0px;">
                        <h1
                            style="margin: 0px 0px 0px 0px;color: #383C47;font-family: Helvetica, sans-serif; font-size: 24px; font-weight: 600; line-height: 36px; text-align: left;">
                          Payall - New Contact
                        </h1>
                        <h2
                            style="margin: 0px 0px 0px 0px;color: #383C47;font-family: Helvetica, sans-serif; font-size: 18px; font-weight: 500; line-height: 36px; text-align: left;">
                          Here are the details:
                        </h2>
                      </th>
                    </tr>
                    <tr style="font-family: Helvetica, sans-serif;">
                      <td style="padding: 0px 0px 24px 0px">
                        <p style="margin: 0px 0px 8px 0px; color: #999999;font-size: 14px;">Name</p>
                        <p style="margin: 0px; color: #2f323a;font-size: 16px;"><strong>{data.firstName} {data.lastName}</strong>
                        </p>
                      </td>
                      <td style="padding: 0px 0px 24px 0px">
                        <p style="margin: 0px 0px 8px 0px; color: #999999;font-size: 14px;">Email:</p>
                        <p style="margin: 0px; font-size: 16px;text-decoration: underline;color: #1A5BD1;">
                          <strong>{data.email}</strong></p>
                      </td>
                    </tr>
                    <tr style="font-family: Helvetica, sans-serif;">
                      <td colspan="2">
                        <p style="margin: 0px 0px 8px 0px; color: #999999;font-size: 14px;">Phone number:</p>
                        <p style="margin: 0px; color: #2f323a;font-size: 16px;"><strong>{data.phoneNumber}</strong></p>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="2" align="center" style="padding: 20px 0px 0px;">
                      </td>
                    </tr>
                    <tr>
                      <td colspan="2" align="center">
                        <hr
                            style="color: #EBEAED; border-color: #EBEAED; background-color: #EBEAED; height: 1px; border: 0;">
                      </td>
                    </tr>
                    <tr>
                      <td colspan="2" align="center" style="padding: 0px 0px 20px;">
                      </td>
                    </tr>
                    <tr style="font-family: Helvetica, sans-serif;">
                      <td style="padding: 0px">
                        <p style="margin: 0px 0px 8px 0px; color: #999999;font-size: 14px;">Company Name:</p>
                        <p style="margin: 0px; color: #2f323a;font-size: 16px;"><strong>{data.companyName}</strong>
                        </p>
                      </td>
                      <td style="padding: 0px">
                        <p style="margin: 0px 0px 8px 0px; color: #999999;font-size: 14px;">Institution Type:</p>
                        <p style="margin: 0px; color: #2f323a;font-size: 16px;"><strong>{data.company} </strong>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="2" align="center" style="padding: 20px 0px 0px;">
                      </td>
                    </tr>
                    <tr>
                      <td colspan="2" align="center">
                        <hr
                            style="color: #EBEAED; border-color: #EBEAED; background-color: #EBEAED; height: 1px; border: 0;">
                      </td>
                    </tr>
                    <tr>
                      <td colspan="2" align="center" style="padding: 0px 0px 20px;">
                      </td>
                    </tr>
                    <tr style="font-family: Helvetica, sans-serif;">
                      <td style="padding: 0px 0px 24px 0px">
                        <p style="margin: 0px 0px 8px 0px; color: #999999;font-size: 14px;">Message:</p>
                        <p style="margin: 0px; color: #2f323a;font-size: 16px;"><strong>{data.interested}</strong>
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
)
