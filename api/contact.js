import nodeMailer from 'nodejs-nodemailer-outlook';

export default async (req, res) => {
  const companyTypes = {
    bank: 'Bank',
    entity: 'Regulated Entity',
    business: 'Business',
  };

  try {
    const data = [
      {
        label: 'First Name',
        value: req.body.firstName,
      },
      {
        label: 'Last Name',
        value: req.body.lastName,
      },
      {
        label: 'Company',
        value: req.body.companyName,
      },
      {
        label: 'Email',
        value: req.body.email,
      },
      {
        label: 'Company Type',
        value: companyTypes[req.body.company],
      },
      {
        label: 'Phone Number',
        value: req.body.phoneNumber,
      },
      {
        label: 'Interest',
        value: req.body.interested,
      },
    ];
    await new Promise((resolve, reject) => {
      nodeMailer.sendEmail({
        auth: {
          user: 'test@payallps.com',
          pass: 'Gon43445',
        },
        from: 'test@payallps.com',
        to: 'alexandr.vozicov@agilepartners.eu',
        subject: 'Payallps - New Contact',
        html: data
          .map(item => `<b>${item.label}</b>: ${item.value}`)
          .join('<br>'),
        onError: e => reject(e),
        onSuccess: i => resolve(),
      });
    });

    res.json({ status: 'YAY' });
  } catch (error) {
    res.json({ status: JSON.stringify(error) });
  }
};
