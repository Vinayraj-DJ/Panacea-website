// src/pages/ServicesPage/ApplicationDevelopment/SoftwareDevelopment/SoftwareDevelopment.jsx
import React from "react";
import CtaPanel from "../../../../components/CtaPanel/CtaPanel";
import FooterSection from "../../../../sections/HomePageSection/FooterSection/FooterSection";
import SectionIntro from "../../../../components/common/SectionIntro";
import SplitFeature from "../../../../components/common/SplitFeature";
import HeroTitleChip from "../../../../components/common/HeroTitleChip";
import styles from "./SoftwareDevelopment.module.css"; // reuse your existing service css (same rules as others)

const SOCIALS = {
  linkedin:
    "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

export default function SoftwareDevelopment() {
  return (
    <section className={styles.page}>
      {/* Hero (only text changed) */}
      <div className={styles.hero}>
        <HeroTitleChip
          imageSrc="/images/services/sd.webp" // keep same pattern you’re using
          alt="Software Development"
          title={"Software\nDevelopment"}
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

      {/* Intro */}
      <SectionIntro
        title="Software Development"
        paragraphs={[
          "Software Development is the process of designing, creating, testing, and maintaining applications, frameworks, or other software components to solve specific problems or meet user needs. It involves a structured approach that includes requirement analysis, system design, coding, testing, deployment, and ongoing maintenance.",
          "The development process can cover various types of software, such as web applications, mobile apps, desktop programs, and enterprise solutions, using programming languages like Python, Java, C#, JavaScript, and PHP.",
        ]}
      />

      {/* Understanding needs */}
      <SplitFeature
        image="/images/services/image 40.webp"
        title="Understanding The Needs & Defining The Problem"
        body={`The process of software development begins with understanding  problem or a need the developers work closely with stakeholders to identify the requirements and define  the scope of software. This initial phase is crucial as it lays the foundation for entire development process. clear
communication and a comprehensive understanding of the 
problem domain are essential to ensure that the final software solutions meets the expectations and needs of its users.`}
        // body2={`Clear communication and a comprehensive understanding of the problem domain are essential to ensure that the final software solution meets the expectations and needs of its users.`}
        imageLeft={true}
      />

      {/* Blueprint & roadmap */}
      <SplitFeature
        image="/images/services/image 41.webp"
        title="Designing The Blueprint & Creating The Software Roadmap"
        body={`Once the requirements are established, developers move on 
to the design phase. This involves in creating in blueprint or 
roadmap for the software , outlining its architecture and 
structure. Design decisions are take into a account factors
such as user experience, scalability and maintainability. This phase is crucial for setting the direction of the project
and ensuring the development team has clear vision  of the 
final project..`}
        // body2={`Design decisions take into account factors such as user experience, scalability, and maintainability. This phase is crucial for setting the direction of the project and ensuring the development team has a clear vision of the final product.`}
        imageLeft={false}
      />

      {/* Testing & QA */}
      <SplitFeature
        image="/images/services/image 42.webp"
        title="Testing For Quality & Identifying And Fixing Bugs"
        body={`Testing and Quality Assurance (QA) is the process of evaluating software to ensure it meets the required standards of performance, functionality, and security. It involves systematically identifying, reporting, and fixing bugs or errors to improve the product’s reliability and user experience. Through continuous testing and quality checks, businesses can deliver software that is stable, efficient, and ready for real-world use.`}
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
        company={[
          "About Us",
          "Our Team",
          "Careers",
          "Portfolio",
          "Blog",
          "Contact",
        ]}
        legal={["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"]}
      />
    </section>
  );
}
