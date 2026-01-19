import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import styles from "./ApplicationDevelopmentSection.module.css";

import JoinOurServiceSection from "../../../sections/Services/JoinOurServiceSection";
import KnowEverythingSection from "../../../sections/Services/KnowEverythingSection";
import FooterSection from "../../../sections/HomePageSection/FooterSection/FooterSection";
import HeroTitleChip from "../../../components/common/HeroTitleChip";

const SOCIALS = {
  linkedin:
    "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

const ITEMS = [
  {
    title: "Full Stack Development",
    image: "/images/services/fullstackdevelopment.webp",
    description:
      "Full Stack Development is the process of designing, building, and maintaining both the frontend (client-side) and backend (server-side) of a web application. In India, a Full Stack Developer’s salary typically ranges from ₹4–7 LPA for beginners to ₹15–30 LPA for experienced professionals.",
  },
  {
    title: "Digital Transformation",
    image: "/images/services/digital-transformation.webp",
    description:
      "Digital Transformation is the process of integrating digital technologies into all areas of a business to fundamentally change how it operates, delivers value to customers, and adapts to market needs. The main areas of digital transformation typically include business process transformation.",
  },
  {
    title: "Sales Force Consulting",
    image: "/images/services/salesforce.webp",
    description:
      "Salesforce Consulting refers to the professional service of helping businesses implement,customize,and optimize Salesforce, the world’s leading Customer Relationship Management (CRM) platform. Salesforce consultants work with organizations to understand their sales, marketing, service, and operational processes.",
  },
  {
    title: "Software Development",
    image: "/images/services/software-development.webp",
    description:
      "Software Development is the process of designing, creating, testing, and maintaining software applications that solve specific problems or perform particular functions for users and organizations. It combines creativity, logic, and engineering principles to turn ideas into practical digital solutions .",
  },
  {
    title: "Custom Application",
    image: "/images/services/custom-application.webp",
    description:
      "Custom Application Development is the process of designing, building, and deploying software applications specifically tailored to meet the unique needs of a particular business, organization, or user group. Testing & Quality Assurance: Ensuring the app functions correctly, securely, and efficiently through rigorous testing.",
  },
  {
    title: "BI & Data Analysis",
    image: "/images/services/bi-data-analysis.webp",
    description:
      "Business Intelligence (BI) and Data Analysis are two closely connected disciplines that help organizations make data-driven decisions by collecting, processing, and interpreting data to uncover insights, patterns, and trends. Together, they empower businesses to understand their performance.",
  },
  {
    title: "Big Data Services",
    image: "/images/services/big-data.webp",
    description:
      "Big Data Services refer to the technologies, tools, and solutions used to collect, store, process, and analyze massive volumes of structured, semi-structured, and unstructured data that traditional data systems cannot handle efficiently. The reliability and accuracy of data.",
  },
  {
    title: "SAP Consulting Services",
    image: "/images/services/Rectangle 34624653 (1).webp",
    description:
      "SAP Consulting Services refer to professional services that help organizations implement, customize, optimize, and manage SAP software solutions to streamline business processes, improve productivity, and achieve digital transformation.",
  },
];

export default function ApplicationDevelopmentSection({
  title = "Application Development",
  basePath = "/services/application-development",
}) {
  const cards = useMemo(
    () =>
      ITEMS.map((it) => {
        const slug = it.title
          .toLowerCase()
          .trim()
          .replace(/&/g, "and")
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-+|-+$/g, "");
        return { ...it, to: `${basePath}/${slug}` };
      }),
    [basePath]
  );

  // ✅ Check screen width (simple runtime check, no re-render)
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  return (
    <section className={styles.page}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <HeroTitleChip
          imageSrc="/images/services/applicationDevelopment.webp"
          alt="image not found"
          title={"Application\nDevelopment"}
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

      {/* Header */}
      <div className={styles.header}>
        <h2 className={styles.title}>
          {title} <span className={styles.line}></span>
        </h2>
        <p className={styles.description}>
          At <strong>Panacea</strong>, we build powerful, scalable, and
          user-friendly software solutions that help businesses innovate, grow,
          and thrive in the digital age.
        </p>
      </div>

      {/* Grid with alternating up/down offset */}
      <div className={styles.grid}>
        {cards.map((s, idx) => {
          // Up/Down offset only on non-mobile
          const offsetY = !isMobile
            ? idx % 2 === 0
              ? "-25px"
              : "25px"
            : "0px";

          return (
            <Link
              key={idx}
              to={s.to}
              className={styles.card}
              style={{
                transform: `translateY(${offsetY})`,
                transition: "transform 0.4s ease",
              }}
            >
              <div
                className={styles.imageWrap}
                style={{ position: "relative" }}
              >
                <img
                  src={s.image}
                  alt={s.title}
                  className={styles.img}
                  loading="lazy"
                />
                <div className={styles.overlay}>
                  <p className={styles.overlayText}>{s.description}</p>
                </div>
              </div>
              <div className={styles.caption}>{s.title}</div>
            </Link>
          );
        })}
      </div>

      {/* Footer sections */}
      <JoinOurServiceSection />
      <KnowEverythingSection />
      <FooterSection />
    </section>
  );
}
