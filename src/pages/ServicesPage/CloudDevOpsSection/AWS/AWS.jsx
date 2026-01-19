import React from "react";
import CtaPanel from "../../../../components/CtaPanel/CtaPanel";
import FooterSection from "../../../../sections/HomePageSection/FooterSection/FooterSection";
import SectionIntro from "../../../../components/common/SectionIntro";
import SplitFeature from "../../../../components/common/SplitFeature";

/* ✅ hero imports (unchanged components) */
import HeroTitleChip from "../../../../components/common/HeroTitleChip";
import styles from "./AWS.module.css";
import FeatureList from "../../../../components/FeatureList/FeatureList";

const SOCIALS = {
  linkedin:
    "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

const AWS = () => {
  return (
    <section className={styles.page}>
      {/* ✅ HERO (same layout; new art/title) */}
      <div className={styles.hero}>
        <HeroTitleChip
          imageSrc="/images/services/aws-hero.webp"
          alt="AWS Services"
          title={"AWS\nSERVICES"}
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

      {/* ✅ INTRO (content-only change) */}
      <SectionIntro
        title="Amazon Web Services"
        paragraphs={[
          "Amazon Web Services (AWS) is the world’s leading cloud computing platform, offering a comprehensive suite of scalable, secure, and cost-effective solutions for businesses of all sizes. From computing power and storage to databases, analytics, artificial intelligence (AI), and Internet of Things (IoT) — AWS provides over 200 fully featured services that help organizations innovate faster and operate more efficiently. Its global infrastructure ensures high availability, flexibility, and reliability across multiple regions.",
          "At PanaceaIT Services, we help businesses harness the full potential of AWS by designing, deploying, and managing tailored cloud solutions. Our certified AWS experts specialize in cloud migration, infrastructure optimization, DevOps integration, and data analytics on AWS. Whether you’re looking to modernize legacy systems or build new cloud-native applications, PanaceaIT ensures a seamless, secure, and scalable AWS environment that drives digital transformation and business growth."
        ]}
      />

      {/* ✅ WHY + HOW (content-only change) */}
      <SplitFeature
        image="/images/services/aws-why.webp"
        title="Why Do You Need Amazon Web Services?"
        body={'In today’s digital-first world, Amazon Web Services (AWS) is essential for businesses seeking scalability, agility, and cost efficiency in their IT infrastructure. Traditional on-premises systems often struggle to keep up with rapid growth, high data demands, and global operations. AWS solves these challenges by offering on-demand access to computing power, storage, and advanced technologies without heavy upfront investments.'}
        body2={'With DevOps consulting, organizations can streamline workflows, improve deployment frequency, and reduce downtime through advanced CI/CD pipelines and real-time monitoring.'}
        imageLeft={true}
      />

      {/* ✅ ABOUT (content-only change) */}
      <SplitFeature
        image="/images/services/aws-about.webp"
        title="About Amazon Web Services"
        body={'Amazon Web Services (AWS) is a comprehensive and widely adopted cloud platform that provides on-demand computing resources and services to businesses, governments, and organizations around the world. With over 200 fully featured services available across global data centers, AWS enables seamless scalability, flexibility, and innovation.'}
        body2={'Its offerings span across cloud computing, data storage, networking, databases, analytics, artificial intelligence (AI), machine learning (ML), Internet of Things (IoT), and more. AWS empowers organizations to eliminate the need for costly physical infrastructure while maintaining enterprise-grade performance, security, and reliability.'}
        imageLeft={false}
      />

      {/* ✅ BENEFITS (content-only change) */}
      <FeatureList
        title="Key Benefits Of Amazon Web Services"
        items={[
          {
            title: "Scalability and Flexibility",
            desc:
              "AWS allows businesses to scale computing resources up or down instantly based on demand, ensuring optimal performance without overpaying for unused capacity.",
          },
          {
            title: "Cost-Effective Solutions",
            desc:
              "With its pay-as-you-go pricing model, AWS eliminates the need for heavy upfront infrastructure investments, helping businesses control costs effectively.",
          },
          {
            title: "High Performance and Reliability",
            desc:
              "AWS’s global network of data centers provides high availability, low latency, and fault tolerance, ensuring uninterrupted service and superior performance.",
          },
          {
            title: "Advanced Security and Compliance",
            desc:
              "AWS offers industry-leading security features such as data encryption, identity management, and compliance with global standards like ISO, GDPR, and HIPAA.",
          },
        ]}
        illustrationSrc="/images/services/aws-benefits.webp"
        illustrationAlt="AWS benefits illustration"
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

export default AWS;