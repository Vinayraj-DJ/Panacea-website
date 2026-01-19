import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import styles from "./CloudDevOpsSection.module.css";

import JoinOurServiceSection from "../../../sections/Services/JoinOurServiceSection";
import KnowEverythingSection from "../../../sections/Services/KnowEverythingSection";
import FooterSection from "../../../sections/HomePageSection/FooterSection/FooterSection";
import HeroTitleChip from "../../../components/common/HeroTitleChip";

const SOCIALS = {
  linkedin: "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

const ITEMS = [
  {
    title: "DevOps",
    image: "/images/services/devops.webp",
    description:
      "DevOps is a modern approach that combines software development (Dev) and IT operations (Ops) to improve collaboration, efficiency, and software quality. It focuses on automating processes, integrating tools, and continuously delivering updates to ensure faster and more reliable software releases.",
  },
  {
    title: "AWS",
    image: "/images/services/aws.webp",
    description:
      "Amazon Web Services (AWS) is the world’s leading cloud computing platform, offering a wide range of services including computing power, storage, databases, networking, machine learning, and more.  startups or enterprises, AWS provides the flexibility and performance needed to build modern, scalable digital solutions.",
  },
  {
    title: "Windows Azure",
    image: "/images/services/azure.webp",
    description:
      "Microsoft Azure, formerly known as Windows Azure, is a leading cloud computing platform developed by Microsoft that provides a wide range of cloud services including computing, storage, networking, databases, and AI solutions.",
  },
  {
    title: "Cloud Consulting Services",
    image: "/images/services/consulting.webp",
    description:
      "Cloud Consulting Services help businesses plan, implement, and optimize their cloud journey with expert guidance and tailored strategies. By leveraging cloud consulting, organizations can accelerate digital transformation, reduce operational costs, enhance flexibility.",
  },
];

export default function CloudDevOpsSection({
  title = "Cloud & DevOps",
  basePath = "/services/clouds-and-devops",
}) {
  const description = (
    <>
      Cloud and DevOps are transforming the way businesses build, deploy, and manage
      applications. Cloud computing provides scalable, on-demand access to computing
      resources, enabling companies to reduce infrastructure costs and improve flexibility.
      DevOps bridges the gap between development and operations through automation,
      continuous integration, and continuous delivery (CI/CD) practices.
    </>
  );

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

  // simple runtime mobile check (no re-render)
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
      {/* Hero */}
      <div className={styles.hero}>
        <HeroTitleChip
          imageSrc="/images/services/clouds-and-devops.webp"
          alt="Cloud & DevOps"
          title={"Cloud & DevOps"}
        />

        {/* Social chips */}
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
        <p className={styles.description}>{description}</p>
      </div>

      {/* Grid with alternating offset (non-mobile) */}
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
                <img src={s.image} alt={s.title} className={styles.img} loading="lazy" />
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
