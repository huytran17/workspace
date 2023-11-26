import { Rule } from "antd/es/form";

const registrationRules = {
  email: [
    { required: true, message: "Please input your email." },
    { type: "email", message: "Email format is invalid." },
  ] as Rule[],
  fullname: [
    { required: true, message: "Please input your fullname." },
    { type: "string", message: "Numeric characters are not accepted." },
    { min: 2, message: "Please enter at least 2 characters." },
    { max: 40, message: "Please enter at most 40 characters." },
  ] as Rule[],
  password: [
    { required: true, message: "Please input your password." },
    { min: 8, message: "Please enter at least 8 characters." },
  ] as Rule[],
  password_confirmation: [
    {
      required: true,
      message: "Please input your password confirmation.",
    },
    ({ getFieldValue }: { getFieldValue: any }) => ({
      validator(_: any, value: string) {
        if (!value || getFieldValue("password") === value) {
          return Promise.resolve();
        }
        return Promise.reject(
          new Error("The new password that you entered do not match")
        );
      },
    }),
  ] as Rule[],
};

export { registrationRules };
