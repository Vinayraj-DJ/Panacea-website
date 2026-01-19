// src/pages/ServicesPage/ApplicationDevelopment/BigDataServices/BigDataServices.jsx
import React from "react";
import CtaPanel from "../../../../components/CtaPanel/CtaPanel";
import FooterSection from "../../../../sections/HomePageSection/FooterSection/FooterSection";
import SectionIntro from "../../../../components/common/SectionIntro";
import SplitFeature from "../../../../components/common/SplitFeature";
import HeroTitleChip from "../../../../components/common/HeroTitleChip";
import FeatureList from "../../../../components/FeatureList/FeatureList";
import styles from "./BigDataServices.module.css";

const SOCIALS = {
  linkedin: "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

export default function BigDataServices() {
  return (
    <section className={styles.page}>
      {/* Hero */}
      <div className={styles.hero}>
        <HeroTitleChip
          imageSrc="/images/services/BD.webp"
          alt="Big Data Services"
          title={"Big Data\nServices"}
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
        title="Big Data Services"
        paragraphs={[
          "Big Data Services help organizations harness the power of large, complex datasets to uncover valuable insights, drive innovation, and make smarter business decisions. By collecting, processing, and analyzing data from multiple sources, businesses can better understand customer behavior, optimize operations, and predict future trends.",
          "At PanaceaIT Services, we provide end-to-end Big Data solutions — from data strategy and architecture design to implementation, analytics, and visualization. Our experts leverage advanced tools and technologies to turn raw data into actionable intelligence, empowering organizations to enhance performance, reduce costs, and gain a competitive edge in today’s data-driven world.",
        ]}
      />

      {/* Why + How */}
      <SplitFeature
        image="/images/services/image 58.webp"
        title="Why Big Data Services is essential And How PanaceaIT services Help You"
        body={`In today’s digital-first economy, businesses generate massive amounts of data from multiple sources — customers, operations, devices, and more. Managing and making sense of this information is critical to staying competitive. Big Data Services enable organizations to process, analyze, and leverage this data to uncover hidden patterns, predict trends, and make smarter, faster decisions.`}
        body2={`With the right Big Data strategy, businesses can improve efficiency, enhance customer experiences, and identify new growth opportunities. At PanaceaIT Services, we help organizations unlock the true value of their data through customized Big Data solutions.`}
        imageLeft={true}
      />

      {/* About */}
      <SplitFeature
        image="/images/services/image 59.webp"
        title="About Big Data Services"
        body={`Big Data Services empower businesses to manage, analyze, and extract value from massive volumes of structured and unstructured data. These services help organizations uncover insights that drive better decisions, enhance customer experiences, and improve operational efficiency.`}
        body2={`At PanaceaIT Services, we offer end-to-end Big Data solutions — from strategy and architecture design to implementation, integration, and visualization — enabling companies to turn data into actionable intelligence and achieve sustainable business growth.`}
        imageLeft={false}
      />

      {/* Benefits */}
      <FeatureList
        title="Key Benefits Of Big Data Services"
        items={[
          {
            title: "Data-Driven Decision Making",
            desc:
              "Transform large volumes of complex data into actionable insights that help leaders make smarter and faster business decisions.",
          },
          {
            title: "Enhanced Customer Experience",
            desc:
              "Analyze customer behavior, preferences, and feedback to deliver personalized experiences and improve satisfaction.",
          },
          {
            title: "Improved Operational Efficiency",
            desc:
              "Identify inefficiencies, optimize processes, and reduce costs through real-time data analysis and performance tracking.",
          },
          {
            title: "Predictive Analytics and Forecasting",
            desc:
              "Leverage advanced algorithms to anticipate market trends, customer needs, and potential risks before they occur.",
          },
        ]}
        illustrationSrc="/images/services/image 60.webp"
        illustrationAlt="Big Data benefits illustration"
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
