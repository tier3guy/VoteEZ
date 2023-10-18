// External Imports
import Axios, {
  InternalAxiosRequestConfig,
  AxiosError,
  AxiosResponse,
} from "axios";

// Constants
import { BACKEND_SERVER_BASE_URL } from "../constants";

// Utils
import { getAccessToken } from "../utils/TokenManager";

/**
 * Axios instance configured for making HTTP requests to the backend server.
 */
const axios = Axios.create({
  baseURL: BACKEND_SERVER_BASE_URL, // Base URL
  timeout: 5000, // Timeout for requests (in milliseconds)
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Axios request interceptor for adding an access token to the request headers.
 * @param config - Internal Axios request configuration.
 */
axios.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = getAccessToken("access_token");
    if (token !== null) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

/**
 * Axios response interceptor for handling HTTP responses.
 * @param response - Axios response object.
 */
axios.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export default axios;
