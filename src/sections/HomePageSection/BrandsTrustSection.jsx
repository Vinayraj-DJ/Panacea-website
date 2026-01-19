import React from "react";
import styles from "./BrandsTrustSection.module.css";

export default function BrandsTrustSection() {
  // Inline background image (from public/)


  return (
    <section
      className={styles.section}
      style={{
        backgroundImage: `url(/images/brands-wall.webp)`,
        backgroundSize: "cover",
        maxWidth: "1400",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Apply ONLY the background image here */}
     
      <div className={styles.card}>
        <div className={styles.content}>
          <div className={styles.eyebrow}>
            Brands Trust Us <span className={styles.rule} />
          </div>
          <p className={styles.copy}>
            Leading brands trust us because we deliver consistent results,
            innovative solutions, and unmatched reliability. Our commitment to
            quality, transparency, and long-term partnerships has earned the
            confidence of startups and global enterprises alike. With a proven
            track record across industries, we don’t just meet expectations—we
            exceed them. Our commitment to quality, transparency, and long-term
            partnerships has earned the confidence of startups and global
            enterprises alike. With a proven track record across industries, we
            don’t just meet expectations—we exceed them.
          </p>
        </div>
      </div>
    </section>
  );
}
