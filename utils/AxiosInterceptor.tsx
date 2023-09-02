import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import Swal from "sweetalert2";

const client = axios.create({
  // baseURL: import.meta.env.VITE_BASEURL,
});
const onRequest = (config: InternalAxiosRequestConfig) => {
  // const token = localStorage.getItem(import.meta.env.VITE_AUTH_TOKEN_KEY);
  // if (token) {
  //   config.headers.Authorization = "bearer " + token;
  // }
  // config.withCredentials = true;
  return config;
};
const onError = (error: AxiosError) => {
  if (error?.response?.status === 401) {
    Swal.fire({
      icon: "error",
      text: "توکن احراز هویت شما معتبر نیست یا منقضی شده است.",
      allowOutsideClick: false,
    }).then(() => {
      window.location.href = "/";
    });
  } else {
    Swal.fire({
      icon: "error",
      text: error.message,
    });
  }
  return Promise.reject(error);
};
client.interceptors.request.use(onRequest, (error) => Promise.reject(error));
client.interceptors.response.use((response) => response, onError);

export default client;
