import React from "react";
import styles from "./OmrSheetDesign.module.css";

const OmrSheetDesign = () => {
  return (
    <div className={styles.page}>
      {/* Header Section */}
      <div className={styles.projectBackground}>
        <div className={styles.projectHeader}>
          <h3 className={styles.projectTitle}>OMR Sheet Design (Website)     ━━</h3>
          <p className={styles.projectDesc}>
            This website provides you customizable OMR sheets to conduct exam
            with that you can also make customizable question paper and question
            Numbers
          </p>
        </div>

        {/* Image + Details */}
        <div className={styles.projectBlock}>
          {/* Left Image */}
          <div className={styles.projectImage}>
            <img src="/images/omrsheet.webp" alt="OMR Sheet App" />
          </div>

          {/* Right Details Box */}
          <div className={styles.projectDetails}>
            <div className={styles.projectCard}>
              <h4 className={styles.techHeader}>Technology</h4>
              <ul className={styles.techList}>
                <li>
                  <span className={styles.label}>Platform</span>:{" "}
                  <span className={styles.value}>Android, iOS, Website</span>
                </li>
                <li>
                  <span className={styles.label}>Duration</span>:{" "}
                  <span className={styles.value}>6 Months</span>
                </li>
                <li>
                  <span className={styles.label}>Technologies Used</span>:{" "}
                  <span className={styles.value}>
                    React Native, React JS, Node JS, Figma, Adobe
                  </span>
                </li>
              </ul>

              <h4 className={styles.techHeader}>What we did</h4>
              <ul className={styles.techList}>
                <li>End-to-end design (UI/UX) and development</li>
                <li>Backend API architecture for scalable contests</li>
                <li>App Store & Play Store deployment with ongoing support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OmrSheetDesign;
