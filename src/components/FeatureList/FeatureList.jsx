import React from "react";
import styles from "./FeatureList.module.css";

/**
 * Feature/Benefits block that can optionally show an illustration.
 * - title: string
 * - items: { title: string, desc?: string }[]
 * - illustrationSrc?: string  (left image like your mock)
 * - illustrationAlt?: string
 * - imageLeft?: boolean (default true)
 * - className?: string
 */
export default function FeatureList({
  title,
  items = [],
  illustrationSrc,
  illustrationAlt = "Illustration",
  imageLeft = true,
  className = "",
}) {
  const Card = (
    <section className={`${styles.card} ${className}`}>
      {title && <h2 className={styles.heading}>{title}</h2>}

      <ul className={styles.list} role="list">
        {items.map((it, idx) => (
          <li key={idx} className={styles.item}>
            <span className={styles.icon} aria-hidden="true">
              {/* square tick icon (24x24) */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="2" />
                <path
                  d="M8 12.5l3 3 5-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>

            <div className={styles.content}>
              <h3 className={styles.itemTitle}>{it.title}</h3>
              {it.desc ? <p className={styles.itemDesc}>{it.desc}</p> : null}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );

  // If no illustration, behave like your original card
  if (!illustrationSrc) return Card;

  return (
    <div className={styles.wrap}>
      <div className={styles.art} style={{ order: imageLeft ? 0 : 1 }}>
        <img src={illustrationSrc} alt={illustrationAlt} />
      </div>

      <div className={styles.cardCol} style={{ order: imageLeft ? 1 : 0 }}>
        {Card}
      </div>
    </div>
  );
}
