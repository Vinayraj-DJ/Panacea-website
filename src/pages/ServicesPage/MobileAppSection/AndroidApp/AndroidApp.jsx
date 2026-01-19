import React from "react";
import CtaPanel from "../../../../components/CtaPanel/CtaPanel";
import FooterSection from "../../../../sections/HomePageSection/FooterSection/FooterSection";
import SectionIntro from "../../../../components/common/SectionIntro";
import SplitFeature from "../../../../components/common/SplitFeature";
import HeroTitleChip from "../../../../components/common/HeroTitleChip";
import styles from "./AndroidApp.module.css";
import FeatureList from "../../../../components/FeatureList/FeatureList";

const SOCIALS = {
  linkedin:
    "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

const AndroidApp = () => {
  return (
    <section className={styles.page}>
      {/* Hero (only visual difference) */}
      <div className={styles.hero}>
        <HeroTitleChip
          imageSrc="/images/services/android1.webp" // replace with your hero image path
          alt="Android App Development"
          title={"Android App\nDevelopment"}
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

      {/* Section intro (content changed) */}
      <SectionIntro
        title="Android App Development Services"
        paragraphs={[
          "Android App Development Services empower businesses to reach a vast audience by creating innovative, scalable, and user-friendly mobile applications for Android devices. With millions of users worldwide, Android offers unmatched market reach and flexibility for businesses of all sizes. From concept to deployment, Android app development involves the use of powerful tools and technologies such as Java, Kotlin, Android Studio, and Firebase, ensuring seamless functionality, appealing designs, and high performance.",
        ]}
      />

      {/* Split feature blocks (content changed, layout same) */}
      <SplitFeature
        image="/images/services/android2.webp"
        title="Why Android App Development is Important And how panacea can help you"
        body={`In today’s mobile-driven world, Android App Development is essential for businesses aiming to expand their digital presence and connect with a global audience. With Android powering over 70% of the world’s smartphones, developing an Android app offers unparalleled reach, flexibility, and affordability. A well-designed Android app enhances customer engagement, boosts brand loyalty, and provides seamless access to products and services anytime, anywhere.`}
        body2={`At PanaceaIT Services, we combine innovation with technical expertise to deliver powerful and scalable Android applications. Our skilled developers leverage the latest technologies like Kotlin, Java, and Android Studio to craft secure, high-performing apps tailored to your business goals.`}
        imageLeft={true}
      />

      <SplitFeature
        image="/images/services/android3.webp"
        title="About Android App Development Technologies"
        body={`Android App Development Technologies form the backbone of building dynamic, secure, and high-performing mobile applications for the Android ecosystem. Developers primarily use Java and Kotlin as core programming languages, supported by the robust Android Studio IDE for coding, debugging, and testing. The Android framework offers flexible APIs for UI/UX design, cloud integration, and device compatibility, ensuring smooth performance across smartphones, tablets, and wearables.`}
        body2={`Modern tools like Firebase, Jetpack Compose, and Material Design further enhance app functionality, scalability, and user experience. At PanaceaIT Services, we utilize these advanced technologies to develop customized Android apps that meet business objectives while maintaining speed, security, and innovation. Our approach ensures each app is optimized for performance, user engagement, and long-term growth.`}
        imageLeft={false}
      />

      {/* Feature list (customized for android) */}
            <FeatureList
        title="Key Benefits Of Android App Development Technologies"
        items={[
          {
            title: "Wider Market Reach",
            desc:
              "Android powers the majority of smartphones worldwide, allowing businesses to connect with a massive and diverse global audience.",
          },
          {
            title: "Open-Source Flexibility",
            desc:
              "The open-source nature of Android provides developers with the freedom to customize applications, integrate unique features, and reduce development costs.",
          },
          {
            title: "Seamless Integration and Compatibility",
            desc:
              "Android technologies ensure smooth integration with various platforms, tools, and devices, offering consistent performance across different screen sizes and hardware.",
          },
          {
            title: "High Scalability and Performance",
            desc:
              "With frameworks like Android Jetpack and tools such as Kotlin and Firebase, apps can be easily scaled and optimized for superior speed and reliability.",
          },
        ]}
        illustrationSrc="/images/services/android4.webp"
        illustrationAlt="Android development benefits"
        imageLeft={true}
      />


      {/* CTA + footer kept same */}
      <CtaPanel
        title="KNOW MORE PROJECTS"
        description="To know more projects and about all the details of the projects, the Technologies that we used to make the project successful in very short span of time please do contact us"
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

export default AndroidApp;