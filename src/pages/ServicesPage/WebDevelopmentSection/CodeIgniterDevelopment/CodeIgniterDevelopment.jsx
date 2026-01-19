import React from "react";
import CtaPanel from "../../../../components/CtaPanel/CtaPanel";
import FooterSection from "../../../../sections/HomePageSection/FooterSection/FooterSection";
import SectionIntro from "../../../../components/common/SectionIntro";
import SplitFeature from "../../../../components/common/SplitFeature";
import HeroTitleChip from "../../../../components/common/HeroTitleChip";
import styles from "./CodeIgniterDevelopment.module.css";
import FeatureList from "../../../../components/FeatureList/FeatureList";

const SOCIALS = {
  linkedin: "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

export default function CodeIgniterDevelopment() {
  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <HeroTitleChip imageSrc="/images/services/codei1.webp" alt="CodeIgniter Development" title={"CodeIgniter\nDevelopment"} />
        <div className={styles.heroSocialIcons}>
          <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={`${styles.social} ${styles.linkedin}`}><span className={styles.text}>in</span></a>
          <a href={SOCIALS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={`${styles.social} ${styles.facebook}`}><span className={styles.text}>F</span></a>
        </div>
      </div>

     <SectionIntro
  title="CodeIgniter Development Services"
  paragraphs={[
    "CodeIgniter Development Services provide businesses with a powerful and lightweight PHP framework to create fast, dynamic, and feature-rich web applications. Known for its simplicity, flexibility, and high performance, CodeIgniter enables developers to build scalable solutions with minimal configuration and maximum efficiency. At Panacea IT Services, our expert developers harness the strength of CodeIgniter to deliver secure, custom-built web applications that meet your business goals. We focus on clean coding practices, smooth functionality, and optimized performance to ensure seamless user experiences and long-term success."
  ]}
/>


      <SplitFeature
  image="/images/services/codei2.webp"
  title="Why you should Embrace CodeIgniter Development And how Panacea can help you"
  body={`In the world of modern web development, CodeIgniter stands out as a lightweight yet powerful PHP framework designed for speed, simplicity, and flexibility. It’s ideal for businesses looking to develop dynamic websites or scalable web applications with minimal setup and maximum efficiency. CodeIgniter’s MVC architecture and built-in libraries make development faster, more secure, and easier to maintain.`}
  body2={`At Panacea IT Services, we specialize in leveraging the power of CodeIgniter to create custom, high-performing web applications tailored to your specific business goals. Our team of skilled developers follows best practices in design, coding, and testing to ensure robust, reliable, and secure digital solutions.`}
  imageLeft={true}
/>


      <SplitFeature
  image="/images/services/codei3.webp"
  title="About CodeIgniter Development"
  body={`CodeIgniter Development is a powerful PHP framework known for its speed, simplicity, and flexibility in building dynamic web applications. It provides developers with a lightweight structure and a rich set of libraries that make coding faster, more efficient, and secure. With its MVC architecture, CodeIgniter ensures clean code organization, easy scalability, and smooth performance.`}
  body2={`At Panacea IT Services, we specialize in delivering robust and feature-rich CodeIgniter solutions that help businesses enhance productivity, improve user experiences, and achieve their digital transformation goals with confidence.`}
  imageLeft={false}
/>


      <FeatureList
  title="Key Benefits Of CodeIgniter Development"
  items={[
    {
      title: "High Performance and Speed",
      desc: "CodeIgniter’s lightweight architecture and efficient execution ensure faster loading times and superior application performance.",
    },
    {
      title: "Easy to Customize and Scale",
      desc: "With its flexible framework and modular structure, CodeIgniter makes it simple to customize and scale applications as your business grows.",
    },
    {
      title: "Built-In Security Tools",
      desc: "It includes powerful security features such as XSS filtering, CSRF protection, and encrypted sessions to keep your applications safe.",
    },
    {
      title: "Seamless Integration Capabilities",
      desc: "Easily integrates with APIs, third-party services, and databases, allowing for greater functionality and flexibility.",
    },
  ]}
  illustrationSrc="/images/services/codei4.webp"
  illustrationAlt="CodeIgniter benefits"
  imageLeft={true}
/>


      <CtaPanel title="KNOW MORE PROJECTS" description="To know more projects and about all the details of the projects , the Technolgies that we used to make the project successful in very short span of time please do contact us" buttonLabel="Call us" href="/contact" align="center" maxWidth={794} />
      <FooterSection brand="Panacea IT Services" year={new Date().getFullYear()} services={["Software Development","Mobile Apps","UI/UX Design","Digital Marketing","SEO Optimization","Consulting"]} company={["About Us","Our Team","Careers","Portfolio","Blog","Contact"]} legal={["Privacy Policy","Terms of Service","Cookie Policy","GDPR"]}/>
    </section>
  );
}
