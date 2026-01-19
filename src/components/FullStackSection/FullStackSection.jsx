// components/FullStackSection.jsx
import React from "react";
import styles from "./FullStackSection.module.css";

/**
 * Reusable Full-Stack style section.
 * All text and images are passed via props. Nothing is hard-coded.
 *
 * Props:
 * - id, className
 * - title: string
 * - intro: string[]                        // multiple intro paragraphs
 * - heroImage: { src: string, alt?:string }             // big image (row 1, left)
 * - mainCardTitle: string                  // row 1, right card title
 * - mainCardDesc: string[]                 // row 1, right card paragraphs
 * - aboutTitle: string                     // row 2, left small white card title
 * - aboutDesc: string                      // row 2, left small white card body
 * - aboutImage: { src: string, alt?:string }            // row 2, right image
 * - bottomImage: { src: string, alt?:string }           // row 3, left image
 * - benefitsTitle: string                  // row 3, right card title
 * - benefits: Array<{ title: string, desc?: string }>   // row 3, right items
 */
export default function FullStackSection({
  id,
  className = "",

  title,
  intro = [],

  heroImage, // { src, alt }

  mainCardTitle,
  mainCardDesc = [],

  aboutTitle,
  aboutDesc,
  aboutImage, // { src, alt }

  bottomImage, // { src, alt }

  benefitsTitle,
  benefits = [], // [{ title, desc }]
}) {
  return (
    <section id={id} className={`${styles.section} ${className}`}>
      {/* Header */}
      {(title || (intro && intro.length)) && (
        <div className={styles.header}>
          {title && (
            <h2 className={styles.title}>
              {title} <span className={styles.line} />
            </h2>
          )}
          {intro.map((t, i) => (
            <p key={i} className={styles.intro}>{t}</p>
          ))}
        </div>
      )}

      {/* Row 1: Big image (left) */}
      {heroImage?.src && (
        <figure className={styles.heroImage}>
          <img src={heroImage.src} alt={heroImage.alt || ""} loading="lazy" />
        </figure>
      )}

      {/* Row 1: Gradient card (right) */}
      {(mainCardTitle || (mainCardDesc && mainCardDesc.length)) && (
        <article className={styles.rightCard}>
          {mainCardTitle && <h3 className={styles.cardTitle}>{mainCardTitle}</h3>}
          {mainCardDesc.map((t, i) => (
            <p key={i} className={styles.cardText}>{t}</p>
          ))}
        </article>
      )}

      {/* Row 2: About small white card (left) */}
      {(aboutTitle || aboutDesc) && (
        <article className={styles.aboutCard}>
          {aboutTitle && <h3 className={styles.aboutTitle}>{aboutTitle}</h3>}
          {aboutDesc && <p className={styles.aboutText}>{aboutDesc}</p>}
        </article>
      )}

      {/* Row 2: Image (right) */}
      {aboutImage?.src && (
        <figure className={styles.middleImage}>
          <img src={aboutImage.src} alt={aboutImage.alt || ""} loading="lazy" />
        </figure>
      )}

      {/* Row 3: Benefits image (left) */}
      {bottomImage?.src && (
        <figure className={styles.benefitsImage}>
          <img src={bottomImage.src} alt={bottomImage.alt || ""} loading="lazy" />
        </figure>
      )}

      {/* Row 3: Benefits card (right) */}
      {(benefitsTitle || (benefits && benefits.length)) && (
        <article className={styles.benefitsCard}>
          {benefitsTitle && <h3 className={styles.benefitsTitle}>{benefitsTitle}</h3>}
          <ul className={styles.benefitsList}>
            {benefits.map((b, i) => (
              <li key={i}>
                <span className={styles.tick} aria-hidden="true" />
                <div className={styles.benefitContent}>
                  {b.title && <h4 className={styles.benefitItemTitle}>{b.title}</h4>}
                  {b.desc && <p className={styles.benefitItemDesc}>{b.desc}</p>}
                </div>
              </li>
            ))}
          </ul>
        </article>
      )}
    </section>
  );
}
