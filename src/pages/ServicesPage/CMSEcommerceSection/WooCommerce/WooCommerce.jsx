import React from "react";
import CtaPanel from "../../../../components/CtaPanel/CtaPanel";
import FooterSection from "../../../../sections/HomePageSection/FooterSection/FooterSection";
import SectionIntro from "../../../../components/common/SectionIntro";
import SplitFeature from "../../../../components/common/SplitFeature";

/* ✅ hero imports (unchanged components) */
import HeroTitleChip from "../../../../components/common/HeroTitleChip";
import styles from "./WooCommerce.module.css";
import FeatureList from "../../../../components/FeatureList/FeatureList";

const SOCIALS = {
  linkedin:
    "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

const WooCommerce = () => {
  return (
    <section className={styles.page}>
      {/* ✅ HERO (layout unchanged) */}
      <div className={styles.hero}>
        <HeroTitleChip
          imageSrc="/images/services/woocommerce.webp"
          alt="WooCommerce Development"
          title={"Woo Commerce\nDevelopment"}
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

      {/* ✅ INTRO – content swapped only */}
      <SectionIntro
        title="Woo Commerce Development"
        paragraphs={[
          "WooCommerce Development focuses on creating dynamic, feature-rich, and customizable e-commerce websites using the WordPress platform. WooCommerce is one of the world’s most popular e-commerce plugins, designed to transform WordPress websites into fully functional online stores.",
          "It allows businesses to sell products and services easily, manage inventory, handle secure payments, and track orders—all from one centralized dashboard. With its flexibility, scalability, and open-source nature, WooCommerce provides a perfect balance between functionality and simplicity, making it ideal for both startups and established enterprises.",
        ]}
      />

      {/* ✅ WHY – content swapped only */}
      <SplitFeature
        image="/images/services/woocommerce1.webp"
        title="Why WooCommerce Development is Important ?"
        body={`WooCommerce offers businesses a reliable and affordable solution to establish their online presence. It integrates seamlessly with WordPress, allowing for complete control over design, functionality, and user experience. Businesses can sell physical goods, digital products, memberships, or subscriptions—all managed through a simple and intuitive interface.`}
        body2={`WooCommerce also supports multiple payment gateways, shipping methods, and tax settings, making it adaptable for global markets. With its mobile-responsive design and SEO-friendly structure, WooCommerce ensures that your online store is not only attractive but also optimized for higher visibility and conversions.`}
        imageLeft={true}
      />

      {/* ✅ HOW PANACEA HELPS – content swapped only */}
      <SplitFeature
        image="/images/services/woocommerce2.webp"
        title="How Panacea Can Help You with WooCommerce Development ?"
        body={`At Panacea IT Services, we specialize in building custom WooCommerce solutions tailored to your unique business needs. Our team of experienced developers designs visually stunning, user-friendly, and high-performing online stores that deliver a seamless shopping experience.`}
        body2={`We handle everything from WooCommerce setup and theme customization to plugin integration, payment gateway setup, and performance optimization. We also ensure your e-commerce website is secure, scalable, and easy to manage—so you can focus on growth and measurable results.`}
        imageLeft={false}
      />

      {/* ✅ BENEFITS – content swapped only */}
      <FeatureList
        title="Key Benefits Of Woo Commerce Development"
        items={[
          {
            title: "Seamless Integration with WordPress",
            desc:
              "Deeply integrated with the world’s leading CMS, giving you complete control over content and storefront in one place.",
          },
          {
            title: "Highly Customizable and Scalable",
            desc:
              "Thousands of themes/plugins and flexible architecture make it perfect for any size—from MVPs to high-traffic stores.",
          },
          {
            title: "Secure and Reliable Online Transactions",
            desc:
              "Supports trusted gateways and best-practice security to keep customer and payment data safe.",
          },
          {
            title: "SEO-Friendly and Marketing-Ready Platform",
            desc:
              "Built on WordPress, WooCommerce inherits strong SEO capabilities and easy optimization for product pages.",
          },
        ]}
        illustrationSrc="/images/services/woocommerce3.webp"
        illustrationAlt="WooCommerce benefits illustration"
        imageLeft={true}
      />

      {/* CTA + Footer (unchanged) */}
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

export default WooCommerce;