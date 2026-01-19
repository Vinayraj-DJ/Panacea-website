
// src/sections/TopBar/TopBar.jsx
import React, { useEffect, useRef, useState } from "react";
import styles from "./TopBar.module.css";
import Button from "../../components/Button/Button";
import { useNavigate, useLocation } from "react-router-dom";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";

import logo from "../../assets/images/Logo.webp";
import bg from "../../assets/images/bgtopbar.png";
import ProductHoverTopbar from "../ProductHoverTopbar/ProductHoverTopbar";
import ServiceHoverTopbar from "../ServiceHoverTopbar/ServiceHoverTopbar";

const TopBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState(null);
  const [toast, setToast] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [prodHoverOpen, setProdHoverOpen] = useState(false);
  const [floatingTop, setFloatingTop] = useState(null);

  const toastTimerRef = useRef(null);
  const toastRef = useRef(null);
  const topbarRef = useRef(null);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  // NOTE: showToast was removed because it wasn't used anywhere in this file.
  // If you want to trigger toasts from other components later, we can expose
  // a context or pass a callback prop down to children.

  const hideToast = () => {
    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current);
      toastTimerRef.current = null;
    }
    setToast(null);
  };

  // Handle scroll/resize: sticky styles, toast positioning, floating button
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      setScrolled(y > 10);

      // position the toast using ref (if present)
      if (toastRef.current && topbarRef.current) {
        const topbarHeight = topbarRef.current.offsetHeight || 78;
        toastRef.current.style.top = `${topbarHeight + 6}px`;
      }

      if (prodHoverOpen) computeFloatingPosition();
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [prodHoverOpen]);

  // Close mobile menu and reset when route changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
    setMobileOpen(false);
    setMobileSub(null);
  }, [pathname]);

  // Click outside / ESC to close mobile nav. Lock body scroll when open.
  useEffect(() => {
    const onDocClick = (e) => {
      if (!mobileOpen) return;
      if (topbarRef.current && topbarRef.current.contains(e.target)) return;
      setMobileOpen(false);
      setMobileSub(null);
    };
    const onEsc = (e) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setMobileSub(null);
      }
    };
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onEsc);

    const prev = document.body.style.overflow;
    document.body.style.overflow = mobileOpen ? "hidden" : prev || "";

    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onEsc);
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  const isMobile = () =>
    typeof window !== "undefined" &&
    (window.matchMedia("(hover: none)").matches ||
      window.matchMedia("(max-width: 768px)").matches);

  const toggleMobileMenu = (e) => {
    e.stopPropagation();
    setMobileOpen((p) => {
      const next = !p;
      if (!next) setMobileSub(null);
      return next;
    });
  };

  const go = (path) => navigate(path);

  const onTriggerClick = (section, path) => {
    if (isMobile()) setMobileSub((prev) => (prev === section ? null : section));
    else navigate(path);
  };

  const isActive = (path, exact = false) =>
    exact ? pathname === path : pathname.startsWith(path);

  // Attach hover listeners for products hover on desktop & compute floating pos
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (isMobile()) return;

    let retries = 0;
    let mounted = true;
    const MAX_RETRIES = 8;
    const RETRY_MS = 150;
    let effectCleanup = null;

    const attach = () => {
      if (!mounted) return;
      const panel = document.getElementById("submenu-products");
      if (!panel) {
        if (retries < MAX_RETRIES) {
          retries += 1;
          setTimeout(attach, RETRY_MS);
        }
        return;
      }
      const host = panel.parentElement;
      if (!host) return;

      const onEnter = () => {
        setProdHoverOpen(true);
        setTimeout(() => computeFloatingPosition(), 20);
      };
      const onLeave = () => {
        setProdHoverOpen(false);
        setFloatingTop(null);
      };

      host.addEventListener("mouseenter", onEnter);
      host.addEventListener("mouseleave", onLeave);
      panel.addEventListener("mouseenter", onEnter);
      panel.addEventListener("mouseleave", onLeave);

      effectCleanup = () => {
        try {
          host.removeEventListener("mouseenter", onEnter);
          host.removeEventListener("mouseleave", onLeave);
          panel.removeEventListener("mouseenter", onEnter);
          panel.removeEventListener("mouseleave", onLeave);
        } catch (_) {}
      };
    };

    attach();
    return () => {
      mounted = false;
      if (effectCleanup) effectCleanup();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const computeFloatingPosition = () => {
    try {
      const panel = document.getElementById("submenu-products");
      if (!panel) return setFloatingTop(null);
      const rect = panel.getBoundingClientRect();
      const OVERLAP = -24; // negative -> lift button into the panel
      const top = rect.bottom + window.scrollY + OVERLAP;
      setFloatingTop(top);
    } catch {
      setFloatingTop(null);
    }
  };

  const FLOAT_VISIBLE = scrolled && !isMobile() && prodHoverOpen;

  return (
    <div
      ref={topbarRef}
      className={`${styles.topbar} ${scrolled ? styles.scrolled : ""}`}
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className={styles.left}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <div className={styles.titleBlock}>
          <h2 className={styles.title}>Panacea</h2>
          <p className={styles.subtitle}>IT Services Pvt.Ltd</p>
        </div>
      </div>

      <button
        type="button"
        className={styles.hamburger}
        aria-label="Toggle nav"
        aria-expanded={mobileOpen}
        onClick={toggleMobileMenu}
      >
        {mobileOpen ? <FiX /> : <FiMenu />}
      </button>

      <div
        id="topbar-mobile-nav"
        className={`${styles.center} ${mobileOpen ? styles.showMobile : ""}`}
      >
        <span
          className={`${styles.menuItem} ${isActive("/", true) ? styles.active : ""}`}
          onClick={() => go("/")}
          role="link"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter") go("/");
          }}
        >
          Home
        </span>

        <div
          className={`${styles.hoverTrigger} ${mobileSub === "products" ? styles.openMobile : ""}`}
        >
          <button
            type="button"
            className={styles.menuItemBtn}
            onClick={() => onTriggerClick("products", "/products")}
            aria-expanded={mobileSub === "products"}
          >
            <span className={`${styles.menuItem} ${isActive("/products") ? styles.active : ""}`}>
              Products
            </span>
            <FiChevronDown className={styles.arrowIcon} aria-hidden="true" />
          </button>
          <div
            id="submenu-products"
            className={`${styles.hoverPanel} ${mobileSub === "products" ? styles.mobilePanelOpen : ""}`}
          >
            <div className={styles.megaInner}>
              <ProductHoverTopbar />
              {!isMobile() && (
                <div className={styles.viewAllRow}>
                  <button type="button" className={styles.viewAllBtn} onClick={() => go("/products")}>
                    View all products →
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div
          className={`${styles.hoverTrigger} ${mobileSub === "services" ? styles.openMobile : ""}`}
        >
          <button
            type="button"
            className={styles.menuItemBtn}
            onClick={() => onTriggerClick("services", "/services")}
            aria-expanded={mobileSub === "services"}
          >
            <span className={`${styles.menuItem} ${isActive("/services") ? styles.active : ""}`}>
              Services
            </span>
            <FiChevronDown className={styles.arrowIcon} aria-hidden="true" />
          </button>
          <div
            id="submenu-services"
            className={`${styles.hoverPanel} ${mobileSub === "services" ? styles.mobilePanelOpen : ""}`}
          >
            <div className={styles.megaInner}>
              <ServiceHoverTopbar />
              {!isMobile() && (
                <div className={styles.viewAllRow}>
                  <button type="button" className={styles.viewAllBtn} onClick={() => go("/services")}>
                    View all services →
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <span
          className={`${styles.menuItem} ${isActive("/projects") ? styles.active : ""}`}
          onClick={() => go("/projects")}
          role="link"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter") go("/projects");
          }}
        >
          Projects
        </span>

        <span
          className={`${styles.menuItem} ${isActive("/aboutuspage") ? styles.active : ""}`}
          onClick={() => go("/aboutuspage")}
          role="link"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter") go("/aboutuspage");
          }}
        >
          About Us
        </span>

        <span
          className={`${styles.menuItem} ${isActive("/testimonials") ? styles.active : ""}`}
          onClick={() => go("/testimonials")}
          role="link"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter") go("/testimonials");
          }}
        >
          Testimonials
        </span>

        <span
          className={`${styles.menuItem} ${isActive("/spotlight") ? styles.active : ""}`}
          onClick={() => go("/spotlight")}
          role="link"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter") go("/spotlight");
          }}
        >
          Spotlight
        </span>
      </div>

      <div className={styles.right}>
        <Button
          label="Contact Us"
          borderRadius="12px"
          fontSize="var(--Font_Size_3)"
          padding="10px 20px"
          onClick={() => go("/contactUs")}
        />
      </div>

      {FLOAT_VISIBLE && (
        <div
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            top:
              floatingTop != null
                ? `${floatingTop}px`
                : (topbarRef.current ? topbarRef.current.offsetHeight + 8 : 86) + "px",
            zIndex: 1600,
            transition: "top 120ms ease",
            pointerEvents: "auto",
          }}
        >
          <button
            type="button"
            className={styles.viewAllBtn}
            onClick={() => go("/products")}
            aria-label="View all products"
          >
            View all products →
          </button>
        </div>
      )}

      {toast && (
        <div
          ref={toastRef}
          className={styles.toastContainer}
          role="status"
          aria-live="polite"
        >
          <div className={styles.toast}>
            <div className={styles.toastLeft}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="12" fill="#4FB1A1" />
                <path
                  d="M7 12.5L10 15.5L17 8.5"
                  stroke="#fff"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className={styles.toastBody}>{toast.message}</div>
            <button className={styles.toastClose} onClick={hideToast} aria-label="Close" type="button">
              <FiX aria-hidden="true" />
            </button>
            <div className={styles.toastTimer} />
          </div>
        </div>
      )}
    </div>
  );
};

export default TopBar;



