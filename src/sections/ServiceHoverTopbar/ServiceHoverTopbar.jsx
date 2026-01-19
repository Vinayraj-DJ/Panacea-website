
// ServiceHoverTopbar.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./ServiceHoverTopbar.module.css";
import { FiChevronDown } from "react-icons/fi";
import servicesImg from "../../assets/images/topbarserviceshoverimage.png";

const services = [
  { title: "Application Development", path: "/services/application-development" },
  { title: "Digital Marketing",       path: "/services/digital-marketing" },
  { title: "Clouds & DevOps",         path: "/services/clouds-and-devops" },
  { title: "Website Development",     path: "/services/website-development" },
  { title: "Mobile Application",      path: "/services/mobile-application" },
  { title: "Testing Automation",      path: "/services/testing-automation" },
  { title: "CMS & E-Commerce",        path: "/services/cms-ecommerce" },
  { title: "Website Designing",       path: "/services/website-designing" }
];

const ServiceHoverTopbar = () => {
  const [open, setOpen] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const panelRefs = useRef([]);
  const navigate = useNavigate();

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

  // ensure panelRefs length matches services
  panelRefs.current = services.map((_, i) => panelRefs.current[i] ?? null);

  const toggle = (idx) => setOpen((prev) => (prev === idx ? null : idx));
  const onKeyToggle = (e, idx) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle(idx);
    }
  };

  if (!isMobile) {
    // DESKTOP/TABLET view (image + grid)
    return (
      <div className={styles.container}>
        <div className={styles.inner}>
          <h3 className={styles.heading}>Explore Services</h3>

          <div className={styles.content}>
            <Link to="/services" className={styles.imageWrapper} aria-label="View all services">
              <img src={servicesImg} alt="Services showcase" />
            </Link>

            <div className={styles.serviceGrid}>
              {services.map((s) => (
                <Link
                  to={s.path}
                  className={`${styles.serviceItem} ${styles.serviceLink}`}
                  key={s.title}
                >
                  <h4 className={styles.serviceTitle}>
                    <span className={styles.serviceTitleText}>{s.title}</span>
                    <span className={styles.serviceArrow} aria-hidden="true">→</span>
                  </h4>
                </Link>
              ))}
            </div>
          </div>

          <div className={styles.viewAllRowDesktop}>
            <button
              className={styles.viewAllBtnDesktop}
              onClick={() => navigate("/services")}
              type="button"
            >
              {/* View all services → */}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // MOBILE accordion view
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <h3 className={styles.heading}>Explore Services</h3>

        <div className={styles.mobileWrap}>
          <div className={styles.imageWrapperMobile} aria-hidden="true">
            <img src={servicesImg} alt="Service" />
          </div>

          <ul className={styles.accordion}>
            {services.map((s, idx) => {
              const opened = open === idx;
              return (
                <li
                  className={`${styles.accItem} ${opened ? styles.accItemOpen : ""}`}
                  key={s.title}
                >
                  <button
                    type="button"
                    className={`${styles.accHeader} ${opened ? styles.open : ""}`}
                    onClick={() => toggle(idx)}
                    onKeyDown={(e) => onKeyToggle(e, idx)}
                    aria-expanded={opened}
                    aria-controls={`svc-panel-${idx}`}
                  >
                    <span className={styles.accTitle}>{s.title}</span>
                    <FiChevronDown
                      className={`${styles.chev} ${opened ? styles.chevOpen : ""}`}
                      aria-hidden="true"
                    />
                  </button>

                  <div
                    id={`svc-panel-${idx}`}
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
                      <span className={styles.pathText}>{s.path}</span>
                    </p>

                    <div className={styles.panelFooter}>
                      <Link to={s.path} className={styles.visitLink}>
                        View details →
                      </Link>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className={styles.viewAllRowMobile}>
            <button
              className={styles.viewAllBtnMobile}
              onClick={() => navigate("/services")}
              type="button"
            >
              View all services →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHoverTopbar;
