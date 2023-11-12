import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, RootDispatch } from "@/store";

export const useRootDispatch: () => RootDispatch = useDispatch;
export const useRootSelector: TypedUseSelectorHook<RootState> = useSelector;
