import Bcrypt from "bcrypt";

interface IVerifyPassword {
  password: string;
  hashed_passwrod: string;
}

export type VerifyPassword = ({
  password,
  hashed_passwrod,
}: IVerifyPassword) => Promise<boolean>;

export default function makeVerifyPassword({
  bcrypt,
}: {
  bcrypt: typeof Bcrypt;
}): VerifyPassword {
  return async function verifyPassword({
    password,
    hashed_passwrod,
  }: IVerifyPassword) {
    return await bcrypt.compare(password, hashed_passwrod);
  };
}
