import { RootDispatch } from "@/store";
import axios from "axios";
import { ActionTypes } from "./action-types";

const SET_HAS_USER = (payload: boolean) => ({
  type: ActionTypes.SET_HAS_USER,
  payload,
});

const SET_USER_DATA = (payload: object) => ({
  type: ActionTypes.SET_USER_DATA,
  payload,
});

const UPDATE_USER_DATA = (payload: { path: string; data: any }) => ({
  type: ActionTypes.UPDATE_USER_DATA,
  payload,
});

const REGISTER = (payload: object) => async (dispatch: RootDispatch) => {
  const { data } = await axios.post(`/auth/register`, payload);

  dispatch({
    type: ActionTypes.SET_USER_DATA,
    payload: data,
  });
};

const LOGIN = (payload: object) => async () => {
  await axios.post(`/auth/login`, payload);
};

const SEND_PASSWORD_RESET_EMAIL = (payload: { email: string }) => async () => {
  await axios.post("/password-reset/send-password-reset-email", payload);
};

const RESET_PASSWORD =
  (payload: {
    token: string;
    password: string;
    password_confirmation: string;
  }) =>
  async () => {
    await axios.put("/password-reset/reset-password", payload);
  };

export {
  LOGIN,
  REGISTER,
  SET_HAS_USER,
  SET_USER_DATA,
  UPDATE_USER_DATA,
  SEND_PASSWORD_RESET_EMAIL,
  RESET_PASSWORD,
};
