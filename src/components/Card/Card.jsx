import React from "react";
import styles from "./Card.module.scss";
import { Email, Person } from "@mui/icons-material";

export default function Card({ data }) {
  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <div>
          <Person className={styles.icon} />
        </div>
        <div className={styles.small_info}>
          <strong>{`${data?.first_name} ${data?.last_name}`}</strong>
          <strong className={styles.muted}>{data?.bg}</strong>
          <strong className={styles.muted}>{data?.cadre}</strong>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.upper}>
          <div className={styles.info}>
            <Email />
            <span>{data?.email}</span>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.info}>
            <strong>CC:</strong>
            <span>{data?.cc?.name}</span>
          </div>
          <div className={styles.info}>
            <strong>HYP-N:</strong>
            <span>{data?.hyperion?.name}</span>
          </div>
          <div className={styles.info}>
            <strong>HYP-F:</strong>
            <span>{data?.hyperion?.function}</span>
          </div>
          <div className={styles.info}>
            <strong>JOB:</strong>
            <span>{data?.job?.jobtitle}</span>
          </div>
          <div className={styles.info}>
            <strong>PS ID:</strong>
            <span>{data?.ps_id}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
