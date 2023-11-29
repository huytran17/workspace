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
}: {
  jwt: typeof _jwt;
}): VerifyAccessToken {
  return function verifyAccessToken({
    token,
    options = {},
  }: {
    token: string;
    options?: object;
  }) {
    try {
      return jwt.verify(token, process.env.JSON_WEB_TOKEN_SECRET_KEY, options);
    } catch (error) {
      throw new Error(JSON.stringify(error));
    }
  };
}
