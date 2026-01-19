
import React from "react";
import styles from "./OurProcessSection.module.css";

/**
 * Props:
 * - heading: string
 * - leadText: string
 * - leftCards: { title: string, bullets: string[], bg?: string }[]
 * - rightCards: { title: string, bullets: string[], bg?: string }[]
 * - centerIcons: string[]  // URLs or null
 * - arrowImages: { top?: string, middle?: string, bottom?: string }
 */
export default function OurProcessSection({
  heading = "OUR PROCESS",
  leadText = "We implement robust backends, analytics, and monetization systems to help clients maximize player retention and revenue.",
  leftCards = [
    {
      title: "UI Design",
      bullets: ["Research & Wireframing", "Visual Design", "Prototyping"],
      bg: "#F8EDE2",
    },
    {
      title: "BackEnd Development",
      bullets: ["Data Base Design", "API Architecture", "Testing", "Deployment"],
      bg: "#DFF6E6",
    },
  ],
  rightCards = [
    {
      title: "Front End Development",
      bullets: [
        "Requirement Analysis",
        "Planning",
        "Making it Responsive",
        "API Integration",
      ],
      bg: "#F0E7FF",
    },
  ],
  centerIcons = [null, null, null], 
  arrowImages = {
    top: "/images/products/arrow1.png",
    middle: "/images/products/arrow2.png",
    bottom: "/images/products/arrow3.png",
  },
}) {
  const cardColors = [...leftCards.map((c) => c.bg), ...rightCards.map((c) => c.bg)];

  return (
    <section className={styles.section} aria-label="Our process">
      <div className={styles.inner}>

        {/* NEW — HEADING + LEAD TEXT IN ONE ROW */}
        <div className={styles.headerRow}>
          <div className={styles.headerCol}>
            <h2 className={styles.heading}>
              {heading.split(" ").map((w, i) =>
                i === heading.split(" ").length - 1 ? (
                  <span key={i} className={styles.headingAccent}>{w}</span>
                ) : (
                  <span key={i}> {w} </span>
                )
              )}
            </h2>
          </div>

          <div className={styles.leadCol}>
            <p className={styles.leadText}>{leadText}</p>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className={styles.grid}>

          {/* LEFT CARDS */}
          <div className={styles.leftStack}>
            {leftCards.map((card, idx) => (
              <div key={idx} className={styles.card} style={{ background: card.bg }}>
                <div className={styles.whiteBoxTitle}>
                  <span>{card.title}</span>
                </div>
                <ul className={styles.bullets}>
                  {card.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CENTER COLUMN */}
          <div className={styles.centerColumn}>
            <img src={arrowImages.top} className={`${styles.arrowImage} ${styles.arrowTop}`} alt="" />
            <img src={arrowImages.middle} className={`${styles.arrowImage} ${styles.arrowMiddle}`} alt="" />
            <img src={arrowImages.bottom} className={`${styles.arrowImage} ${styles.arrowBottom}`} alt="" />

            <div className={styles.path}>
              {centerIcons.map((icon, i) => (
                <div
                  key={i}
                  className={styles.iconWrap}
                  style={{ background: cardColors[i] }}
                >
                  {icon ? (
                    <img src={icon} alt="" className={styles.iconImg} />
                  ) : (
                    <div className={styles.iconPlaceholder} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CARDS */}
          <div className={styles.rightStack}>
            {rightCards.map((card, idx) => (
              <div key={idx} className={styles.card} style={{ background: card.bg }}>
                <div className={styles.whiteBoxTitle}>
                  <span>{card.title}</span>
                </div>
                <ul className={styles.bullets}>
                  {card.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
