import React from "react";
import PropTypes from "prop-types";
import styles from "./ImageCaptionHero.module.css";

export default function ImageCaptionHero({
  src,
  alt = "",
  caption = "",
  overlayHeight = "180px",
  captionSize = 32,
}) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <img src={src} alt={alt} className={styles.heroImg} />

        {/* Full-width blurred bar at bottom */}
        <div
          className={styles.captionWrap}
          style={{ height: overlayHeight }}
        >
          <div className={styles.captionInner}>
            <p
              className={styles.caption}
          style={{ "--caption-size": `${captionSize}px` }}

            >
              {caption}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

ImageCaptionHero.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  caption: PropTypes.string,
  overlayHeight: PropTypes.string,
  captionSize: PropTypes.number,
};
