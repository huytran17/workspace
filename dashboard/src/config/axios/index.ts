import axios, { InternalAxiosRequestConfig } from "axios";
import { SET_IS_LOADING } from "@/store/system/actions/actions";
import { RootDispatch } from "@/store";

const initialAxios = (dispatch: RootDispatch) => {
  axios.defaults.baseURL = `${process.env.REACT_APP_SERVER_URL}/api`;

  axios.interceptors.request.use((request: InternalAxiosRequestConfig) => {
    console.log(`Making request to ${request.url}`);

    dispatch(SET_IS_LOADING(true));

    request.headers.set({
      Authorization: localStorage.getItem("access_token"),
      "token-type": "bearer",
    });

    return request;
  });

  axios.interceptors.response.use(
    (response) => {
      console.log(`Got response from ${response.config.url}`);

      dispatch(SET_IS_LOADING(false));

      return response;
    },
    (error) => {
      dispatch(SET_IS_LOADING(false));
      return Promise.reject(error);
    }
  );
};

export default initialAxios;
