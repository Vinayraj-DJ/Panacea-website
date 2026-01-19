import React from "react";
import CtaPanel from "../../../../components/CtaPanel/CtaPanel";
import FooterSection from "../../../../sections/HomePageSection/FooterSection/FooterSection";
import SectionIntro from "../../../../components/common/SectionIntro";
import SplitFeature from "../../../../components/common/SplitFeature";
import HeroTitleChip from "../../../../components/common/HeroTitleChip";
import styles from "./ReactDevelopment.module.css";
import FeatureList from "../../../../components/FeatureList/FeatureList";

const SOCIALS = {
  linkedin: "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

export default function ReactDevelopment() {
  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <HeroTitleChip imageSrc="/images/services/react1.webp" alt="React.js Development" title={"React.js\nDevelopment"} />
        <div className={styles.heroSocialIcons}>
          <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={`${styles.social} ${styles.linkedin}`}><span className={styles.text}>in</span></a>
          <a href={SOCIALS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={`${styles.social} ${styles.facebook}`}><span className={styles.text}>F</span></a>
        </div>
      </div>

      <SectionIntro
        title="React.js Development Services"
        paragraphs={[
          "React.js Development is a modern approach to building fast, interactive, and scalable web applications using one of the most popular JavaScript libraries. Developed and maintained by Facebook, React.js enables developers to create reusable UI components, ensuring efficiency and consistency across applications. Its virtual DOM and declarative design simplify complex user interfaces while boosting performance and flexibility. At PanaceaIT Services, we specialize in delivering custom React.js solutions that combine innovation, functionality, and exceptional user experience—helping businesses stay agile and competitive in the digital era."
        ]}
      />

      <SplitFeature
        image="/images/services/react2.webp"
        title="Why Choose React.js & How PanaceaIT Helps"
        body={`In today’s fast-paced digital world, React.js Development empowers businesses to build highly interactive, dynamic, and efficient web applications. With its component-based structure and virtual DOM, React.js ensures faster rendering, improved performance, and a seamless user experience. It’s an ideal choice for building modern, responsive, and scalable applications that adapt effortlessly to changing business needs.`}
        body2={`At PanaceaIT Services, we harness the power of React.js to create innovative and high-quality web solutions tailored to your business goals. Our team of expert developers uses React.js to build single-page applications (SPAs), enterprise portals, and dynamic websites that are fast, secure, and easy to maintain.`}
        imageLeft={true}
      />

      <SplitFeature
        image="/images/services/react3.webp"
        title="About React.js Development"
        body={`React.js Development is a modern approach to building fast, interactive, and scalable web applications using one of the most popular JavaScript libraries. Developed and maintained by Facebook, React.js enables developers to create reusable UI components, ensuring efficiency and consistency across applications. Its virtual DOM and declarative design simplify complex user interfaces while boosting performance and flexibility. At PanaceaIT Services, we specialize in delivering custom React.js solutions that combine innovation, functionality, and exceptional user experience—helping businesses stay agile and competitive in the digital era.`}
        imageLeft={false}
      />

      <FeatureList
        title="Key Benefits Of React.js Development"
        items={[
          { title: "High Performance and Speed", desc: "React’s virtual DOM ensures faster rendering and improved application performance, even with complex interfaces." },
          { title: "Reusable Components", desc: "Developers can reuse UI components, reducing development time, improving consistency, and simplifying maintenance." },
          { title: "Scalable and Flexible Architecture", desc: "React.js supports scalable application development, allowing businesses to easily add new features or expand functionality." },
          { title: "Strong Community Support", desc: "Backed by Facebook and a large open-source community, React.js offers regular updates, tools, and extensive resources." },
        ]}
        illustrationSrc="/images/services/react4.webp"
        illustrationAlt="React benefits"
        imageLeft={true}
      />

      <CtaPanel title="KNOW MORE PROJECTS" description="To know more projects and about all the details of the projects , the Technolgies that we used to make the project successful in very short span of time please do contact us" buttonLabel="Call us" href="/contact" align="center" maxWidth={794} />
      <FooterSection brand="Panacea IT Services" year={new Date().getFullYear()} services={["Software Development","Mobile Apps","UI/UX Design","Digital Marketing","SEO Optimization","Consulting"]} company={["About Us","Our Team","Careers","Portfolio","Blog","Contact"]} legal={["Privacy Policy","Terms of Service","Cookie Policy","GDPR"]}/>
    </section>
  );
}
