import { toast as _toast } from "react-toastify";

const defaultOptions = {
  progressStyle: {
    backgroundColor: "#FFFFFF",
  },
};

export default function makeToastInfo({ toast }: { toast: typeof _toast }) {
  return function toastInfo({
    message = "",
    options = {},
  }: {
    message?: string;
    options?: object;
  }) {
    return toast.error(message, { ...defaultOptions, ...options });
  };
}
