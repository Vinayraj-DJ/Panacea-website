// ChildCareManagement.jsx
import React from "react";
import FooterSection from "../../../sections/HomePageSection/FooterSection/FooterSection";
import HeroTitleChip from "../../../components/common/HeroTitleChip";
import SectionIntro from "../../../components/common/SectionIntro";
import styles from "./MutualFunds.module.css";
import HightLightSection from "../../../sections/AboutUs/HightLightSection/HightLightSection";
import SmartScalableSection from "../../../sections/Products/SmartScalableSection";
import StepsSection from "../../../sections/StepsSection/StepsSection";
import MFW from "../../../sections/MFW/MFW";
const SOCIALS = {
  linkedin:
    "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

const MutualFunds = () => {
  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <HeroTitleChip
          imageSrc="/images/products/Mf.webp"
          alt="Mutual Funds "
          title={"Mutual Funds"}
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
        title="Mutual Funds Website"
        paragraphs={[
          "A Mutual Fund is an investment vehicle that pools money from multiple investors to invest in a diversified portfolio of assets such as stocks, bonds, and other securities. It is managed by professional fund managers who aim to generate returns in line with the fund’s investment objectives",
          "Mutual funds offer investors an easy way to diversify their investments without having to directly buy and manage individual securities. They are ideal for both beginners and experienced investors who want a balanced and professionally managed portfolio",
        ]}
      />

      <StepsSection />

      <MFW />

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

export default MutualFunds;
