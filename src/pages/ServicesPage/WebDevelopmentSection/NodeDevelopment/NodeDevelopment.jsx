import React from "react";
import CtaPanel from "../../../../components/CtaPanel/CtaPanel";
import FooterSection from "../../../../sections/HomePageSection/FooterSection/FooterSection";
import SectionIntro from "../../../../components/common/SectionIntro";
import SplitFeature from "../../../../components/common/SplitFeature";
import HeroTitleChip from "../../../../components/common/HeroTitleChip";
import styles from "./NodeDevelopment.module.css";
import FeatureList from "../../../../components/FeatureList/FeatureList";

const SOCIALS = {
  linkedin: "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

export default function NodeDevelopment() {
  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <HeroTitleChip imageSrc="/images/services/node1.webp" alt="Node.js Development" title={"Node.js\nDevelopment"} />
        <div className={styles.heroSocialIcons}>
          <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={`${styles.social} ${styles.linkedin}`}><span className={styles.text}>in</span></a>
          <a href={SOCIALS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={`${styles.social} ${styles.facebook}`}><span className={styles.text}>F</span></a>
        </div>
      </div>

      <SectionIntro
  title="Node.js Development Services"
  paragraphs={[
    "Node.js Development Services empower businesses to build fast, scalable, and high-performance web applications using one of the most efficient JavaScript runtime environments. Known for its non-blocking architecture and real-time capabilities, Node.js is ideal for developing modern applications such as chat systems, streaming platforms, and enterprise-grade web solutions. At PanaceaIT Services, we specialize in creating secure, feature-rich, and robust Node.js applications tailored to your business goals. Our expert developers leverage frameworks like Express.js, Nest.js, and Meteor.js to deliver applications that ensure high performance, scalability, and seamless user experiences across all devices."
  ]}
/>


      <SplitFeature
  image="/images/services/node2.webp"
  title="Why you should Embrace Node.js Development And how panacea can help you"
  body={`In today’s digital landscape, Node.js Development stands out for its ability to create fast, scalable, and efficient web applications. Its event-driven and non-blocking architecture enables real-time processing, making it perfect for high-performance applications like chat systems, online gaming, and data-intensive platforms. Businesses across industries are embracing Node.js for its speed, versatility, and cost-effectiveness.`}
  body2={`At PanaceaIT Services, we harness the full potential of Node.js to build innovative, secure, and high-performing web solutions tailored to your unique business needs. Our team of skilled developers uses modern frameworks and tools to ensure faster development, reduced downtime, and seamless performance.`}
  imageLeft={true}
/>


     <SplitFeature
  image="/images/services/node3.webp"
  title="About Node.js Development"
  body={`Node.js Development is a powerful solution for building fast, scalable, and efficient web and mobile applications using JavaScript on both the client and server sides. With its event-driven, non-blocking I/O model, Node.js delivers exceptional performance for real-time applications such as chat systems, APIs, and streaming services. Its lightweight and flexible architecture make it ideal for businesses aiming to improve speed, scalability, and user engagement. At PanaceaIT Services, we specialize in delivering robust Node.js applications that combine innovation, security, and performance—helping businesses accelerate their digital transformation and achieve sustainable growth.`}
  imageLeft={false}
/>


<FeatureList
  title="Key Benefits Of Node.js Development"
  items={[
    {
      title: "High Performance and Speed",
      desc: "Node.js is built on Google’s V8 engine, enabling faster code execution and improving overall application performance.",
    },
    {
      title: "Scalability and Flexibility",
      desc: "Its event-driven architecture supports seamless scalability, making it ideal for growing businesses and high-traffic applications.",
    },
    {
      title: "Real-Time Application Development",
      desc: "Perfect for chat apps, gaming platforms, and live-streaming services, Node.js enables real-time data exchange and instant updates.",
    },
    {
      title: "Full-Stack JavaScript Advantage",
      desc: "Developers can use JavaScript for both front-end and back-end, ensuring faster development and better collaboration.",
    },
  ]}
  illustrationSrc="/images/services/node4.webp"
  illustrationAlt="Node.js illustration"
  imageLeft={true}
/>


      <CtaPanel title="KNOW MORE PROJECTS" description="To know more projects and about all the details of the projects , the Technolgies that we used to make the project successful in very short span of time please do contact us" buttonLabel="Call us" href="/contact" align="center" maxWidth={794} />
      <FooterSection brand="Panacea IT Services" year={new Date().getFullYear()} services={["Software Development","Mobile Apps","UI/UX Design","Digital Marketing","SEO Optimization","Consulting"]} company={["About Us","Our Team","Careers","Portfolio","Blog","Contact"]} legal={["Privacy Policy","Terms of Service","Cookie Policy","GDPR"]}/>
    </section>
  );
}
