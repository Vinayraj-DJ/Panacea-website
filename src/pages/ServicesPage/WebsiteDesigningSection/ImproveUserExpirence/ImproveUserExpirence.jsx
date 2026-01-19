// File: UserExperience.jsx
import React from "react";
import CtaPanel from "../../../../components/CtaPanel/CtaPanel";
import FooterSection from "../../../../sections/HomePageSection/FooterSection/FooterSection";
import SectionIntro from "../../../../components/common/SectionIntro";
import SplitFeature from "../../../../components/common/SplitFeature";
import HeroTitleChip from "../../../../components/common/HeroTitleChip";
import FeatureList from "../../../../components/FeatureList/FeatureList";
import styles from "./ImproveUserExpirence.module.css";

const SOCIALS = {
  linkedin:
    "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

const UserExperience = () => {
  return (
    <section className={styles.page}>
      {/* HERO */}
      <div className={styles.hero}>
        <HeroTitleChip
          imageSrc="/images/services/user.webp"
          alt="Improve User Experience"
          title={`Improve User\nExperience`}
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
        title="Improve User Experience"
        paragraphs={[
          "Responsive design is one of the most essential features for enhancing user experience in modern web designing. It ensures that a website automatically adjusts its layout, content, and visuals according to the device being used—whether it’s a desktop, tablet, or smartphone. With responsive design, users no longer have to zoom in, scroll horizontally, or struggle with misplaced elements; everything fits perfectly on the screen, creating a smooth and intuitive browsing experience.",
        ]}
      />

      {/* NAVIGATION FEATURE */}
      <SplitFeature
        image="/images/services/imp1.webp"
        title="Why is Website Navigation Important for a Better User Experience?"
        body={`Easy and intuitive navigation is another key factor that directly impacts user experience. A well-structured navigation system helps visitors find what they’re looking for quickly, without feeling lost or frustrated. Features such as clear menus, visible buttons, logical page hierarchy, and consistent design elements make browsing simple and enjoyable.`}
        body2={`When users can locate information or complete actions (like making a purchase or contacting support) in just a few clicks, their satisfaction increases significantly. Poor navigation, on the other hand, often leads to higher bounce rates and lost conversions.`}
        imageLeft={true}
      />

      {/* VISUAL DESIGN + SPEED */}
      <SplitFeature
        image="/images/services/imp2.webp"
        title="How Do Visual Design and Loading Speed Enhance User Experience?"
        body={`Aesthetics and performance go hand-in-hand when it comes to providing a superior user experience. A visually appealing website captures attention instantly, but it’s equally important that the pages load quickly and efficiently. High-quality visuals, balanced color schemes, readable typography, and consistent branding contribute to a pleasant visual environment.`}
        body2={`However, if a website takes too long to load, even the best design won’t hold a visitor’s attention. Optimizing images, using clean code, and minimizing unnecessary plugins ensure that the site performs smoothly across all devices.`}
        imageLeft={false}
      />

      {/* BENEFITS LIST */}
      <FeatureList
        title="Key Benefits Of Improve User experience for web designing ."
        items={[
          {
            title: "Increases Visitor Engagement",
            desc:
              "A well-designed website with a strong focus on user experience keeps visitors engaged for longer periods. When users find a site easy to navigate, they interact more.",
          },
          {
            title: "Enhances Brand Reputation",
            desc:
              "User experience is directly tied to how people perceive your brand. An intuitive, accessible, and professional website strengthens trust and credibility.",
          },
          {
            title: "Improves Accessibility Across Devices",
            desc:
              "Users access websites from a wide range of devices—desktops, tablets, and mobile phones. A responsive UX ensures consistent experience across all of them.",
          },
          {
            title: "Boosts SEO Rankings",
            desc:
              "Positive user experience translates into lower bounce rates and higher engagement metrics — signals that search engines use to rank pages, helping SEO performance.",
          },
        ]}
        illustrationSrc="/images/services/imp3.webp"
        illustrationAlt="User Experience illustration"
        imageLeft={true }
      />

      <CtaPanel
      
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

export default UserExperience;