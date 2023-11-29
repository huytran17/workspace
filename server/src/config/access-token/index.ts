import jwt from "jsonwebtoken";
import makeCreateAccessToken from "./create-access-token";
import makeVerifyAccessToken from "./verify-access-token";

const { PASSPORT_JWT_SECRET_KEY } = process.env;

const createAccessToken = makeCreateAccessToken({
  jwt,
  PASSPORT_JWT_SECRET_KEY,
});
const verifyAccessToken = makeVerifyAccessToken({
  jwt,
  PASSPORT_JWT_SECRET_KEY,
});

export { createAccessToken, verifyAccessToken };
