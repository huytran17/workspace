import { RootDispatch } from "@/store";
import { ActionTypes } from "./action-types";
import axios from "axios";

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
  const user = await axios.get(
    "https://wizard-world-api.herokuapp.com/Elixirs"
  );

  console.log("-----------------", user);

  dispatch({
    type: ActionTypes.REGISTER,
    payload,
  });
};

export { SET_HAS_USER, SET_USER_DATA, UPDATE_USER_DATA, REGISTER };
