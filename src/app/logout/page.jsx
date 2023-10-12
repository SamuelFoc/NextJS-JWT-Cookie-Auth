"use client";
import React, { useEffect } from "react";
import styles from "./page.module.scss";
import Link from "next/link";
import { deleteCookie } from "cookies-next";

const Page = () => {
  useEffect(() => {
    deleteCookie("access_token");
    deleteCookie("refresh_token");
    deleteCookie("user");
  }, []);

  return (
    <main className={styles.main}>
      <h1>You've Been Logged Out</h1>
      <Link href={"/login"}>Log In</Link>
    </main>
  );
};

export default Page;
