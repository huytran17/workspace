import { toastError } from "@/config/toast";
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
  try {
    const { data } = await axios.post(`/auth/register`, payload);

    dispatch({
      type: ActionTypes.SET_USER_DATA,
      payload: data,
    });
  } catch (error) {
    toastError({ message: "Encountered error while registering user" });
  }
};

const LOGIN = (payload: object) => async () => {
  try {
    await axios.post(`/auth/login`, payload);
  } catch (error) {
    toastError({ message: "Encountered error while logging in" });
  }
};

const SEND_PASSWORD_RESET_EMAIL = (payload: { email: string }) => async () => {
  try {
    await axios.post("/password-reset/send-password-reset-email", payload);
  } catch (error) {
    console.error(error);
  }
};

const RESET_PASSWORD =
  (payload: {
    token: string;
    password: string;
    password_confirmation: string;
  }) =>
  async () => {
    try {
      await axios.put("/password-reset/reset-password", payload);
    } catch (error) {
      console.error(error);
    }
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
