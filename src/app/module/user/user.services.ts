import { IUser } from "./users.interface";
import config from "../../config";
import { createToken, JwtpayloadData } from "./user.utility";
import AppError from "../../errors/AppError";
import httpStatus from "http-status-codes";

const loginUser = async (payload: IUser) => {
  const { email, password } = payload;

  const AdminEmail = config.Admin_Email;
  const AdminPassword = config.Admin_Password;

  if (email !== AdminEmail || password !== AdminPassword) {
    throw new AppError(httpStatus.NOT_FOUND, "Credentials not match");
  }

  const adminPayload: JwtpayloadData = {
    role: "admin",
    email: AdminEmail,
    password: AdminPassword,
  };

  const accessToken = createToken(
    adminPayload,
    config.Access_Token as string,
    config.Access_Token_Expires as string,
  );

  return { accessToken };
};

export const UserServices = {
  loginUser,
};
