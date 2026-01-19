// src/sections/PeopleBelieveSection/PeopleBelieveSection.jsx
import React, { useState, useRef, useEffect } from "react";
import styles from "./PeopleBelieveSection.module.css";
import Button from "../../../components/Button/Button";
import { FiX } from "react-icons/fi";

// flat list of images (we keep the columns source but flatten it)
const COLUMNS = [
  ["/images/people/p1.webp", "/images/people/p2.webp"],
  ["/images/people/p3.webp", "/images/people/p4.webp"],
  ["/images/people/p5.webp"],
  ["/images/people/p6.webp"],
  ["/images/people/p7.webp"],
  ["/images/people/p8.webp"],
  ["/images/people/p9.webp", "/images/people/p10.webp"],
  ["/images/people/p11.webp", "/images/people/p12.webp"],
];

const flattenImages = (columns) => columns.flat();

const PeopleBelieveSection = () => {
  const allImages = flattenImages(COLUMNS).filter(Boolean);
  // MOBILE_GRID_SIZE uses 8 images around center (3x3 grid)
  const MOBILE_GRID_IMAGES = 8;

  const [toast, setToast] = useState(null);
  const timerRef = useRef(null);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const onResize = () => {
      setIsMobileView(window.innerWidth <= 900);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const showToast = (message = "Thanks for subscribing!", ms = 4000) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setToast(message);
    timerRef.current = setTimeout(() => {
      setToast(null);
      timerRef.current = null;
    }, ms);
  };

  const hideToast = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setToast(null);
  };

  // images to render — on mobile pick up to 8 (or fewer if not available)
  const imagesForMobile = allImages.slice(0, MOBILE_GRID_IMAGES);
  // desktop keeps columns as before

  return (
    <section
      className={styles.section}
      style={{
        backgroundImage: `url(/images/testimonialbackground.webp)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* DESKTOP COLLAGE (kept as original; CSS will hide it on mobile) */}
      <div className={styles.collageWrapper}>
        <div className={styles.collage} aria-hidden={isMobileView}>
          {COLUMNS.map((col, colIdx) => (
            <div
              key={colIdx}
              className={`${styles.column} ${styles[`col${colIdx + 1}`]}`}
            >
              {col.map((img, idx) => (
                <div key={idx} className={styles.person}>
                  <img src={img} alt={`Person ${idx + 1}`} />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Desktop textBlock (kept; hidden on mobile by CSS) */}
        <div className={styles.textBlock} aria-hidden={isMobileView}>
          <h2 className={styles.title}>People Believe In Us</h2>
          <p className={styles.subtitle}>From Various Field and Industries</p>
          <Button
            label="Subscribe"
            onClick={() => showToast("Thanks for subscribing!")}
          />
        </div>

        {/* MOBILE GRID (visible only on mobile via CSS) */}
        <div className={styles.mobileGrid} aria-hidden={!isMobileView}>
          {/* We want a 3x3 grid with center text/button */}
          {/* map positions 0..8, center index = 4 */}
          {Array.from({ length: 9 }).map((_, i) => {
            if (i === 4) {
              // center: text + button
              return (
                <div key="center" className={styles.mobileCenter}>
                  <h3 className={styles.mobileTitle}>People Believe In Us</h3>
                  <p className={styles.mobileSubtitle}>
                    From Various Fields and Industries
                  </p>
                  <Button
                    label="Subscribe"
                    onClick={() => showToast("Thanks for subscribing!")}
                  />
                </div>
              );
            }

            // pick corresponding image index — for empty slots, render nothing
            // map surrounding 8 positions to imagesForMobile indexes 0..7
            const surroundingIndex = i < 4 ? i : i - 1;
            const src = imagesForMobile[surroundingIndex];
            return (
              <div key={i} className={styles.mobileCell}>
                {src ? <img src={src} alt={`person-${i}`} /> : null}
              </div>
            );
          })}
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div className={styles.toastContainer} role="status" aria-live="polite">
          <div className={styles.toast} role="alert">
            <span>{toast}</span>
            <button
              className={styles.toastClose}
              onClick={hideToast}
              aria-label="Close"
            >
              <FiX />
            </button>
            <div className={styles.toastTimer} />
          </div>
        </div>
      )}
    </section>
  );
};

export default PeopleBelieveSection;
