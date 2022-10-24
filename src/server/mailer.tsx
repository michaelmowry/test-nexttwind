import { User } from '@prisma/client';
import nodemailer from 'nodemailer';

function sendEmail(message: object) {
  return new Promise((res, rej) => {
    const transporter = nodemailer.createTransport({
      host: 'smtp.office365.com',
      port: 587,
      secure: false,
      requireTLS: true,
      tls: {
        ciphers: 'SSLv3',
      },
      auth: {
        user: process.env.OFFICE365_USER,
        pass: process.env.OFFICE365_PASSWORD,
      },
    });

    transporter.sendMail(message, function (err, info) {
      if (err) {
        rej(err);
      } else {
        res(info);
      }
    });
  });
}

export function SendConfirmationEmail(user: User) {
  const { name, email, id } = user;

  const message = {
    from: process.env.OFFICE365_USER,
    to: email,
    subject: 'Your App - Activate Account',
    html: `
      <h3> Hello ${name} </h3>
      <p>Thank you for registering into our Application. Much Appreciated! Just one last step is laying ahead of you...</p>
      <p>To activate your account please follow this link: <a target="_" href="${process.env.DOMAIN}/activateEmail/${id}">${process.env.DOMAIN}/activate </a></p>
      <p>Cheers</p>
      <p>Your Application Team</p>
    `,
  };

  return sendEmail(message);
}

export function SendResetPasswordEmail(user: User) {
  const { name, email, id } = user;
  const message = {
    from: process.env.OFFICE365_USER,
    // to: toUser.email // in production uncomment this
    to: email,
    subject: 'Your App - Reset Password',
    html: `
      <h3>Hello ${name} </h3>
      <p>To reset your password please follow this link: <a target="_" href="${process.env.DOMAIN}/reset-password/${id}">Reset Password Link</a></p>
      <p>Cheers,</p>
      <p>Your Application Team</p>
    `,
  };

  return sendEmail(message);
}
