import React from "react";
import styles from "./AwardCard.module.css";

const AwardCard = ({ year, title, desc, img }) => {
  return (
    <article className={styles.card}>
      {/* Left: big badge image */}
      <div className={styles.badgeWrap}>
        <img src={img} alt={title} className={styles.badge} />
        {/* mobile-only year beneath badge */}
        <div className={styles.yearMobile}>{year}</div>
      </div>

      {/* Right: content */}
      <div className={styles.cardContent}>
        {/* desktop-only year above the top border */}
        <div className={styles.yearDesktop}>{year}</div>

        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDesc}>{desc}</p>
      </div>
    </article>
  );
};

export default AwardCard;
