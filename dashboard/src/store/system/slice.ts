import { createSlice, type Slice } from "@reduxjs/toolkit";
import { systemReducers } from "./reducers/reducers";
import { initialSystemState } from "./states/states";

const systemSlice: Slice<typeof initialSystemState> = createSlice({
  name: "system",
  initialState: initialSystemState,
  reducers: systemReducers,
});

export const systemActions = systemSlice.actions;

export default systemSlice.reducer;
