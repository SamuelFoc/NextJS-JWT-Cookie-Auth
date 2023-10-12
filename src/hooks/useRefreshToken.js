import axios from "@/api/axios";
import { getCookies, setCookie } from "cookies-next";

const useRefreshToken = () => {
  const cookies = getCookies();
  const refresh_token = cookies.refresh_token;

  const refresh = async () => {
    axios("/auth/token/refresh/", {
      method: "POST",
      data: {
        refresh: refresh_token,
      },
    })
      .then((response) => {
        setCookie("access_token", response.data.access);
        return response.data.access;
      })
      .catch((err) => {
        console.log(err);
        return new Error(err);
      });
  };
  return refresh;
};

export default useRefreshToken;
