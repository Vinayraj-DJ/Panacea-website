
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./SmartScalableSection.module.css";

// Full default items
const DEFAULT_ITEMS = [
  { image: "/images/services/ai-driven.webp", title: "AI DRIVEN" },
  { image: "/images/services/cloud-tech.webp", title: "CLOUD TECH" },
  { image: "/images/services/consulting.webp", title: "CONSULTING" },
  { image: "/images/services/digital.webp", title: "DIGITAL" },
  { image: "/images/services/ai-driven.webp", title: "CYBER SECURITY" },
  { image: "/images/services/cloud-tech.webp", title: "UI/UX DESIGN" },
  { image: "/images/services/consulting.webp", title: "DATA ANALYTICS" },
  { image: "/images/services/digital.webp", title: "BLOCKCHAIN SOLUTIONS" }
];

// Default placeholder image
const FALLBACK_IMAGE = "/images/default-placeholder.jpg";

export default function SmartScalableSection({
  title = "Driving the Future with Smart and Scalable Tech Services",
  items = DEFAULT_ITEMS,
  mobileLimit = 6,
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 600px)");
    const apply = (e) => setIsMobile(e.matches);

    setIsMobile(mq.matches);

    if (mq.addEventListener) mq.addEventListener("change", apply);
    else mq.addListener(apply);

    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", apply);
      else mq.removeListener(apply);
    };
  }, []);

  // Fallback if items is empty or undefined
  const safeItems = (items && items.length > 0 ? items : DEFAULT_ITEMS).map(
    (it) => ({
      image: it.image || FALLBACK_IMAGE,
      title: it.title || "Default Title",
    })
  );

  const visibleItems = isMobile ? safeItems.slice(0, mobileLimit) : safeItems;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Title always safe */}
        <h3 className={styles.heading}>{title || "Default Section Title"}</h3>

        <div className={styles.grid}>
          {visibleItems.map((it, idx) => (
            <div key={`${it.title}-${idx}`} className={styles.card}>
              <div className={styles.imageWrap}>
                <img
                  src={it.image}
                  alt={it.title}
                  className={styles.img}
                  onError={(e) => (e.target.src = FALLBACK_IMAGE)}
                />
                <div className={styles.overlay}></div>

                {/* Dynamic inside-image title */}
                <div className={styles.label}>{it.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

SmartScalableSection.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      title: PropTypes.string,
    })
  ),
  mobileLimit: PropTypes.number,
};
