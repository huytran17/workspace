import { createSlice, type Slice } from "@reduxjs/toolkit";
import { reducers } from "./reducers/reducers";
import { initialState } from "./states/states";
import IAuthState from "./states/state-interface";

export const authSlice: Slice<IAuthState> = createSlice({
  name: "auth",
  initialState,
  reducers,
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
