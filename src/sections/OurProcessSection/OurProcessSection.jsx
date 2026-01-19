
import React from "react";
import styles from "./OurProcessSection.module.css";

const OurProcessSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.leftSide}>
        <h4 className={styles.sectionSubtitle}>Our Process</h4>
        <h2 className={styles.sectionTitle}>
          <span>Idea</span> to <span>Execution</span> Every Step Matters.
        </h2>

        {/* Image only */}
      </div>
      <img
        src="/images/imageprocess.webp"
        alt="Our process flow"
        className={styles.processImage}
      />
    </section>
  );
};

export default OurProcessSection;
