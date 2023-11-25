import { PayloadAction } from "@reduxjs/toolkit";
import { ReducerTypes } from "./reducer-types";
import type IAuthState from "../states/state-interface";

const reducers = {
  [ReducerTypes.SET_HAS_USER]: (
    state: IAuthState,
    action: PayloadAction<boolean>
  ): void => {
    state.hasUser = action.payload;
  },
};

export { reducers };
