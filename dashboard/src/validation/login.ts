import { Rule } from "antd/es/form";

const loginRules = {
  email: [
    { required: true, message: "Please input your email." },
    { type: "email", message: "Email format is invalid." },
  ] as Rule[],
  password: [
    { required: true, message: "Please input your password." },
  ] as Rule[],
};

export { loginRules };
