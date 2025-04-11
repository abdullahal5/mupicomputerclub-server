import httpStatus from "http-status-codes";
import AppError from "../errors/AppError";
import catchAsync from "../utils/catchAsync";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";

export const USER_ROLE = {
  admin: "admin",
} as const;

export type TUserRole = keyof typeof USER_ROLE;

const auth = (...requiredRoles: TUserRole[]) => {
  return catchAsync(async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      throw new AppError(
        httpStatus.UNAUTHORIZED,
        "You have no access to this route!",
      );
    }
    let decoded;

    try {
      decoded = jwt.verify(token, config.Access_Token as string) as JwtPayload;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      throw new AppError(httpStatus.UNAUTHORIZED, "Jwt expired. please login again");
    }

    const { role, email } = decoded;

    const AdminEmail = config.Admin_Email;

    const isUserExist = email === AdminEmail;

    if (!isUserExist) {
      throw new AppError(httpStatus.NOT_FOUND, "User not found!");
    }

    if (requiredRoles && !requiredRoles.includes(role)) {
      throw new AppError(
        httpStatus.UNAUTHORIZED,
        "You have no access to this route!",
      );
    }

    req.user = decoded as JwtPayload;
    next();
  });
};
export default auth;
