const nodemailer = require('nodemailer');

const sendMailGmail = async (senderEmail = 'diverit.io@gmail.com', recipientEmail = 'rallcca28@gmail.com') => {
  const config = {
    host: 'smtp.gmail.com', // INFO - Usar smtp del correo que corresponda
    port: 587, // INFO - Buscar puerto correspondiente
    auth: {
      user: 'rallcca28@gmail.com', // INFO -  User de envío
      pass: 'hiyn dazd grib ufnr', // INFO - Pass obtenido de (contraseña de aplicaciones)
    },
  };

  const transport = nodemailer.createTransport(config);

  const mailOptions = {
    from: `Richard A. ${senderEmail}`,
    to: recipientEmail,
    subject: 'Sending Email using Node.js',
    text: 'That was easy!', // INFO - puede ser HTML con CSS o plantilla o build de framework
  };

  const info = await transport.sendMail(mailOptions);

  console.log(info);
};

const sendMailOutlook = async (senderEmail = 'diverit.io@gmail.com', recipientEmail = 'rallcca28@gmail.com') => {
  const config = {
    host: 'smtp-mail.outlook.com', // INFO - Usar smtp del correo que corresponda
    port: 587, // INFO - Buscar puerto correspondiente
    auth: {
      user: 'XXXXXXXXXXXXXXXXXXXXX', // INFO -  User de envío
      pass: 'XXXX XXXX XXXX XXXX', // INFO - Pass obtenido de (contraseña de aplicaciones)
    },
  };

  const transport = nodemailer.createTransport(config);

  const mailOptions = {
    from: `Richard A. ${senderEmail}}`,
    to: recipientEmail,
    subject: 'Sending Email using Node.js',
    text: 'That was easy!', // INFO - puede ser HTML con CSS o plantilla o build de framework
  };

  const info = await transport.sendMail(mailOptions);

  console.log(info);
};

module.exports = {
  sendMailGmail,
  sendMailOutlook,
};
