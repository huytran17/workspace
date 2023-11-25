import { ActionTypes } from "./action-types";

const SET_IS_LOADING = (payload: boolean) => ({
  type: ActionTypes.SET_IS_LOADING,
  payload,
});

export { SET_IS_LOADING };
