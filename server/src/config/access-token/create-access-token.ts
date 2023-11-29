import _jwt from "jsonwebtoken";

const defaultOptions: _jwt.SignOptions = {
  expiresIn: "1y",
};

export type CreateAccessToken = ({
  payload,
  options,
}: {
  payload: object;
  options?: _jwt.SignOptions;
}) => string;

export default function makeCreateAccessToken({
  jwt,
}: {
  jwt: typeof _jwt;
}): CreateAccessToken {
  return function createAccessToken({
    payload,
    options = {},
  }: {
    payload: object;
    options?: _jwt.SignOptions;
  }) {
    try {
      return jwt.sign(payload, process.env.JSON_WEB_TOKEN_SECRET_KEY, {
        ...defaultOptions,
        ...options,
      });
    } catch (error) {
      throw new Error(JSON.stringify(error));
    }
  };
}
