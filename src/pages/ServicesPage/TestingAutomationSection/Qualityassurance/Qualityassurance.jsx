import React from "react";
import CtaPanel from "../../../../components/CtaPanel/CtaPanel";
import FooterSection from "../../../../sections/HomePageSection/FooterSection/FooterSection";
import SectionIntro from "../../../../components/common/SectionIntro";
import SplitFeature from "../../../../components/common/SplitFeature";

/* hero + styles (unchanged structure) */
import HeroTitleChip from "../../../../components/common/HeroTitleChip";
import styles from "./Qualityassurance.module.css";

import FeatureList from "../../../../components/FeatureList/FeatureList";

const SOCIALS = {
  linkedin:
    "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

const Qualityassurance = () => {
  return (
    <section className={styles.page}>
      {/* HERO */}
      <div className={styles.hero}>
        <HeroTitleChip
          imageSrc="/images/services/qa.webp"
          alt="Quality Assurance"
          title={"Quality\nAssurance"}
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
        title="Quality Assurances"
        paragraphs={[
          "Quality Assurance (QA) Services ensure that every product you deliver meets the highest standards of performance, functionality, and reliability. QA focuses on preventing defects before they occur, improving development efficiency, and enhancing user experience through systematic testing and validation processes.",
          "At PanaceaIT Services, we provide comprehensive QA solutions that cover the entire software development lifecycle. Our team combines manual and automated testing approaches to detect bugs early, validate system performance, and ensure smooth functionality across platforms. With a focus on precision, efficiency, and innovation, we help businesses deliver flawless, high-quality software that builds trust and drives long-term success.",
        ]}
      />

      {/* WHY QA IS IMPORTANT */}
      <SplitFeature
        image="/images/services/quality1.webp"
        title="Why Quality Assurance is Important ?"
        body={`Quality Assurance (QA) is vital for ensuring that software products perform flawlessly, meet user expectations, and align with business goals. It helps detect and prevent issues early in the development cycle, saving time, reducing costs, and ensuring reliable performance in the final product.`}
        body2={`In today’s competitive digital world, customers demand seamless experiences. QA not only ensures bug-free applications but also enhances security, usability, and scalability. By maintaining high-quality standards, businesses can strengthen their brand reputation, boost customer satisfaction, and achieve sustainable growth.`}
        imageLeft={true}
      />

      {/* HOW PANACEA HELPS */}
      <SplitFeature
        image="/images/services/quality2.webp"
        title="How Panacea Can Help You with Quality Assurance ?"
        body={`At PanaceaIT Services, we deliver end-to-end Quality Assurance solutions that ensure your software meets the highest performance and reliability standards. Our QA experts use a mix of manual, automated, and performance testing to identify defects early, improve functionality, and ensure a seamless user experience across all platforms.`}
        body2={`We tailor our QA strategies to your business goals — from defining test plans and frameworks to executing regression, security, and usability testing. Using modern tools and agile methodologies, Panacea helps you achieve faster releases, lower maintenance costs, and consistently deliver error-free products that earn customer trust and drive business success.`}
        imageLeft={false}
      />

      {/* BENEFITS */}
      <FeatureList
        title="Key Benefits Of Quality Assurance"
        items={[
          {
            title: "Enhanced Product Quality",
            desc:
              "Ensure your software meets the highest standards of performance, stability, and reliability.",
          },
          {
            title: "Early Defect Detection",
            desc:
              "Identify and resolve issues early in the development cycle, reducing rework and improving efficiency.",
          },
          {
            title: "Cost Efficiency",
            desc:
              "Minimize post-release defects and maintenance expenses through continuous testing and process optimization.",
          },
          {
            title: "Improved User Experience",
            desc:
              "Deliver smooth, error-free applications that enhance customer satisfaction and retention.",
          },
        ]}
        illustrationSrc="/images/services/quality3.webp"
        illustrationAlt="Quality assurance benefits illustration"
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

export default Qualityassurance;