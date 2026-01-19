// src/pages/ServicesPage/ApplicationDevelopment/CustomApplication/CustomApplication.jsx
import React from "react";
import CtaPanel from "../../../../components/CtaPanel/CtaPanel";
import FooterSection from "../../../../sections/HomePageSection/FooterSection/FooterSection";
import SectionIntro from "../../../../components/common/SectionIntro";
import SplitFeature from "../../../../components/common/SplitFeature";
import HeroTitleChip from "../../../../components/common/HeroTitleChip";
import FeatureList from "../../../../components/FeatureList/FeatureList";
import styles from "./CustomApplication.module.css"; // same rules as your other service css

const SOCIALS = {
  linkedin: "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

export default function CustomApplication() {
  return (
    <section className={styles.page}>
      {/* Hero */}
      <div className={styles.hero}>
        <HeroTitleChip
          imageSrc="/images/services/SAD.webp"
          alt="Custom Application Development"
          title={"Custom\nApplication Development"}
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

      {/* Intro */}
      <SectionIntro
        title="Custom Application Development Services"
        paragraphs={[
          "Custom Application Development Services help businesses design, build, and deploy software solutions tailored to their unique needs and goals. Unlike off-the-shelf applications, custom-built solutions are designed specifically to match business workflows, ensuring higher efficiency, scalability, and performance.",
          "Expert developers at PanaceaIT Services craft secure, user-friendly, and innovative applications that integrate seamlessly with existing systems. From concept and UI/UX design to development, testing, and maintenance, our end-to-end approach ensures your software is reliable, future-ready, and aligned with your strategic objectives.",
        ]}
      />

      {/* Why + How */}
      <SplitFeature
        image="/images/services/image 55.webp"
        title="Why Custom Application And How PanaceaIT Services Help You"
        body={`In today’s dynamic digital landscape, every business has unique needs that generic software often can’t meet. Custom Application Development empowers organizations to build tailored solutions that perfectly fit their workflows, objectives, and customer demands.`}
        body2={`At PanaceaIT Services, we specialize in developing scalable, secure, and innovative custom applications that align with your business vision. Our team works closely with you from ideation to deployment to deliver exceptional functionality and user experience.`}
        imageLeft={true}
      />

      {/* About */}
      <SplitFeature
        image="/images/services/image 57.webp"
        title="About Custom Application Services"
        body={`Custom Application Development Services focus on creating software solutions designed specifically to meet the unique requirements of a business. Unlike generic, off-the-shelf software, custom applications are built to align perfectly with an organization’s processes, goals, and customer needs.`}
        body2={`These solutions enhance productivity, improve workflow efficiency, and provide greater flexibility as businesses grow. Our expert developers design, develop, and deploy tailor-made applications that are secure, scalable, and performance-driven.`}
        imageLeft={false}
      />

      {/* Benefits */}
      <FeatureList
        title="Key Benefits Of Custom Application Services"
        items={[
          {
            title: "Tailored Solutions for Your Business",
            desc:
              "Custom applications are designed specifically to meet your unique business requirements, ensuring a perfect fit for your goals and processes.",
          },
          {
            title: "Enhanced Efficiency and Productivity",
            desc:
              "Streamlined workflows and automation reduce manual efforts, helping teams work smarter and deliver faster results.",
          },
          {
            title: "Scalability and Flexibility",
            desc:
              "Custom-built solutions can easily evolve with your business, adapting to new features, users, or market needs without disruption.",
          },
        ]}
        illustrationSrc="/images/services/image 56.webp"
        illustrationAlt="Custom application benefits illustration"
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
}
