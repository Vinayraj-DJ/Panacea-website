// File: ECommerce.jsx
import React from "react";
import CtaPanel from "../../../../components/CtaPanel/CtaPanel";
import FooterSection from "../../../../sections/HomePageSection/FooterSection/FooterSection";
import SectionIntro from "../../../../components/common/SectionIntro";
import SplitFeature from "../../../../components/common/SplitFeature";
import HeroTitleChip from "../../../../components/common/HeroTitleChip";
import FeatureList from "../../../../components/FeatureList/FeatureList";
import styles from "./ECommerce.module.css";

const SOCIALS = {
  linkedin:
    "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

const ECommerce = () => {
  return (
    <section className={styles.page}>
      {/* HERO */}
      <div className={styles.hero}>
        <HeroTitleChip
          imageSrc="/images/services/ecommerce.webp"
          alt="E-Commerce Development"
          title={'E-Commerce\nDevelopment'}
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
        title="E-Commerce Development"
        paragraphs={[
          "E-Commerce Development focuses on creating powerful, secure, and user-friendly online shopping platforms that allow businesses to sell products and services globally. A well-developed e-commerce website provides customers with a seamless shopping experience — from product browsing and selection to secure checkout and delivery tracking.",
          "Modern e-commerce solutions go beyond just online sales; they include inventory management, customer analytics, payment gateway integration, and personalized marketing. By combining creativity with technology, e-commerce development enables businesses to expand their reach, enhance customer engagement, and drive consistent revenue growth.",
        ]}
      />

      {/* WHY + IMAGE */}
      <SplitFeature
        image="/images/services/ecommerce1.webp"
        title="Why E-Commerce Development is Important"
        body={'In today’s digital-first world, consumers prefer convenience and accessibility, making e-commerce essential for any modern business. A professionally built e-commerce website not only strengthens your brand’s online presence but also operates as a 24/7 sales channel. It helps you reach customers across different locations and manage sales efficiently.'}
        body2={'With secure payment gateways, real-time order tracking, and responsive design, e-commerce websites ensure customer trust and satisfaction. Whether you’re a startup or an established brand, investing in e-commerce development helps you stay competitive and meet evolving market demands.'}
        imageLeft={true }
      />

      {/* PANACEA HELP + IMAGE */}
      <SplitFeature
        image="/images/services/ecommerce2.webp"
        title="How Panacea Can Help You with E-Commerce Development ?"
        body={'At Panacea IT Services, we specialize in building customized e-commerce websites that combine stunning design with advanced functionality. Our team develops scalable platforms using leading technologies such as Shopify, WooCommerce, Magento, and custom React/Node stacks to suit your specific business needs.'}
        body2={'We focus on creating secure, fast, and responsive online stores that deliver exceptional user experiences across devices. From product catalog setup and payment gateway integration to SEO optimization and post-launch support, we handle every aspect of e-commerce development.'}
        imageLeft={false}
      />

      {/* BENEFITS LIST */}
      <FeatureList
        title="Key Benefits Of E-commerce Development"
        items={[
          {
            title: "Global Reach and Increased Sales",
            desc:
              "E-commerce development allows businesses to expand their reach far beyond local boundaries. With a professionally designed online store, you can showcase your products to customers worldwide.",
          },
          {
            title: "Enhanced Customer Convenience",
            desc:
              "One of the biggest advantages of e-commerce is the convenience it offers to customers — easy browsing, quick checkout, and multiple payment options.",
          },
          {
            title: "Cost-Effective Business Operations",
            desc:
              "Running an e-commerce store is significantly more cost-effective than maintaining a traditional retail setup. There are no expenses for physical store space and reduced operational overhead.",
          },
          {
            title: "Detailed Analytics and Customer Insights",
            desc:
              "E-commerce platforms come with integrated analytics tools that provide valuable insights into customer behavior, sales trends, and product performance.",
          },
        ]}
        illustrationSrc="/images/services/ecommerce3.webp"
        illustrationAlt="E-commerce illustration"
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

export default ECommerce;