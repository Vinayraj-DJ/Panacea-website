import React from "react";
import styles from "./OurServicesCard.module.css";

/**
 * Props:
 * icon, title, description (optional)
 * accent: "accentOrange" | "accentPurple" | "accentGreen" | "accentRed" | "accentPink" | "accentIndigo"
 * showDescription: boolean (default false) -> render description under the title
 */
const OurServicesCard = ({
  icon,
  title,
  description,
  accent = "accentPurple",
  showDescription = false,
}) => {
  return (
    <div className={`${styles.card} ${styles[accent]}`}>
      {/* centered ribbon */}
      <div className={styles.ribbon}>
        <div className={styles.ribbonInner}>
          <img src={icon} alt="" className={styles.ribbonIcon} />
        </div>
      </div>

      {/* title (and optional description) BELOW the ribbon */}
      <h3 className={styles.title}>{title}</h3>
      {showDescription && description && (
        <p className={styles.description}>{description}</p>
      )}
    </div>
  );
};

export default OurServicesCard;
