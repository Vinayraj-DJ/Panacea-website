// src/pages/ServicesPage/ApplicationDevelopment/SocialMediaMarketing/SocialMediaMarketing.jsx
import React from "react";
import CtaPanel from "../../../../components/CtaPanel/CtaPanel";
import FooterSection from "../../../../sections/HomePageSection/FooterSection/FooterSection";
import SectionIntro from "../../../../components/common/SectionIntro";
import SplitFeature from "../../../../components/common/SplitFeature";
import HeroTitleChip from "../../../../components/common/HeroTitleChip";
import FeatureList from "../../../../components/FeatureList/FeatureList";
import styles from "./SocialMediaMarketing.module.css";

const SOCIALS = {
  linkedin:
    "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

export default function SocialMediaMarketing() {
  return (
    <section className={styles.page}>
      {/* Hero */}
      <div className={styles.hero}>
        <HeroTitleChip
          imageSrc="/images/services/SMM.webp"
          alt="Social Media Marketing"
          title={"Social Media\nMarketing"}
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

      {/* Intro */}
      <SectionIntro
        title="Social Media Marketing Services"
        paragraphs={[
          "Social Media Marketing (SMM) is a powerful way to connect with your audience, build brand awareness, and drive business growth through platforms like Facebook, Instagram, LinkedIn, Twitter (X), and YouTube.",
          "It focuses on creating and sharing engaging content, running targeted ad campaigns, and analyzing performance to ensure maximum reach and engagement. At PanaceaIT Services, we deliver result-oriented social media strategies that help brands tell their story, attract followers, and convert engagement into measurable success.",
        ]}
      />

      {/* Why choose + how Panacea helps */}
      <SplitFeature
        image="/images/services/image 64.webp"
        title="Why you should Choose Social Media Marketing And how Panacea can help you"
        body={`In today’s digital age, social media has become one of the most effective tools for connecting with customers and building brand identity. SMM allows businesses to engage with their audience directly, increase brand awareness, and promote products or services in a creative and interactive way.`}
        body2={`With billions of active users across Facebook, Instagram, LinkedIn, and X, social media provides an unmatched opportunity to grow online presence and reach potential customers globally. At PanaceaIT Services, we craft customized strategies tailored to your brand’s voice, industry, and target market.`}
        imageLeft={true}
      />

      {/* About SMM */}
      <SplitFeature
        image="/images/services/image 65.webp"
        title="About Social Media Marketing"
        body={`Social Media Marketing (SMM) is the process of promoting your brand, products, or services through popular social platforms. It centers on creating engaging content, building strong community relationships, and driving meaningful interactions.`}
        body2={`By leveraging data-driven strategies and creative storytelling, SMM helps businesses boost brand awareness, generate leads, and improve customer loyalty. Our team develops tailored social media plans that enhance visibility, increase engagement, and deliver measurable marketing success.`}
        imageLeft={false}
      />

      {/* Benefits */}
      <FeatureList
        title="Key Benefits Of SMM Services"
        items={[
          {
            title: "Increased Brand Awareness",
            desc:
              "Reach a wider audience and make your brand more recognizable across major social media platforms.",
          },
          {
            title: "Enhanced Customer Engagement",
            desc:
              "Build stronger relationships via interactive content, comments, and direct communication.",
          },
          {
            title: "Targeted Advertising",
            desc:
              "Run ads focused on specific demographics, interests, and behaviors to attract the right customers.",
          },
          {
            title: "Improved Lead Generation and Sales",
            desc:
              "Convert social engagement into real business growth with strategies that drive inquiries and purchases.",
          },
        ]}
        illustrationSrc="/images/services/image 66.webp"
        illustrationAlt="SMM benefits illustration"
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
}
