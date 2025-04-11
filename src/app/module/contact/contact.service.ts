import config from "../../config";
import { SendEmail } from "../../utils/sendEmail";
import { IContact } from "./contact.interface";

const sendEmailByNodeMailer = async (body: IContact) => {
  const emailContent = `
  <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
          padding: 20px;
        }
        .container {
          background-color: #ffffff;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          max-width: 600px;
          margin: 0 auto;
        }
        h2 {
          color: #333333;
          font-size: 24px;
          margin-bottom: 20px;
        }
        p {
          color: #666666;
          font-size: 16px;
          line-height: 1.5;
          margin-bottom: 10px;
        }
        .bold {
          font-weight: bold;
          color: #333333;
        }
        .message {
          background-color: #f9f9f9;
          border-left: 5px solid #4CAF50;
          padding: 10px 15px;
          margin-bottom: 20px;
        }
        .footer {
          text-align: center;
          color: #888888;
          font-size: 14px;
          margin-top: 20px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h2>Contact Form Submission</h2>
        <p><span class="bold">Name:</span> ${body.name}</p>
        <p><span class="bold">Email:</span> ${body.email}</p>
        <div class="message">
          <p><span class="bold">Message:</span></p>
          <p>${body.message}</p>
        </div>
        <div class="footer">
          <p>Thank you for reaching out to us!</p>
          <p>We will get back to you as soon as possible.</p>
        </div>
      </div>
    </body>
  </html>
`;

  const emailOptions = {
    to: config.SMTP_TO_EMAIL as string,
    subject: `New contact form submission from ${body.name}`,
    html: emailContent,
  };

  const result = await SendEmail(
    emailOptions.to,
    emailOptions.html,
    emailOptions.subject,
  );
  return result;
};

export const ContactServices = {
  sendEmailByNodeMailer,
};
