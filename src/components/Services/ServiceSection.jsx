import React, { useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./ServiceSection.module.css";

/**
 * Reusable Services grid section
 *
 * Props:
 * - title?: string                       (section heading)
 * - description?: string                 (section subtext)
 * - items: Array<{
 *     title: string,
 *     image: string,
 *     to?: string,                       // optional direct route for the card
 *     onClick?: () => void               // optional click handler if not routing
 *   }>
 * - backgroundImage?: string             (url path, e.g. "/images/bg.jpg")
 * - backgroundProps?: object             (additional inline style overrides)
 * - showHeader?: boolean                 (default: true)
 * - offsetPattern?: number[]             (y-offsets per index; default matches your design)
 * - className?: string                   (wrapper class)
 * - basePath?: string                    (e.g. "/services" – used if item.to is not provided; slug is auto-generated)
 */
const ServicesSection = ({
  title = "Services",
  description,
  items = [],
  backgroundImage,
  backgroundProps,
  showHeader = true,
  offsetPattern = [0, 22, 0, 22, 0, 22, 0, 22],
  className = "",
  basePath, // if present, compute card path as `${basePath}/${slug(title)}`
}) => {
  const navigate = useNavigate();

  const computed = useMemo(
    () =>
      items.map((it) => {
        const slug =
          it.title
            ?.toLowerCase()
            ?.trim()
            ?.replace(/&/g, "and")
            ?.replace(/[^a-z0-9]+/g, "-")
            ?.replace(/^-+|-+$/g, "") || "";
        const to = it.to || (basePath ? `${basePath}/${slug}` : undefined);
        return { ...it, slug, to };
      }),
    [items, basePath]
  );

  const sectionStyle = {
    ...(backgroundImage
      ? {
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }
      : {}),
    ...backgroundProps,
  };

  return (
    <section className={`${styles.section} ${className}`} style={sectionStyle}>
      {showHeader && (
        <div className={styles.header}>
          <h2 className={styles.title}>
            {title} <span className={styles.line}></span>
          </h2>
          {description && (
            <p className={styles.description}>{description}</p>
          )}
        </div>
      )}

      <div className={styles.grid}>
        {computed.map((s, idx) => {
          const offset = offsetPattern[idx % offsetPattern.length] || 0;
          const CardInner = (
            <>
              <div className={styles.imageWrap}>
                <img src={s.image} alt={s.title} className={styles.img} />
              </div>
              <div className={styles.caption}>{s.title}</div>
            </>
          );

          // Prefer route if 'to' is present, else onClick, else plain card
          if (s.to) {
            return (
              <Link
                key={`${s.title}-${idx}`}
                to={s.to}
                className={styles.card}
                style={{ "--offset": `${offset}px` }}
              >
                {CardInner}
              </Link>
            );
          }

          if (typeof s.onClick === "function") {
            return (
              <div
                key={`${s.title}-${idx}`}
                role="button"
                tabIndex={0}
                className={`${styles.card} ${styles.clickable}`}
                style={{ "--offset": `${offset}px` }}
                onClick={s.onClick}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    s.onClick();
                  }
                }}
              >
                {CardInner}
              </div>
            );
          }

          return (
            <div
              key={`${s.title}-${idx}`}
              className={styles.card}
              style={{ "--offset": `${offset}px` }}
            >
              {CardInner}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSection;
