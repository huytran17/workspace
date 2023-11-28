import { toast as _toast } from "react-toastify";

const defaultOptions = {
  progressStyle: {
    backgroundColor: "#FFFFFF",
  },
};

export default function makeToastSuccess({ toast }: { toast: typeof _toast }) {
  return function toastSuccess({
    message = "",
    options = {},
  }: {
    message?: string;
    options?: object;
  }) {
    return toast.error(message, { ...defaultOptions, ...options });
  };
}
