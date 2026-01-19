// PlatformFeaturesSection.jsx
import React from "react";
import styles from "./PlatformFeaturesSection.module.css";

const PlatformFeaturesSection = ({ title, platforms = [] }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.platforms}>
        {platforms.map((p) => (
          <div key={p.id} className={styles.card}>
            <div className={styles.iconWrap}>
              <img src={p.icon} alt={p.name} className={styles.icon} />
            </div>

            <div className={styles.body}>
              <div className={styles.name}>{p.name}</div>
              <p className={styles.desc}>{p.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlatformFeaturesSection;
