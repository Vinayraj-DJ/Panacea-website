import React from "react";
import CtaPanel from "../../../../components/CtaPanel/CtaPanel";
import FooterSection from "../../../../sections/HomePageSection/FooterSection/FooterSection";
import SectionIntro from "../../../../components/common/SectionIntro";
import SplitFeature from "../../../../components/common/SplitFeature";
import HeroTitleChip from "../../../../components/common/HeroTitleChip";
import FeatureList from "../../../../components/FeatureList/FeatureList";
import styles from "./BIDataAnalytics.module.css";

const SOCIALS = {
  linkedin: "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

const BIDataAnalytics = () => {
  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <HeroTitleChip
          imageSrc="/images/services/BDA.webp"
          alt="BI & Data Analytics"
          title={"BI & Data\nAnalytics"}
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
        title="BI & Data Analytics Services"
        paragraphs={[
          "Business Intelligence (BI) and Data Analysis Services empower organizations to transform raw data into meaningful insights that drive smarter decisions. By leveraging advanced analytics, dashboards, and visualization tools, businesses can uncover trends, measure performance, and identify growth opportunities.",
          "BI solutions enable data-driven strategies, streamline operations, and enhance decision-making across all levels of an organization.",
        ]}
      />

      <SplitFeature
        image="/images/services/image 52.webp"
        title="Why BI & Data Analytics Matter And How PanaceaIT Can Help"
        body={`In today’s data-driven world, businesses generate massive amounts of information every day — but only those who harness it effectively can gain a competitive advantage. Business Intelligence (BI) and Data Analytics empower organizations to turn raw data into actionable insights, helping leaders make smarter, faster, and more strategic decisions.`}
        body2={`At PanaceaIT Services, we specialize in delivering end-to-end BI and Data Analytics solutions tailored to your business goals. Our experts design and implement powerful dashboards, reports, and data models that simplify complex information into clear, visual insights.`}
        imageLeft={true}
      />

      <SplitFeature
        image="/images/services/image 53.webp"
        title="About BI & Data Analytics"
        body={`Business Intelligence (BI) and Data Analytics empower organizations to transform raw data into meaningful insights that drive smarter decision-making. These services help businesses collect, process, and analyze data from various sources to uncover trends, measure performance, and identify growth opportunities.`}
        body2={`By turning data into actionable intelligence, companies can gain a competitive edge and confidently navigate today’s dynamic business environment.`}
        imageLeft={false}
      />

      <FeatureList
        title="Key Benefits Of BI & Data Analytics Services"
        items={[
          {
            title: "Data-Driven Decision Making",
            desc:
              "Transform complex data into actionable insights that help leaders make informed and strategic business decisions.",
          },
          {
            title: "Improved Operational Efficiency",
            desc:
              "Identify performance gaps, optimize workflows, and reduce inefficiencies through real-time data monitoring and analysis.",
          },
          {
            title: "Enhanced Business Visibility",
            desc:
              "Centralize and visualize data from multiple sources with interactive dashboards and reports for complete organizational transparency.",
          },
          {
            title: "Personalized Customer Insights",
            desc:
              "Understand customer preferences and buying patterns to improve engagement, satisfaction, and loyalty.",
          },
        ]}
        illustrationSrc="/images/services/image 54.webp"
        illustrationAlt="BI & Data Analytics illustration"
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

export default BIDataAnalytics;
