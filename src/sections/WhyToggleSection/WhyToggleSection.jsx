import React from "react";
import styles from "./WhyToggleSection.module.css";

export default function WhyToggleSection() {
  return (
    <section
      className={styles.section}
      
    >
      <div className={styles.card}>
        <div className={styles.grid}>
          {/* Left image */}
          <div className={styles.imageWrap}>
            <img
              src="/images/why-image.png" // public/images/why-image.png
              alt="Team collaboration"
              className={styles.image}
            />
          </div>

          {/* Right content */}
          <div className={styles.content}>
            <div className={styles.eyebrow}>
              About Us <span className={styles.rule} />
            </div>

            <h1 className={styles.title}>
              We Are Experts
              <br />
              in <span>Building</span> Dreams
            </h1>

            <p className={styles.copy}>
              We are a passionate team dedicated to delivering high-quality
              products, services, and solutions with a focus on core values like
              innovation, customer satisfaction, and integrity.
            </p>

            <button className={styles.cta}>Read More</button>
          </div>
        </div>
      </div>
    </section>
  );
}
