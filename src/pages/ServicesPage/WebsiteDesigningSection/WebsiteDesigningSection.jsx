import React, { useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./WebsiteDesigningSection.module.css";

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
    title: "Flexible Images",
    image: "/images/services/website-designing/flexible-images.webp",
    description:
      "If you mean “flexible images for websites”, it usually refers to responsive or adaptive images that adjust automatically based on the screen size, resolution, and device type. This is a key part of modern web design to ensure images look perfect on desktops, tablets, and smartphones without slowing down the site.",
  },
  {
    title: "Media Queries",
    image: "/images/services/website-designing/media-queries.webp",
    description:
      "Media Queries are a fundamental feature of CSS (Cascading Style Sheets) used in responsive web design to apply different styles to a website based on device characteristics, such as screen width, height, orientation, resolution, and more. ",
  },
  {
    title: "Improve User Experience",
    image: "/images/services/website-designing/user-experience.webp",
    description:
      "Improving the user experience (UX) of a website is essential for engaging visitors, increasing conversions, and building a strong online presence. A great UX ensures that the website is fast, responsive, and accessible across all devices, including desktops, tablets, and smartphones. ",
  },
  {
    title: "Impact On SEO Ranking",
    image: "/images/services/website-designing/seo-impact.webp",
    description:
      "A well-designed website directly impacts SEO ranking by improving loading speed, mobile responsiveness, and user engagement. Optimized content, images, and proper structure help search engines index pages effectively. Secure, fast, and user-friendly sites attract more visitors, boosting organic traffic.",
  },
];

export default function WebsiteDesigningSection({
  title = "Website Designing Services",
  basePath = "/services/website-designing",
}) {
  const description = (
    <>
      We deliver visually engaging, performant, and responsive website designs optimized
      for UX and SEO. Our approach blends aesthetics, accessibility, and performance to
      create seamless experiences across all devices.
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

  // reactive mobile check so offsets are removed on small screens and update on resize
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 768 : false
  );

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <section
      className={styles.page}
      style={{
        backgroundImage: `url(/images/backgroundwhychooseus.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Hero Section */}
      <div className={styles.hero}>
        <HeroTitleChip
          imageSrc="/images/services/website-designing.webp"
          alt="Website Designing Services"
          title={"Website Designing\nServices"}
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

      {/* Cards Grid with Up-Down Alternation (disabled on mobile) */}
      <div className={styles.grid}>
        {cards.map((s, idx) => {
          // apply offset only when not mobile
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
              <div
                className={styles.imageWrap}
                style={{ position: "relative" }} /* keeps overlay positioned correctly */
              >
                <img
                  src={s.image}
                  alt={s.title}
                  className={styles.img}
                  loading="lazy"
                />
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
