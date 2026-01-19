import React, { useEffect, useRef, useState } from "react";
import styles from "./OurProductsCard.module.css";

const OurProductsCard = ({ image, title, description }) => {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  // Toggle on tap/click (mobile) and allow hover (desktop via CSS)
  const toggleOverlay = () => setOpen((v) => !v);
  const closeOverlay = () => setOpen(false);

  // Close on outside click / Esc
  useEffect(() => {
    const onDocClick = (e) => {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target)) closeOverlay();
    };
    const onEsc = (e) => e.key === "Escape" && closeOverlay();

    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  return (
    <div className={styles.card}>
      <div
        ref={wrapRef}
        className={`${styles.imageWrap} ${open ? styles.open : ""}`}
        onClick={toggleOverlay} // tap to open/close (mobile)
        onMouseEnter={() => setOpen(true)} // hover (desktop)
        onMouseLeave={() => setOpen(false)} // hover out (desktop)
        role="button"
        tabIndex={0}
        aria-label={`View details for ${title}`}
      >
        <img src={image} alt={title} className={styles.image} />

        <div className={styles.overlay}>
          <p className={styles.overlayText}>{description}</p>
          <button
            type="button"
            className={styles.cta}
            onClick={(e) => {
              e.stopPropagation(); // keep overlay open
              console.log(`View details: ${title}`);
            }}
          >
            View Details
          </button>
        </div>
      </div>

      <h3 className={styles.title} title={title}>
        {title}
      </h3>
    </div>
  );
};

export default OurProductsCard;
