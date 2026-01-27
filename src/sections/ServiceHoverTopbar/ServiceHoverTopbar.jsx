
// ServiceHoverTopbar.jsx
import React, { useEffect, useRef, useState } from "react";
import styles from "./ServiceHoverTopbar.module.css";
import { FiChevronDown } from "react-icons/fi";
import serviceImage from "../../assets/images/topbarserviceshoverimage.png";

// Service list with separate paths
const allServices = [
  { title: "Application Development", path: "/services/application-development" },
  { title: "Website Development", path: "/services/website-development" },
  { title: "Mobile Application", path: "/services/mobile-application" },
  { title: "Website Designing", path: "/services/website-designing" },
  { title: "CMS & E-Commerce", path: "/services/cms-ecommerce" },
  { title: "Digital Marketing", path: "/services/digital-marketing" },
  { title: "Cloud & DevOps", path: "/services/clouds-devops" },
  { title: "Testing Automation", path: "/services/testing-automation" },
];

// Helper to split array into equal columns
function chunkArray(arr, parts) {
  const out = Array.from({ length: parts }, () => []);
  arr.forEach((item, i) => out[i % parts].push(item));
  return out;
}

export default function ServiceHoverTopbar() {
  const [open, setOpen] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const panelRefs = useRef([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 768px)");
    const handler = (e) => setIsMobile(e.matches);

    handler(mq);
    if (mq.addEventListener) {
      mq.addEventListener("change", handler);
      return () => mq.removeEventListener("change", handler);
    } else if (mq.addListener) {
      mq.addListener(handler);
      return () => mq.removeListener(handler);
    }
  }, []);

  const columns = chunkArray(allServices, 3);

  const toggle = (idx) => setOpen((prev) => (prev === idx ? null : idx));
  const onKeyToggle = (e, idx) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle(idx);
    }
  };

  /* ---------------- DESKTOP ---------------- */
  if (!isMobile) {
    return (
      <div className={styles.container}>
        <div className={styles.inner}>
          <h3 className={styles.heading}>Explore Services</h3>

          <div className={styles.content}>
            <div className={styles.imageWrapper}>
              <img src={serviceImage} alt="Service showcase" />
            </div>

            <div className={styles.serviceGrid}>
              {columns.map((col, ci) => (
                <ul key={ci} className={styles.colList}>
                  {col.map((s) => (
                    <li key={s.title} className={styles.itemRow}>
                      <a href={s.path} className={styles.itemLink}>
                        <span className={styles.itemText}>{s.title}</span>
                        <span aria-hidden="true" className={styles.itemArrow}>→</span>
                      </a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ---------------- MOBILE ---------------- */
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <h3 className={styles.heading}>Explore Services</h3>

        <div className={styles.mobileWrap}>
          {/* mobile image (matches services topbar style) */}
          <div className={styles.imageWrapperMobile} aria-hidden="true">
            <img src={serviceImage} alt="Services" />
          </div>

          <ul className={styles.accordion}>
            {allServices.map((s, idx) => {
              const opened = open === idx;
              return (
                <li
                  className={`${styles.accItem} ${opened ? styles.accItemOpen : ""}`}
                  key={s.title}
                >
                  <button
                    type="button"
                    className={`${styles.accHeader} ${opened ? styles.open : ""}`}
                    aria-expanded={opened}
                    aria-controls={`srv-panel-${idx}`}
                    onClick={() => toggle(idx)}
                    onKeyDown={(e) => onKeyToggle(e, idx)}
                  >
                    <span className={styles.accTitle}>{s.title}</span>
                    <FiChevronDown
                      className={`${styles.chev} ${opened ? styles.chevOpen : ""}`}
                      aria-hidden="true"
                    />
                  </button>

                  <div
                    id={`srv-panel-${idx}`}
                    ref={(el) => (panelRefs.current[idx] = el)}
                    className={styles.accPanel}
                    style={
                      opened && panelRefs.current[idx]
                        ? { maxHeight: panelRefs.current[idx].scrollHeight + 20 }
                        : { maxHeight: 0 }
                    }
                    role="region"
                  >
                    <p className={styles.accBody}>
                      Learn more about <strong>{s.title}</strong> at:
                      <br />
                      <span className={styles.pathText}>{s.path}</span>
                    </p>
                    <div className={styles.panelFooter}>
                      <a className={styles.visitLink} href={s.path}>
                        View details →
                      </a>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className={styles.viewAllRowMobile}>
            <a className={styles.viewAllBtnMobile} href="/services">
              View all services →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
