
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./OurServicesSection.module.css";

// Service data with navigation paths
const serviceData = [
  { title: "App Development", img: "/images/services/app-ribbon.webp", path: "/services/application-development" },
  { title: "Web Development", img: "/images/services/web-ribbon.webp", path: "/services/website-development" },
  { title: "UI/UX Designing", img: "/images/services/uiux-ribbon.webp", path: "/services/website-designing" },
  { title: "S/W development", img: "/images/services/sw-ribbon.webp", path: "/services/application-development" },
  { title: "Digital marketing", img: "/images/services/digital-ribbon.webp", path: "/services/digital-marketing" },
  { title: "Cloud Services", img: "/images/services/wp-ribbon.webp", path: "/services/clouds-and-devops" },
];

const OurServicesSection = () => {
  const navigate = useNavigate();

  const handleServiceClick = (path) => {
    navigate(path);
  };

  return (
    <div className={styles.section}>
      <div className={styles.bgWrapper}>
        <img
          src="/images/ourservicesimage.webp"
          alt="Our Services Background"
          className={styles.bgImage}
        />
        <div className={styles.textBox}>
          <h2 className={styles.heading}>OUR SERVICES</h2>
          <p className={styles.description}>
            We provide innovative, tailor-made solutions to meet your business
            needs. Our team delivers high-quality services with a focus on
            efficiency and results. Client satisfaction is our priority as we
            ensure timely, reliable, and scalable services.
          </p>
        </div>
      </div>

      <div className={styles.cardWrapper}>
        <div className={styles.cards}>
          {serviceData.map((s) => (
            <img
              key={s.title}
              src={s.img}
              alt={s.title}
              className={styles.cardImage}
              loading="lazy"
              onClick={() => handleServiceClick(s.path)}
              style={{ cursor: "pointer" }}
            />
          ))}
        </div>

        <div className={styles.link}>
          <a href="/services">Go to Services Page &gt;&gt;</a>
        </div>
      </div>
    </div>
  );
};

export default OurServicesSection;
