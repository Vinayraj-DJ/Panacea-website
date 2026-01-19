import React from "react";
import styles from "./ValueCard.module.css";

export default function ValueCard({ image, title }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} className={styles.image} />
      </div>
      <div className={styles.titleBox}>{title}</div>
    </div>
  );
}
