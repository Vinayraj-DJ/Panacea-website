
// src/sections/KnowEverythingSection/KnowEverythingSection.jsx
import React, { useState, useRef, useEffect } from "react";
import styles from "./KnowEverythingSection.module.css";
import Button from "../../components/Button/Button";
import { FiX } from "react-icons/fi";

/**
 * Dynamic KnowEverythingSection
 *
 * Props:
 *  - title: string
 *  - paragraphs: string[] (each becomes a <p>)
 *  - backgroundImage: string (URL for section background)
 *  - heroImage: string (right-side image)
 *  - ctaLabel: string
 *  - ctaMobileLabel: string (if omitted, uses ctaLabel)
 *  - onCta: function({ showToast }) optional callback when CTA clicked
 *  - toastMessage: string
 *  - toastDuration: number (ms)
 *  - buttonProps: { padding, fontSize, backgroundColor, borderRadius }
 *  - hideDesktopCTA: boolean
 *  - hideMobileCTA: boolean
 *
 * This file keeps all original styles (unchanged). Provide props to override values at render time.
 */

const KnowEverythingSection = ({
  title = "KNOW EVERYTHING",
  paragraphs = [
    "At Panacea, we believe that our service is not just a transaction — it's a relationship built on trust, quality, and results. Every interaction with our clients reflects our dedication to solving problems, creating value, and delivering beyond expectations.",
    "Our clients value us because we don’t offer one-size-fits-all answers. We co-create strategies, we adapt with agility, and we stay accountable from start to finish. From consultation to execution, our focus remains on building long-term relationships that foster mutual growth and success.",
    "When brands trust Panacea, they’re investing in more than a service — they’re gaining a strategic partner committed to elevating their journey and standing by them every step of the way.",
  ],
  backgroundImage = "/images/backgroundwhychooseus.webp",
  heroImage = "/images/joinourservice.webp",
  ctaLabel = "Call us",
  ctaMobileLabel = null,
  onCta = null,
  toastMessage = "Thanks — we will contact you shortly.",
  toastDuration = 4000,
  buttonProps = { padding: "12px 28px", fontSize: "16px", backgroundColor: "#4070B1", borderRadius: "12px" },
  hideDesktopCTA = false,
  hideMobileCTA = false,
}) => {
  const [toast, setToast] = useState(null);
  const timerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, []);

  const showToast = (message = toastMessage, ms = toastDuration) => {
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

  const handleCtaClick = () => {
    if (typeof onCta === "function") {
      // pass showToast to consumer so they can call it after custom actions
      try {
        onCta({ showToast });
      } catch (err) {
        // fallback to default toast if callback errors
        showToast();
      }
    } else {
      showToast();
    }
  };

  const sectionStyle = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }
    : undefined;

  return (
    <section className={styles.section} style={sectionStyle}>
      <div className={styles.container}>
        {/* Left: copy + desktop CTA */}
        <div className={styles.content}>
          {title && <h2 className={styles.title}>{title}</h2>}

          {Array.isArray(paragraphs) &&
            paragraphs.map((p, i) => (
              <p key={i} className={styles.text}>
                {p}
              </p>
            ))}

          {/* Desktop CTA (hidden on mobile via CSS) */}
          {!hideDesktopCTA && (
            <div className={`${styles.cta} ${styles.desktopOnly}`}>
              <Button
                label={ctaLabel}
                padding={buttonProps?.padding}
                fontSize={buttonProps?.fontSize}
                backgroundColor={buttonProps?.backgroundColor}
                borderRadius={buttonProps?.borderRadius}
                onClick={handleCtaClick}
              />
            </div>
          )}
        </div>

        {/* Right: image + mobile CTA (below image) */}
        <div className={styles.imageWrap}>
          {heroImage && (
            <img src={heroImage} alt={title || "Hero image"} className={styles.image} />
          )}

          {/* Mobile CTA - shown only on mobile and placed right under the image */}
          {!hideMobileCTA && (
            <div className={`${styles.cta} ${styles.mobileOnly}`}>
              <Button
                label={ctaMobileLabel || ctaLabel}
                padding={buttonProps?.padding}
                fontSize={buttonProps?.fontSize}
                backgroundColor={buttonProps?.backgroundColor}
                borderRadius={buttonProps?.borderRadius}
                onClick={handleCtaClick}
              />
            </div>
          )}
        </div>
      </div>

      {/* Toast (module-scoped classes) - appears at TOP center */}
      {toast && (
        <div className={styles.toastContainer} role="status" aria-live="polite">
          <div className={styles.toast} role="alert">
            <span className={styles.toastMessage}>{toast}</span>
            <button className={styles.toastClose} onClick={hideToast} aria-label="Close notification">
              <FiX />
            </button>
            <div
              className={styles.toastTimer}
              style={{ animationDuration: `${toastDuration}ms` }}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default KnowEverythingSection;
