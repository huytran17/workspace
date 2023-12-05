import { RootDispatch } from "@/store";
import { ActionTypes } from "./action-types";
import axios from "axios";
import { get } from "lodash";
import { toastError } from "@/config/toast";

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
    const { data } = await axios.post(`/auth/login`, payload);
    const access_token = get(data, "access_token", "");

    localStorage.setItem("access_token", access_token);
  } catch (error) {
    toastError({ message: "Encountered error while logging in" });
  }
};

export { SET_HAS_USER, SET_USER_DATA, UPDATE_USER_DATA, REGISTER, LOGIN };
