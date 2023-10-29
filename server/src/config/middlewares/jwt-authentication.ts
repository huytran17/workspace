import { passport_jwt } from "../passport";

export default function JWTAuthentication() {
  return passport_jwt().authenticate("jwt", { session: false });
}
