// ChildCareManagement.jsx
import React from "react";
import FooterSection from "../../../sections/HomePageSection/FooterSection/FooterSection";
import SectionIntro from "../../../components/common/SectionIntro";
import HeroTitleChip from "../../../components/common/HeroTitleChip";
import styles from "./OTTApp.module.css";
import HightLightSection from "../../../sections/AboutUs/HightLightSection/HightLightSection";
import SmartScalableSection from "../../../sections/Products/SmartScalableSection";
import KnowEverythingSection from "../../../sections/Services/KnowEverythingSection";
import OTTHeroSection from "../../../sections/OTTHeroSection/OTTHeroSection";
import CloudImageComponent from "../../../sections/CloudImageComponent/CloudImageComponent";

const SOCIALS = {
  linkedin:
    "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

const OTTApp = () => {
  // feature data for the EducationalFeaturesSection

  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <HeroTitleChip
          imageSrc="/images/products/OTT.webp"
          alt="OTT App"
          title={"OTT App"}
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
        title="OTT App "
        paragraphs={[
          "Our OTT App offers a seamless entertainment experience by allowing users to stream movies, TV shows, web series, and live content anytime, anywhere. Built with a robust backend and an engaging user interface, it delivers high-quality video streaming with personalized recommendations and secure user management.",
        ]}
      />

      <OTTHeroSection
        //  title="OTT App"
        heroImage="/images/products/ott-hero-mockup.webp"
        phoneImage="/images/products/ott-phone.webp"
      />

      <CloudImageComponent />

      <SmartScalableSection
        title="What Users get ?"
        items={[
          { image: "/images/products/1.webp", title: "FLEXIBILTY" },
          { image: "/images/products/2.webp", title: "TRANSPARENT" },
          { image: "/images/products/3.webp", title: "SECURE" },
          { image: "/images/products/4.webp", title: "REALIABLE" },
          { image: "/images/products/5.webp", title: "FULL CONTROL" },
          { image: "/images/products/6.webp", title: "BEST INSIGHTS" },
          { image: "/images/products/7.webp", title: "DASHBOARDS" },
          { image: "/images/products/7.webp", title: "DASHBOARDS" },
        ]}
      />

      <KnowEverythingSection
        title="Why Choose OUT OTT App"
        paragraphs={[
          "We specialize in delivering high-performance OTT platforms with rich media experiences, scalability, and monetization capabilities. Our solutions empower entertainment brands to engage users, expand reach, and maximize revenue through a secure, modern, and user-centric digital ecosystem.",
          "We provide end-to-end development, from UI/UX design to backend architecture, integration, and deployment. Our solutions are custom-tailored to your business model — whether it’s subscription-based (SVOD), ad-supported (AVOD), or transactional (TVOD).",
          "Beyond just development, we emphasize analytics, performance optimization, and monetization tools to help clients track viewer engagement and boost revenue.",
        ]}
        backgroundImage="/images/backgroundwhychooseus.webp"
        heroImage="/images/joinourservice.webp"
        ctaLabel="Call us"
        toastMessage="Thanks! Our team will contact you shortly."
        toastDuration={4000}
        buttonProps={{
          padding: "12px 28px",
          fontSize: "16px",
          backgroundColor: "#4070B1",
          borderRadius: "12px",
        }}
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

export default OTTApp;
