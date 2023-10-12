"use client";
import React, { useState } from "react";
import styles from "./form.module.scss";
import axios from "@/api/axios";
import { setUser } from "@/api/auth";
import { useRouter } from "next/navigation";

export function Form({}) {
  const router = useRouter();
  const [msg, setMsg] = useState("");
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios("/auth/login/", {
        method: "POST",
        data: form,
      });
      setUser(res?.data);
      router.push("/home");
    } catch (error) {
      setMsg("Provided Credentials are Incorrect.");
      console.error(error);
    }
  };

  return (
    <form className={styles.form}>
      <h1 className={styles.title}>JWT Auth</h1>
      <div className={styles.inputs}>
        <input
          onChange={handleChange}
          type="text"
          name="username"
          placeholder="POPLETAJan"
        />
        <input
          onChange={handleChange}
          type="email"
          name="email"
          placeholder="user.email@valeo.com"
        />
        <input
          onChange={handleChange}
          type="password"
          name="password"
          placeholder="Password"
        />
      </div>
      <div className={styles.btn_holder}>
        <div onClick={handleSubmit} className={styles.btn}>
          Sign Up
        </div>
      </div>
      {msg && <div className={styles.msg}>{msg}</div>}
    </form>
  );
}
