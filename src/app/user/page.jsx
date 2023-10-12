"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.scss";
import Link from "next/link";
import useAuthentication from "@/hooks/useAuthentication";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import Card from "@/components/Card/Card";

const Page = () => {
  const [employees, setEmployees] = useState();
  useAuthentication();

  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    const getEmployees = async () => {
      try {
        const response = await axiosPrivate.get("/employee/");
        setEmployees(response?.data?.results);
      } catch (error) {
        console.log(error);
      }
    };
    getEmployees();
  }, []);

  return (
    <main className={styles.main}>
      <h1>USER</h1>
      <Link href={"/"}>List of Links</Link>
      <div className={styles.list}>
        {employees?.map((employee, key) => (
          <Card key={key} data={employee} />
        ))}
      </div>
    </main>
  );
};

export default Page;
