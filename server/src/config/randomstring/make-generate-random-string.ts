import RandomString from "randomstring";

interface IPayload {
  [key: string]: string | number;
}

enum CharsetType {
  NUMERIC = "numeric",
}

export type GenerateRandomString = (options: IPayload) => string | number;

export default function makeGenerateRandomString({
  randomString,
}: {
  randomString: typeof RandomString;
}): GenerateRandomString {
  return function generateRandomString(options) {
    const string = randomString.generate(options);

    if (options.charset === CharsetType.NUMERIC) {
      return Number(string);
    }

    return string;
  };
}
