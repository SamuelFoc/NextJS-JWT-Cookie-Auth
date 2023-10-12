"use client";
import axios from "@/api/axios";
import { getCookies } from "cookies-next";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const useAuthentication = () => {
  const router = useRouter();
  const cookies = getCookies();

  useEffect(() => {
    const verifyAccessToken = () => {
      const accessToken = cookies?.access_token;
      axios("/auth/token/verify/", {
        method: "POST",
        data: {
          token: accessToken,
        },
      }).catch((err) => {
        router.push("/login");
      });
    };
    verifyAccessToken();
  }, [cookies]);
};

export default useAuthentication;
