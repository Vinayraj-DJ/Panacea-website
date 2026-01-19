import React from "react";
import styles from "./BenefitsWithImage.module.css";

export default function BenefitsWithImage({ image, title, items = [], className = "" }) {
  return (
    <section className={`${styles.wrap} ${className}`}>
      {image?.src && (
        <figure className={styles.media}>
          <img src={image.src} alt={image.alt || ""} loading="lazy" />
        </figure>
      )}

      <article className={styles.card}>
        {title && <h3 className={styles.title}>{title}</h3>}
        <ul className={styles.list}>
          {items.map((it, idx) => (
            <li key={idx} className={styles.row}>
              <span className={styles.tick} aria-hidden="true" />
              <div className={styles.texts}>
                {it.title && <span className={styles.itemTitle}>{it.title}</span>}
                {it.desc && <span className={styles.itemDesc}>{it.desc}</span>}
              </div>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
