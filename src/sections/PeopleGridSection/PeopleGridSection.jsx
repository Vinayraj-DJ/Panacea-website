import React from "react";
import PropTypes from "prop-types";
import styles from "./PeopleGridSection.module.css";

export default function PeopleGridSection({
  heroSrc = "/images/hero-ticket.jpg",
  titleLeft = "Book. Click. Go.",
  titleHighlight = "ticket",
  titleRight = "to anywhere!",
  items = [],
  showDecor = true,
}) {
  // Create an internal occupancy map for positions 1..14 (7 cols × 2 rows)
  const totalSlots = 14;
  const gridSlots = Array(totalSlots).fill(null);

  // First place any items that have an explicit pos
  const explicit = items.filter((it) => typeof it.pos === "number" && it.pos >= 1 && it.pos <= totalSlots);
  explicit.forEach((it) => {
    // override existing if present
    gridSlots[it.pos - 1] = it;
  });

  // Then place the rest of the items into the first free slot(s)
  const implicit = items.filter((it) => typeof it.pos !== "number");
  let idx = 0;
  for (let i = 0; i < totalSlots && idx < implicit.length; i++) {
    if (!gridSlots[i]) {
      gridSlots[i] = implicit[idx++];
    }
  }

  // If there are still empty slots, they remain null -> render empty boxes
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* hero image */}
        <div className={styles.heroWrap}>
          <img src={heroSrc} alt="hero" className={styles.heroImage} />
        </div>

        {/* heading */}
        <div className={styles.headingWrap}>
          <h2 className={styles.heading}>
            <span className={styles.leftText}>{titleLeft} </span>
            <span className={styles.highlight}>{titleHighlight}</span>
            <span className={styles.leftText}> {titleRight}</span>
          </h2>
        </div>

        {/* grid + decorative squares */}
        <div className={styles.gridArea}>
          {showDecor && (
            <>
              <div className={styles.decorTopLeft} aria-hidden>
                <div className={styles.decorSquare} style={{ background: "#E3C5F5" }}>
                  <svg width="36" height="44" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.decorIcon}>
                    <path d="M12 0C8.1 0 5 3.1 5 7c0 5.7 7 13 7 13s7-7.3 7-13c0-3.9-3.1-7-7-7z" fill="#621392"/>
                    <circle cx="12" cy="7" r="2.5" fill="#fff"/>
                  </svg>
                </div>
              </div>

              <div className={styles.decorRight} aria-hidden>
                <div className={styles.decorSquare} style={{ background: "#FFF0DE" }}>
                  <svg width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={styles.decorIcon}>
                    <circle cx="12" cy="12" r="10" fill="#D9B26D"/>
                    <path d="M12 6v7l4 2" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </>
          )}

          <ul className={styles.peopleGrid}>
            {gridSlots.map((slot, i) => {
              const posNum = i + 1;
              if (!slot || !slot.src) {
                // render an intentional empty slot
                return (
                  <li key={`empty-${posNum}`} className={`${styles.personItem} ${styles.emptyItem}`}>
                    <div className={`${styles.personBox} ${styles.emptyBox}`} aria-hidden />
                  </li>
                );
              }

              return (
                <li key={slot.id ?? `item-${posNum}`} className={styles.personItem}>
                  <div
                    className={styles.personBox}
                    style={{ background: slot.bg || "transparent" }}
                  >
                    <img src={slot.src} alt={slot.alt || "person"} className={styles.personImg} />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

PeopleGridSection.propTypes = {
  heroSrc: PropTypes.string,
  titleLeft: PropTypes.string,
  titleHighlight: PropTypes.string,
  titleRight: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    src: PropTypes.string,
    alt: PropTypes.string,
    bg: PropTypes.string,
    pos: PropTypes.number, // 1..14 (top-left -> top-right = 1..7; bottom-left -> bottom-right = 8..14)
  })),
  showDecor: PropTypes.bool,
};
