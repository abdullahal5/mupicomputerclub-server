import nodemailer from "nodemailer";
import config from "../config";

export const SendEmail = async (to: string, html: string, subject: string) => {
  const transporter = nodemailer.createTransport({
    host: config.SMTP_HOST,
    port: Number(config.SMTP_PORT),
    secure: false,
    auth: {
      user: config.SMTP_USER,
      pass: config.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: "Munshiganj Polytechnic Institute",
    to,
    subject,
    text: "",
    html,
  });

  try {
    await transporter.verify();
    console.log("✅ SMTP connection verified");
  } catch (error) {
    console.error("❌ SMTP verification failed:", error);
    throw error;
  }
};

// host: config.SMTP_HOST,
//     port: Number(config.SMTP_PORT),
//     secure: false,
//     auth: {
//       user: config.SMTP_USER,
//       pass: config.SMTP_PASS,
//     },