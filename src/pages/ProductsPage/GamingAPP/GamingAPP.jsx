// ChildCareManagement.jsx
import React from "react";

import FooterSection from "../../../sections/HomePageSection/FooterSection/FooterSection";
import SectionIntro from "../../../components/common/SectionIntro";

import HeroTitleChip from "../../../components/common/HeroTitleChip";

import styles from "./GamingAPP.module.css";
import HightLightSection from "../../../sections/AboutUs/HightLightSection/HightLightSection";
import JoinOurServiceSection from "../../../sections/Services/JoinOurServiceSection";
import GamingFeatureSection from "../../../sections/GamingFeatureSection/GamingFeatureSection";
import GamingShowcaseSection from "../../../sections/GamingShowcaseSection/GamingShowcaseSection";
import OurProcessSection from "../../../sections/OurProcessSections/OurProcessSection";

const SOCIALS = {
  linkedin:
    "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

const GameingApp = () => {
  // feature data for the EducationalFeaturesSection

  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <HeroTitleChip
          imageSrc="/images/products/GA.webp"
          alt="Gaming APP"
          title={"Gaming App"}
        />

        <div className={styles.heroSocialIcons}>
          <a
            href={SOCIALS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.social} ${styles.linkedin}`}
          >
            <span className={styles.text}>in</span>
          </a>
          <a
            href={SOCIALS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.social} ${styles.facebook}`}
          >
            <span className={styles.text}>F</span>
          </a>
        </div>
      </div>

      <SectionIntro
        title="Gaming App"
        paragraphs={[
          "Our Gaming App is designed to deliver an immersive, high-performance, and entertaining experience for users across all platforms. With rich graphics, smooth controls, and engaging gameplay, it’s built to attract, retain, and entertain players while supporting real-time multiplayer modes and in-app purchases for revenue growth.",
        ]}
      />

      <OurProcessSection
        heading="OUR PROCESS"
        leadText="We implement robust backends, analytics, and monetization systems to help clients maximize player retention and revenue."
        leftCards={[
          {
            title: "UI Design",
            bullets: ["Research & Wireframing", "Visual Design", "Prototyping"],
            bg: "#FBEDE0",
          },
          {
            title: "BackEnd Development",
            bullets: [
              "Data Base Design",
              "API Architecture",
              "Testing",
              "Deployment",
            ],
            bg: "#DFF6E6",
          },
        ]}
        rightCards={[
          {
            title: "Front End Development",
            bullets: [
              "Requirement Analysis",
              "Planning",
              "Making it Responsive",
              "API Integration",
            ],
            bg: "#F0E7FF",
          },
        ]}
        centerIcons={[
          "/images/products/figma.webp",
          "/images/products/react.webp",
          "/images/products/nodejs.webp",
        ]}
      />

      <GamingShowcaseSection
        background="/images/products/phone.webp"
        showcase="/images/products/phones.webp"
      />

      <GamingFeatureSection
        image="/images/products/g1.webp"
        icon="/images/products/icons1.webp"
        title="Smooth Gaming Experience"
        text="Our Gaming App is built to deliver a seamless and high-performance gaming experience that keeps players fully immersed."
        reverse={false}
      />

      {/* 2️⃣ Mobile And Laptop Support */}
      <GamingFeatureSection
        image="/images/products/g2.webp"
        icon="/images/products/icons2.webp"
        title="Mobile And Laptop Support"
        text="With optimized graphics, adaptive screen resolutions, and device-specific performance tuning, players enjoy seamless gameplay."
        reverse={true}
      />

      <JoinOurServiceSection
        imageSrc="/images/products/Games.webp"
        imageAlt="Our team"
        title="What Users get ?"
        paragraphs={[
          "Fun, engaging, and skill-based gaming experience.",
          "Real-time competitions with global players.",
          "Regular updates with new levels and challenges.",
          "24/7 player support and community features.",
          "Reward points and bonuses for consistent play.",
        ]}
        showButton={false}
      />

      <HightLightSection
        title="PRODUCTS & PLATFORMS"
        lead="Use our products that are&nbsp; well made<br/>and built"
        cards={[
          { value: "100 +", text: "Professionals in Global Network" },
          { value: "10 +", text: "Users that are using our products" },
          { value: "10 +", text: "Professionals in Global Network" },
          { value: "10 +", text: "Professionals in Global Network" },
        ]}
        columns={4}
      />

      <FooterSection
        brand="Panacea IT Services"
        year={new Date().getFullYear()}
        services={[
          "Software Development",
          "Mobile Apps",
          "UI/UX Design",
          "Digital Marketing",
          "SEO Optimization",
          "Consulting",
        ]}
        company={[
          "About Us",
          "Our Team",
          "Careers",
          "Portfolio",
          "Blog",
          "Contact",
        ]}
        legal={["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"]}
      />
    </section>
  );
};

export default GameingApp;
