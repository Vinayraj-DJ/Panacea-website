
import React, { useEffect, useRef, useState } from "react";
import styles from "./ProductHoverTopbar.module.css";
import { FiChevronDown } from "react-icons/fi";
import productImage from "../../assets/images/topbarproducthoverimage.png";

// Product list with separate paths
const allProducts = [
  { title: "Child Care Management System", path: "/products/child-care-management" },
  { title: "Influencers App", path: "/products/influencers-app" },
  { title: "Mutuals Funds", path: "/products/mutual-funds" },
  { title: "OMR Customization", path: "/products/omr-customization" },
  { title: "School App", path: "/products/school-app" },
  { title: "Hyderabad Party Rentals", path: "/products/hyderabad-party-rentals" },
  { title: "Car Wash App", path: "/products/car-wash-app" },
  { title: "Grocery Delivery", path: "/products/grocery-delivery" },
  { title: "E-Learning App", path: "/products/e-learning-app" },
  { title: "Ott App", path: "/products/ott-app" },
  { title: "E-commerce Website", path: "/products/ecommerce-website" },
  { title: "Gaming App", path: "/products/gaming-app" },
  { title: "Ticket Booking App", path: "/products/ticket-booking-app" },
  { title: "Jewellery Website", path: "/products/jewellery-website" },
  { title: "Fitness App", path: "/products/fitness-app" },
];

// Helper to split array into equal columns
function chunkArray(arr, parts) {
  const out = Array.from({ length: parts }, () => []);
  arr.forEach((item, i) => out[i % parts].push(item));
  return out;
}

export default function ProductHoverTopbar() {
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

  const columns = chunkArray(allProducts, 3);

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
          <h3 className={styles.heading}>Explore Products</h3>

          <div className={styles.content}>
            <div className={styles.imageWrapper}>
              <img src={productImage} alt="Product showcase" />
            </div>

            <div className={styles.productGrid}>
              {columns.map((col, ci) => (
                <ul key={ci} className={styles.colList}>
                  {col.map((p) => (
                    <li key={p.title} className={styles.itemRow}>
                      <a href={p.path} className={styles.itemLink}>
                        <span className={styles.itemText}>{p.title}</span>
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
        <h3 className={styles.heading}>Explore Products</h3>

        <div className={styles.mobileWrap}>
          {/* mobile image (matches services topbar style) */}
          <div className={styles.imageWrapperMobile} aria-hidden="true">
            <img src={productImage} alt="Products" />
          </div>

          <ul className={styles.accordion}>
            {allProducts.map((p, idx) => {
              const opened = open === idx;
              return (
                <li
                  className={`${styles.accItem} ${opened ? styles.accItemOpen : ""}`}
                  key={p.title}
                >
                  <button
                    type="button"
                    className={`${styles.accHeader} ${opened ? styles.open : ""}`}
                    aria-expanded={opened}
                    aria-controls={`prd-panel-${idx}`}
                    onClick={() => toggle(idx)}
                    onKeyDown={(e) => onKeyToggle(e, idx)}
                  >
                    <span className={styles.accTitle}>{p.title}</span>
                    <FiChevronDown
                      className={`${styles.chev} ${opened ? styles.chevOpen : ""}`}
                      aria-hidden="true"
                    />
                  </button>

                  <div
                    id={`prd-panel-${idx}`}
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
                      Learn more about <strong>{p.title}</strong> at:
                      <br />
                      <span className={styles.pathText}>{p.path}</span>
                    </p>
                    <div className={styles.panelFooter}>
                      <a className={styles.visitLink} href={p.path}>
                        View details →
                      </a>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className={styles.viewAllRowMobile}>
            <a className={styles.viewAllBtnMobile} href="/products">
              View all products →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
