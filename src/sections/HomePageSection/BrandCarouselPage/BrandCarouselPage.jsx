import React, { useEffect, useRef } from "react";
import styles from "./BrandCarouselPage.module.css";

const logos = [
  "/logos/apple.png",
  "/logos/instagram.webp",
  "/logos/burgerking.webp",
  "/logos/amazon.webp",
  "/logos/paytm.webp",
  "/logos/facebook.webp",
  "/logos/googleads.webp",
  "/logos/drive.webp",
  "/logos/playstore.webp",
  "/logos/chrome.webp",
];

const BrandCarouselPage = () => {
  const viewportRef = useRef(null);
  const sliderRef = useRef(null);
  const dirRef = useRef(1); // 1 → right, -1 → left

  useEffect(() => {
    const slider = sliderRef.current;
    const viewport = viewportRef.current;
    if (!slider || !viewport) return;

    let pos = 0;
    let raf;

    const animate = () => {
      // negative bound when slider is wider than viewport
      const minLeft = Math.min(0, viewport.clientWidth - slider.scrollWidth);
      pos += dirRef.current * 2.2; // speed

      if (pos > 0) {
        pos = 0;
        dirRef.current = -1;
      } else if (pos < minLeft) {
        pos = minLeft;
        dirRef.current = 1;
      }

      slider.style.transform = `translateX(${pos}px)`;
      raf = requestAnimationFrame(animate);
    };

    const start = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(animate);
    };

    const stop = () => {
      cancelAnimationFrame(raf);
    };

    // start on mount
    start();

    // reflow-safe: restart on resize so bounds update
    const onResize = () => start();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      stop();
    };
  }, []);

  return (
    <section
      className={styles.carouselWrapper}
      aria-label="Brands that trust Panacea"
    >
      <h2 className={styles.heading}>10 + Brands Trust Panacea</h2>

      {/* Fixed, centered viewport */}
      <div className={styles.logoViewport} ref={viewportRef}>
        <div className={styles.logoSlider} ref={sliderRef}>
          <div className={styles.logoSpacer} />
          {logos.map((logo, idx) => (
            <div className={styles.logoBox} key={idx}>
              <img src={logo} alt={`brand-${idx}`} />
            </div>
          ))}
          <div className={styles.logoSpacer} />
        </div>
      </div>
    </section>
  );
};

export default BrandCarouselPage;
