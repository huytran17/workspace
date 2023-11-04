import { UserModel } from "@/database/models";
import { isEmpty, isNil } from "lodash";
import Passport from "passport";
import passport_jwt, { StrategyOptions } from "passport-jwt";

export default function makePassportJWT({
  passport,
}: {
  passport: typeof Passport;
}) {
  return function passportJWT() {
    const JwtStrategy = passport_jwt.Strategy;
    const ExtractJWT = passport_jwt.ExtractJwt;

    const options: StrategyOptions = {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.PASSPORT_JWT_SECRET_KEY,
    };

    passport.use(
      "jwt-user",
      new JwtStrategy(options, async (payload: { email: string }, done) => {
        const exists = await UserModel.findOne({ email: payload.email });

        if (isEmpty(exists) || isNil(exists)) {
          return done(null, false);
        }

        return done(null, exists);
      })
    );

    return passport;
  };
}
