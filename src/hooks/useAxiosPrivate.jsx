import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import { useEffect } from "react";

const axiosPrivate = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const useAxiosPrivate = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();

  useEffect(() => {
    const requestInterceptor = axiosPrivate.interceptors.request.use(
      function (config) {
        const token = localStorage.getItem("access-token");
        // config.headers.authorization = `Bearer ${token}`;
        if (token) {
          config.headers.authorization = `Bearer ${token}`;
        } else {
          console.warn("No access token found");
        }
        return config;
      },
      function (error) {
        console.error("Request error:", error);
        return Promise.reject(error);
      }
    );

    // const responseInterceptor = axiosPrivate.interceptors.response.use(
    //   function (response) {
    //     return response;
    //   },
    //   async (error) => {
    //     const status = error.response?.status;
    //     if (status === 401 || status === 403) {
    //       await logOut();
    //       navigate("/");
    //     }
    //     return Promise.reject(error);
    //   }
    // );
    const responseInterceptor = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (!error.response) {
          console.error("No response received:", error);
          return Promise.reject(error);
        }

        const status = error.response.status;
        if (status === 401 || status === 403) {
          console.warn(`Access denied: ${status}`);
          await logOut();
          navigate("/"); // Navigate the user to the homepage
        }
        return Promise.reject(error);
      }
    );

    // Cleanup the interceptors when the component unmounts
    return () => {
      axiosPrivate.interceptors.request.eject(requestInterceptor);
      axiosPrivate.interceptors.response.eject(responseInterceptor);
    };
  }, [logOut, navigate]);

  return axiosPrivate;
};

export default useAxiosPrivate;
