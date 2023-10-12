"use client";
import Link from "next/link";
import React from "react";
import styles from "./page.module.scss";
import useAuthentication from "@/hooks/useAuthentication";

const Page = () => {
  useAuthentication();
  return (
    <main className={styles.main}>
      <h1>EDITOR</h1>
      <Link href={"/"}>List of Links</Link>
    </main>
  );
};

export default Page;
