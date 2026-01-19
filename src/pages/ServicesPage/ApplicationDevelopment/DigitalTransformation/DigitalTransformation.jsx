import React from "react";
import CtaPanel from "../../../../components/CtaPanel/CtaPanel";
import FooterSection from "../../../../sections/HomePageSection/FooterSection/FooterSection";
import SectionIntro from "../../../../components/common/SectionIntro";
import SplitFeature from "../../../../components/common/SplitFeature";

/* ✅ minimal add: hero imports */
import HeroTitleChip from "../../../../components/common/HeroTitleChip";
import styles from "./DigitalTransformation.module.css";
import FeatureList from "../../../../components/FeatureList/FeatureList";
const SOCIALS = {
  linkedin:
    "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

const FullstackDevelopment = () => {
  return (
    
    <section className={styles.page}>
      {/* ✅ added hero (only change) */}
      <div className={styles.hero}>
        <HeroTitleChip
          imageSrc="/images/services/Rectangle%2053.webp" // ← image from your reference (space encoded)
          alt="Digital Transformation"
          title={"Digital\nTransformation"}
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

      {/* ⬇️ everything below is your original content unchanged */}
      <SectionIntro
  title="Digital Transformation"
  paragraphs={[
    "Digital transformation is the process of integrating digital technologies into all areas of a business, fundamentally changing how it operates and delivers value to customers. It empowers organizations to enhance efficiency, improve customer experiences, and stay competitive in the evolving digital landscape. By leveraging technologies like cloud computing, automation, data analytics, and AI, businesses can drive innovation and achieve sustainable growth."
  ]}
/>

<SplitFeature
  image="/images/services/image 43.webp"
  title="Why You Should Embrace Digital Transformation And How PanaceaIT Can Help"
  body={`In today’s fast-paced digital era, embracing digital transformation is essential for staying competitive and relevant. It allows businesses to streamline operations, enhance customer engagement, and make data-driven decisions that boost efficiency and profitability. Companies that adapt to digital change not only improve internal processes but also deliver smarter and more personalized experiences to their clients.`}
  body2={`At PanaceaIT Services, we empower businesses to transform digitally through innovative technologies and strategic implementation. Our expertise spans across cloud solutions, automation, AI integration, and data analytics — helping organizations modernize systems and optimize performance.`}
  imageLeft={true}
/>

<SplitFeature
  image="/images/services/image 44.webp"
  title="About Digital Transformation"
  body={`Digital transformation is the strategic adoption of digital technologies to reshape business processes, culture, and customer experiences. It enables organizations to operate more efficiently, make data-driven decisions, and respond quickly to market changes. By leveraging tools such as cloud computing, automation, artificial intelligence, and analytics, businesses can enhance productivity, improve collaboration, and deliver greater value to their customers.`}
  body2={`Digital transformation is the strategic adoption of digital technologies to reshape business processes, culture, and customer experiences. It enables organizations to operate more efficiently, make data-driven decisions, and respond quickly to market changes. By leveraging tools such as cloud computing, automation, artificial intelligence, and analytics, businesses can enhance productivity, improve collaboration, and deliver greater value to their customers.`}
  imageLeft={false}
/>

<FeatureList
  title="Key Benefits Of Digital Transformation"
  items={[
    {
      title: "Enhanced Efficiency and Productivity",
      desc:
        "Automating manual tasks and integrating digital tools help businesses streamline operations, reduce errors, and improve overall productivity.",
    },
    {
      title: "Improved Customer Experience",
      desc:
        "With data-driven insights and personalized engagement, organizations can deliver better services and build stronger customer relationships.",
    },
    {
      title: "Data-Driven Decision Making",
      desc:
        "Advanced analytics and AI-powered insights enable smarter, faster, and more accurate business decisions.",
    },
    {
      title: "Agility and Innovation",
      desc:
        "Digital transformation empowers companies to adapt quickly to market changes, explore new opportunities, and drive innovation across departments.",
    },
  ]}
  illustrationSrc="/images/services/image 45.webp"
  illustrationAlt="Digital transformation illustration"
  imageLeft={true}
/>





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

export default FullstackDevelopment;
