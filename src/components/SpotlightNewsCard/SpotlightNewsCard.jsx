import React from "react";
import styles from "./SpotlightNewsCard.module.css";
import { FiArrowUpRight } from "react-icons/fi";

export default function SpotlightNewsCard({
  image,
  title,
  excerpt,
  date,
  large = false,
}) {
  return (
    <article
      className={`${styles.card} ${large ? styles.large : styles.small}`}
    >
      {/* Image */}
      <div className={styles.thumb}>
        <img src={image} alt={title} />
      </div>

      {/* Content */}
      <div className={styles.body}>
        <a
          className={styles.titleRow}
          href="#"
          onClick={(e) => e.preventDefault()}
        >
          <h3 className={styles.title}>{title}</h3>
          <FiArrowUpRight className={styles.arrow} />
        </a>
        <p className={styles.excerpt}>{excerpt}</p>
        <div className={styles.date}>{date}</div>
      </div>
    </article>
  );
}
