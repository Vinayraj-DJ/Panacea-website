import React, { useEffect, useRef, useState } from "react";
import styles from "./WhyImageCarousel.module.css";

function Panel({ slide, side, stateClass, imageSrc }) {
  return (
    <div className={`${styles.panel} ${styles[side]} ${stateClass}`}>
      {/* FRONT angled image plate (one shared image for all slides) */}
      <div className={styles.imageShell}>
        <img
          src={imageSrc}
          alt={slide.imageAlt || "About"}
          className={styles.image}
        />
      </div>

      {/* BACK angled sheet with content */}
      <div className={styles.sheet}>
        <div className={styles.eyebrow}>
          {slide.eyebrow}
          <span className={styles.rule} />
        </div>

        <h2 className={styles.title}>
          {slide.titlePre} <span>{slide.titleHighlight}</span> {slide.titlePost}
        </h2>

        {slide.copy?.map((p, i) => (
          <p className={styles.copy} key={i}>
            {p}
          </p>
        ))}

        {slide.cta && (
          <button className={styles.cta} onClick={slide.cta.onClick}>
            {slide.cta.label}
          </button>
        )}
      </div>
    </div>
  );
}

/**
 * Props:
 *  - imageSrc: string (ONE public image path used for every slide)
 *  - slides: [{
 *      eyebrow, titlePre, titleHighlight, titlePost,
 *      copy: [paragraphs], cta?: { label, onClick }
 *    }]
 *  - auto?: boolean
 *  - autoMs?: number
 */
export default function WhyImageCarousel({
  imageSrc,
  slides = [],
  auto = true,
  autoMs = 5000,
}) {
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState(null);
  const timerRef = useRef(null);

  const go = (idx) => {
    setPrev(active);
    setActive(idx);
  };

  useEffect(() => {
    if (!auto || slides.length <= 1) return;
    timerRef.current && clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setPrev((p) => (p === null ? active : p));
      setActive((i) => (i + 1) % slides.length);
    }, autoMs);
    return () => clearInterval(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, auto, autoMs, slides.length]);

  const sideFor = (idx) => (idx % 2 === 0 ? "left" : "right");

  return (
    <div className={styles.wrap}>
      <div className={styles.row}>
        {/* fading out previous so the tilt crossfades nicely */}
        {prev !== null && prev !== active && slides[prev] && (
          <Panel
            slide={slides[prev]}
            side={sideFor(prev)}
            stateClass={
              styles[sideFor(prev) === "left" ? "hideLeft" : "hideRight"]
            }
            imageSrc={imageSrc}
          />
        )}

        {/* active */}
        {slides[active] && (
          <Panel
            slide={slides[active]}
            side={sideFor(active)}
            stateClass={styles.show}
            imageSrc={imageSrc}
          />
        )}
      </div>

      {/* dots */}
      {slides.length > 1 && (
        <div className={styles.dots}>
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              className={`${styles.dot} ${
                i === active ? styles.activeDot : ""
              }`}
              onClick={() => go(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
