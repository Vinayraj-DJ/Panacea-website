import React from "react";
import styles from "./WhyChooseUsSection.module.css";

const FEATURES = [
  { image: "/images/expertise.png", title: "Best Expertise" },
  { image: "/images/value.png", title: "Value for Money" },
  { image: "/images/support.png", title: "Communication & Support" },
  { image: "/images/reliability.png", title: "Reliability" },
];

const WhyChooseUsSection = () => {
  return (
    <section
      className={styles.section}
      style={{
        backgroundImage: `url(/images/backgroundwhychooseus.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Header */}
      <div className={styles.header}>
        <h2 className={styles.title}>
          Why Choose Us <span className={styles.line}></span>
        </h2>
        <p className={styles.description}>
          At <strong>Panacea</strong>, we build powerful, scalable, and
          user-friendly software solutions that help businesses innovate, grow,
          and thrive in the digital age. From idea to execution, our products
          are designed to deliver real impact.
        </p>
      </div>

      {/* Feature Cards */}
      <div className={styles.container}>
        {FEATURES.map((f) => (
          <div key={f.title} className={styles.card}>
            <div className={styles.imageWrap}>
              <img src={f.image} alt={f.title} className={styles.img} />
            </div>
            <div className={styles.caption}>{f.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
