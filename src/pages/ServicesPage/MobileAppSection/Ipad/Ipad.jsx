// File: Ipad.jsx
import React from "react";
import CtaPanel from "../../../../components/CtaPanel/CtaPanel";
import FooterSection from "../../../../sections/HomePageSection/FooterSection/FooterSection";
import SectionIntro from "../../../../components/common/SectionIntro";
import SplitFeature from "../../../../components/common/SplitFeature";
import HeroTitleChip from "../../../../components/common/HeroTitleChip";
import FeatureList from "../../../../components/FeatureList/FeatureList";
import styles from "./Ipad.module.css";

const SOCIALS = {
  linkedin:
    "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

const Ipad = () => {
  return (
    <section className={styles.page}>
      {/* HERO */}
      <div className={styles.hero}>
        <HeroTitleChip
          imageSrc="/images/services/ipad1.webp"
          alt="iPad App Development"
          title={"iPad App\nDevelopment"}
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

      {/* INTRO */}
      <SectionIntro
        title="iPad App Development Services"
        paragraphs={[
          "iPad App Development Services help businesses create immersive, high-performance applications tailored to Apple’s iPad ecosystem. Leveraging the device’s large display and powerful hardware, iPad apps are ideal for productivity tools, education, enterprise solutions, and multimedia experiences. From wireframe to App Store submission, we build optimized iPad applications using native frameworks and best practices.",
        ]}
      />

      {/* WHY + IMAGE */}
      <SplitFeature
        image="/images/services/ipad2.webp"
        title="Why iPad App Development Matters & How Panacea Can Help"
        body={'iPad applications provide a richer canvas for immersive UI, multi-pane layouts, and advanced interactions. A dedicated iPad app elevates user engagement and productivity by using platform-specific capabilities — split view, drag & drop, Pencil support, and high-resolution assets.'}
        body2={'Panacea IT Services crafts iPad apps with clean architecture, adaptive layouts, and optimized performance. We follow Apple’s Human Interface Guidelines, implement secure data handling, and support device-specific features to deliver elegant, reliable apps that delight users.'}
        imageLeft={true}
      />

      {/* ABOUT TECHNOLOGIES */}
      <SplitFeature
        image="/images/services/ipad3.webp"
        title="About iPad App Development Technologies"
        body={'Native iPad apps are commonly built with Swift and SwiftUI or UIKit, using Xcode as the development environment. Apple frameworks like ARKit, CoreML, Metal, and PencilKit enable advanced graphics, machine learning, and stylus interactions. We also use testing frameworks and CI pipelines to ensure quality across iPad models and iOS versions.'}
        body2={'Our development process includes prototyping, performance tuning, accessibility checks, and App Store readiness so your application delivers a polished, consistent experience on all supported iPad devices.'}
        imageLeft={false}
      />

      {/* BENEFITS */}
      <FeatureList
        title="Key Benefits Of iPad App Development"
        items={[
          {
            title: "Enhanced User Experience",
            desc:
              "Large display and multitasking support let you build visually rich, productive workflows and immersive content experiences.",
          },
          {
            title: "High Performance & Graphics",
            desc:
              "Utilize Metal and optimized rendering for smooth animations, AR, and advanced visualizations tailored to iPad hardware.",
          },
          {
            title: "Seamless Apple Ecosystem Integration",
            desc:
              "Integrate with iCloud, Handoff, Apple Pencil, and other Apple services for a unified cross-device experience.",
          },
          {
            title: "Enterprise & Educational Use Cases",
            desc:
              "iPad apps are ideal for enterprise dashboards, creative tools, learning apps, and interactive kiosks with specialized input support.",
          },
        ]}
        illustrationSrc="/images/services/ipad4.webp"
        illustrationAlt="iPad app illustration"
        imageLeft={true}
      />

      <CtaPanel
        title="KNOW MORE PROJECTS"
        description="To know more projects and about all the details of the projects , the Technolgies that we used to make the project successful in very short span of time please do contact us"
        buttonLabel="Call us"
        href="/contact"
        align="center"
        maxWidth={794}
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
        company={["About Us", "Our Team", "Careers", "Portfolio", "Blog", "Contact"]}
        legal={["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"]}
      />
    </section>
  );
};

export default Ipad;