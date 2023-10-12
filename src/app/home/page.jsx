"use client";
import React from "react";
import styles from "./page.module.scss";
import Link from "next/link";
import useAuthentication from "@/hooks/useAuthentication";

const Page = () => {
  useAuthentication();

  return (
    <main className={styles.main}>
      <h1>HOME</h1>
      <Link href={"/"}>List of Links</Link>
    </main>
  );
};

export default Page;
