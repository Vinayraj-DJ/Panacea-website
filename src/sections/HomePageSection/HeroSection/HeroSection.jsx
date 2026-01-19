import React, { useState } from "react";
import styles from "./HeroSection.module.css";
import defaultImg from "../../../assets/images/office-default.webp";
import hoverImg from "../../../assets/images/office-hover.webp";

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={styles.heroWrapper}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${defaultImg})` }}
      />
      <div
        className={`${styles.backgroundImage} ${styles.hoverLayer}`}
        style={{
          backgroundImage: `url(${hoverImg})`,
          opacity: isHovered ? 1 : 0,
        }}
      />
    </div>
  );
};

export default HeroSection;
