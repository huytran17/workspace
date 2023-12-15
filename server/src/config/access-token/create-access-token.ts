import _jwt from "jsonwebtoken";

const default_options: _jwt.SignOptions = {
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
  PASSPORT_JWT_SECRET_KEY,
}: {
  jwt: typeof _jwt;
  PASSPORT_JWT_SECRET_KEY: string;
}): CreateAccessToken {
  return function createAccessToken({
    payload,
    options = {},
  }: {
    payload: object;
    options?: _jwt.SignOptions;
  }) {
    try {
      return jwt.sign(payload, PASSPORT_JWT_SECRET_KEY, {
        ...default_options,
        ...options,
      });
    } catch (error) {
      throw new Error(JSON.stringify(error));
    }
  };
}
