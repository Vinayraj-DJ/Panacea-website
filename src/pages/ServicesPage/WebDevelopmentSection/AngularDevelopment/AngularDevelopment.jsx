import React from "react";
import CtaPanel from "../../../../components/CtaPanel/CtaPanel";
import FooterSection from "../../../../sections/HomePageSection/FooterSection/FooterSection";
import SectionIntro from "../../../../components/common/SectionIntro";
import SplitFeature from "../../../../components/common/SplitFeature";
import HeroTitleChip from "../../../../components/common/HeroTitleChip";
import styles from "./AngularDevelopment.module.css";
import FeatureList from "../../../../components/FeatureList/FeatureList";

const SOCIALS = {
  linkedin: "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

export default function AngularDevelopment() {
  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <HeroTitleChip imageSrc="/images/services/angularjs-dev-hero.webp" alt="Angular.js Development" title={"Angular.js\nDevelopment"} />
        <div className={styles.heroSocialIcons}>
          <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={`${styles.social} ${styles.linkedin}`}><span className={styles.text}>in</span></a>
          <a href={SOCIALS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={`${styles.social} ${styles.facebook}`}><span className={styles.text}>F</span></a>
        </div>
      </div>

      <SectionIntro
        title="Angular.js Development Services"
        paragraphs={[
          "Angular.js Development Services empower businesses to create dynamic, responsive, and feature-rich web applications with a seamless user experience. As a powerful front-end JavaScript framework maintained by Google, Angular.js simplifies the development of single-page applications (SPAs) and enterprise-level solutions through its modular architecture and two-way data binding. At PanaceaIT Services, we leverage the full capabilities of Angular.js to build high-performance, scalable, and maintainable applications that align with your business objectives. Our expert developers ensure every project combines speed, security, and functionality to deliver exceptional digital experiences.",
         
        ]}
      />

      <SplitFeature
        image="/images/services/angular-art-1.webp"
        title="Why Angular.js & How We Help"
        body={`In today’s competitive digital landscape, Angular.js Development offers a powerful way to build dynamic, scalable, and high-performing web applications. Its robust MVC architecture, two-way data binding, and modular structure make it ideal for creating responsive and interactive user interfaces. Businesses choose Angular.js for its speed, flexibility, and ability to handle complex application requirements with ease.`}
        body2={`At PanaceaIT Services, we utilize Angular.js to craft intelligent, user-focused, and efficient web applications tailored to your business needs. Our experienced developers specialize in delivering secure and maintainable solutions that enhance performance, streamline workflows, and improve user engagement.`}
        imageLeft={true}
      />

      <SplitFeature
        image="/images/services/angular-art-2.webp"
        title="About Angular.js Development"
        body={`Angular.js Development is a robust front-end framework designed to build dynamic, scalable, and interactive web applications. Developed and maintained by Google, Angular.js simplifies the process of creating single-page applications (SPAs) with features like two-way data binding, dependency injection, and reusable components. This makes it an excellent choice for developing responsive and performance-driven digital solutions. At PanaceaIT Services, we specialize in crafting powerful Angular.js applications that enhance user experience, boost efficiency, and drive business growth—helping clients achieve their digital transformation goals..`}
        imageLeft={false}
      />

      <FeatureList
        title="Key Benefits Of Angular.js"
        items={[
          { title: "High Performance and Speed", desc: "Angular.js delivers fast and efficient performance with its powerful data binding, dependency injection, and optimized architecture." },
          { title: "Two-Way Data Binding", desc: "Real-time synchronization between the model and view ensures smoother data flow and a more dynamic user interface." },
          { title: "Reusable and Modular Components", desc: "Angular.js promotes code reusability through modular components, reducing development time and simplifying maintenance." },
          { title: "Enhanced User Experience", desc: "The framework’s responsive design and smooth navigation deliver a rich, interactive experience for users across all devices." },
        ]}
        illustrationSrc="/images/services/angular-art-3.webp"
        illustrationAlt="Angular benefits"
        imageLeft={true}
      />

      <CtaPanel title="KNOW MORE PROJECTS" description="To know more projects and about all the details of the projects , the Technolgies that we used to make the project successful in very short span of time please do contact us" buttonLabel="Call us" href="/contact" align="center" maxWidth={794} />
      <FooterSection brand="Panacea IT Services" year={new Date().getFullYear()} services={["Software Development","Mobile Apps","UI/UX Design","Digital Marketing","SEO Optimization","Consulting"]} company={["About Us","Our Team","Careers","Portfolio","Blog","Contact"]} legal={["Privacy Policy","Terms of Service","Cookie Policy","GDPR"]}/>
    </section>
  );
}
