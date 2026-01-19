import React from "react";
import CtaPanel from "../../../../components/CtaPanel/CtaPanel";
import FooterSection from "../../../../sections/HomePageSection/FooterSection/FooterSection";
import SectionIntro from "../../../../components/common/SectionIntro";
import SplitFeature from "../../../../components/common/SplitFeature";
import HeroTitleChip from "../../../../components/common/HeroTitleChip";
import styles from "./IosMobileApplication.module.css"; // ✅ Reuse same CSS
import FeatureList from "../../../../components/FeatureList/FeatureList";

const SOCIALS = {
  linkedin:
    "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

const IosMobileApplication = () => {
  return (
    <section className={styles.page}>
      {/* ✅ Hero Section */}
      <div className={styles.hero}>
        <HeroTitleChip
          imageSrc="/images/services/ios1.png" // Replace with your image path
          alt="iOS Mobile Application"
          title={"IOS Mobile\nApplication"}
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

      {/* ✅ Section Intro */}
      <SectionIntro
        title="IOS App Development Services"
        paragraphs={[
          "iOS App Development Services empower businesses to build high-quality, secure, and user-friendly mobile applications for Apple devices. With a strong focus on design, performance, and innovation, iOS apps help brands deliver seamless experiences to users across iPhones, iPads, and Apple Watches. At Panacea IT Services, we specialize in crafting custom iOS applications that combine elegant design with powerful functionality. Our skilled developers leverage the latest technologies like Swift, Objective-C, and Xcode to build scalable, feature-rich apps that enhance engagement, drive customer loyalty, and boost business growth.",
        ]}
      />

      {/* ✅ Split Feature 1 */}
      <SplitFeature
        image="/images/services/ios2.png" // Replace with your image path
        title="Why iOS App Development is Important and How Panacea Can Help You"
        body={'In today’s mobile-driven world, iOS App Development plays a crucial role in helping businesses connect with a premium and loyal audience. iOS apps are known for their superior performance, strong security, and exceptional user experience — making them the preferred choice for brands aiming to build trust and deliver quality.'}
        body2={'At Panacea IT Services, we create powerful, intuitive, and scalable iOS applications that align perfectly with your business goals. From ideation and UI/UX design to development and post-launch support, we handle the complete lifecycle with precision and creativity.'}
        imageLeft={true}
      />

      {/* ✅ Split Feature 2 */}
      <SplitFeature
        image="/images/services/ios3.png" // Replace with your image path
        title="About iOS App Development Technologies"
        body={"iOS App Development Technologies combine innovation, performance, and security to deliver world-class mobile applications. The ecosystem primarily relies on Swift and Objective-C, supported by Apple's robust Xcode IDE. These technologies help build scalable, high-quality, and stable apps optimized for iPhones, iPads, and Apple Watches."}
        body2={'Advanced frameworks such as SwiftUI, ARKit, CoreML, and UIKit empower our developers to create intelligent, interactive, and visually appealing applications. At Panacea IT Services, we use these technologies to craft seamless, user-focused apps that deliver exceptional performance and enhance your brand’s digital presence.'}
        imageLeft={false}
      />

      {/* ✅ Feature List */}
      <FeatureList
        title="Key Benefits of iOS App Development"
        items={[
          {
            title: "Superior Performance and Stability",
            desc:
              "iOS technologies like Swift and Xcode ensure fast performance, efficient memory use, and smooth user experiences across all Apple devices.",
          },
          {
            title: "Enhanced Security",
            desc:
              "Built-in features like encryption, sandboxing, and App Store guidelines provide robust protection against data breaches and threats.",
          },
          {
            title: "Seamless User Experience",
            desc:
              "Apple’s strict design standards and SwiftUI help create visually stunning, intuitive, and consistent user interfaces that drive satisfaction.",
          },
          {
            title: "High Revenue Potential",
            desc:
              "iOS users tend to spend more on apps and in-app purchases, giving businesses better monetization opportunities and higher ROI.",
          },
        ]}
        illustrationSrc="/images/services/ios4.png" // Replace with your image path
        illustrationAlt="iOS App Development illustration"
        imageLeft={true}
      />

      {/* ✅ CTA Panel */}
      <CtaPanel
        title="KNOW MORE PROJECTS"
        description="To know more projects and about all the details of the projects , the Technolgies that we used to make the project successful in very short span of time please do contact us"
        buttonLabel="Call us"
        href="/contact"
        align="center"
        maxWidth={794}
      />

      {/* ✅ Footer */}
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
        legal={[
          "Privacy Policy",
          "Terms of Service",
          "Cookie Policy",
          "GDPR",
        ]}
      />
    </section>
  );
};

export default IosMobileApplication;