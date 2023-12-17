import { type RootState } from "@/store";

const authSelectors = {
  hasUser: (state: RootState) => state.auth.hasUser,
  user: (state: RootState) => state.auth.user,
};

export default authSelectors;
