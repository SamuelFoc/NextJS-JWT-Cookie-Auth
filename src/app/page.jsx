"use client";
import Link from "next/link";
import styles from "./page.module.scss";
import useAuthentication from "@/hooks/useAuthentication";

export default function Home() {
  useAuthentication();
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Where To Go?</h1>
      <div className={styles.links}>
        <ul>
          <li>
            <Link href={"/home"}>Home</Link>
          </li>
          <li>
            <Link href={"/user"}>User</Link>
          </li>
          <li>
            <Link href={"/admin"}>Admin</Link>
          </li>
          <li>
            <Link href={"/editor"}>Editor</Link>
          </li>
          <li>
            <Link href={"/logout"}>Logout</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
