// src/pages/ServicesPage/ApplicationDevelopment/SapConsulting/SapConsulting.jsx
import React from "react";
import CtaPanel from "../../../../components/CtaPanel/CtaPanel";
import FooterSection from "../../../../sections/HomePageSection/FooterSection/FooterSection";
import SectionIntro from "../../../../components/common/SectionIntro";
import SplitFeature from "../../../../components/common/SplitFeature";
import HeroTitleChip from "../../../../components/common/HeroTitleChip";
import FeatureList from "../../../../components/FeatureList/FeatureList";
import styles from "./SapConsulting.module.css"; // copy from your other service css

const SOCIALS = {
  linkedin: "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

export default function SapConsulting() {
  return (
    <section className={styles.page}>
      {/* Hero */}
      <div className={styles.hero}>
        <HeroTitleChip
          imageSrc="/images/services/sap.webp"
          alt="SAP Consulting Services"
          title={"SAP Consulting\nServices"}
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
        title="SAP Consulting Services"
        paragraphs={[
          "SAP Consulting Services help businesses streamline operations, optimize resources, and achieve greater efficiency through tailored SAP solutions. These services cover end-to-end implementation, customization, integration, and support of SAP systems designed to align with your unique business goals.",
          "Expert SAP consultants analyze your processes, identify improvement areas, and deploy scalable solutions that enhance productivity, data management, and decision-making. By leveraging SAP’s powerful ERP and analytics capabilities, organizations can improve performance, reduce costs, and drive digital transformation across departments.",
        ]}
      />

      {/* Why + How */}
      <SplitFeature
        image="/images/services/image 52.webp"
        title="Why SAP Consulting Services is essential And How PanaceaIT services Help You"
        body={`In today’s fast-paced business landscape, managing complex operations and ensuring seamless data flow across departments is critical for success. SAP Consulting Services play a vital role in helping organizations streamline processes, enhance visibility, and make informed business decisions.`}
        body2={`With SAP’s integrated ERP solutions, companies can connect finance, supply chain, HR, sales, and customer management into one efficient ecosystem — improving accuracy, efficiency, and overall performance. At PanaceaIT Services, we specialize in delivering comprehensive SAP consulting solutions designed to align with your business objectives.`}
        imageLeft={true}
      />

      {/* About */}
      <SplitFeature
        image="/images/services/image 53.webp"
        title="About SAP Consulting Services"
        body={`SAP Consulting Services help organizations harness the power of SAP’s enterprise resource planning (ERP) solutions to improve efficiency, productivity, and business performance. These services cover every stage of the SAP journey — from planning and implementation to customization, integration, and ongoing support.`}
        body2={`Expert SAP consultants analyze existing business processes, identify improvement areas, and deploy tailored SAP modules that enhance workflow automation and data management.`}
        imageLeft={false}
      />

      {/* Benefits */}
      <FeatureList
        title="Key Benefits Of SAP Consulting Services"
        items={[
          {
            title: "Streamlined Business Processes",
            desc:
              "Integrate and automate core operations across finance, HR, sales, supply chain, and production for greater efficiency and consistency.",
          },
          {
            title: "Improved Decision-Making",
            desc:
              "Gain real-time visibility into business performance through advanced analytics and reporting, enabling smarter, data-driven decisions.",
          },
          {
            title: "Customized Solutions",
            desc:
              "SAP consultants tailor ERP modules to align perfectly with your specific business needs, ensuring maximum performance and flexibility.",
          },
        ]}
        illustrationSrc="/images/services/image 54.webp"
        illustrationAlt="SAP benefits illustration"
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
