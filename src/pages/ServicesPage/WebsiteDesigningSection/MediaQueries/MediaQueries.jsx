// File: MediaQueries.jsx
import React from "react";
import CtaPanel from "../../../../components/CtaPanel/CtaPanel";
import FooterSection from "../../../../sections/HomePageSection/FooterSection/FooterSection";
import SectionIntro from "../../../../components/common/SectionIntro";
import SplitFeature from "../../../../components/common/SplitFeature";
import HeroTitleChip from "../../../../components/common/HeroTitleChip";
import FeatureList from "../../../../components/FeatureList/FeatureList";
import styles from "./MediaQueries.module.css";

const SOCIALS = {
  linkedin:
    "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

const MediaQueries = () => {
  return (
    <section className={styles.page}>
      {/* HERO */}
      <div className={styles.hero}>
        <HeroTitleChip
          imageSrc="/images/services/media-hero.webp"
          alt="Media Queries"
          title={`Media Queries`}
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
        title="Media Queries"
        paragraphs={[
          "Media queries are an essential feature of responsive web design that allow developers to apply specific CSS styles based on a device’s characteristics—such as screen size, resolution, or orientation. They enable websites to detect the type of device being used and adjust the layout accordingly. For example, a website can display a multi-column layout on a desktop and automatically switch to a single-column layout on mobile devices. This flexibility ensures that content looks appealing and remains easy to navigate across all screen types, enhancing both functionality and user experience.",
        ]}
      />

      {/* WHAT ARE MEDIA QUERIES */}
      <SplitFeature
        image="/images/services/media-what.webp"
        title="What are Media Queries in Web Designing?"
        body={`Media queries are a powerful feature in CSS that allow web designers to create responsive and adaptive layouts for different devices and screen sizes. They enable a website to “respond” to the characteristics of the user’s device—such as screen width, height, resolution, and orientation—by applying specific style rules.`}
        body2={`The concept behind media queries is to ensure that users have a consistent and optimized viewing experience regardless of how they access a website. For example, fonts, images, and grids can automatically resize to fit a smartphone or tablet screen perfectly.`}
        imageLeft={true}
      />

      {/* HOW THEY IMPROVE RESPONSIVENESS */}
      <SplitFeature
        image="/images/services/media-how.webp"
        title="How Do Media Queries Improve Website Responsiveness?"
        body={`Media queries play a crucial role in making websites fully responsive by tailoring the design to fit different devices without needing separate versions of the site. They allow developers to define breakpoints—specific screen widths at which the layout changes. For instance, fonts, images, and grids can automatically resize to fit a smartphone or tablet screen.`}
        body2={`This adaptability helps websites load efficiently and maintain a professional appearance regardless of the device being used. As a result, users enjoy a seamless experience, improving engagement and satisfaction.`}
        imageLeft={false}
      />

      {/* BENEFITS */}
      <FeatureList
        title="Key Benefits Of Media Queries for web designing ."
        items={[
          {
            title: "Responsive and Adaptive Design",
            desc:
              "Media queries make websites flexible by allowing layouts to automatically adjust according to the user's screen size and device type.",
          },
          {
            title: "Improved User Experience",
            desc:
              "By optimizing the display for each device, media queries create a smooth and comfortable browsing experience for users.",
          },
          {
            title: "Enhanced Website Performance",
            desc:
              "Media queries allow designers to control what content loads on different devices. For example, high-resolution images can be displayed on large screens while lighter assets are used on mobile.",
          },
          {
            title: "Cost-Effective and Easy Maintenance",
            desc:
              "With media queries, designers can manage all device-specific layouts using a single codebase, reducing development and maintenance effort.",
          },
        ]}
        illustrationSrc="/images/services/media-benefits.webp"
        illustrationAlt="Media Queries illustration"
        imageLeft={true}
      />

      <CtaPanel
       
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

export default MediaQueries;