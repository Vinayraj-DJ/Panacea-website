import React from "react";
import PropTypes from "prop-types";
import styles from "./InfoPair.module.css";
import NumberedHeading from "../NumberedHeading/NumberedHeading";

/**
 * InfoPair
 *
 * Props:
 * - reverse: boolean (false = text left / image right; true = image left / text right)
 * - bullets: array of strings for bullet list
 * - imageSrc: string - image URL
 * - imageAlt: string
 * - imageAspectClass: optional string to apply aspect style (default uses aspect)
 *
 * Example:
 * <InfoPair reverse={false} bullets={[...]} imageSrc="/img.png" />
 */
export default function InfoPair({
  reverse = false,
  bullets = [],
  imageSrc = "",
  imageAlt = "illustration",
  imageAspectClass = styles.aspect,
}) {
  return (<>
    <NumberedHeading number={2} title="What Users Get ?" />
    <div className={styles.pair}>
        
      <div className={`${styles.row} ${reverse ? styles.reverse : ""}`}>
        {/* column 1 */}
        <div className={styles.col}>
          {/* When not reversed, show content in first column; when reversed, this column will visually be the image due to direction flip.
              To ensure semantic order stays consistent for a11y/SEO, we keep the same DOM order and only flip visually via CSS. */}
          <div className={styles.contentCard}>
            <div className={styles.contentInner}>
              <ul className={styles.bullets}>
                {bullets && bullets.length ? (
                  bullets.map((b, idx) => <li key={idx}>{b}</li>)
                ) : (
                  <li>Placeholder bullet item</li>
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* column 2 */}
        <div className={styles.col}>
          <div className={`${styles.imageCard} ${imageAspectClass}`}>
            {imageSrc ? (
              // use <img> to preserve aspect/cover behavior
              <img src={imageSrc} alt={imageAlt} />
            ) : (
              // fallback empty box
              <div style={{width: "100%", height: "100%"}} aria-hidden />
            )}
          </div>
        </div>
      </div>
    </div>
    </>
    
  );
}

InfoPair.propTypes = {
  reverse: PropTypes.bool,
  bullets: PropTypes.arrayOf(PropTypes.string),
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  imageAspectClass: PropTypes.string,
};
