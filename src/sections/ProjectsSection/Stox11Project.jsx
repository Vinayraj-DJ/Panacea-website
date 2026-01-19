import React, { useState, useEffect, useRef } from "react";
import styles from "./Stox11Project.module.css";
import ChildCareManagement from "./ChildCareManagement/ChildCareManagement";
import OmrSheetDesign from "./OmrSheetDesign/OmrSheetDesign";
import Button from "../../components/Button/Button";
import InfluencerApp from "./Influencer/InfluencerApp";
import ChattingApp from "./ChattingApp/ChattingApp";
import MutualFunds from "./MutualFunds/MutualFunds";
import BrainBuzz from "./BrainBuzz/BrainBuzz";
import HyderabadPartyRentals from "./HyderabadPartyRentals/HyderabadPartyRentals";
import Stox11 from "./Stox11/Stox11";

// console.log('Check imports →', {
//   Stox11,
//   ChildCareManagement,
//   OmrSheetDesign,
//   InfluencerApp,
//   ChattingApp,
//   MutualFunds,
//   BrainBuzz,
//   HyderabadPartyRentals,
//   Button,
// });




const SOCIALS = {
  linkedin:
    "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

const TOAST_DURATION = 4000; // ms

const Stox11Project = () => {
  const [toast, setToast] = useState({ show: false, message: "" });
  const timerRef = useRef(null);

  useEffect(() => {
    // When toast.show becomes true, start auto-hide timer
    if (toast.show) {
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setToast({ show: false, message: "" });
        timerRef.current = null;
      }, TOAST_DURATION);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [toast.show]);

  const handleCallClick = () => {
    // show toast
    setToast({
      show: true,
      message:
        "We're glad — looking forward to hearing from you. You will receive a response shortly.",
    });
  };

  const closeToast = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setToast({ show: false, message: "" });
  };

  return (
    <div className={styles.page}>
      {/* Hero & projects (unchanged) */}
      <div className={styles.hero}>
        <img
          src="/images/projectstopimage.webp"
          alt="Projects"
          className={styles.heroImg}
        />
        <div className={styles.heroSocialIcons}>
          <a
            href={SOCIALS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={`${styles.social} ${styles.linkedin}`}
          >
            <span className={styles.text}>in</span>
          </a>
          <a
            href={SOCIALS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className={`${styles.social} ${styles.facebook}`}
          >
            <span className={styles.text}>F</span>
          </a>
        </div>
      </div>

      <div
        className={styles.projectBackground}
        style={{
          backgroundImage: "url('/images/projectbackgroundimage.webp')",
        }}
      >
        <div className={styles.projectsGrid}>
          <div className={styles.childcare}>
            <Stox11/>
          </div>
          <div className={styles.childcare}>
            <ChildCareManagement />
          </div>
          <div className={styles.omr}>
            <OmrSheetDesign />
          </div>
          <div className={styles.influencer}>
            <InfluencerApp />
          </div>
          <div className={styles.chattingapp}>
            <ChattingApp />
          </div>
          <div className={styles.chattingapp}>
            <MutualFunds />
          </div>
          <div className={styles.chattingapp}>
            <BrainBuzz />
          </div>
          <div className={styles.chattingapp}>
            <HyderabadPartyRentals/>
          </div>
        </div>

        <div className={styles.knowMoreSection}>
          <h2 className={styles.knowMoreTitle}>KNOW MORE PROJECTS</h2>
          <p className={styles.knowMoreDesc}>
            To know more projects and details about technologies used to make
            these projects successful in a short span of time, please contact
            us.
          </p>
          <div className={styles.knowMoreButton}>
            <Button
              label="Call us"
              padding="12px 40px"
              fontSize="18px"
              backgroundColor="#4070B1"
              borderRadius="12px"
              onClick={handleCallClick}
            />
          </div>
        </div>
      </div>

      {/* TOP toast — same look & behavior as TopBar toast */}
      {toast.show && (
        <div
          className={styles.topRightToastWrapper}
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          <div className={styles.topToast}>
            <div className={styles.topToastInner}>
              <div className={styles.toastIcon} aria-hidden>
                {/* check icon (keeps style similar to earlier) */}✓
              </div>

              <div className={styles.toastText}>{toast.message}</div>

              <button
                className={styles.toastClose}
                onClick={closeToast}
                aria-label="Close notification"
              >
                ×
              </button>
            </div>

            {/* progress bar whose animation length matches TOAST_DURATION */}
            <div
              className={styles.toastProgress}
              style={{ animationDuration: `${TOAST_DURATION}ms` }}
              aria-hidden
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Stox11Project;
