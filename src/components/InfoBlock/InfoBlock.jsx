import React from "react";
import styles from "./InfoBlock.module.css";

export default function InfoBlock({ title, description }) {
  return (
    <div className={styles.block}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{description}</p>
    </div>
  );
}
