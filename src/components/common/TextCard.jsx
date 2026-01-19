// components/common/TextCard.jsx
import React from "react";
import styles from "./TextCard.module.css";

export default function TextCard({ title, children }) {
  return (
    <section className={styles.wrap}>
      {title && <h3 className={styles.title}>{title}</h3>}
      <div className={styles.text}>{children}</div>
    </section>
  );
}
