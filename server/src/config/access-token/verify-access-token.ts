import _jwt from "jsonwebtoken";

export type VerifyAccessToken = ({
  token,
  options,
}: {
  token: string;
  options?: object;
}) => string | _jwt.JwtPayload;

export default function makeVerifyAccessToken({
  jwt,
  PASSPORT_JWT_SECRET_KEY,
}: {
  jwt: typeof _jwt;
  PASSPORT_JWT_SECRET_KEY: string;
}): VerifyAccessToken {
  return function verifyAccessToken({
    token,
    options = {},
  }: {
    token: string;
    options?: object;
  }) {
    try {
      return jwt.verify(token, PASSPORT_JWT_SECRET_KEY, options);
    } catch (error) {
      throw new Error(JSON.stringify(error));
    }
  };
}
