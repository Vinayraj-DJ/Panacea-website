import React from "react";
import CtaPanel from "../../../../components/CtaPanel/CtaPanel";
import FooterSection from "../../../../sections/HomePageSection/FooterSection/FooterSection";
import SectionIntro from "../../../../components/common/SectionIntro";
import SplitFeature from "../../../../components/common/SplitFeature";

/* ✅ hero imports (same components) */
import HeroTitleChip from "../../../../components/common/HeroTitleChip";
import styles from "./Shopify.module.css";
import FeatureList from "../../../../components/FeatureList/FeatureList";

const SOCIALS = {
  linkedin:
    "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

const Shopify = () => {
  return (
    <section className={styles.page}>
      {/* ✅ HERO (unchanged layout) */}
      <div className={styles.hero}>
        <HeroTitleChip
          imageSrc="/images/services/shopify.webp"
          alt="Shopify Development"
          title={"Shopify\nDevelopment"}
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

      {/* ✅ INTRO (content only changed) */}
      <SectionIntro
        title="Shopify Development"
        paragraphs={[
          "Shopify Development focuses on building powerful, secure, and visually appealing online stores using the Shopify platform. Shopify is one of the leading e-commerce solutions worldwide, designed to help businesses of all sizes sell products online without technical complexity.",
          "It provides a fully hosted, cloud-based environment where you can manage everything—from product listings and payments to shipping and marketing—through a single, easy-to-use dashboard. With its wide range of themes, apps, and customization options, Shopify lets businesses create a unique digital storefront that reflects their brand and delivers a seamless shopping experience.",
        ]}
      />

      {/* ✅ WHY (content only changed) */}
      <SplitFeature
        image="/images/services/shopify1.webp"
        title="Why Shopify Development is Important ?"
        body={`In today’s competitive e-commerce landscape, having a fast, reliable, and scalable platform is crucial. Shopify makes this possible by offering a secure infrastructure, mobile-friendly design, and built-in SEO features. It supports multiple payment gateways, global shipping integrations, and advanced analytics—making it a perfect solution for both startups and established enterprises.`}
        body2={`Businesses using Shopify can quickly launch their online stores, manage daily operations efficiently, and scale effortlessly as their customer base grows. Its simplicity, combined with enterprise-grade capabilities, makes Shopify a preferred choice for modern e-commerce success.`}
        imageLeft={true}
      />

      {/* ✅ HOW PANACEA HELPS (content only changed) */}
      <SplitFeature
        image="/images/services/shopify2.webp"
        title="How Panacea Can Help You with Shopify Development ?"
        body={`At Panacea IT Services, we specialize in developing tailored Shopify solutions that empower businesses to grow and succeed online. Our expert team designs and develops custom Shopify stores that are fast, responsive, and visually stunning.`}
        body2={`We handle everything—from store setup and theme customization to product integration, payment configuration, and app development. We also focus on performance optimization to ensure smooth navigation and excellent user experience. With Panacea’s Shopify expertise, your business can build a powerful online presence that drives sales, attracts customers, and strengthens brand reputation.`}
        imageLeft={false}
      />

      {/* ✅ BENEFITS (content only changed) */}
      <FeatureList
        title="Key Benefits Of Shopify Development"
        items={[
          {
            title: "Easy Setup and Management",
            desc:
              "Shopify’s user-friendly interface lets you set up and manage your store with ease—no deep technical expertise required.",
          },
          {
            title: "Secure and Reliable Platform",
            desc:
              "PCI-DSS compliant checkout, built-in encryption, and enterprise-grade hosting keep transactions and shopper data safe.",
          },
          {
            title: "Mobile-Responsive & SEO-Optimized",
            desc:
              "Themes are responsive by default and SEO features help customers find your products across devices and search engines.",
          },
          {
            title: "Wide Customization Options",
            desc:
              "Thousands of themes and apps enable you to tailor storefronts, workflows, and integrations to your brand and operations.",
          },
        ]}
        illustrationSrc="/images/services/shopify3.webp"
        illustrationAlt="Shopify benefits illustration"
        imageLeft={true}
      />

      {/* CTA + FOOTER (unchanged) */}
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
};

export default Shopify;