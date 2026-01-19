import React from "react";
import PropTypes from "prop-types";
import styles from "./ShowcaseSection.module.css";

/**
 * ShowcaseSection
 *
 * Props:
 * - heading: string with optional "\n" to create stacked lines
 * - highlightSpans: array of substrings in heading to render with .highlight class (optional)
 * - mainImage: url for center phone image (default uses uploaded asset)
 * - floats: array of { id, src, size, left, top } positions are CSS values (eg "20%", "120px")
 * - caption: optional paragraph under heading
 *
 * Default mainImage uses the uploaded asset path.
 */
export default function ShowcaseSection({
  heading = "Shop Smart. Grow Fast.\nEmpowering businesses\nand customers through seamless\ndigital shopping experiences.",
  highlightSpans = ["Empowering businesses", "digital shopping"],
  mainImage = "/images/products/shopping.png",
  floats = [
    // Default decorative floats (you can override with real assets)
    { id: "f1", src: "/images/products/shopping1.png", size: 96, left: "6%", top: "18%" },
    { id: "f2", src: "/images/products/shopping3.png", size: 96, left: "86%", top: "20%" },
    { id: "f3", src: "/images/products/shopping2.png", size: 96, left: "12%", top: "58%" },
  ],
  caption = "",
}) {
  const lines = heading.split("\n");

  return (
    <section className={styles.section} aria-label="showcase">
      <div className={styles.inner}>
        {/* floating decorative images */}
        {floats.map((f) => (
          <img
            key={f.id}
            src={f.src}
            alt=""
            className={styles.floating}
            style={{
              width: `${f.size}px`,
              height: `${f.size}px`,
              left: f.left,
              top: f.top,
            }}
            aria-hidden
          />
        ))}

        {/* heading + caption on right */}
        <div className={styles.headerArea}>
          <div className={styles.heading}>
            {lines.map((ln, idx) => (
              <div key={idx} className={styles.headingLine}>
                {highlightSpans && highlightSpans.length ? (
                  ln.split(new RegExp(`(${highlightSpans.join("|")})`, "g")).map((part, i) =>
                    highlightSpans.includes(part) ? <span key={i} className={styles.highlight}>{part}</span> : <span key={i}>{part}</span>
                  )
                ) : (
                  ln
                )}
              </div>
            ))}
          </div>

          {caption ? <p className={styles.caption}>{caption}</p> : null}
        </div>

        {/* center phone/image */}
        <div className={styles.centerImageWrap}>
          <img src={mainImage} alt="showcase" className={styles.centerImage} />
        </div>
      </div>
    </section>
  );
}

ShowcaseSection.propTypes = {
  heading: PropTypes.string,
  highlightSpans: PropTypes.arrayOf(PropTypes.string),
  mainImage: PropTypes.string,
  floats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      size: PropTypes.number,
      left: PropTypes.string,
      top: PropTypes.string,
    })
  ),
  caption: PropTypes.string,
};
