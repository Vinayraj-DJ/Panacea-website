import React from "react";
import styles from "./Influencer.module.css";

const InfluencerApp = () => {
  return (
    <div className={styles.page}>
      <div className={styles.projectBackground}>
        <div className={styles.projectHeader}>
          <div className={styles.projectTitle}>
            ━━ Influencer App (Mobile APP)
          </div>
          <p className={styles.projectDesc}>
            This app connects influencers and venue owners (restaurants, clubs,
            pubs, etc.). It helps them promote each other and run events,
            contests and collaborations smoothly in their own way.
          </p>
        </div>

        <div className={styles.projectBlock}>
          {/* Left: Details Card */}
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
                <li>Backend API architecture for scalable contests & events</li>
                <li>App Store & Play Store deployment with ongoing support</li>
              </ul>
            </div>
          </div>

          {/* Right: Image */}
          <div className={styles.projectImage}>
            <img src="/images/influencer.webp" alt="Influencer App" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfluencerApp;
