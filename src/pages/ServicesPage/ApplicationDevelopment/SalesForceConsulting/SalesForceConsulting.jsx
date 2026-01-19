import React from "react";
import CtaPanel from "../../../../components/CtaPanel/CtaPanel";
import FooterSection from "../../../../sections/HomePageSection/FooterSection/FooterSection";
import SectionIntro from "../../../../components/common/SectionIntro";
import SplitFeature from "../../../../components/common/SplitFeature";

/* hero */
import HeroTitleChip from "../../../../components/common/HeroTitleChip";
import styles from "./SalesForceConsulting.module.css";

/* If you’re already using FeatureList in this slot, keep it. */
import FeatureList from "../../../../components/FeatureList/FeatureList";

const SOCIALS = {
  linkedin:
    "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

const SalesForceConsulting = () => {
  return (
    <section className={styles.page}>
      {/* Hero (structure unchanged; just the title/copy) */}
      <div className={styles.hero}>
        <HeroTitleChip
          imageSrc="/images/services/sfc.webp"
          alt="Sales Force Consulting"
          title={"Sales Force\nConsulting"}
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

      {/* Intro (content updated only) */}
      <SectionIntro
        title="Sales Force Consulting Services"
        paragraphs={[
          "Salesforce Consulting Services help businesses maximize the power of the Salesforce platform to streamline operations, improve customer relationships, and drive growth. From strategy and implementation to customization and integration, expert consultants tailor Salesforce solutions to match specific business needs.",
          "These services enable organizations to automate sales, marketing, and customer support processes while improving data visibility and team collaboration. With the right Salesforce strategy, companies can boost productivity, enhance customer engagement, and achieve measurable business success.",
        ]}
      />

      {/* SplitFeature #1 (content updated only) */}
      <SplitFeature
        image="/images/services/image 46.webp"            // keep your image path
        title="Why Choose Sales Force Consulting Services And How PanaceaIT Can Help"
        body={`In today’s competitive business environment, managing customer relationships efficiently is key to success. Salesforce Consulting Services empower organizations to streamline sales, marketing, and service processes through powerful automation and data-driven insights. By leveraging the full potential of Salesforce, businesses can enhance customer engagement, improve team collaboration, and drive measurable growth.`}
        body2={`At PanaceaIT Services, we specialize in delivering end-to-end Salesforce consulting solutions tailored to your business goals. Our certified experts assist with CRM setup, customization, integration, and automation to ensure a seamless experience. Whether you’re optimizing an existing Salesforce platform or implementing a new solution, we help you unlock its full potential with strategic guidance and technical excellence.`}
        imageLeft={true}
      />

      {/* SplitFeature #2 (content updated only) */}
      <SplitFeature
        image="/images/services/image 47.webp"            // keep your image path
        title="About Sales Force Consulting Services"
        body={`Salesforce Consulting Services help businesses harness the full potential of Salesforce — the world’s leading Customer Relationship Management (CRM) platform. These services focus on understanding your business processes and tailoring Salesforce solutions to improve efficiency, automate workflows, and strengthen customer engagement. With expert consulting, companies can streamline sales, marketing, and service operations, gain actionable insights through data analytics, and enhance overall business performance. Salesforce consultants guide organizations from planning and implementation to customization and ongoing support, ensuring a smooth digital transformation and measurable growth.`}
        // body2={`With expert consulting, companies can streamline sales, marketing, and service operations, gain actionable insights through data analytics, and enhance overall business performance. Consultants guide organizations from planning and implementation to customization and ongoing support, ensuring a smooth digital transformation and measurable growth.`}
        imageLeft={false}
      />

      {/* FeatureList (content updated only) */}
      <FeatureList
        title="Key Benefits Of Sales Force Consulting Services"
        items={[
          {
            title: "Customized CRM Solutions",
            desc:
              "Salesforce consultants design and tailor the CRM to fit your specific business goals, workflows, and customer management needs.",
          },
          {
            title: "Enhanced Productivity and Automation",
            desc:
              "Automating repetitive sales, marketing, and service processes helps teams save time and focus on high-value tasks.",
          },
          {
            title: "Improved Customer Engagement",
            desc:
              "With centralized customer data and insights, businesses can deliver personalized experiences and build stronger relationships.",
          },
          {
            title: "Seamless Integration",
            desc:
              "Consultants ensure smooth integration of Salesforce with your existing systems, creating a unified and efficient business ecosystem.",
          },
        ]}
        illustrationSrc="/images/services/image 48.webp"  // keep your image path
        illustrationAlt="Salesforce consulting illustration"
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

export default SalesForceConsulting;
