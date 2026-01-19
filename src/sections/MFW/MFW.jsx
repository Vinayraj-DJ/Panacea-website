import React from "react";
import PropTypes from "prop-types";
import styles from "./MFW.module.css";
import NumberedHeading from "../NumberedHeading/NumberedHeading";

export default function MFW({
  imageSrc = "/images/products/money.png",
  alt = "Money jar",
  bullets = [
    "Provides real-time fund information, performance tracking, and personalized investment insights.",
    "Allows users to browse, compare, and invest in various mutual funds from one secure dashboard.",
    "Features SIP (Systematic Investment Plan) options for consistent, automated investing.",
    "Integrates interactive charts and analytics tools to monitor portfolio performance and risk levels.",
  ],
  featuresImage = "/images/products/features-full.png",
  featuresAlt = "Key features visual",
}) {
  return (
    <>
    <NumberedHeading number={2} title="What is our Mutual funds website ?" />
      {/* ===== Top section: "What is our Mutual funds website ?" ===== */}
      <section className={styles.section} aria-labelledby="mutual-funds-heading">
        {/* heading wrapped to remove default margins */}
        <div className={styles.headingWrap}>
          
        </div>

        <div className={styles.inner}>
          {/* LEFT: bullets */}
          <div className={styles.leftCol}>
            <div id="mutual-funds-heading" className={styles.bulletsWrap}>
              <ul className={styles.bullets}>
                {bullets.map((b, i) => (
                  <li key={i} className={styles.bulletItem}>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT: Image */}
          <div className={styles.rightCol}>
            <div className={styles.imageWrapper}>
              <img src={imageSrc} alt={alt} className={styles.image} />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Features section as single image (NumberedHeading #3) ===== */}
      <section className={styles.featuresSection} aria-label="Key features">
        <div className={styles.headingWrap}>
          <NumberedHeading number={3} title="Key Features of Mutual fund Website ." />
        </div>

        <div className={styles.featuresImageWrapper}>
          <img
            src={featuresImage}
            alt={featuresAlt}
            className={styles.featuresImage}
          />
        </div>
      </section>
    </>
  );
}

MFW.propTypes = {
  imageSrc: PropTypes.string,
  alt: PropTypes.string,
  bullets: PropTypes.arrayOf(PropTypes.string),
  featuresImage: PropTypes.string,
  featuresAlt: PropTypes.string,
};
