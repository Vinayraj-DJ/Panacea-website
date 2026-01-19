import React from "react";
import CtaPanel from "../../../../components/CtaPanel/CtaPanel";
import FooterSection from "../../../../sections/HomePageSection/FooterSection/FooterSection";
import SectionIntro from "../../../../components/common/SectionIntro";
import SplitFeature from "../../../../components/common/SplitFeature";

/* ✅ hero imports (same components, new copy/art) */
import HeroTitleChip from "../../../../components/common/HeroTitleChip";
import styles from "./DevOps.module.css";
import FeatureList from "../../../../components/FeatureList/FeatureList";

const SOCIALS = {
  linkedin:
    "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

const DevOps = () => {
  return (
    <section className={styles.page}>
      {/* ✅ HERO (unchanged layout) */}
      <div className={styles.hero}>
        <HeroTitleChip
          imageSrc="/images/services/devopss.webp"
          alt="DevOps"
          title={"DevOps"}
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

      {/* ✅ INTRO – content only changed */}
      <SectionIntro
        title="DevOps Consulting Services"
        paragraphs={[
          "DevOps Consulting Services bridge the gap between development and operations, enabling businesses to deliver high-quality software faster and more efficiently. By integrating automation, continuous integration, and continuous delivery (CI/CD) practices, DevOps transforms the traditional software development lifecycle into a streamlined, collaborative, and scalable process.",
          "It enhances communication between teams, reduces deployment time, and ensures faster recovery from failures. At PanaceaIT Services, our DevOps experts help organizations modernize their IT infrastructure, automate workflows, and improve software reliability. We leverage cutting-edge tools like Docker, Kubernetes, Jenkins, Terraform, and AWS DevOps to build robust pipelines that accelerate innovation and ensure consistent delivery."
        ]}
      />

      {/* ✅ WHY + HOW – content only changed */}
      <SplitFeature
        image="/images/services/image 97.webp"
        title="Why Do You Need DevOps Consulting Services?"
        body={'In today’s fast-paced digital era, DevOps Consulting Services are essential for businesses striving to accelerate software delivery, enhance collaboration, and maintain high-quality standards. Traditional development models often create silos between development and operations teams, leading to delays, inefficiencies, and higher costs. DevOps bridges this gap by fostering a culture of shared responsibility, automation, and continuous improvement.'}
        body2={'With DevOps consulting, organizations can streamline workflows, improve deployment frequency, and reduce downtime through advanced CI/CD pipelines and real-time monitoring.'}
        imageLeft={true}
      />

      {/* ✅ ABOUT – content only changed */}
      <SplitFeature
        image="/images/services/image 98.webp"
        title="About DevOps"
        body={'DevOps is a modern software development approach that unifies development (Dev) and operations (Ops) teams to enhance collaboration, efficiency, and product quality. It focuses on automating processes across the software delivery lifecycle — from code integration and testing to deployment and monitoring — ensuring faster releases and more reliable systems.'}
        body2={'DevOps promotes a culture of continuous integration, continuous delivery (CI/CD), and continuous feedback, allowing organizations to innovate rapidly while minimizing risks and downtime. At PanaceaIT Services, we implement DevOps best practices to help businesses achieve agility, scalability, and operational excellence.'}
        imageLeft={false}
      />

      {/* ✅ BENEFITS – content only changed */}
      <FeatureList
        title="Key Benefits Of DevOps Consulting Services"
        items={[
          {
            title: "Faster Time-to-Market",
            desc:
              "DevOps practices streamline development and deployment processes, enabling businesses to release updates and new features more rapidly.",
          },
          {
            title: "Improved Collaboration",
            desc:
              "By breaking down silos between development and operations teams, DevOps fosters a culture of communication, transparency, and shared responsibility.",
          },
          {
            title: "Increased Efficiency Through Automation",
            desc:
              "Automated testing, deployment, and monitoring reduce manual errors and save time, ensuring consistent performance across environments.",
          },
          {
            title: "Enhanced Software Quality",
            desc:
              "Continuous integration and delivery (CI/CD) ensure early bug detection and consistent code quality, leading to more stable and reliable applications.",
          },
        ]}
        illustrationSrc="/images/services/image 99.webp"
        illustrationAlt="DevOps benefits illustration"
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

export default DevOps;