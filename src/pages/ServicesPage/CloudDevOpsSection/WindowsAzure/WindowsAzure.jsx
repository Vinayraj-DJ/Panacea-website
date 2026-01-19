import React from "react";
import CtaPanel from "../../../../components/CtaPanel/CtaPanel";
import FooterSection from "../../../../sections/HomePageSection/FooterSection/FooterSection";
import SectionIntro from "../../../../components/common/SectionIntro";
import SplitFeature from "../../../../components/common/SplitFeature";

/* ✅ hero imports (same components, new copy/art) */
import HeroTitleChip from "../../../../components/common/HeroTitleChip";
import styles from "./WindowsAzure.module.css";
import FeatureList from "../../../../components/FeatureList/FeatureList";

const SOCIALS = {
  linkedin:
    "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

const WindowsAzure = () => {
  return (
    <section className={styles.page}>
      {/* ✅ HERO (unchanged structure) */}
      <div className={styles.hero}>
        <HeroTitleChip
          imageSrc="/images/services/windows-azure-hero.webp"
          alt="Windows Azure"
          title={"Windows\nAzure"}
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

      {/* ✅ INTRO – content swapped only */}
      <SectionIntro
        title="Windows Azure Cloud Services"
        paragraphs={[
          "Microsoft Azure Cloud Services is a comprehensive cloud computing platform that helps businesses build, deploy, and manage applications through Microsoft’s global network of data centers. Azure offers a wide range of cloud solutions — including infrastructure as a service (IaaS), platform as a service (PaaS), and software as a service (SaaS) — empowering organizations to innovate, scale, and operate more efficiently. It supports multiple programming languages, frameworks, and operating systems, providing unmatched flexibility for modern enterprises.",
          "At PanaceaIT Services, we specialize in helping businesses harness the full potential of Microsoft Azure. Our certified cloud experts design, migrate, and optimize cloud environments tailored to your business needs. From data storage, AI integration, and DevOps automation to hybrid cloud deployments and security management, we ensure seamless cloud adoption and ongoing optimization.",
        ]}
      />

      {/* ✅ WHY + HOW – content swapped only */}
      <SplitFeature
        image="/images/services/windows-azure-why.webp"
        title="Why You Should Use Microsoft Azure And How Panacea Can Help"
        body={'In today’s rapidly evolving digital landscape, Microsoft Azure is a key enabler of business agility, scalability, and innovation. Azure offers a secure, flexible, and cost-effective platform that supports a wide range of business needs — from hosting applications and managing data to deploying AI, IoT, and analytics solutions. Its hybrid cloud capabilities allow organizations to seamlessly integrate on-premises systems with the cloud, ensuring smooth operations and optimized performance.'}
        body2={'At PanaceaIT Services, we help businesses unlock the full potential of Microsoft Azure through expert consulting, deployment, and management services.'}
        imageLeft={true}
      />

      {/* ✅ ABOUT – content swapped only */}
      <SplitFeature
        image="/images/services/windows-azure-about.webp"
        title="About Microsoft Azure Cloud Services"
        body={'Microsoft Azure Cloud Services is one of the world’s leading cloud computing platforms, offering a robust suite of tools and services that empower organizations to innovate and grow. Azure provides scalable solutions across computing, networking, storage, databases, analytics, artificial intelligence (AI), and Internet of Things (IoT) — all supported by Microsoft’s secure and globally distributed data centers.'}
        body2={'Its hybrid cloud capabilities allow seamless integration between on-premises systems and cloud environments, enabling flexibility and control. Azure is designed for businesses of all sizes, supporting multiple frameworks, operating systems, and programming languages to meet diverse development and deployment needs.'}
        imageLeft={false}
      />

      {/* ✅ BENEFITS – content swapped only */}
      <FeatureList
        title="Key Benefits Of Microsoft Azure Cloud Services"
        items={[
          {
            title: "Scalability and Flexibility",
            desc:
              "Azure allows businesses to scale computing resources up or down instantly based on workload requirements, ensuring optimal performance and cost efficiency.",
          },
          {
            title: "Enhanced Security and Compliance",
            desc:
              "With built-in encryption, advanced threat detection, and compliance with global standards such as ISO, GDPR, and HIPAA, Azure provides enterprise-grade data protection.",
          },
          {
            title: "Cost-Effective Cloud Solutions",
            desc:
              "Azure’s pay-as-you-go model helps organizations reduce capital expenses by paying only for the resources they use, optimizing IT spending.",
          },
          {
            title: "Global Availability and Reliability",
            desc:
              "Operating in multiple regions worldwide, Azure ensures high availability, low latency, and robust disaster recovery for uninterrupted business continuity.",
          },
        ]}
        illustrationSrc="/images/services/windows-azure-benefits.webp"
        illustrationAlt="Azure benefits illustration"
        imageLeft={true}
      />

      {/* CTA + Footer (unchanged) */}
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

export default WindowsAzure;