import { setCookie } from "cookies-next";

export const setUser = (data) => {
  setCookie("user", data?.user, {
    maxAge: 60 * 60 * 24,
  });
  setCookie("access_token", data?.access, {
    maxAge: 60 * 60 * 24,
  });
  setCookie("refresh_token", data?.refresh, {
    maxAge: 60 * 60 * 24,
  });
};
