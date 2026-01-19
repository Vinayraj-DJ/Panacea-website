// src/components/EducationalFeaturesSection/EducationalFeaturesSection.jsx
import React from "react";
import PropTypes from "prop-types";
import styles from "./EducationalFeaturesSection.module.css";

/*
Usage examples:

{ icon: "graduation", title: "...", desc: "..." }
{ customIcon: (<svg>...</svg>), title: "...", desc: "..." }
{ image: "/images/custom-icon.png", title: "...", desc: "..." }
*/

function Icon({ name, customIcon, image, alt }) {
  // 1) if an image URL is provided -> render <img>
  if (image) {
    return (
      <img
        src={image}
        alt={alt || ""}
        className={styles.iconImg}
        loading="lazy"
        decoding="async"
      />
    );
  }

  // 2) if a customIcon JSX node is provided -> render wrapped
  if (customIcon) {
    return <div className={styles.iconCustom}>{customIcon}</div>;
  }

  // 3) fallback to built-in named SVG icons
  const iconProps = {
    viewBox: "0 0 24 24",
    className: styles.iconSvg,
    "aria-hidden": true,
    focusable: false,
  };

  switch (name) {
    case "graduation":
      return (
        <svg {...iconProps}>
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17a8 8 0 0016 0" />
          <path d="M12 7v10" />
        </svg>
      );
    case "payment":
      return (
        <svg {...iconProps}>
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <path d="M2 10h20" />
        </svg>
      );
    case "chat":
      return (
        <svg {...iconProps}>
          <path d="M21 15a2 2 0 01-2 2H8l-5 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
        </svg>
      );
    case "analytics":
      return (
        <svg {...iconProps}>
          <path d="M3 3v18h18" />
          <path d="M7 13v-6" />
          <path d="M12 17v-10" />
          <path d="M17 9v-2" />
        </svg>
      );
    case "curriculum":
      return (
        <svg {...iconProps}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M7 8h10" />
          <path d="M7 12h10" />
        </svg>
      );
    case "exam":
      return (
        <svg {...iconProps}>
          <path d="M21 8v10a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2h11" />
          <path d="M7 10h10M7 14h6" />
        </svg>
      );
    default:
      return null;
  }
}

Icon.propTypes = {
  name: PropTypes.string,
  customIcon: PropTypes.node,
  image: PropTypes.string,
  alt: PropTypes.string,
};

export default function EducationalFeaturesSection({
  title,
  itemsLeft,
  itemsRight,
  /* background prop intentionally not applied inline to avoid overriding CSS */
}) {
  return (
    <section className={styles.sectionRoot}>
      <div className={styles.container}>
        {title && <h2 className={styles.title}>{title}</h2>}

        <div className={styles.cardsRow}>
          {[itemsLeft, itemsRight].map((list, idx) => (
            <article key={idx} className={styles.card}>
              <div className={styles.cardInner}>
                {list?.map((it, i) => (
                  <div key={i} className={styles.itemRow}>
                    <div className={styles.iconWrap}>
                      <div className={styles.iconBg}>
                        <Icon
                          name={it.icon}
                          customIcon={it.customIcon}
                          image={it.image || it.imageSrc || it.img}
                          alt={it.iconAlt || it.title}
                        />
                      </div>
                    </div>
                    <div className={styles.itemContent}>
                      <h4 className={styles.itemTitle}>{it.title}</h4>
                      <p className={styles.itemDesc}>{it.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

EducationalFeaturesSection.propTypes = {
  title: PropTypes.string,
  itemsLeft: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string, // named icon
      customIcon: PropTypes.node, // JSX svg
      image: PropTypes.string, // image URL
      imageSrc: PropTypes.string, // alias
      img: PropTypes.string, // alias
      iconAlt: PropTypes.string,
      title: PropTypes.string,
      desc: PropTypes.string,
    })
  ),
  itemsRight: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      customIcon: PropTypes.node,
      image: PropTypes.string,
      imageSrc: PropTypes.string,
      img: PropTypes.string,
      iconAlt: PropTypes.string,
      title: PropTypes.string,
      desc: PropTypes.string,
    })
  ),
};
