import React from "react";
import styles from "./GamingFeatureSection.module.css";

/**
 * Props:
 * - image: string — section main image
 * - title: string — heading text
 * - text: string — paragraph text
 * - icon: string — icon path (24px or 30px)
 * - reverse: boolean — layout flip (image right if true)
 */
export default function GamingFeatureSection({
  image,
  title,
  text,
  icon,
  reverse = false,
}) {
  return (
    <section className={`${styles.section} ${reverse ? styles.reverse : ""}`}>
      <div className={styles.container}>
        {/* Left (or right) Image */}
        <div className={styles.imageCol}>
          <img src={image} alt={title} className={styles.image} />
        </div>

        {/* Right (or left) Text */}
        <div className={styles.textRow}>
          <div className={styles.iconWrap}>
            {icon && <img src={icon} alt="" className={styles.iconImg} />}
          </div>

          <div className={styles.textContent}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.paragraph}>{text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
