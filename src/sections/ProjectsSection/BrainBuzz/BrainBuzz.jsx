import React from "react";
import styles from "./BrainBuzz.module.css";

const BrainBuzz = () => {
  return (
    <div className={styles.page}>
      {/* Header Section */}
      <div className={styles.projectBackground}>
        <div className={styles.projectHeader}>
          <div className={styles.projectTitle}>
            ━━ BrainBuzz (Website and APP)
          </div>
          <p className={styles.projectDesc}>
            BrainBuzz is an interactive learning app that combines bite-sized
            lessons, brain games, quizzes and adaptive practice to boost memory,
            reasoning and speed. Designed for learners of all ages to make daily
            micro-learning fun and effective.
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
                  <span className={styles.value}>Android, iOS, Web</span>
                </li>
                <li>
                  <span className={styles.label}>Duration</span>:{" "}
                  <span className={styles.value}>5 Months</span>
                </li>
                <li>
                  <span className={styles.label}>Technologies Used</span>:{" "}
                  <span className={styles.value}>
                    React Native, React JS, Node JS, PostgreSQL, Figma, Adobe
                  </span>
                </li>
              </ul>

              <h4 className={styles.techHeader}>What we did</h4>
              <ul className={styles.techList}>
                <li>End-to-end UI/UX design and cross-platform development</li>
                <li>Adaptive learning engine, gamification & leaderboards</li>
                <li>Analytics, progress tracking and push notifications</li>
              </ul>
            </div>
          </div>

          {/* Right Image */}
          <div className={styles.projectImage}>
            {/* Put your BrainBuzz image at /public/images/brainbuzz.png */}
            <img src="/images/brainbuzz.webp" alt="BrainBuzz App" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrainBuzz;
