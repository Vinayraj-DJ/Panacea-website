import React from "react";
import CtaPanel from "../../../components/CtaPanel/CtaPanel";
import FooterSection from "../../../sections/HomePageSection/FooterSection/FooterSection";
import SectionIntro from "../../../components/common/SectionIntro";
import SplitFeature from "../../../components/common/SplitFeature";

/* ✅ hero imports (unchanged pattern) */
import HeroTitleChip from "../../../components/common/HeroTitleChip";
import styles from "./QualityEngineering.module.css";
import FeatureList from "../../../components/FeatureList/FeatureList";

const SOCIALS = {
  linkedin:
    "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

const QualityEngineering = () => {
  return (
    <section className={styles.page}>
      {/* ✅ HERO (same component, new art/text) */}
      <div className={styles.hero}>
        <HeroTitleChip
          imageSrc="/images/services/qe.webp"
          alt="Quality Engineering"
          title={"Quality\nEngineering"}
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

      {/* ⬇ content only changed — layout/components unchanged */}
      <SectionIntro
        title="Quality Engineering"
        paragraphs={[
          "Quality Engineering (QE) focuses on building quality into every phase of the software lifecycle—from design and development to deployment and maintenance. Unlike traditional testing, which often occurs after code completion, QE ensures that quality is proactively embedded throughout the process.",
          "QE leverages automation, continuous testing, and DevOps practices to improve reliability, speed, and performance while reducing risk. The goal is to deliver products that meet customer expectations, comply with standards, and perform consistently across platforms and devices."
        ]}
      />

      <SplitFeature
        image="/images/services/quality1.webp"
        title="Why Quality Engineering is Important ?"
        body={'In today’s fast-paced digital environment, customers expect flawless and reliable software experiences. Quality Engineering plays a pivotal role in achieving this by preventing defects early, improving product performance, and reducing time to release. It brings together advanced testing methodologies, real-time insights, and efficient workflows to ensure software is scalable, secure, and robust.'}
        body2={'Moreover, QE supports continuous integration and continuous delivery (CI/CD) pipelines—allowing development teams to iterate rapidly without compromising quality. This leads to faster, more reliable releases and a better user experience across every touchpoint.'}
        imageLeft={true}
      />

      <SplitFeature
        image="/images/services/quality2.webp"
        title="How Panacea Can Help You with Quality Engineering ?"
        body={'At Panacea IT Services, we deliver end-to-end Quality Engineering solutions that combine automation, innovation, and domain expertise. Our QA engineers and test architects collaborate with your teams to make quality an integral part of your development lifecycle.'}
        body2={'We specialize in test automation, performance testing, API testing, security testing, and continuous testing across agile and DevOps environments—helping you ship faster with confidence.'}
        imageLeft={false}
      />

      <FeatureList
        title="Key Benefits Of Quality Engineering"
        items={[
          {
            title: "Early Defect Detection and Prevention",
            desc:
              "Identify and resolve issues early in the development process—significantly reducing rework and release risk."
          },
          {
            title: "Enhanced Product Performance and Reliability",
            desc:
              "Continuous testing and monitoring ensure apps perform optimally under expected and unexpected conditions."
          },
          {
            title: "Faster Time to Market",
            desc:
              "Automated tests and CI/CD accelerate releases without compromising quality—enabling frequent, reliable updates."
          },
          {
            title: "Cost Efficiency Through Automation",
            desc:
              "Automation reduces manual effort, eliminates repetitive tasks, improves accuracy, and speeds up delivery."
          }
        ]}
        illustrationSrc="/images/services/quality3.webp"
        illustrationAlt="Quality engineering team illustration"
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

export default QualityEngineering;