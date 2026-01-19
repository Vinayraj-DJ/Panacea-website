// src/sections/ProductsPlatformsSection/ProductsPlatformsSection.jsx
import React from "react";
import styles from "./ProductsPlatformsSection.module.css";

const CARDS = [
  { value: "100 +", text: "Professionals in Global Network" },
  { value: "10 +", text: "Users  that are using our products" },
  { value: "10 +", text: "Professionals in Global Network" },
  { value: "10 +", text: "Professionals in Global Network" },
];

const ProductsPlatformsSection = () => {
  return (
    <section className={styles.section}>
      {/* Header */}
      <div className={styles.header}>
        <h2 className={styles.title}>
          PRODUCTS & PLATFORMS <span className={styles.line} />
        </h2>

        <div className={styles.leadWrap}>
          <p className={styles.lead}>
            Use our products that are&nbsp; well made
            <br />
            and built
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className={styles.cards}>
        {CARDS.map((c) => (
          <div key={c.text} className={styles.card}>
            <div className={styles.value}>{c.value}</div>
            <p className={styles.caption}>{c.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsPlatformsSection;
