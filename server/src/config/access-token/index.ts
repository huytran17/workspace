import jwt from "jsonwebtoken";
import makeCreateAccessToken from "./create-access-token";
import makeVerifyAccessToken from "./verify-access-token";

const createAccessToken = makeCreateAccessToken({ jwt });
const verifyAccessToken = makeVerifyAccessToken({ jwt });

export { createAccessToken, verifyAccessToken };
