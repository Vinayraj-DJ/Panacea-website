import React from "react";
import PropTypes from "prop-types";
import styles from "./HeroSection.module.css";

export default function HeroSection({
  title,
  description,
  description2,
  imageSrc,
  reverse = false,
  accent = "#4070B1",
  maxWidth = "560px",
  background = "linear-gradient(90deg, #ffffff 0%, #faf5ff 100%)",
}) {
  const sectionStyle = {
    "--hero-accent": accent,
    "--content-max-width": maxWidth,
    "--hero-background": background,
  };

  return (
    <section
      className={`${styles.heroSection} ${reverse ? styles.reverse : ""}`}
      style={sectionStyle}
    >
      <div className={styles.container}>
        <div className={styles.textBlock}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
          <p className={styles.description2}>{description2}</p>
        </div>

        <div className={styles.imageBlock}>
          <img src={imageSrc} alt="Celebration" className={styles.image} />
        </div>
      </div>
    </section>
  );
}

HeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
  accent: PropTypes.string,
  maxWidth: PropTypes.string,
  background: PropTypes.string,
};
