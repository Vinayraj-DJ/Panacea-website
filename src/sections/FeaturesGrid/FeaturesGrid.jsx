import React from "react";
import styles from "./FeaturesGrid.module.css";

/**
 * FeaturesGrid
 * Props:
 *  - title: string
 *  - features: [{ id, img, title, subtitle? }]
 *
 * Images: for best results, put images in /public/images/features/...
 */
export default function FeaturesGrid({ title = "Key Features", features = [] }) {
  return (
    <section className={styles.section} aria-label="key features">
      <div className={styles.inner}>
        <h2 className={styles.title}>{title}</h2>

        <div className={styles.grid}>
          {features.map((f) => (
            <article key={f.id} className={styles.card}>
              <div className={styles.media}>
                <img
                  src={f.img}
                  alt={f.title}
                  className={styles.img}
                  loading="lazy"
                />
                <div className={styles.overlay} />
                <div className={styles.cardTitleWrap}>
                  <h3 className={styles.cardTitle}>{f.title}</h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
