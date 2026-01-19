import React from "react";
import styles from "./ServicesPage.module.css";
import FooterSection from "../../sections/HomePageSection/FooterSection/FooterSection";
import ServicesSection from "../../sections/Services/ServicesSection";
import JoinOurServiceSection from "../../sections/Services/JoinOurServiceSection";
import KnowEverythingSection from "../../sections/Services/KnowEverythingSection";
import HeroTitleChip from "../../components/common/HeroTitleChip";
const SOCIALS = {
  linkedin:
    "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle", // replace
};

const ServicesPage = () => {
  return (
    <section className={styles.page}>
      {/* Hero with overlay icons */}
      <div className={styles.hero}>
        <HeroTitleChip
  imageSrc="/images/services/applicationDevelopment.webp"
  alt="image not found"
  title={"Services"}
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

      {/* Page Sections */}
      <ServicesSection />
      <JoinOurServiceSection />
      <KnowEverythingSection />
      <FooterSection />
    </section>
  );
};

export default ServicesPage;



