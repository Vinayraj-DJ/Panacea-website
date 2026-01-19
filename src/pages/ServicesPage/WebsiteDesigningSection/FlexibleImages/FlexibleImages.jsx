// File: MediaQueries.jsx
import React from "react";
import CtaPanel from "../../../../components/CtaPanel/CtaPanel";
import FooterSection from "../../../../sections/HomePageSection/FooterSection/FooterSection";
import SectionIntro from "../../../../components/common/SectionIntro";
import SplitFeature from "../../../../components/common/SplitFeature";
import HeroTitleChip from "../../../../components/common/HeroTitleChip";
import FeatureList from "../../../../components/FeatureList/FeatureList";
import styles from "./FlexibleImages.module.css";

const SOCIALS = {
  linkedin:
    "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

const FlexibleImages = () => {
  return (
    <section className={styles.page}>
      {/* HERO */}
      <div className={styles.hero}>
        <HeroTitleChip
          imageSrc="/images/services/fi.webp"
          alt="FI"
          title={`Flexible Images`}
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
        title="Flexible Images"
        paragraphs={[
          "Flexible images are a key component of responsive web design, ensuring that visuals automatically adjust to fit different screen sizes and resolutions without losing quality or breaking the layout. They help websites look professional and consistent across devices—whether viewed on desktops, tablets, or smartphones. By using CSS techniques like max-width and percentage-based sizing, flexible images improve loading speed, enhance user experience, and maintain visual balance, ultimately contributing to better SEO performance and mobile accessibility.",
        ]}
      />

      {/* WHAT ARE MEDIA QUERIES */}
      <SplitFeature
        image="/images/services/media-what.webp"
        title="What are Flexible Images in Web Design?"
        body={`Flexible images are a fundamental part of responsive web design, allowing visuals to automatically resize and adjust according to different screen resolutions and devices. Whether a user is browsing on a desktop, tablet, or smartphone, flexible images ensure that the website layout remains balanced and visually appealing.`}
        body2={`This adaptability is achieved through techniques like percentage-based dimensions, CSS properties such as max-width: 100%, and responsive media queries. The main purpose is to make sure images never overflow their containers or appear distorted, providing a seamless viewing experience across all platforms.`}
        imageLeft={true}
      />

      {/* HOW THEY IMPROVE RESPONSIVENESS */}
      <SplitFeature
        image="/images/services/media-how.webp"
        title="How do Flexible Images Improve User Experience?"
        body={`A great user experience depends on how easily and comfortably visitors can interact with a website—and flexible images play a crucial role in that. When images automatically adjust to fit different screen sizes, users don’t need to zoom in or scroll horizontally to view content properly. This creates a clean, professional, and mobile-friendly interface that keeps visitors engaged longer. Moreover, properly scaled images reduce data usage on mobile networks, resulting in faster page load times. By ensuring that visuals always look sharp and well-placed, flexible images make navigation smooth and enhance overall satisfaction for users.`}
        imageLeft={false}
      />

      {/* BENEFITS */}
      <FeatureList
        title="Key Benefits Of Flexible Images for web 
designing ."
        items={[
          {
            title: "Enhanced Responsiveness",
            desc:
              "Flexible images ensure that your website adapts seamlessly to all screen sizes—whether it’s a mobile phone, tablets .",
          },
          {
            title: "Improved Loading Speed",
            desc:
              "When images automatically scale based on device resolution, they use less bandwidth and load faster. Faster-loading images",
          },
          {
            title: "Better User Experience",
            desc:
              "A well-designed website should be visually appealing and easy to navigate. Flexible images maintain clarity and proportion without breaking the page layout .",
          },
          {
            title: "SEO and Mobile Optimization",
            desc:
              "Search engines prioritize mobile-friendly and fast-loading websites. By using flexible images, you make your site more accessible and search-engine-friendly."
          },
        ]}
        illustrationSrc="/images/services/media-benefits.webp"
        illustrationAlt="Media Queries illustration"
        imageLeft={true}
      />

      <CtaPanel
        // title="KNOW MORE PROJECTS"
        // description="To know more projects and about all the details of the projects , the Technolgies that we used to make the project successful in very short span of time please do contact us"
        // buttonLabel="Call us"
        // href="/contact"
        // align="center"
        // maxWidth={794}
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

export default FlexibleImages;