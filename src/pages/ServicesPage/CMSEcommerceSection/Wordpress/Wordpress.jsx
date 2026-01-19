// File: Wordpress.jsx
import React from "react";
import CtaPanel from "../../../../components/CtaPanel/CtaPanel";
import FooterSection from "../../../../sections/HomePageSection/FooterSection/FooterSection";
import SectionIntro from "../../../../components/common/SectionIntro";
import SplitFeature from "../../../../components/common/SplitFeature";
import HeroTitleChip from "../../../../components/common/HeroTitleChip";
import FeatureList from "../../../../components/FeatureList/FeatureList";
import styles from "./Wordpress.module.css";

const SOCIALS = {
  linkedin:
    "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

const Wordpress = () => {
  return (
    <section className={styles.page}>
      {/* HERO */}
      <div className={styles.hero}>
        <HeroTitleChip
          imageSrc="/images/services/wordpress.webp"
          alt="Word Press Development"
          title={`Word Press\nDevelopment`}
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

      {/* INTRO */}
      <SectionIntro
        title="Word Press Development"
        paragraphs={[
          "WordPress Development is one of the most popular and flexible solutions for building powerful, scalable, and user-friendly websites. It is an open-source content management system (CMS) that allows businesses to easily create, manage, and update their website content without requiring deep technical knowledge.",
          "From small business websites to large enterprise portals, WordPress offers unmatched versatility through its extensive range of themes, plugins, and customization options. With its intuitive dashboard and SEO-friendly structure, WordPress empowers brands to maintain a strong online presence efficiently and effectively.",
        ]}
      />

      {/* WHY + IMAGE */}
      <SplitFeature
        image="/images/services/wordpress1.webp"
        title="Why You Should Choose WordPress Development ?"
        body={`Choosing WordPress for your website gives you complete control and flexibility over design, functionality, and performance. It supports responsive web design, ensuring your site looks perfect on every device. WordPress also integrates smoothly with marketing and analytics tools, allowing businesses to track performance, optimize content, and engage audiences more effectively.`}
        body2={`Moreover, the vast plugin library enables developers to add advanced features—like eCommerce functionality, booking systems, or membership areas—without complex coding. Whether you need a portfolio site, a corporate website, or an online store, WordPress delivers reliable solutions that grow with your business.`}
        imageLeft={true}
      />

      {/* HOW PANACEA HELPS + IMAGE */}
      <SplitFeature
        image="/images/services/wordpress2.webp"
        title="How Panacea Can Help You with WordPress Development"
        body={`At Panacea IT Services, we specialize in building dynamic, SEO-optimized WordPress websites tailored to meet your business goals. Our expert developers create customized themes, secure plugins, and performance-driven designs that enhance user experience and boost online visibility.`}
        body2={`We focus on clean code, responsive layouts, and fast load times to ensure your site performs seamlessly across all devices. From website design and development to maintenance and digital marketing integration, Panacea provides end-to-end WordPress development solutions that help you build a powerful digital presence.`}
        imageLeft={false}
      />

      {/* BENEFITS LIST */}
      <FeatureList
        title="Key Benefits Of Word Press Development"
        items={[
          {
            title: "Easy to Use and Manage",
            desc:
              "One of the biggest advantages of WordPress is its user-friendly interface. You don’t need advanced technical skills to update or manage your website.",
          },
          {
            title: "Highly Customizable and Scalable",
            desc:
              "WordPress offers endless customization options through its vast collection of themes and plugins, enabling growth as your needs change.",
          },
          {
            title: "SEO-Friendly Structure",
            desc:
              "WordPress is built with SEO in mind, helping your website achieve better rankings on search engines with correct structure and plugins.",
          },
          {
            title: "Responsive and Mobile-Friendly Design",
            desc:
              "With the majority of users browsing from mobile devices, having a responsive website is essential. WordPress themes are designed to automatically adjust layouts.",
          },
        ]}
        illustrationSrc="/images/services/wordpress3.webp"
        illustrationAlt="WordPress illustration"
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

export default Wordpress;