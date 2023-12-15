const reset_password_validator = {
  token: "required|string",
  password: "required|string|min:8|confirmed",
  password_confirmation: "required|string",
};

export { reset_password_validator };
