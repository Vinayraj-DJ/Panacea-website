import React from "react";
import styles from "./FeaturesGrid.module.css";

const ITEMS = [
  { img: "/images/products/event1.png", title: "Event Schedule", alt: "Event schedule" },
  { img: "/images/products/event3.png", title: "Stage & Flooring Setup", alt: "Stage and flooring" },
  { img: "/images/products/event2.png", title: "Photography", alt: "Photography" },
  { img: "/images/products/event4.png", title: "EventDécor & ThemeSetup", alt: "Event decor" },
];

export default function FeaturesGrid({ items = ITEMS, columns = 4 }) {
  return (
    <section className={styles.section} aria-label="Features">
      <div className={styles.container}>
        <h3 className={styles.sectionTitle}>Features of Party Rental Website</h3>

        <div
          className={styles.grid}
          style={{ gridTemplateColumns: `repeat(${Math.min(columns, items.length)}, 1fr)` }}
        >
          {items.map((it, idx) => (
            <article
              key={idx}
              className={`${styles.card} ${idx % 2 === 0 ? styles.up : styles.down}`}
            >
              <div className={styles.imageWrap}>
                <img src={it.img} alt={it.alt || it.title} className={styles.image} />
              </div>
              <div className={styles.caption}>{it.title}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
