import React from "react";
import PropTypes from "prop-types";
import styles from "./BrandSection.module.css";

export default function BrandSection({
  title = "Build your brand, grow your reach. One connection at a time.",
  emphasized = ["brand", "reach", "connection"],
  subtitle = "",
  cards = [
    { image: "/images/products/sp1.png", alt: "Card 1" },
    { image: "/images/products/sp3.png", alt: "Card 2" },
    { image: "/images//products/sp2.png", alt: "Card 3" },
  ],
  className = "",
}) {
  // Highlight selected title words
  const renderHeading = () => {
    const words = title.split(/(\s+)/);
    return words.map((w, i) => {
      const clean = w.replace(/[.,]/g, "");
      if (emphasized.includes(clean)) {
        return (
          <span key={i} className={styles.highlight}>
            {w}
          </span>
        );
      }
      return <span key={i}>{w}</span>;
    });
  };

  const safeCards =
    cards && cards.length >= 3
      ? cards.slice(0, 3)
      : [
          { image: "/images/phone-1.jpg", alt: "Fallback 1" },
          { image: "/images/phone-2.jpg", alt: "Fallback 2" },
          { image: "/images/phone-3.jpg", alt: "Fallback 3" },
        ];

  return (
    <section className={`${styles.section} ${className}`}>
      <div className={styles.inner}>

        {/* LEFT TEXT */}
        <div className={styles.left}>
          <h2 className={styles.title}>{renderHeading()}</h2>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>

        {/* RIGHT CARDS */}
        <div className={styles.right}>
          <div className={styles.cards}>
            {safeCards.map((c, idx) => (
              <div
                key={idx}
                className={`${styles.card} ${styles[`card${idx + 1}`]}`}
              >
                <img
                  src={c.image}
                  alt={c.alt}
                  className={styles.cardImg}
                  onError={(e) => {
                    e.target.src = "/images/default-placeholder.jpg";
                  }}
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

BrandSection.propTypes = {
  title: PropTypes.string,
  emphasized: PropTypes.arrayOf(PropTypes.string),
  subtitle: PropTypes.string,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      alt: PropTypes.string
    })
  ),
  className: PropTypes.string,
};
