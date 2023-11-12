import { PayloadAction } from "@reduxjs/toolkit";
import { ReducerTypes } from "./reducer-types";
import IState from "./state-interface";

const reducers = {
  [ReducerTypes.SET_HAS_USER]: (
    state: IState,
    action: PayloadAction<boolean>
  ): void => {
    state.hasUser = action.payload;
  },
};

export { reducers };
