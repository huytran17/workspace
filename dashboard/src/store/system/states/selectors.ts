import { type RootState } from "@/store";

const systemSelectors = {
  isLoading: (state: RootState) => state.system.isLoading,
};

export { systemSelectors };
