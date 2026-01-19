import React from "react";
import styles from "./Stox11.module.css";

const Stox11 = () => {
  return (
    <div className={styles.page}>
      <div className={styles.projectBackground}>
        <div className={styles.projectHeader}>
          <h3 className={styles.projectTitle}>STOX 11 (Mobile APP)</h3>
          <p className={styles.projectDesc}>
            This app is a fantasy app where a user can use their trading skills
            to gain money. There is also an opinion trading option where users
            can predict the future.
          </p>
        </div>

        <div className={styles.projectBlock}>
          {/* Left Image */}
          <div className={styles.projectImage}>
            <img src="/images/stox.webp" alt="STOX 11 Mobile App" />
          </div>

          {/* Right Details Card */}
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
                  <span className={styles.value}>90 Days</span>
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

export default Stox11;
