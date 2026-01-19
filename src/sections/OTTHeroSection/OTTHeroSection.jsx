// src/sections/OTTHeroSection/OTTHeroSection.jsx
import React from "react";
import styles from "./OTTHeroSection.module.css";

/**
 * OTTHeroSection
 *
 * Props:
 *  - title: optional heading text (renders above image, centered)
 *  - heroImage: string (large mockup image path) e.g. "/images/products/ott-hero-mockup.png"
 *  - phoneImage: string (small phone image path) e.g. "/images/products/ott-phone.png"
 *  - altHero / altPhone: alt text strings
 *
 * Example:
 * <OTTHeroSection
 *   title="OTT App"
 *   heroImage="/images/products/ott-hero-mockup.png"
 *   phoneImage="/images/products/ott-phone.png"
 * />
 */
const OTTHeroSection = ({
  title,
  heroImage = "/images/products/ott-hero-mockup.png",
  phoneImage = "/images/products/ott-phone.png",
  altHero = "OTT mockup",
  altPhone = "OTT phone mockup",
}) => {
  return (
    <section className={styles.section}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <div className={styles.visualWrap}>
        <div className={styles.heroFrame}>
          <img src={heroImage} alt={altHero} className={styles.heroImage} />
        </div>

        {/* phone overlay positioned on top of hero for desktop/tablet */}
        {phoneImage && (
          <div className={styles.phoneWrap} aria-hidden="false">
            <img src={phoneImage} alt={altPhone} className={styles.phoneImage} />
          </div>
        )}
      </div>
    </section>
  );
};

export default OTTHeroSection;
