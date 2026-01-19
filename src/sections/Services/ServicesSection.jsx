
import React from "react";
import styles from "./ServicesSection.module.css";

const SERVICES = [
  { image: "/images/services/app-dev.webp", title: "App Development", path: "/services/application-development" },
  { image: "/images/services/web-devlop.webp", title: "Web Development", path: "/services/website-development" },
  { image: "/images/services/ui-ux.webp", title: "UI/UX Designing", path: "" },
  { image: "/images/services/software-dev.webp", title: "Software Development", path: "/services/application-development/software-development" },
  { image: "/images/services/digital-mkt.webp", title: "Digital Marketing", path: "/services/digital-marketing" },
  { image: "/images/services/wordpress.webp", title: "Word Press", path: "/services/cms-ecommerce/wordpress-development" },
  { image: "/images/services/graphic.webp", title: "Graphic Designing", path: "" },
  { image: "/images/services/ai-video.webp", title: "AI Video Generation", path: "" },
];

// const SERVICES = [
//   { image: "/images/services/app-dev.jpg", title: "Application Development", path: "" },
//   { image: "/images/services/digital-mkt.jpg", title: "Digital Marketing", path: "" },
//   { image: "/images/services/.jpg", title: "Clouds & DevOps", path: "" },
//   { image: "/images/services/web-dev.jpg", title: "Website Development", path: "" },
//   { image: "/images/services/digital-mkt.jpg", title: "Mobile Application", path: "" },
//   { image: "/images/services/wordpress.jpg", title: "Testing Automation", path: "" },
//   { image: "/images/services/graphic.jpg", title: "CMS & E-Commerece", path: "" },
//   { image: "/images/services/wordpress.jpg", title: "Website Designing", path: "" },
// ];

const ServicesSection = () => {
  return (
    <section
      className={styles.section}
      style={{
        backgroundImage: `url(/images/backgroundwhychooseus.webp)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Heading */}
      <div className={styles.header}>
        <h2 className={styles.title}>
          Services <span className={styles.line}></span>
        </h2>
        <p className={styles.description}>
          At <strong>Panacea</strong>, we build powerful, scalable, and
          user-friendly software solutions that help businesses innovate, grow,
          and thrive in the digital age. From idea to execution, our products
          are designed to deliver real impact.
        </p>
      </div>

      {/* Grid of services */}
      <div className={styles.grid}>
        {SERVICES.map((s, idx) => {
          // If you later add a real path, put it in SERVICES[idx].path
          const href = s.path && s.path.length ? s.path : "#";
          const isPlaceholder = href === "#";

          return (
            <a
              key={s.title}
              href={href}
              className={`${styles.card} ${styles[`card${idx + 1}`]}`}
              aria-label={`View ${s.title}`}
              // when it's a placeholder, prevent scrolling to top if clicked accidentally
              onClick={(e) => isPlaceholder && e.preventDefault()}
            >
              <div className={styles.imageWrap}>
                <img src={s.image} alt={s.title} className={styles.img} />
              </div>
              <div className={styles.caption}>{s.title}</div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSection;
