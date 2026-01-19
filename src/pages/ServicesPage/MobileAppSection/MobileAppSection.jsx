import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import styles from "./MobileAppSection.module.css";

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
    title: "iOS App Development",
    image: "/images/services/mobile/ios.webp",
    description:
      "iOS App Development refers to the process of designing, building, and maintaining mobile applications specifically for Apple devices such as iPhones, iPads, and iPods. These apps are developed using Swift or Objective-C programming languages and are deployed on the Apple App Store.",
  },
  {
    title: "Android App Development",
    image: "/images/services/mobile/android.webp",
    description:
      "Android App Development refers to the process of designing, building, and maintaining mobile applications specifically for Android devices, including smartphones, tablets, and wearable devices. Android apps are typically developed using Java or Kotlin programming languages and deployed on the Google Play Store.",
  },
  {
    title: "iPad Development",
    image: "/images/services/mobile/ipad.webp",
    description:
      "iPad App Development refers to the process of designing, building, and maintaining applications specifically optimized for iPad devices within the Apple ecosystem. While similar to iOS app development, iPad development emphasizes larger screen layouts, multitasking support.",
  },
  {
    title: "Game Development",
    image: "/images/services/mobile/game.webp",
    description:
      "Game Development refers to the process of conceptualizing, designing, building, and deploying interactive video games for platforms such as PC, consoles, mobile devices, and web browsers. It combines creative storytelling, graphics, sound design, and programming to deliver engaging user experiences.",
  },
];

export default function MobileAppSection({
  title = "Mobile Application Services",
  basePath = "/services/mobile-application",
}) {
  const description = (
    <>
      Mobile Application Services cover the complete process of designing,
      building, and maintaining apps for iOS and Android platforms. These apps
      enable businesses to directly engage users with fast, secure, and
      intuitive experiences.
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

  // ✅ Stagger cards only on desktop/tablet, not on mobile
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
      {/* Hero section */}
      <div className={styles.hero}>
        <HeroTitleChip
          imageSrc="/images/services/mobile-application.webp"
          alt="Mobile Application Services"
          title={"Mobile Application\nServices"}
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
        <p className={styles.description}>{description}</p>
      </div>

      {/* Grid of cards (hover overlay + staggered layout) */}
      <div className={styles.grid}>
        {cards.map((s, idx) => {
          // alternate up/down only on larger screens
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

      <JoinOurServiceSection />
      <KnowEverythingSection />
      <FooterSection />
    </section>
  );
}
