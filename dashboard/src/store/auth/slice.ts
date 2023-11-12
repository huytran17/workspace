import { createSlice, Slice } from "@reduxjs/toolkit";
import { reducers } from "./reducers";
import { initialState } from "./states";

export const authSlice: Slice = createSlice({
  name: "auth",
  initialState,
  reducers,
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
