
import React from "react";
import styles from "./GamingShowcaseSection.module.css";

/**
 * Props:
 * - background: string -> path to background image (1440x710)
 * - showcase: string -> path to combined phones image (should be 925x522 ideally)
 */
export default function GamingShowcaseSection({
  background = "/images/background-image.png",
  showcase = "/images/gaming-showcase.png",
}) {
  return (
    <section className={styles.section}>
      <div
        className={styles.bgContainer}
        style={{ backgroundImage: `url(${background})` }}
        aria-hidden={false}
      >
        <div className={styles.showcaseWrapper}>
          <img
            src={showcase}
            alt="Gaming showcase"
            className={styles.showcaseImage}
            loading="lazy"
            width="925"
            height="522"
          />
        </div>
      </div>
    </section>
  );
}
