import React from "react";
import CtaPanel from "../../../../components/CtaPanel/CtaPanel";
import FooterSection from "../../../../sections/HomePageSection/FooterSection/FooterSection";
import SectionIntro from "../../../../components/common/SectionIntro";
import SplitFeature from "../../../../components/common/SplitFeature";
import HeroTitleChip from "../../../../components/common/HeroTitleChip";
import styles from "./PhpDevelopment.module.css";
import FeatureList from "../../../../components/FeatureList/FeatureList";

const SOCIALS = {
  linkedin:
    "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

export default function PhpDevelopment() {
  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <HeroTitleChip
          imageSrc="/images/services/php1.webp"
          alt="PHP Development"
          title={"PHP\nDevelopment"}
        />
        <div className={styles.heroSocialIcons}>
          <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={`${styles.social} ${styles.linkedin}`}><span className={styles.text}>in</span></a>
          <a href={SOCIALS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={`${styles.social} ${styles.facebook}`}><span className={styles.text}>F</span></a>
        </div>
      </div>

      <SectionIntro
  title="PHP Development Services"
  paragraphs={[
    "PHP Development Services empower businesses to build dynamic, secure, and high-performance web applications tailored to their unique needs. As one of the most widely used scripting languages, PHP offers flexibility, scalability, and compatibility with various platforms and databases. At PanaceaIT Services, we specialize in delivering robust PHP-based solutions — from custom web applications and enterprise portals to eCommerce platforms and CMS development. Our expert PHP developers use the latest frameworks like Laravel, CodeIgniter, and CakePHP to create efficient, scalable, and future-ready solutions that help businesses achieve seamless digital transformation."
  ]}
/>


      <SplitFeature
  image="/images/services/php2.webp"
  title="Why you should Embrace PHP Development And how panacea can help you"
  body={`In the ever-evolving digital world, PHP Development remains one of the most reliable and versatile solutions for building high-performing web applications. PHP’s open-source nature, strong community support, and compatibility with various technologies make it an ideal choice for developing scalable and cost-effective web solutions. From startups to large enterprises, businesses prefer PHP for its speed, flexibility, and ability to deliver customized digital experiences that drive growth and efficiency.`}
  body2={`At PanaceaIT Services, we leverage the full potential of PHP to create powerful, secure, and user-friendly web applications tailored to your business goals.`}
  imageLeft={true}
/>


      <SplitFeature
  image="/images/services/php3.webp"
  title="About PHP Development"
  body={`PHP Development is a robust and flexible approach to building dynamic, interactive, and scalable web applications. As one of the most popular open-source scripting languages, PHP enables developers to create high-performance websites and applications that are fast, secure, and easy to maintain. Its compatibility with multiple platforms and databases makes it a preferred choice for businesses seeking reliable web solutions. At PanaceaIT Services, we specialize in delivering custom PHP development solutions using advanced frameworks like Laravel, CodeIgniter, and CakePHP, helping businesses enhance efficiency, improve user experience, and achieve their digital transformation goals.`}
  imageLeft={false}
/>

<FeatureList
  title="Key Benefits Of PHP Development"
  items={[
    {
      title: "Open-Source and Cost-Effective",
      desc: "PHP is free to use, reducing overall development costs while offering powerful capabilities for all types of web applications.",
    },
    {
      title: "High Performance and Speed",
      desc: "PHP’s lightweight architecture ensures faster execution of scripts, resulting in quick-loading, high-performing websites.",
    },
    {
      title: "Platform and Database Compatibility",
      desc: "PHP seamlessly integrates with major databases like MySQL, PostgreSQL, and Oracle, and works across multiple platforms and servers.",
    },
    {
      title: "Scalability and Flexibility",
      desc: "Easily scale your applications as your business grows, with flexible code structures that adapt to new features or technologies.",
    },
  ]}
  illustrationSrc="/images/services/php4.webp"
  illustrationAlt="PHP benefits"
  imageLeft={true}
/>


      <CtaPanel
        title="KNOW MORE PROJECTS"
        description="To know more projects and about all the details of the projects , the Technolgies that we used to make the project successful in very short span of time please do contact us"
        buttonLabel="Call us"
        href="/contact"
        align="center"
        maxWidth={794}
      />

      <FooterSection brand="Panacea IT Services" year={new Date().getFullYear()} services={["Software Development","Mobile Apps","UI/UX Design","Digital Marketing","SEO Optimization","Consulting"]} company={["About Us","Our Team","Careers","Portfolio","Blog","Contact"]} legal={["Privacy Policy","Terms of Service","Cookie Policy","GDPR"]}/>
    </section>
  );
}
