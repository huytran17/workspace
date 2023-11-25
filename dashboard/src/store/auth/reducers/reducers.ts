import { PayloadAction } from "@reduxjs/toolkit";
import { ReducerTypes } from "./reducer-types";
import type IAuthState from "../states/state-interface";
import { update } from "lodash";

const authReducers = {
  [ReducerTypes.SET_HAS_USER]: (
    state: IAuthState,
    action: PayloadAction<boolean>
  ): void => {
    state.hasUser = action.payload;
  },

  [ReducerTypes.SET_USER_DATA]: (
    state: IAuthState,
    action: PayloadAction<object>
  ): void => {
    state.user = action.payload;
  },

  [ReducerTypes.UPDATE_USER_DATA]: (
    state: IAuthState,
    action: PayloadAction<{ path: string; data: any }>
  ): void => {
    state.user = update(state.user, action.payload.path, action.payload.data);
  },
};

export { authReducers };
