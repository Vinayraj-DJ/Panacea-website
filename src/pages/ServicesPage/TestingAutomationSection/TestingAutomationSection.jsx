import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import styles from "./TestingAutomationSection.module.css";

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
    title: "Quality Engineering",
    image: "/images/services/testing-automation/quality-engineering.webp",
    description:
      "Quality Engineering is a systematic approach focused on ensuring that products, software, or systems are built with quality from the very beginning, rather than just tested for quality at the end. It involves applying engineering principles, data analysis, and automation. The ultimate goal of quality engineering is to deliver faster, safer products.",
  },
  {
    title: "Quality Consulting",
    image: "/images/services/testing-automation/quality-consulting.webp",
    description:
      "Quality Consulting is a professional service that helps organizations improve their processes, products, and performance by implementing effective quality management strategies and standards. It provides expert guidance to enhance overall quality, compliance, and customer satisfaction.",
  },
  {
    title: "Quality Assurance",
    image: "/images/services/testing-automation/quality-assurance.webp",
    description:
      "Quality Assurance (QA) is a systematic process that ensures a product or service meets specified requirements and maintains a high standard of quality throughout its development and delivery. The main goal of quality assurance is to build confidence in the product’s security and functionality before it reaches end users.",
  },
];


export default function TestingAutomationSection({
  title = "Testing Automation",
  basePath = "/services/testing-automation",
}) {
  const description = (
    <>
      Testing automation uses scripts and tools to run repeatable tests, compare actual vs
      expected outcomes, and report defects automatically. Integrated with CI/CD, it enables
      continuous testing and faster, more reliable releases.
    </>
  );

  // Build links for cards
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

  // Disable stagger effect on mobile
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  return (
    <section
      className={styles.page}
      style={{
        backgroundImage: `url(/images/backgroundwhychooseus.webp)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Hero Section */}
      <div className={styles.hero}>
        <HeroTitleChip
          imageSrc="/images/services/testing-automation.webp"
          alt="Testing Automation"
          title={"Testing Automation"}
        />

        {/* Social Links */}
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

      {/* Section Header */}
      <div className={styles.header}>
        <h2 className={styles.title}>
          {title} <span className={styles.line}></span>
        </h2>
        <p className={styles.description}>{description}</p>
      </div>

      {/* Grid with stagger effect + hover overlays */}
      <div className={styles.grid}>
        {cards.map((s, idx) => {
          const offsetY = !isMobile ? (idx % 2 === 0 ? "-25px" : "25px") : "0px";

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
              <div className={styles.imageWrap} style={{ position: "relative" }}>
                <img
                  src={s.image}
                  alt={s.title}
                  className={styles.img}
                  loading="lazy"
                />

                {/* ✅ Hover overlay */}
                <div className={styles.overlay}>
                  <div className={styles.overlayText}>{s.description}</div>
                </div>
              </div>

              <div className={styles.caption}>{s.title}</div>
            </Link>
          );
        })}
      </div>

      {/* Footer Sections */}
      <JoinOurServiceSection />
      <KnowEverythingSection />
      <FooterSection />
    </section>
  );
}
