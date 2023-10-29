import Bcrypt from "bcrypt";

export default function makeVerifyPassword({
  bcrypt,
}: {
  bcrypt: typeof Bcrypt;
}) {
  return async function verifyPassword({
    password,
    hashed_passwrod,
  }: {
    password: string;
    hashed_passwrod: string;
  }) {
    return await bcrypt.compare(password, hashed_passwrod);
  };
}
