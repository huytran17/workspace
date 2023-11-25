import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/slice";
import systemReducer from "./system/slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    system: systemReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;

export default store;
