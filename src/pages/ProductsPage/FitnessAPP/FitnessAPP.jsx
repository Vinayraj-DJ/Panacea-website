// ChildCareManagement.jsx
import React from "react";

import FooterSection from "../../../sections/HomePageSection/FooterSection/FooterSection";
import SectionIntro from "../../../components/common/SectionIntro";

import HeroTitleChip from "../../../components/common/HeroTitleChip";

import styles from "./FitnessAPP.module.css";
import HightLightSection from "../../../sections/AboutUs/HightLightSection/HightLightSection";
import JoinOurServiceSection from "../../../sections/Services/JoinOurServiceSection";
import TravelInfoSection from "../../../sections/TravelInfoSection/TravelInfoSection";
import FitnessSection from "../../../sections/FitnessSection/FitnessSection";
import FitnessJourneySection from "../../../sections/FitnessJourneySection/FitnessJourneySection";
import OurProcess from "../../../sections/OurProcess/OurProcess";

const SOCIALS = {
  linkedin:
    "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

const FitnessApp = () => {
  // feature data for the EducationalFeaturesSection

  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <HeroTitleChip
          imageSrc="/images/products/FA.webp"
          alt="FitnessApp"
          title={"Fitness APP"}
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
        title="Fitness App"
        paragraphs={[
          "Our Fitness App empowers users to achieve their health and wellness goals through personalized workouts, diet tracking, and real-time progress monitoring. Designed with a sleek interface and seamless navigation, it combines technology with motivation to create a complete fitness companion for every user..",
        ]}
      />

      <OurProcess />

      <FitnessJourneySection />

      <JoinOurServiceSection
        imageSrc="/images/products/Fitness.webp"
        imageAlt="Our team"
        title="Why Choose Our Gym App ?"
        paragraphs={[
          "Our Gym App is designed to make fitness simple, smart, and accessible for everyone. It offers personalized workout plans, progress tracking, and real-time performance insights, helping users stay motivated and consistent on their fitness journey. Whether you’re a beginner or a fitness enthusiast, the app adapts to your needs with custom routines, nutrition guidance, and AI-powered recommendations.",
          "With a sleek interface, fast performance, and integration with wearable devices, users can monitor every workout effortlessly. Backed by secure data handling and user-friendly navigation, our Gym App ensures a smooth, engaging, and result-driven experience that keeps users coming back every day.",
        ]}
        showButton={false}
      />

      <FitnessSection />

      <TravelInfoSection
        leftImage="/images/products/gym-woman-dumbbells.webp"
        rightImage="/images/products/gym-equipment-blue.webp"
        title="With a sleek interface, fast performance, and integration"
        highlight1="sleek interface"
        textColor="#222222"
        colorPrimary="#0077cc"
        colorSecondary="#ff8c00"
        reverse={true}
      />

      <JoinOurServiceSection
        imageSrc="/images/products/Fitness.webp"
        imageAlt="Our team"
        title="Stronger Every Day with Smart Fitness"
        paragraphs={[
          "Staying fit is no longer just about hitting the gym — it’s about embracing smart fitness solutions that adapt to your lifestyle. Our Fitness App empowers users to become stronger, healthier, and more consistent every day with intelligent tracking, personalized workout plans, and real-time performance insights. Whether you’re training at home or in the gym, the app guides you through every step with expert recommendations, reminders, and motivation.",
        ]}
        showButton={false}
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

export default FitnessApp;
