import React from "react";
import CtaPanel from "../../../../components/CtaPanel/CtaPanel";
import FooterSection from "../../../../sections/HomePageSection/FooterSection/FooterSection";
import SectionIntro from "../../../../components/common/SectionIntro";
import SplitFeature from "../../../../components/common/SplitFeature";
/* ✅ minimal add: hero imports */
import HeroTitleChip from "../../../../components/common/HeroTitleChip";
import styles from "./FullStackDevelopment.module.css";
import FeatureList from "../../../../components/FeatureList/FeatureList";
const SOCIALS = {
  linkedin:
    "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

const FullstackDevelopment = () => {
  return (
    <section className={styles.page}>
      {/* ✅ added hero (only change) */}
      <div className={styles.hero}>
        <HeroTitleChip
          imageSrc="/images/services/fullstackdevelopment-hero.webp"
          alt="Full Stack Development"
          title={"Full Stack\nDevelopment"}
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

      {/* ⬇️ everything below is your original content unchanged */}
      <SectionIntro
        title="Full Stack Development Services"
        paragraphs={[
          "At Panacea, we build powerful, scalable, and user-friendly software solutions that help businesses innovate, grow, and thrive in the digital age. From idea to execution, our products are designed to deliver real impact.",
          "Full Stack Development Services involve building both the front-end (client side) and back-end (server side) of web or mobile applications, providing end-to-end development solutions for businesses. A full stack development team handles everything — from designing interactive user interfaces and developing robust server logic to managing databases, APIs, and deployment infrastructure.",
        ]}
      />

      <SplitFeature
        image="/images/services/image 38.webp"
        title="Why you should use full stack Development and how Panacea can help you"
        body={`Full stack development provides a complete solution for building modern, scalable, and high-performing applications. It enables seamless integration 
between the front-end and back-end, ensuring a smooth user experience and efficient data flow. With expertise across multiple technologies, full stack developers can handle every aspect of development — from design to 
deployment.`}
        body2={`Panacea IT Services offers expert full stack development solutions that combine innovation, efficiency, and scalability. Our experienced team leverages the latest frameworks and tools to build secure, high-performance web and mobile applications. We focus on delivering end-to-end digital solutions that drive growth, enhance user experience, and help your business stay ahead of the competition.`}
        imageLeft={true}
      />

      <SplitFeature
        image="/images/services/image 37.webp"
        title="About Full Stack Development"
        body={`A full stack developer is skilled in multiple technologies such as HTML, CSS, JavaScript, React, Angular, Node.js, PHP, Python, and MySQL, allowing them to build and manage the entire software solution efficiently. They ensure that every part of the application works smoothly together — from user interaction to data processing.`}
        imageLeft={false}
      />

      <FeatureList
        title="Key Benefits Of Full Stack Development"
        items={[
          {
            title: "End-to-End Development",
            desc: "Handles both front-end and back-end, providing complete solutions. Flexibility and fast iteration across the application.",
          },
          {
            title: "Co-Effective Solutions",
            desc: "Fewer resources than separate teams. Scales with robust architecture and integrated systems.",
          },
          {
            title: "Faster Time to Market",
            desc: "Rapid delivery for dynamic, scalable, feature-rich web and mobile apps.",
          },
          {
            title: "Enhanced Scalability",
            desc: "Efficiently handles increasing workloads and users without compromising performance.",
          },
        ]}
        illustrationSrc="/images/services/image 39.webp"
        illustrationAlt="Full stack developer illustration"
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
};

export default FullstackDevelopment;
