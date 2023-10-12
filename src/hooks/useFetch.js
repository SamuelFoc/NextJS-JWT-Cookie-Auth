"use client";
import axios from "axios";
import { getCookies } from "cookies-next";
import { useEffect, useState } from "react";

const useFetch = (config) => {
  const cookies = getCookies();
  const [data, setData] = useState();

  if (!config?.headers || !config?.headers?.Authorization) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${cookies?.access_token}`,
    };
  }
  useEffect(() => {
    const run =
      config?.condition === undefined
        ? true
        : config?.condition === true
        ? true
        : false;
    if (run) {
      try {
        axios(config).then((res) => {
          if (config?.raw) {
            setData(res);
          } else {
            setData(res?.data?.data);
          }
          if (config?.reload) {
            window.location.reload();
          }
        });
      } catch (error) {
        console.log(error);
        return null;
      }
    }
  }, [config?.deps]);
  return data;
};

export default useFetch;
