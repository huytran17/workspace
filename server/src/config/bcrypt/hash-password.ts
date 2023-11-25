import Bcrypt from "bcrypt";

interface IHashPassword {
  password: string;
}

export type HashPassword = ({ password }: IHashPassword) => Promise<string>;

export default function makeHashPassword({
  bcrypt,
}: {
  bcrypt: typeof Bcrypt;
}): HashPassword {
  return async function hashPassword({ password }: IHashPassword) {
    return await bcrypt.hash(password, 10);
  };
}
