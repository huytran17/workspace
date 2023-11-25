import { ActionTypes } from "./action-types";

const SET_HAS_USER = (payload: boolean) => ({
  type: ActionTypes.SET_HAS_USER,
  payload,
});

export { SET_HAS_USER };
