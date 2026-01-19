import React from "react";
import styles from "./HyderabadPartyRentals.module.css";

const HyderabadPartyRentals = () => {
  return (
    <div className={styles.page}>
      <div className={styles.projectBackground}>
        <div className={styles.projectHeader}>
          <h3 className={styles.projectTitle}>
            HyderabadPartyRentals (Website)
          </h3>
          <p className={styles.projectDesc}>
            HyderabadPartyRentals is a rental marketplace for event equipment
            and party supplies across Hyderabad — browse decor, sound, lighting,
            furniture and props, compare prices, book & schedule delivery and
            manage orders from a single dashboard.
          </p>
        </div>

        <div className={styles.projectBlock}>
          {/* Left Image */}
          <div className={styles.projectImage}>
            {/* Place image at /public/images/hyderabadpartyrentals.png or change src to your path */}
            <img
              src="/images/hyderabadpartyrentals.webp"
              alt="Hyderabad Party Rentals"
            />
          </div>

          {/* Right Details Card */}
          <div className={styles.projectDetails}>
            <div className={styles.projectCard}>
              <h4 className={styles.techHeader}>Technology</h4>

              <ul className={styles.techList}>
                <li>
                  <span className={styles.label}>Platform</span>:{" "}
                  <span className={styles.value}>Web, PWA, Android, iOS</span>
                </li>

                <li>
                  <span className={styles.label}>Duration</span>:{" "}
                  <span className={styles.value}>4 Months</span>
                </li>

                <li>
                  <span className={styles.label}>Technologies Used</span>:{" "}
                  <span className={styles.value}>
                    React, Next.js, React Native (optional mobile), Node.js,
                    MongoDB, Stripe/Payments, Figma, Adobe
                  </span>
                </li>
              </ul>

              <h4 className={styles.techHeader}>What we did</h4>
              <ul className={styles.techList}>
                <li>End-to-end responsive UI/UX and platform development</li>
                <li>
                  Inventory & availability management, booking flow & calendar
                </li>
                <li>Secure payments, vendor dashboards and order tracking</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HyderabadPartyRentals;
