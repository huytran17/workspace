import { RootState } from "@/store";

const authSelectors = {
  selectHasUser: (state: RootState) => state.auth.hasUser,
};

export default authSelectors;
