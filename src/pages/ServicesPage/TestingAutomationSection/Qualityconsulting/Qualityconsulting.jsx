import React from "react";
import CtaPanel from "../../../../components/CtaPanel/CtaPanel";
import FooterSection from "../../../../sections/HomePageSection/FooterSection/FooterSection";
import SectionIntro from "../../../../components/common/SectionIntro";
import SplitFeature from "../../../../components/common/SplitFeature";

/* hero + styles (structure unchanged) */
import HeroTitleChip from "../../../../components/common/HeroTitleChip";
import styles from "./Qualityconsulting.module.css";

import FeatureList from "../../../../components/FeatureList/FeatureList";

const SOCIALS = {
  linkedin:
    "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

const Qualityconsulting = () => {
  return (
    <section className={styles.page}>
      {/* HERO */}
      <div className={styles.hero}>
        <HeroTitleChip
          imageSrc="/images/services/qc.webp"
          alt="Quality Consulting"
          title={"Quality\nConsulting"}
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
        title="Quality Consulting Services"
        paragraphs={[
          "Quality Consulting Services help organizations improve their software development processes, ensure product reliability, and achieve higher customer satisfaction. These services focus on building strong quality frameworks, implementing testing best practices, and ensuring compliance with industry standards.",
          "At PanaceaIT Services, we provide end-to-end quality consulting solutions designed to enhance performance, reduce defects, and accelerate delivery. Our experts assess your current quality processes, identify improvement areas, and design strategies that promote continuous improvement and operational excellence — ensuring your business delivers flawless and dependable digital products.",
        ]}
      />

      {/* WHY QC IS IMPORTANT */}
      <SplitFeature
        image="/images/services/quality1.webp"
        title="Why Quality Consulting is Important ?"
        body={'Quality Consulting is essential for organizations that strive to deliver reliable, efficient, and high-performing software solutions. It ensures that every stage of the development lifecycle — from planning to deployment — adheres to the highest quality standards.'}
        body2={'By identifying process gaps, reducing risks, and enhancing product performance, quality consulting helps businesses maintain a strong reputation and customer trust. In today’s market, quality is not optional — it’s a differentiator. With the right consulting approach, businesses can minimize defects, improve time-to-market, and optimize resources, leading to sustainable growth and long-term success.'}
        imageLeft={true}
      />

      {/* HOW PANACEA HELPS */}
      <SplitFeature
        image="/images/services/quality2.webp"
        title="How Panacea Can Help You with Quality Consulting ?"
        body={'At PanaceaIT Services, we bring deep expertise and proven methodologies to elevate your software quality standards. Our team of skilled quality consultants works closely with your organization to assess existing processes, identify inefficiencies, and implement tailored quality frameworks that drive excellence.'}
        body2={'We leverage advanced testing tools, automation strategy, and continuous integration practices to ensure faster, more reliable software delivery. From QA strategy development to performance optimization, PanaceaIT helps you build a culture of quality that reduces costs, enhances user satisfaction, and ensures long-term business success.'}
        imageLeft={false}
      />

      {/* BENEFITS */}
      <FeatureList
        title="Key Benefits Of Quality Consulting"
        items={[
          {
            title: "Improved Product Quality",
            desc:
              "Ensure your software and systems meet the highest performance, functionality, and reliability standards.",
          },
          {
            title: "Process Optimization",
            desc:
              "Streamline workflows, eliminate inefficiencies, and establish repeatable QA processes that save time and resources.",
          },
          {
            title: "Cost Reduction",
            desc:
              "Detect and fix issues early in the development cycle, significantly lowering rework and maintenance costs.",
          },
          {
            title: "Enhanced Customer Satisfaction",
            desc:
              "Deliver consistent, error-free products that build trust and improve user experience.",
          },
        ]}
        illustrationSrc="/images/services/quality3.webp"
        illustrationAlt="Quality consulting benefits illustration"
        imageLeft={true}
      />

      {/* CTA + FOOTER (unchanged) */}
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

export default Qualityconsulting;