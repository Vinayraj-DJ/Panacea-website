// ChildCareManagement.jsx
import React from "react";
import FooterSection from "../../../sections/HomePageSection/FooterSection/FooterSection";
import SectionIntro from "../../../components/common/SectionIntro";
import HeroTitleChip from "../../../components/common/HeroTitleChip";
import styles from "./OMRSheetCustomization.module.css";
import HightLightSection from "../../../sections/AboutUs/HightLightSection/HightLightSection";
import FeaturesSection from "../../../sections/FeaturesSection/FeaturesSection";
import ServicesSection from "../../../sections/ServicesSection/ServicesSection";
import OMRFeaturesSection from "../../../sections/OMRFeaturesSection/OMRFeaturesSection";

const SOCIALS = {
  linkedin:
    "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

const OMRSheetCustomization = () => {
  // feature data for the EducationalFeaturesSection

  const myFeatures = [
    {
      id: 1,
      title: "Custom OMR Sheet Design",
      description: "Design customizable OMR sheet layouts.",
      image: "/images/products/omr/o1.webp",
    },
    {
      id: 2,
      title: "Automated Data Scanning",
      description: "Scan OMR sheets using scanners or camera.",
      image: "/images/products/omr/o2.webp",
    },
    {
      id: 3,
      title: "Result Processing & Reports",
      description: "Produce quick results with detailed insights.",
      image: "/images/products/omr/o3.webp",
    },
    {
      id: 4,
      title: "Bulk Sheet Generation",
      description: "Generate bulk sheets quickly and efficiently.",
      image: "/images/products/omr/o4.webp",
    },
    {
      id: 5,
      title: "Error Detection System",
      description: "Detect errors and invalid responses automatically.",
      image: "/images/products/omr/o5.webp",
    },
    {
      id: 6,
      title: "User-Friendly Dashboard",
      description: "Intuitive admin dashboard for tests.",
      image: "/images/products/omr/o6.webp",
    },
    {
      id: 7,
      title: "Secure Data Management",
      description: "Secure data storage for exam integrity.",
      image: "/images/products/omr/o7.webp",
    },
    {
      id: 8,
      title: "Multi-User Access",
      description: "Multi-user access for different roles.",
      image: "/images/products/omr/o8.webp",
    },
  ];

  const services = [
    {
      id: 1,
      title: "Educational Sector",
      image: "/images/products/Omr1.webp",
    },
    {
      id: 2,
      title: "Corporate & Recruitment",
      image: "/images/products/Omr2.webp",
    },
    {
      id: 3,
      title: "Government & Public Sector",
      image: "/images/products/Omr3.webp",
    },
    {
      id: 4,
      title: "Healthcare & Medical Institutions",
      image: "/images/products/Omr4.webp",
    },
    {
      id: 5,
      title: "Coaching Institutes & Training Centers",
      image: "/images/products/Omr5.webp",
    },
    {
      id: 6,
      title: "Research & Surveys",
      image: "/images/products/Omr6.webp",
    },
  ];

  const features = [
    {
      id: 1,
      icon: "/images/products/OMR11.webp",
      title: "Design & Layout Customization",
    },
    { id: 2, icon: "/images/products/OMR12.webp", title: "Template Management" },
    {
      id: 3,
      icon: "/images/products/OMR13.webp",
      title: "Upload & Printing Options",
    },
    {
      id: 4,
      icon: "/images/products/OMR14.webp",
      title: "Result & Report Generation",
    },
  ];

  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <HeroTitleChip
          imageSrc="/images/products/OMR.webp"
          alt="OMR Sheet Customization"
          title={"OMR Sheet\nCustomization"}
        />

        <div style={{ marginTop: "60px" }}>
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

        <SectionIntro
          title="OMR Customization Website "
          paragraphs={[
            "An OMR Customization Website is a specialized online platform designed to create, customize, and manage Optical Mark Recognition (OMR) sheets efficiently. It allows educational institutions, coaching centers, and organizations to design personalized OMR sheets for exams, surveys, or data collection. Users can easily modify layouts, add logos, barcodes, and unique question formats to meet specific requirements. The website also supports automated scanning, data extraction, and result generation to save time and reduce manual errors. With secure data handling, responsive design, and cloud-based storage, an OMR Customization Website provides a complete solution for creating, processing, and analyzing OMR sheets seamlessly and accurately.",
          ]}
        />

        <OMRFeaturesSection
          title="OMR Sheet Customization Features"
          heroImage="/images/products/OMR15.webp"
          features={features}
        />

        <FeaturesSection
          bgColor="#eefbe8" // pale green like the image
          title="Key Features in Your OMR Website"
          subtitle="A smart OMR website designed to create, customize, and evaluate OMR sheets with speed, accuracy, and ease."
          features={myFeatures}
        />

        <ServicesSection
          title="OMR sheets can be useful across various sectors that require fast, accurate, and large-scale data collection or evaluation. Here are the main sectors where OMR technology is widely used"
          items={services}
          highlightedIndex={1}
        />

        <HightLightSection
          title="PRODUCTS & PLATFORMS"
          lead="Use our products that are&nbsp; well made<br/>and built"
          cards={[
            { value: "100 +", text: "Professionals in Global Network" },
            { value: "10 +", text: "Users that are using our products" },
            { value: "10 +", text: "Professionals in Global Network" },
            { value: "10 +", text: "Professionals in Global Network" },
          ]}
          columns={4}
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
          legal={[
            "Privacy Policy",
            "Terms of Service",
            "Cookie Policy",
            "GDPR",
          ]}
        />
      </div>
    </section>
  );
};

export default OMRSheetCustomization;
