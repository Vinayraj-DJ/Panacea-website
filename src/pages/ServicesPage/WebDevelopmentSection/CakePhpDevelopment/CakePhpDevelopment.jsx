import React from "react";
import CtaPanel from "../../../../components/CtaPanel/CtaPanel";
import FooterSection from "../../../../sections/HomePageSection/FooterSection/FooterSection";
import SectionIntro from "../../../../components/common/SectionIntro";
import SplitFeature from "../../../../components/common/SplitFeature";
import HeroTitleChip from "../../../../components/common/HeroTitleChip";
import styles from "./CakePhpDevelopment.module.css";
import FeatureList from "../../../../components/FeatureList/FeatureList";

const SOCIALS = {
  linkedin: "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

export default function CakePhpDevelopment() {
  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <HeroTitleChip imageSrc="/images/services/cake1.webp" alt="CakePHP Development" title={"CakePHP\nDevelopment"} />
        <div className={styles.heroSocialIcons}>
          <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={`${styles.social} ${styles.linkedin}`}><span className={styles.text}>in</span></a>
          <a href={SOCIALS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={`${styles.social} ${styles.facebook}`}><span className={styles.text}>F</span></a>
        </div>
      </div>

     <SectionIntro
  title="CakePHP Development Services"
  paragraphs={[
    "CakePHP Development Services enable businesses to build robust, secure, and high-performing web applications with speed and efficiency. As one of the most reliable open-source PHP frameworks, CakePHP follows the MVC architecture, providing a structured approach to coding and application development. It simplifies complex tasks like database management, validation, and authentication, making it ideal for both startups and large enterprises. At PanaceaIT Services, our skilled developers leverage CakePHP’s advanced features to create scalable, customizable, and result-driven web solutions that align perfectly with your business goals."
  ]}
/>

<SplitFeature
  image="/images/services/cake2.webp"
  title="Why you should Embrace CakePhp Development And how panacea can help you"
  body={`In today’s competitive digital era, CakePHP Development stands out as a powerful solution for building secure, fast, and feature-rich web applications. Its structured MVC framework, built-in validation, and reusable code architecture make it perfect for businesses that need scalable and efficient web solutions. CakePHP accelerates development while maintaining flexibility and reliability, helping businesses reduce time-to-market without compromising on quality.`}
  body2={`At PanaceaIT Services, we harness the full potential of CakePHP to deliver customized, high-performance web applications that cater to diverse business needs.`}
  imageLeft={true}
/>


      <SplitFeature
  image="/images/services/cake3.webp"
  title="About CakePhp Development"
  body={`CakePHP Development is a powerful and flexible open-source framework designed to simplify and accelerate the process of building dynamic web applications. Based on the MVC architecture, CakePHP promotes clean, organized, and reusable code—making it easier to develop, maintain, and scale applications efficiently. It comes with built-in features for authentication, validation, and database management, ensuring robust and secure performance.`}
  body2={`At PanaceaIT Services, we specialize in delivering custom CakePHP solutions that combine innovation, functionality, and performance—helping businesses streamline operations and achieve long-term digital success.`}
  imageLeft={false}
/>


     <FeatureList
  title="Key Benefits Of CakePhp Development"
  items={[
    {
      title: "Rapid Application Development",
      desc: "CakePHP’s built-in tools and code generation features accelerate development, helping businesses launch products faster.",
    },
    {
      title: "Robust Security Features",
      desc: "The framework includes advanced security measures like input validation, form tampering protection, and SQL injection prevention.",
    },
    {
      title: "Built-in ORM and Database Management",
      desc: "CakePHP’s Object-Relational Mapping (ORM) simplifies database handling, reducing errors and improving performance.",
    },
    {
      title: "Compatibility and Integration",
      desc: "The framework integrates seamlessly with third-party tools, APIs, and libraries, enhancing overall functionality.",
    },
  ]}
  illustrationSrc="/images/services/cake4.webp"
  illustrationAlt="CakePHP benefits"
  imageLeft={true}
/>


      <CtaPanel title="KNOW MORE PROJECTS" description="To know more projects and about all the details of the projects , the Technolgies that we used to make the project successful in very short span of time please do contact us" buttonLabel="Call us" href="/contact" align="center" maxWidth={794} />
      <FooterSection brand="Panacea IT Services" year={new Date().getFullYear()} services={["Software Development","Mobile Apps","UI/UX Design","Digital Marketing","SEO Optimization","Consulting"]} company={["About Us","Our Team","Careers","Portfolio","Blog","Contact"]} legal={["Privacy Policy","Terms of Service","Cookie Policy","GDPR"]}/>
    </section>
  );
}
