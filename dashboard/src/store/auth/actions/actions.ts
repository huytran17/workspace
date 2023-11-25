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

export { SET_HAS_USER, SET_USER_DATA, UPDATE_USER_DATA };
