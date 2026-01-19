import React from "react";
import styles from "./OurProcessStep.module.css";

/**
 * Props:
 * - title (string)
 * - description (string)
 * - icon (string)  -> small mono icon (png/svg)
 * - accent ("purple" | "rose") optional; alternates dotted color
 */
const OurProcessStep = ({ title, description, icon, accent = "purple" }) => {
  return (
    <div
      className={`${styles.step} ${styles[accent]}`}
      tabIndex={0}
      aria-label={`${title}. ${description}`}
    >
      <div className={styles.circle}>
        <div className={styles.front} aria-hidden="true">
          {icon && (
            <div className={styles.iconWrap}>
              <img className={styles.icon} src={icon} alt="" />
            </div>
          )}
          <h3 className={styles.title}>{title}</h3>
        </div>

        {/* Reveals on hover/focus */}
        <div className={styles.reveal} aria-hidden="true">
          <p className={styles.text}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default OurProcessStep;
