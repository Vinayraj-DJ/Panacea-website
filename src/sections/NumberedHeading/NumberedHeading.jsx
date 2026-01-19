import React from "react";
import PropTypes from "prop-types";
import styles from "./NumberedHeading.module.css";

/**
 * NumberedHeading Component
 * 
 * Displays a numbered circle + title text (dynamic and responsive)
 * Example:
 * <NumberedHeading number={1} title="Key Features of Our OTT App." />
 */

const NumberedHeading = ({ number, title }) => {
  return (
    <div className={styles.headingRow}>
      <div className={styles.numberWrap}>
        <span className={styles.number}>{number}</span>
      </div>
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
};

NumberedHeading.propTypes = {
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
};

NumberedHeading.defaultProps = {
  number: 1,
  title: "Key Features of Our OTT App.",
};

export default NumberedHeading;
