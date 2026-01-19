// components/common/KeyBenefits.jsx
import React from "react";
import styles from "./KeyBenefits.module.css";

export default function KeyBenefits({ title = "Key Benefits Of Full Stack Development", items = [] }) {
  return (
    <section className={styles.wrap}>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.list}>
        {items.map((t, i) => (
          <li key={i} className={styles.item}>{t}</li>
        ))}
      </ul>
    </section>
  );
}
