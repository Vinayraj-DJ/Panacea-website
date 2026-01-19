import React from "react";
import CtaPanel from "../../../../components/CtaPanel/CtaPanel";
import FooterSection from "../../../../sections/HomePageSection/FooterSection/FooterSection";
import SectionIntro from "../../../../components/common/SectionIntro";
import SplitFeature from "../../../../components/common/SplitFeature";

/* ✅ hero imports (unchanged structure) */
import HeroTitleChip from "../../../../components/common/HeroTitleChip";
import styles from "./CloudConsultingServices.module.css";
import FeatureList from "../../../../components/FeatureList/FeatureList";

const SOCIALS = {
  linkedin:
    "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

const CloudConsulting = () => {
  return (
    <section className={styles.page}>
      {/* ✅ HERO (same component, new artwork + title) */}
      <div className={styles.hero}>
        <HeroTitleChip
          imageSrc="/images/services/cloud-consulting-hero.webp"
          alt="Cloud Consulting"
          title={"Cloud Consulting\nServices"}
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

      {/* ✅ INTRO (content only changed) */}
      <SectionIntro
        title="Cloud Consulting Services"
        paragraphs={[
          "Cloud Consulting Services help businesses harness the full potential of cloud computing by offering expert guidance, tailored strategies, and seamless migration solutions. These services enable organizations to modernize their IT infrastructure, enhance operational efficiency, and improve scalability while optimizing costs.",
          "At Panacea IT Services, we provide end-to-end cloud consulting — from assessing your current infrastructure to designing and implementing a secure, high-performing cloud environment. Our team ensures smooth adoption of cloud technologies that align with your business goals and drive long-term digital transformation."
        ]}
      />

      {/* ✅ WHY + HOW (content only changed) */}
      <SplitFeature
        image="/images/services/cloud-consulting-why.webp"
        title="Why You Should Use Cloud Consulting • How Panacea Can Help"
        body={'In today’s digital era, cloud consulting is essential for businesses aiming to stay agile, secure, and cost-efficient. It helps organizations design effective cloud strategies, migrate workloads seamlessly, and ensure optimized performance across all operations. With expert cloud guidance, companies can modernize infrastructure, enhance collaboration, and accelerate digital transformation.'}
        body2={'At Panacea IT Services, we bring deep expertise in leading cloud platforms like AWS, Microsoft Azure, and Google Cloud. Our certified consultants assess your current systems, craft tailored migration plans, and implement scalable cloud solutions that align with your business goals.'}
        imageLeft={true}
      />

      {/* ✅ ABOUT (content only changed) */}
      <SplitFeature
        image="/images/services/cloud-consulting-about.webp"
        title="About Cloud Consulting Services"
        body={'Cloud Consulting Services help businesses leverage the power of cloud computing to transform operations, improve flexibility, and reduce costs. We provide expert guidance in choosing the right cloud platforms, designing architectures, and implementing scalable, secure, and efficient solutions tailored to your needs.'}
        body2={'Panacea IT Services specializes in delivering end-to-end cloud solutions—from assessment and strategy to deployment and optimization—so your organization gains the agility, performance, and resilience needed to compete in today’s digital-first marketplace.'}
        imageLeft={false}
      />

      {/* ✅ BENEFITS (content only changed) */}
      <FeatureList
        title="Key Benefits Of Cloud Consulting Services"
        items={[
          {
            title: "Optimized Cloud Strategy",
            desc:
              "Get expert guidance to design a cloud roadmap aligned with your business objectives and technical requirements."
          },
          {
            title: "Cost Efficiency",
            desc:
              "Reduce operational costs by optimizing resource usage, minimizing downtime, and adopting pay-as-you-go models."
          },
          {
            title: "Enhanced Scalability",
            desc:
              "Easily scale your infrastructure up or down to meet changing business demands without major investments."
          },
          {
            title: "Improved Security & Compliance",
            desc:
              "Ensure data protection with secure cloud architecture and adherence to global compliance standards."
          }
        ]}
        illustrationSrc="/images/services/cloud-consulting-benefits.webp"
        illustrationAlt="Cloud consulting illustration"
        imageLeft={true}
      />

      {/* ✅ CTA + FOOTER (unchanged) */}
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
          "Consulting"
        ]}
        company={["About Us", "Our Team", "Careers", "Portfolio", "Blog", "Contact"]}
        legal={["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"]}
      />
    </section>
  );
};

export default CloudConsulting;