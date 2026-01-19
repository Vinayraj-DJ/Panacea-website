import React from "react";
import CtaPanel from "../../../../components/CtaPanel/CtaPanel";
import FooterSection from "../../../../sections/HomePageSection/FooterSection/FooterSection";
import SectionIntro from "../../../../components/common/SectionIntro";
import SplitFeature from "../../../../components/common/SplitFeature";
import HeroTitleChip from "../../../../components/common/HeroTitleChip";
import styles from "./LaravelDevelopment.module.css";
import FeatureList from "../../../../components/FeatureList/FeatureList";

const SOCIALS = {
  linkedin: "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

export default function LaravelDevelopment() {
  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <HeroTitleChip imageSrc="/images/services/lar1.webp" alt="Laravel Development" title={"Laravel\nDevelopment"} />
        <div className={styles.heroSocialIcons}>
          <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={`${styles.social} ${styles.linkedin}`}><span className={styles.text}>in</span></a>
          <a href={SOCIALS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={`${styles.social} ${styles.facebook}`}><span className={styles.text}>F</span></a>
        </div>
      </div>

      <SectionIntro
        title="Laravel Development Services"
        paragraphs={[
          "Angular.js Development Services empower businesses to create dynamic, responsive, and feature-rich web applications with a seamless user experience. As a powerful front-end JavaScript framework maintained by Google, Angular.js simplifies the development of single-page applications (SPAs) and enterprise-level solutions through its modular architecture and two-way data binding. At PanaceaIT Services, we leverage the full capabilities of Angular.js to build high-performance, scalable, and maintainable applications that align with your business objectives. Our expert developers ensure every project combines speed, security, and functionality to deliver exceptional digital experiences."
        ]}
      />

      <SplitFeature
        image="/images/services/lar2.webp"
        title="Why Laravel & How We Help"
        body={`In today’s fast-paced digital era, Laravel Development stands out as one of the most powerful frameworks for building secure, scalable, and high-performance web applications. Its elegant syntax, advanced tools, and robust architecture make it ideal for creating everything from small business websites to large enterprise solutions. Laravel’s built-in features help streamline complex development processes, ensuring faster delivery and long-term reliability.`}
        body2={`At PanaceaIT Services, we leverage the full potential of Laravel to design and develop custom web applications that are fast, secure, and future-ready.`}
        imageLeft={true}
      />

      <SplitFeature
        image="/images/services/lar3.webp"
        title="About Laravel Development"
        body={`Laravel Development is one of the most efficient and elegant ways to build modern, secure, and high-performing web applications. As a powerful PHP framework, Laravel offers a clean and expressive syntax, making development faster and more maintainable. With features like MVC architecture, built-in authentication, and database migration, it enables developers to create scalable and robust applications with ease. At PanaceaIT Services, we specialize in delivering tailored Laravel solutions that combine functionality, performance, and great user experience—helping businesses streamline operations and accelerate digital growth.`}
        imageLeft={false}
      />

      <FeatureList
        title="Key Benefits Of Laravel"
       items={[
  {
    title: "High Performance and Scalability",
    desc: "Laravel’s advanced caching system and optimized architecture ensure fast-loading, scalable web applications that grow with your business.",
  },
  {
    title: "Elegant and Clean Syntax",
    desc: "Laravel’s expressive syntax simplifies coding, allowing developers to build powerful applications efficiently and with fewer errors.",
  },
  {
    title: "Robust Security Features",
    desc: "With built-in protection against SQL injection, cross-site scripting, and CSRF attacks, Laravel ensures top-tier application security.",
  },
  {
    title: "MVC Architecture",
    desc: "The Model-View-Controller (MVC) structure makes development organized, maintainable, and easy to scale for future needs.",
  },
]}

        illustrationSrc="/images/services/lar4.webp"
        illustrationAlt="Laravel benefits"
        imageLeft={true}
      />

      <CtaPanel title="KNOW MORE PROJECTS" description="To know more projects and about all the details of the projects , the Technolgies that we used to make the project successful in very short span of time please do contact us" buttonLabel="Call us" href="/contact" align="center" maxWidth={794} />
      <FooterSection brand="Panacea IT Services" year={new Date().getFullYear()} services={["Software Development","Mobile Apps","UI/UX Design","Digital Marketing","SEO Optimization","Consulting"]} company={["About Us","Our Team","Careers","Portfolio","Blog","Contact"]} legal={["Privacy Policy","Terms of Service","Cookie Policy","GDPR"]}/>
    </section>
  );
}
