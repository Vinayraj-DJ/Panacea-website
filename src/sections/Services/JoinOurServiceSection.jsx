
import React, { useState, useRef } from "react";
import styles from "./JoinOurServiceSection.module.css";
import Button from "../../components/Button/Button";
import { FiX } from "react-icons/fi";
import PropTypes from "prop-types";

const JoinOurServiceSection = ({
  // Content props (default values preserved)
  title = "JOIN OUR SERVICE",
  paragraphs = [
    "At Panacea , we believe that our service is not just a transaction — it's a relationship built on trust, quality, and results. Every interaction with our clients reflects our dedication to solving problems, creating value, and delivering beyond expectations",
    "Over the years, brands from diverse industries have chosen Panacea as a trusted partner because we understand their goals, adapt to their challenges, and stay focused on delivering measurable impact. Whether it's through innovative strategies, timely execution, or continuous support, we aim to be more than a service provider — we strive to be an extension of your team.",
  ],
  imageSrc = "/images/joinourservice.webp",
  imageAlt = "Join Our Service",

  // Button props
  buttonLabel = "Connect",
  buttonProps = {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#4070B1",
    borderRadius: "10px",
  },
  buttonDisabled = false, // enable/disable button
  showButton = true, // 🔹 control button visibility (appear/disappear)

  // Toast
  defaultToastMessage = "Thanks for connecting! We'll get back to you shortly.",
  toastDuration = 4000,

  // Optional external click handler
  onButtonClick = null,

  // Optional custom class
  className = "",
}) => {
  const [toast, setToast] = useState(null);
  const timerRef = useRef(null);

  const showToast = (message = defaultToastMessage, ms = toastDuration) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setToast(message);
    timerRef.current = setTimeout(() => {
      setToast(null);
      timerRef.current = null;
    }, ms);
  };

  const hideToast = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setToast(null);
  };

  const handleClick = (e) => {
    if (buttonDisabled) return; // prevent click when disabled

    if (typeof onButtonClick === "function") {
      onButtonClick({ showToast, hideToast, event: e });
    } else {
      showToast(defaultToastMessage, toastDuration);
    }
  };

  return (
    <section className={`${styles.section} ${className}`}>
      <div className={styles.container}>
        {/* Left image */}
        <div className={styles.imageWrapper}>
          <img src={imageSrc} alt={imageAlt} className={styles.image} />
        </div>

        {/* Right content */}
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>

          {paragraphs.map((p, i) => (
            <p className={styles.text} key={i}>
              {p}
            </p>
          ))}

          {/* Button appear/disappear logic */}
          {showButton && (
            <div className={styles.cta}>
              <Button
                label={buttonLabel}
                padding={buttonProps.padding}
                fontSize={buttonProps.fontSize}
                backgroundColor={
                  buttonDisabled ? "#7c7c7c" : buttonProps.backgroundColor
                }
                borderRadius={buttonProps.borderRadius}
                onClick={handleClick}
                disabled={buttonDisabled}
                style={{
                  opacity: buttonDisabled ? 0.6 : 1,
                  cursor: buttonDisabled ? "not-allowed" : "pointer",
                  transition: "opacity 0.3s ease, transform 0.3s ease",
                }}
              />
            </div>
          )}
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div className={styles.toastContainer} role="status" aria-live="polite">
          <div className={styles.toast}>
            <span>{toast}</span>
            <button
              className={styles.toastClose}
              onClick={hideToast}
              aria-label="Close notification"
            >
              <FiX />
            </button>
            <div
              className={styles.toastTimer}
              style={{ animationDuration: `${toastDuration}ms` }}
            />
          </div>
        </div>
      )}
    </section>
  );
};

JoinOurServiceSection.propTypes = {
  title: PropTypes.string,
  paragraphs: PropTypes.arrayOf(PropTypes.string),
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  buttonLabel: PropTypes.string,
  buttonProps: PropTypes.shape({
    padding: PropTypes.string,
    fontSize: PropTypes.string,
    backgroundColor: PropTypes.string,
    borderRadius: PropTypes.string,
  }),
  buttonDisabled: PropTypes.bool,
  showButton: PropTypes.bool, // 🔹 new prop
  defaultToastMessage: PropTypes.string,
  toastDuration: PropTypes.number,
  onButtonClick: PropTypes.func,
  className: PropTypes.string,
};

export default JoinOurServiceSection;
