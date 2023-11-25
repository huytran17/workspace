import { RootState } from "@/store";

const authSelectors = {
  selectHasUser: (state: RootState) => state.auth.hasUser,
  selectUser: (state: RootState) => state.auth.user,
};

export default authSelectors;
