import React from "react";
import styles from "./ChildCareManagement.module.css";

const ChildCareManagement = () => {
  return (
    <div className={styles.page}>
      {/* Header Section */}
      <div className={styles.projectBackground}>
        <div className={styles.projectHeader}>
          <div className={styles.projectTitle}>
            ━━ Child Care Management (Website and APP)
          </div>
          <p className={styles.projectDesc}>
            This mobile app manages all the records of a child in the school
            including his grades, attendance, programs, notes etc. and that is
            categorised easily
          </p>
        </div>

        {/* Image + Details */}
        <div className={styles.projectBlock}>
          {/* Left Card */}
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

          {/* Right Image */}
          <div className={styles.projectImage}>
            <img src="/images/childcare.webp" alt="Child Care App" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildCareManagement;
