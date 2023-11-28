import { toast } from "react-toastify";
import makeToastError from "./error";
import makeToastSuccess from "./success";
import makeToastInfo from "./info";
import makeToastWarning from "./warning";

const toastError = makeToastError({ toast });
const toastSuccess = makeToastSuccess({ toast });
const toastInfo = makeToastInfo({ toast });
const toastWarning = makeToastWarning({ toast });

export { toastError, toastSuccess, toastInfo, toastWarning };
