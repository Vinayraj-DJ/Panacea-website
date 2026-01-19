// ChildCareManagement.jsx
import React from "react";
import FooterSection from "../../../sections/HomePageSection/FooterSection/FooterSection";
import HeroTitleChip from "../../../components/common/HeroTitleChip";
import styles from "./InfluencersApp.module.css";
import HightLightSection from "../../../sections/AboutUs/HightLightSection/HightLightSection";
import HeroSection from "../../../components/common/HeroSection";
import FeaturesSection from "../../../sections/FeaturesSection/FeaturesSection";
import ServicesSection from "../../../sections/ServicesSection/ServicesSection";
import BrandSection from "../../../sections/BrandSection/BrandSection";

const SOCIALS = {
  linkedin:
    "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

const InfluencersApp = () => {
  const myFeatures = [
    {
      id: 1,
      title: "Custom Mobile App",
      description: "Solutions for Communities, Influencers & Enterprises",
      image: "/images/products/influencer/i1.webp",
    },
    {
      id: 2,
      title: "Influencers App UI/UX",
      description: "Captivating & User-Friendly UI/UX Design Solutions",
      image: "/images/products/influencer/i2.webp",
    },
    {
      id: 3,
      title: "Real Time Chat & Messaging",
      description: "Features for Safe Chat & Multimedia Sharing",
      image: "/images/products/influencer/i3.webp",
    },
    {
      id: 4,
      title: "Social Media API Integration",
      description: "Seamless Integration with Twitter, Facebook & Instagram",
      image: "/images/products/influencer/i4.webp",
    },
  ];

  const services = [
    {
      id: 1,
      title: "Promoting Of Brand",
      image: "/images/products/IA1.webp",
    },
    {
      id: 2,
      title: "User Profile Customization",
      image: "/images/products/IA2.webp",
    },
    {
      id: 3,
      title: "Users Get’s Paid",
      image: "/images/products/IA3.webp",
    },
  ];

  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <HeroTitleChip
          imageSrc="/images/products/Ins.webp"
          alt="IA"
          title={"Influencers App"}
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
      <BrandSection />
      <HeroSection
        title="On Demand On Influencer App Development "
        description="In today’s digital-first world, influencer marketing has become one of the most powerful tools for brand growth. Businesses are increasingly seeking on-demand influencer platforms that help them connect with the right creators quickly and efficiently. These apps simplify the entire collaboration process — from discovering influencers and managing campaigns to tracking performance and payments — all in one place.
With the rapid rise of social media platforms like Instagram, YouTube, and TikTok, the demand for influencer apps is higher than ever."
        imageSrc="/images/products/IF1.webp"
        accent="#4070B1"
        reverse={true}
      />
      <ServicesSection
        title="Key Features Of Seamless Functionality"
        items={services}
        highlightedIndex={1} // Highlights the middle card if your ServicesSection supports that
      />
      <HeroSection
        title="Influencers App Development Company"
        description="As a leading Influencers App Development Company, Panacea IT Services specializes in creating innovative and user-friendly platforms that connect brands with the right influencers. Our solutions are designed to simplify influencer marketing by integrating advanced features like profile management, campaign tracking, analytics, and secure payments — all in one place. We focus on delivering high-performance apps with seamless UI/UX, enabling smooth communication between brands and creators. With the growing demand for influencer marketing in today’s digital world, our expert team builds custom influencer apps that empower brands to manage collaborations, track engagement, and maximize ROI effortlessly."
        imageSrc="/images/products/IF2.webp"
        accent="#4070B1"
      />
      <FeaturesSection
        bgColor="#f8e9f7"
        title="Influencers App Development Services"
        features={myFeatures}
      />
      ;
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

export default InfluencersApp;
