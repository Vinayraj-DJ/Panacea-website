// src/sections/TeamSection/TeamSection.jsx
import React, { useRef, useEffect, useState } from "react";
import styles from "./TeamSection.module.css";

const TEAM = [
  { name: "Kotla Darshan", role: "Front End Designer", photo: "/images/Home/darshan.webp" },
  { name: "Harika", role: "Mobile App Developer", photo: "/images/Home/harika.webp" },
  { name: "Varun", role: "UI/UX Designer", photo: "/images/Home/varun.webp" },
  { name: "Pavankalyan", role: "Technical Lead & Digital Marketing", photo: "/images/Home/pavan.webp" },,
  { name: "Deekshith", role: "Backend Developer ", photo: "/images/Home/deekshith2.webp" },
   { name: "Vinay Raj", role: "Front End Developer", photo: "/images/Home/vinayraj2.webp" }
  ,
  
];

const TOAST_DURATION = 4000; // ms (4 seconds)

export default function TeamSection() {
  // Put your background image in public/images (e.g. /public/images/team-section-bg.jpg)
  const bgStyle = {
    backgroundImage: `url(/images/teamsectionbg.webp)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const [toast, setToast] = useState({ show: false, message: "" });
  const timerRef = useRef(null);

  useEffect(() => {
    // cleanup on unmount
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, []);

  // show toast helper: message text, duration optional
  const showToast = (message, duration = TOAST_DURATION) => {
    // clear existing timer
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    setToast({ show: true, message });

    // auto-hide
    timerRef.current = setTimeout(() => {
      setToast({ show: false, message: "" });
      timerRef.current = null;
    }, duration);
  };

  const closeToast = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setToast({ show: false, message: "" });
  };

  const onScheduleCall = () => {
    // Show toast and then open phone link (keeps original behavior)
    showToast(
      "We're glad — looking forward to hearing from you. You will receive a response shortly."
    );

    // open dialer (immediately) — keep original behavior
    window.open("tel:+91 9347959436", "_self");
  };

  return (
    <section className={styles.section} style={bgStyle}>
      <div className={styles.inner}>
        <div className={styles.topBar}>
          <div className={styles.kicker}>Our Team</div>

          <h2 className={styles.title}>
            Get In <span>Touch With</span> Us
          </h2>

          <button className={styles.cta} type="button" onClick={onScheduleCall}>
            Schedule A call
          </button>
        </div>

        <div className={styles.grid}>
          {TEAM.map((m, i) => (
            <div className={styles.card} key={`${m.name}-${i}`}>
              <div className={styles.avatarWrap}>
                <img className={styles.avatar} src={m.photo} alt={m.name} />
                {i % 2 === 0 ? (
                  <span className={`${styles.dot} ${styles.dotDark}`} />
                ) : (
                  <span className={`${styles.dot} ${styles.dotAccent}`} />
                )}
              </div>

              <div className={styles.name}>{m.name}</div>
              <div className={styles.role}>{m.role}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Toast (top-right on desktop, centered on mobile) */}
      {toast.show && (
        <div className={styles.toastWrapper} role="status" aria-live="polite">
          <div className={styles.topToast}>
            <div className={styles.topToastInner}>
              <div className={styles.toastIcon} aria-hidden>
                ✓
              </div>

              <div className={styles.toastText}>{toast.message}</div>

              <button
                className={styles.toastClose}
                aria-label="Close notification"
                onClick={closeToast}
              >
                ×
              </button>
            </div>

            {/* Progress bar — animation duration set inline to match timer */}
            <div
              className={styles.toastProgress}
              style={{ animationDuration: `${TOAST_DURATION}ms` }}
              aria-hidden
            />
          </div>
        </div>
      )}
    </section>
  );
}
