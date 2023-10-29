import passport from "passport";
import makePassportJWT from "./passport-jwt";

const passport_jwt = makePassportJWT({ passport });

const passport_services = Object.freeze({
  passport_jwt,
});

export default passport_services;

export { passport_jwt };
