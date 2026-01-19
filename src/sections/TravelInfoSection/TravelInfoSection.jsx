import React from "react";
import styles from "./TravelInfoSection.module.css";

const TravelInfoSection = ({
  leftImage = "/images/family-travel.png",
  rightImage = "/images/woman-tickets.png",
  title = "Live seat and ticket status updates.",
  highlight1 = "Live",
  highlight2 = "status",
  textColor = "#000000",
  colorPrimary = "#e63946",
  colorSecondary = "#9b6b2f",
  reverse = false,
  className = "",
}) => {
  const formattedTitle = title
    .replace(
      highlight1,
      `<span class="${styles.highlight1}">${highlight1}</span>`
    )
    .replace(
      highlight2,
      `<span class="${styles.highlight2}">${highlight2}</span>`
    );

  const cssVars = {
    "--text-color": textColor,
    "--primary-highlight": colorPrimary,
    "--secondary-highlight": colorSecondary,
  };

  return (
    <section
      className={`${styles.travelSection} ${reverse ? styles.reverse : ""} ${className}`}
      style={cssVars}
    >
      <div className={styles.imageRow}>
        <img src={leftImage} alt="Left visual" className={styles.leftImage} />

        <div className={styles.rightSide}>
          <img src={rightImage} alt="Right visual" className={styles.rightImage} />
          <h2
            className={styles.title}
            dangerouslySetInnerHTML={{ __html: formattedTitle }}
          />
        </div>
      </div>
    </section>
  );
};

export default TravelInfoSection;
