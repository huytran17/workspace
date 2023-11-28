import { toast as _toast } from "react-toastify";

const defaultOptions = {
  progressStyle: {
    backgroundColor: "#FFFFFF",
  },
};

export default function makeToastError({ toast }: { toast: typeof _toast }) {
  return function toastError({
    message = "",
    options = {},
  }: {
    message?: string;
    options?: object;
  }) {
    return toast.error(message, { ...defaultOptions, ...options });
  };
}
