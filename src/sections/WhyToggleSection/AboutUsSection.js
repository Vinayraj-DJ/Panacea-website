import React from "react";
// import Button from "../../components/Button/Button"; 
import styles from "./AboutUsSection.module.css"; // Importing the CSS module

export function AboutUsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Content - Image */}
          <div className={styles.imageWrap}>
            <div className={styles.curvedBg}></div>

            {/* Main Image Container */}
            <div className={styles.imageContainer}>
              <img
                src="/images/image21.jpeg" // Image from the public/images folder
                alt="Team collaboration workspace"
                className={styles.image}
              />
            </div>

            {/* Decorative Elements */}
            <div className={styles.decorativeElementTopRight}></div>
            <div className={styles.decorativeElementBottomLeft}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
