import { ReducerTypes } from "./reducer-types";
import { PayloadAction } from "@reduxjs/toolkit";
import type ISystemState from "../states/state-interface";

const systemReducers = {
  [ReducerTypes.SET_IS_LOADING]: (
    state: ISystemState,
    action: PayloadAction<boolean>
  ): void => {
    state.isLoading = action.payload;
  },
};

export { systemReducers };
