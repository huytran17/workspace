const register_validator = {
  email: "required|email",
  fullname: "required|string|min:2|max:40",
  password: "required|string|min:8|confirmed",
  password_confirmation: "required|string",
};

export { register_validator };
