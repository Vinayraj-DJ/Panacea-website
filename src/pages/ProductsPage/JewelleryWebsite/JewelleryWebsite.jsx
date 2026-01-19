// ChildCareManagement.jsx
import React from "react";
import FooterSection from "../../../sections/HomePageSection/FooterSection/FooterSection";
import SectionIntro from "../../../components/common/SectionIntro";
import HeroTitleChip from "../../../components/common/HeroTitleChip";
import styles from "./JewelleryWebsite.module.css";
import HightLightSection from "../../../sections/AboutUs/HightLightSection/HightLightSection";
import HeroSection from "../../../components/common/HeroSection";
import ServicesSection from "../../../sections/ServicesSection/ServicesSection";
import OMRFeaturesSection from "../../../sections/OMRFeaturesSection/OMRFeaturesSection";

const SOCIALS = {
  linkedin:
    "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

const JewelleryWebsite = () => {
  // feature data for the EducationalFeaturesSection

  const services = [
    { id: 1, title: "Order Tracking", image: "/images/products/OT1.webp" },
    {
      id: 2,
      title: "Payment Gateway Setup",
      image: "/images/products/OT2.webp",
    },
    { id: 3, title: "Website Development", image: "/images/products/OT3.webp" },
  ];

  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <HeroTitleChip
          imageSrc="/images/products/JW.webp"
          alt="e-learning app"
          title={"Jewellery\nWebsite"}
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
        title="Jewellery Website "
        paragraphs={[
          "A Jewellery Website is an elegant online platform designed to showcase and sell a wide range of jewelry collections, including gold, silver, diamond, and fashion accessories. It offers users a visually rich experience with high-quality product images, detailed descriptions, and easy navigation through categories such as rings, necklaces, earrings, and bracelets. The website includes features like secure online payments, product customization, virtual try-on, and wishlist options to enhance the shopping experience. Customers can explore trending designs, compare prices, and make purchases conveniently from home. For jewelers, the website acts as a powerful digital storefront to reach a wider audience, build brand trust, and boost sales through engaging visuals and seamless functionality.",
        ]}
      />

      <OMRFeaturesSection
        title="Essential Features for Smooth Functionality"
        heroImage="/images/products/J1.webp"
        features={[
          { id: 1, icon: "/images/products/J2.webp", title: "User Friendly" },
          {
            id: 2,
            icon: "/images/products/J3.webp",
            title: "Secure Payment Option",
          },
          {
            id: 3,
            icon: "/images/products/J4.webp",
            title: "Wishlist & Saved Items",
          },
          {
            id: 4,
            icon: "/images/products/J5.webp",
            title: "Customize Your Item",
          },
        ]}
      />

      <HeroSection
        title="Custom On-Demand Jewellery Website Development"
        description="Custom On-Demand Jewellery Website Development focuses on building a tailored online platform that perfectly reflects the brand’s identity and meets customer needs. This type of website allows jewelry businesses to showcase their collections with stunning visuals, advanced filtering, and personalized shopping experiences. It includes features like product customization, secure payment gateways, real-time inventory"
        description2="management, and virtual try-on options to enhance user engagement. With responsive design and seamless navigation, customers can browse and purchase jewelry effortlessly from any device. Custom development ensures scalability, performance, and a unique aesthetic that highlights craftsmanship while driving online visibility and sales growth for jewelry brands."
        imageSrc="/images/products/Jw1.webp"
        accent="#4070B1"
        reverse={true}
      />

      <HeroSection
        title="Custom On-Demand Jewellery Website Development"
        description="Custom On-Demand Jewellery Website Development focuses on building a tailored online platform that perfectly reflects the brand’s identity and meets customer needs. This type of website allows jewelry businesses to showcase their collections with stunning visuals, advanced filtering, and personalized shopping experiences. It includes features like product customization, secure payment gateways, real-time inventory"
        description2="management, and virtual try-on options to enhance user engagement. With responsive design and seamless navigation, customers can browse and purchase jewelry effortlessly from any device. Custom development ensures scalability, performance, and a unique aesthetic that highlights craftsmanship while driving online visibility and sales growth for jewelry brands."
        imageSrc="/images/products/Jw2.webp"
        accent="#4070B1"
      />

      <ServicesSection
        title="Online Shopping Web Development Services"
        items={services}
        highlightedIndex={1}
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

export default JewelleryWebsite;
