import jwt, { JwtPayload } from "jsonwebtoken";

export type JwtpayloadData = {
  username: string | undefined;
  email: string | undefined;
  password: string | undefined;
};

export const createToken = (
  jwtPayload: JwtpayloadData,
  secret: string,
  expiresIn: string,
) => {
  return jwt.sign(jwtPayload, secret, {
    expiresIn,
  });
};

export const verifyToken = (token: string, secret: string) => {
  return jwt.verify(token, secret) as JwtPayload;
};
