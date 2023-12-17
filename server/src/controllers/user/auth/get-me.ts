import { http_status } from "@/config/constants/http-status";
import IUser from "@/database/interfaces/user";
import { get } from "lodash";

export default function makeGetMeController() {
  return function getMeController(httpRequest: { user: {} }) {
    const headers = {
      "Content-Type": "application/json",
    };

    try {
      const user = <IUser>get(httpRequest, "user", {});

      return {
        headers,
        statusCode: http_status.OK,
        body: user,
      };
    } catch (error) {
      throw {
        headers,
        statusCode: http_status.INTERNAL_SERVER_ERROR,
        body: error.message,
      };
    }
  };
}
