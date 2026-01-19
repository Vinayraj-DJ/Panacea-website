// src/pages/ServicesPage/ApplicationDevelopment/SearchEngineOptimization/SearchEngineOptimization.jsx
import React from "react";
import CtaPanel from "../../../../components/CtaPanel/CtaPanel";
import FooterSection from "../../../../sections/HomePageSection/FooterSection/FooterSection";
import SectionIntro from "../../../../components/common/SectionIntro";
import SplitFeature from "../../../../components/common/SplitFeature";
import HeroTitleChip from "../../../../components/common/HeroTitleChip";
import FeatureList from "../../../../components/FeatureList/FeatureList";
import styles from "./SearchEngineOptimization.module.css"; // you can copy from another services page for consistent styling

const SOCIALS = {
  linkedin:
    "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

export default function SearchEngineOptimization() {
  return (
    <section className={styles.page}>
      {/* Hero */}
      <div className={styles.hero}>
        <HeroTitleChip
          imageSrc="/images/services/SOE.webp"
          alt="Search Engine Optimization"
          title={"Search Engine\nOptimization"}
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

      {/* Intro */}
      <SectionIntro
        title="Search Engine Optimization"
        paragraphs={[
          "Search Engine Optimization (SEO) is the process of enhancing your website’s visibility on search engines like Google, Bing, and Yahoo to attract more organic traffic. By optimizing website structure, content, and performance, SEO helps businesses rank higher for relevant keywords and reach their target audience effectively.",
          "At PanaceaIT Services, we specialize in strategic SEO solutions — including on-page optimization, off-page link building, technical SEO, and content marketing — to improve online presence, boost website traffic, and increase conversions. Our goal is to help your business stand out in the digital landscape and achieve long-term search success.",
        ]}
      />

      {/* Why choose SEO + how Panacea helps */}
      <SplitFeature
        image="/images/services/image 61.webp"
        title="Why you should Choose SEO Services and how Panacea can help you"
        body={`In today’s digital world, having a great website isn’t enough — it must be visible to your target audience. SEO is essential for improving your website’s ranking on search engines like Google, helping potential customers find your business easily. By optimizing content, keywords, and technical performance, SEO drives organic traffic, builds brand credibility, and increases your chances of converting visitors into loyal customers.`}
        body2={`At PanaceaIT Services, we offer comprehensive SEO solutions tailored to your business goals. Our team focuses on on-page and off-page optimization, keyword research, content strategy, and technical SEO to ensure your website meets the latest search-engine standards. We use proven strategies and analytics-driven insights to improve visibility, boost performance, and generate measurable results.`}
        imageLeft={true}
      />

      {/* About SEO */}
      <SplitFeature
        image="/images/services/image 62.webp"
        title="About SEO"
        body={`Search Engine Optimization (SEO) is the practice of improving a website’s visibility and ranking on search engines to attract more organic traffic. It involves optimizing website content, structure, and technical elements to ensure search engines understand and prioritize your site.`}
        imageLeft={false}
      />

      {/* Benefits */}
      <FeatureList
        title="Key Benefits Of SEO Services"
        items={[
          {
            title: "Increased Website Visibility",
            desc:
              "Improve rankings on search engines to attract more potential customers and boost brand awareness.",
          },
          {
            title: "High-Quality Organic Traffic",
            desc:
              "Reach users actively searching for your products or services, driving relevant and valuable traffic.",
          },
          {
            title: "Enhanced User Experience",
            desc:
              "Optimizing site speed, mobile responsiveness, and content structure improves usability and keeps visitors engaged longer.",
          },
          {
            title: "Cost-Effective Marketing",
            desc:
              "Compared to paid ads, SEO provides long-term visibility and consistent traffic at a lower overall cost.",
          },
        ]}
        illustrationSrc="/images/services/image 63.webp"
        illustrationAlt="SEO benefits illustration"
        imageLeft={true}
      />

      <CtaPanel
        title="KNOW MORE PROJECTS"
        description="To know more projects and about all the details of the projects, the Technologies that we used to make the project successful in very short span of time please do contact us"
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
}
