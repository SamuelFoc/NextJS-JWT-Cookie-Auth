import React, { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
import { getCookies } from "cookies-next";
import { axiosPrivate } from "@/api/axios";

const useAxiosPrivate = () => {
  const refresh = useRefreshToken();
  const cookies = getCookies();

  useEffect(() => {
    const requestInterceptor = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${cookies?.access_token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseInterceptor = axiosPrivate.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        const originalRequest = error?.config;
        if (error?.response?.status === 403 && !originalRequest?.sent) {
          originalRequest.sent = true;
          const new_access_token = await refresh();
          originalRequest.headers[
            "Authorization"
          ] = `Bearer ${new_access_token}`;
          return axiosPrivate(originalRequest);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestInterceptor);
      axiosPrivate.interceptors.response.eject(responseInterceptor);
    };
  }, [cookies, refresh]);

  return axiosPrivate;
};

export default useAxiosPrivate;
