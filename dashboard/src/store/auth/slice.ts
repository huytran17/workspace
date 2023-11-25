import { createSlice, type Slice } from "@reduxjs/toolkit";
import { authReducers } from "./reducers/reducers";
import { initialAuthState } from "./states/states";
import IAuthState from "./states/state-interface";

export const authSlice: Slice<IAuthState> = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: authReducers,
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
