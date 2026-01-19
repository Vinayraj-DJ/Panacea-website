import React from "react";
import styles from "./WhatWeDoSection.module.css";

const WhatWeDoSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Left image */}
        <div className={styles.imageWrapper}>
          <img
            src="/images/aboutus/hemachandra.jpg" // <-- replace with your new image
            alt="What we do"
            className={styles.image}
          />
        </div>

        {/* Right content */}
        <div className={styles.content}>
          <h2 className={styles.title}>What we do ?</h2>
          <p className={styles.text}>
            At the heart of our company lies a simple yet powerful philosophy:
            quality, trust, and long-term value. We believe in building strong,
            transparent relationships with our clients—grounded in mutual
            respect, clear communication, and a commitment to excellence.
          </p>
          <p className={styles.text}>
            We don’t just deliver services; we deliver results that matter. Our
            approach is client-first, always listening carefully to understand
            your needs, challenges, and goals. Every project we take on is
            guided by integrity, innovation, and a passion for continuous
            improvement. Whether the task is big or small, we believe in doing
            it right—with purpose, professionalism, and pride.
          </p>
          <p className={styles.signature}>- Gariganti Hema Chandu (CEO )</p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
