import React from "react";
import styles from "./MutualFunds.module.css";

const MutualFunds = () => {
  return (
    <div className={styles.page}>
      {/* Header Section */}
      <div className={styles.projectBackground}>
        <div className={styles.projectHeader}>
          <h3 className={styles.projectTitle}>Mutual Funds (Website)</h3>
          <p className={styles.projectDesc}>
            A modern mutual funds platform for investors — track portfolios,
            automate SIPs, view performance charts, run KYC and transactions,
            and get personalised recommendations. Built for clarity, speed and
            security for retail investors and advisors.
          </p>
        </div>

        {/* Image + Details */}
        <div className={styles.projectBlock}>
          {/* Left Image */}
          <div className={styles.projectImage}>
            {/* Place an image at /public/images/mutualfunds.png or pass/import a different path */}
            <img src="/images/mutualfunds.webp" alt="Mutual Funds Platform" />
          </div>

          {/* Right Details Box */}
          <div className={styles.projectDetails}>
            <div className={styles.projectCard}>
              <h4 className={styles.techHeader}>Technology</h4>
              <ul className={styles.techList}>
                <li>
                  <span className={styles.label}>Platform</span>:{" "}
                  <span className={styles.value}>Web, PWA, Admin Panel</span>
                </li>
                <li>
                  <span className={styles.label}>Duration</span>:{" "}
                  <span className={styles.value}>4 Months</span>
                </li>
                <li>
                  <span className={styles.label}>Technologies Used</span>:{" "}
                  <span className={styles.value}>
                    React, Next.js, Node.js, Express, PostgreSQL, Chart.js/D3,
                    OAuth/KYC integrations, Figma, Adobe
                  </span>
                </li>
              </ul>

              <h4 className={styles.techHeader}>What we did</h4>
              <ul className={styles.techList}>
                <li>End-to-end UI/UX design and responsive front-end</li>
                <li>
                  Portfolio tracking, SIP scheduler and performance charts
                </li>
                <li>
                  Secure APIs, KYC & payments integration and admin dashboard
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MutualFunds;
