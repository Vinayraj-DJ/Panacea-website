import React from "react";
import styles from "./FitnessSection.module.css";

/**
 * Props:
 *  - title: main heading (string)
 *  - highlight: highlighted part of heading (string)
 *  - description: paragraph text (string)
 *  - image: path to image (string)
 *  - imageAlt: alt text (string)
 *
 * Usage:
 * <FitnessSection
 *   title="Stronger Every Day with"
 *   highlight="Smart Fitness"
 *   description="Staying fit is no longer just about hitting the gym — it’s about embracing smart fitness solutions ... "
 *   image="/images/fitness/image.png"
 *   imageAlt="gym equipment illustration"
 * />
 */

const FitnessSection = ({
  title = "Stronger Every Day with",
  highlight = "Smart Fitness",
  description = `Staying fit is no longer just about hitting the gym — it’s about embracing smart fitness solutions that adapt to your lifestyle. Our Fitness App empowers users to become stronger, healthier, and more consistent every day with intelligent tracking, personalized workout plans, and real-time performance insights.`,
  image = "/images/products/fitness1.1.webp",
  imageAlt = "fitness illustration",
}) => {
  return (
    <section className={styles.section} aria-labelledby="fitness-heading">
      <div className={styles.inner}>
        <div className={styles.left}>
          <h2 id="fitness-heading" className={styles.heading}>
            <span className={styles.titleTop}>{title}</span>
            <span className={styles.highlight}> {highlight}</span>
          </h2>

          <p className={styles.desc}>{description}</p>
        </div>

        <figure className={styles.right} aria-hidden={false}>
          <img src={image} alt={imageAlt} className={styles.image} />
        </figure>
      </div>
    </section>
  );
};

export default FitnessSection;
