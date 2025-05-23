import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  port: process.env.PORT,
  databse_url: process.env.DATABASE_URL,
  NODE_ENV: process.env.NODE_ENV,
  Access_Token: process.env.Access_Token,
  Refresh_Token: process.env.Refresh_Token,
  Access_Token_Expires: process.env.Access_Token_Expires,
  Refresh_Token_Expires: process.env.Refresh_Token_Expires,
  Bcrypt_Salt_Round: process.env.Bcrypt_Salt_Round,
  Admin_Email: process.env.Admin_Email,
  Admin_Password: process.env.Admin_Password,
  SMTP_USER: process.env.SMTP_USER,
  SMTP_PASS: process.env.SMTP_PASS,
  SMTP_HOST: process.env.SMTP_HOST,
  SMTP_PORT: process.env.SMTP_PORT,
  SMTP_TO_EMAIL: process.env.SMTP_TO_EMAIL,
};
