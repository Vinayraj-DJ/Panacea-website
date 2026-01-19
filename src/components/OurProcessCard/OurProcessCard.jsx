import React from "react";
import styles from "./OurProcessCard.module.css";

const OurProcessCard = ({ title, description, icon }) => {
  return (
    <div className={styles.card}>
      <div className={styles.iconContainer}>
        <img src={icon} alt="icon" className={styles.icon} />
      </div>
      <div className={styles.textContainer}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </div>
  );
};

export default OurProcessCard;
