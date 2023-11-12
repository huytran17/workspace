import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;

export default store;
