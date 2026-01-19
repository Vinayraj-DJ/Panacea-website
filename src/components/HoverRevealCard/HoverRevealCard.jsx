import React from "react";
import styles from "./HoverRevealCard.module.css";

/**
 * HoverRevealCard
 * -----------------------------------------
 * Props:
 * - title        : string (required)
 * - description  : string (required)
 * - image        : string (required)  // url or imported asset
 * - href         : string (optional)  // if present, title pill is a link
 * - bg           : string (optional)  // lavender panel color, default #EADDFF
 * - className    : string (optional)
 * - style        : React.CSSProperties (optional) // width/height/aspect control
 *
 * Usage examples at bottom of this message.
 */
export default function HoverRevealCard({
  title,
  description,
  image,
  href,
  bg = "#EADDFF",
  className = "",
  style = {},
}) {
  const Pill = ({ ...rest }) =>
    href ? (
      <a href={href} className={styles.pill} {...rest}>
        {title}
      </a>
    ) : (
      <div className={styles.pill} {...rest}>
        {title}
      </div>
    );

  return (
    <article
      className={`${styles.card} ${className}`}
      style={style}
      tabIndex={0} /* keyboard focus reveals text, like hover */
      aria-label={title}
    >
      {/* default state: image */}
      <div className={styles.imageState} aria-hidden>
        <img className={styles.image} src={image} alt="" />
        <Pill />
      </div>

      {/* hover/focus state: lavender text panel */}
      <div className={styles.textState} style={{ background: bg }}>
        <div className={styles.textBox}>
          <p className={styles.desc}>{description}</p>
          <Pill aria-hidden />
        </div>
      </div>
    </article>
  );
}
