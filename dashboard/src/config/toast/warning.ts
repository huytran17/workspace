import { toast as _toast } from "react-toastify";

const defaultOptions = {
  progressStyle: {
    backgroundColor: "#FFFFFF",
  },
};

export default function makeToastWarning({ toast }: { toast: typeof _toast }) {
  return function toastWarning({
    message = "",
    options = {},
  }: {
    message?: string;
    options?: object;
  }) {
    return toast.error(message, { ...defaultOptions, ...options });
  };
}
