import React from "react";
import HeroSection from "../../sections/HomePageSection/HeroSection/HeroSection";
import ClientStoriesSection from "../../sections/HomePageSection/ClientStoriesSection/ClientStoriesSection";
import styles from "./HomePage.module.css"; // 👈 add this
import BrandCarouselPage from "../../sections/HomePageSection/BrandCarouselPage/BrandCarouselPage";
import OurServicesSection from "../../sections/HomePageSection/OurServicesSection/OurServicesSection";
import OurProcessSection from "../../sections/OurProcessSection/OurProcessSection";
import OurProductsSection from "../../sections/OurProductsSection/OurProductsSection";
// import WhyToggleSection from "../../sections/WhyToggleSection/WhyToggleSection";
import FooterSection from "../../sections/HomePageSection/FooterSection/FooterSection";
import BrandsTrustSection from "../../sections/HomePageSection/BrandsTrustSection";
import TeamSection from "../../sections/HomePageSection/TeamSection";
import SpotlightSection from "../../sections/HomePageSection/SpotlightSection/SpotlightSection";
// import { AboutUsSection } from "../../sections/WhyToggleSection/AboutUsSection";
import AwardsSection from "../../sections/HomePageSection/AwardsSection/AwardsSection";

const HomePage = () => {
  return (
    <section
      className={styles.section}
      style={{
        backgroundImage: `url(/images/projectbackgroundimage.webp)`,
        backgroundSize: "cover",
        maxWidth: "1400",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {" "}
      {/* <div className={styles.pageBackground}> */}
      <div className={styles.herosection}>
        <HeroSection />
      </div>
      <ClientStoriesSection />
      {/* </div> */}
      <OurServicesSection />
      {/* <div className={styles.ourProcessSection}> */}
      <OurProcessSection />
      {/* </div> */}
      <OurProductsSection />
      <AwardsSection />
      <div className={styles.teamsection}>
        <TeamSection />
      </div>
      <SpotlightSection />
      {/* <AboutUsSection /> */}
      {/* HomePage.js */}
      <div className={styles.brandsSection}>
        <div className={styles.desktopOnly}>
          <BrandsTrustSection />
        </div>
        <div className={styles.mobileOnly}>
          <BrandCarouselPage />
        </div>
      </div>
      <FooterSection />
    </section>
  );

};

export default HomePage;
