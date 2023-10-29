import Bcrypt from "bcrypt";

export default function makeHashPassword({
  bcrypt,
}: {
  bcrypt: typeof Bcrypt;
}) {
  return async function hashPassword({ password }: { password: string }) {
    return await bcrypt.hash(password, 10);
  };
}
