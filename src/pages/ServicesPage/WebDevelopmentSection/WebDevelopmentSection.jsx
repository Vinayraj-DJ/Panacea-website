import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import styles from "./WebDevelopmentSection.module.css";
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
    title: "Php Development",
    image: "/images/services/web-dev/php.webp",
    description:
      "PHP Development refers to the process of creating dynamic and interactive websites or web applications using PHP (Hypertext Preprocessor), a popular open-source server-side scripting language. PHP is widely used for building websites, web applications, e-commerce platforms.",
  },
  {
    title: "Node.js Development",
    image: "/images/services/web-dev/nodejs.webp",
    description:
      "Node.js Development refers to the process of building scalable, high-performance web applications and server-side solutions using Node.js, an open-source, JavaScript-based runtime environment. Unlike traditional server-side technologies, Node.js allows developers to use JavaScript on both the front-end and back-end.",
  },
  {
    title: "Angular js Development",
    image: "/images/services/web-dev/angular.webp",
    description:
      "AngularJS Development refers to the process of building dynamic, single-page web applications (SPAs) using AngularJS, an open-source front-end JavaScript framework maintained by Google. AngularJS enables developers to create interactive, responsive, and data-driven web applications by extending HTML.",
  },
  {
    title: "React js Development",
    image: "/images/services/web-dev/react.webp",
    description:
      "ReactJS Development refers to the process of building modern, high-performance, and interactive user interfaces for web applications using ReactJS, an open-source JavaScript library developed by Facebook. ReactJS is widely used for creating single-page applications (SPAs), dynamic web apps.",
  },
  {
    title: "Laravel Development",
    image: "/images/services/web-dev/laravel.webp",
    description:
      "Laravel Development refers to the process of building modern, secure, and scalable web applications using Laravel, a popular open-source PHP framework. Laravel follows the MVC (Model-View-Controller) architecture and provides developers with a clean, elegant syntax, built-in tools, and libraries to speed up development.",
  },
  {
    title: "Codeigniter Development",
    image: "/images/services/web-dev/codeigniter.webp",
    description:
      "CakePHP Development refers to the process of building robust, secure, and scalable web applications using CakePHP, an open-source PHP framework that follows the MVC (Model-View-Controller) architecture.",
  },
  {
    title: "Cakephp Development",
    image: "/images/services/web-dev/cakephp.webp",
    description:
      "CodeIgniter Development refers to the process of building dynamic, robust, and high-performance web applications using CodeIgniter, an open-source PHP framework known for its lightweight structure and simplicity. CodeIgniter is widely used for enterprise web apps, e-commerce.",
  },
];

export default function WebDevelopmentSection({
  title = "Web Development Services",
  basePath = "/services/web-development",
}) {
  const description = (
    <>
      Web Development Services involve designing, building, and maintaining
      websites and web applications — covering everything from front-end UI to
      back-end logic, databases, and performance optimization.
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
      {/* Hero section */}
      <div className={styles.hero}>
        <HeroTitleChip
          imageSrc="/images/services/web-development.webp"
          alt="Web Development Services"
          title={"Web Development\nServices"}
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

      {/* Grid of cards (with hover overlay + alternating offset) */}
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

      <JoinOurServiceSection />
      <KnowEverythingSection />
      <FooterSection />
    </section>
  );
}
