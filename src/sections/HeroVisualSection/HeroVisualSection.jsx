
import React from "react";
import PropTypes from "prop-types";
import styles from "./HeroVisualSection.module.css";

const HeroVisualSection = ({
  headingLeft = "From",
  highlight1 = "Movies",
  highlight2 = "Concerts",
  headingRight = "— book it in seconds!",
  posterSrc = "/images/products/pho1.2.png",

  // single phone image only
  phoneSrc = "/images/products/pho1.1.png",
}) => {
  return (
    <section className={styles.heroWrap}>
      <div className={styles.container}>
        <h1 className={styles.headline}>
          <span className={styles.textNormal}>{headingLeft} </span>
          <span className={styles.highlight}>{highlight1}</span>
          <span className={styles.textNormal}> to </span>
          <span className={styles.highlight}>{highlight2}</span>
          <span className={styles.textNormal}> {headingRight}</span>
        </h1>

        <div className={styles.visuals}>
          {/* LEFT: Poster */}
          <div className={styles.left}>
            <div className={styles.posterBox}>
              <img src={posterSrc} alt="Poster" className={styles.poster} />
            </div>
          </div>

          {/* RIGHT: Single Phone */}
          <div className={styles.right}>
            <div className={styles.creamCard}>
              <div className={styles.orangePanel} />
              <div className={styles.phonesShadow} />

              <div className={styles.phones}>
                <img src={phoneSrc} alt="Phone" className={styles.phoneSingle} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

HeroVisualSection.propTypes = {
  posterSrc: PropTypes.string,
  phoneSrc: PropTypes.string,
};

export default HeroVisualSection;
