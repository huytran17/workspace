import { passport_jwt } from "@/config/passport";

export default function makeJWTAuthentication() {
  return function JWTAuthentication() {
    return passport_jwt().authenticate("jwt-user", { session: false });
  };
}
