import React from "react";
import styles from "./TestimonialsPage.module.css";
import WhyChooseUsSection from "../../sections/AboutUs/WhyChooseUsSection";
import OurPhilosophySection from "../../sections/AboutUs/OurPhilosophySection/OurPhilosophySection";
import HightLightSection from "../../sections/AboutUs/HightLightSection/HightLightSection";
import FooterSection from "../../sections/HomePageSection/FooterSection/FooterSection";
import ServicesSection from "../../sections/Services/ServicesSection";
import JoinOurServiceSection from "../../sections/Services/JoinOurServiceSection";
import KnowEverythingSection from "../../sections/Services/KnowEverythingSection";
import TestimonialsSection from "../../sections/TestimonialsSection/TestimonialsSection";
import PeopleBelieveSection from "../../sections/TestimonialsSection/PeopleBelieveSection/PeopleBelieveSection";

const SOCIALS = {
  linkedin:
    "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle", // replace with actual
};

const TestimonialsPage = () => {
  return (
    <section className={styles.page}>
      {/* Hero with overlay icons */}
      <div className={styles.hero}>
        <img
          src="/images/testimonialsimage.webp"
          alt="About Us"
          className={styles.heroImg}
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
      <TestimonialsSection />
      <OurPhilosophySection />
      <PeopleBelieveSection />

      <FooterSection />
    </section>
  );
};

export default TestimonialsPage;
