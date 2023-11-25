import { createSlice, type Slice } from "@reduxjs/toolkit";
import { authReducers } from "./reducers/reducers";
import { initialAuthState } from "./states/states";

export const authSlice: Slice<typeof initialAuthState> = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: authReducers,
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
