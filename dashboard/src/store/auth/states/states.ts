import type IAuthState from "./state-interface";

const initialAuthState: IAuthState = {
  hasUser: false,
  user: {},
};

export { initialAuthState };
