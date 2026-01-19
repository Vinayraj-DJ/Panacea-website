
// ChildCareManagement.jsx
import React from "react";

import FooterSection from "../../../sections/HomePageSection/FooterSection/FooterSection";
import SectionIntro from "../../../components/common/SectionIntro";
import SplitFeature from "../../../components/common/SplitFeature";
import HeroTitleChip from "../../../components/common/HeroTitleChip";
import FeatureList from "../../../components/FeatureList/FeatureList";
import EducationalFeaturesSection from "../../../components/EducationalFeaturesSection/EducationalFeaturesSection"; // <-- added
import styles from "./ChildCareManagement.module.css";
import HightLightSection from "../../../sections/AboutUs/HightLightSection/HightLightSection";

const SOCIALS = {
  linkedin: "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

const ChildCareManagement = () => {
  // feature data for the EducationalFeaturesSection
  const leftFeatures = [
   {
    image: "/images/products/feature-enroll.webp",
    title: "Student Enrollment & Attendance Automation",
    desc: "We develop systems that allow institutions to digitally enroll students, manage real-time attendance tracking, and automate leave requests."
  },
   {
    image: "/images/products/feature-enroll2.webp",
    title: "Secure & Versatile Fee Payment Integration",
    desc: "We integrate multiple payment options, including bank transfers, UPI, digital wallets, and BNPL (Buy Now, Pay Later), ensuring a hassle-free payment experience."
  },
   {
    image: "/images/products/feature-enroll3.webp",
    title: "Parent & Teacher Communication Portal",
    desc: "Our solutions include real-time chat, notification alerts, and progress tracking dashboards to enhance parent-teacher engagement."
  }
    
  ];

  const rightFeatures = [
     {
    image: "/images/products/feature-enroll4.webp",
    title: "AI-Based Personalized Learning Analytics",
    desc: "Our AI-powered algorithms analyze student progress, learning behavior, and performance trends to offer personalized study recommendations."
  },
   {
    image: "/images/products/feature-enroll5.webp",
    title: "Advanced Classroom & Curriculum Management",
    desc: "We provide cloud-based learning management solutions that help educators create, schedule, and manage courses, assignments, and exams."
  },
   {
    image: "/images/products/feature-enroll6.webp",
    title: "AI-Powered Exam & Assessment Automation",
    desc: "We implement automated test generation, digital grading, and AI-driven performance insights to optimize the assessment process."
  }
  
  ];

  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <HeroTitleChip
          imageSrc="/images/products/edu.webp"
          alt="education"
          title={"Child Care\nManagement"}
          
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

      <SectionIntro
        title="Child Care Management "
        paragraphs={[
          "Panacea IT Services has developed and designed an advanced Child Care Management Software that helps childcare centers, preschools, and daycare facilities efficiently manage their daily operations. This user-friendly platform streamlines communication, administration, and record-keeping, allowing educators and caregivers to focus more on children’s growth and development rather than manual paperwork. Our software includes modules for attendance tracking, parent communication, billing and invoicing, meal planning, activity scheduling, and staff management — all in one integrated system. It ensures data security, accuracy, and easy access for both administrators and parents through a responsive web design created by Panacea IT Services. With Panacea’s Child Care Management Software, centers can improve productivity, maintain compliance, and build stronger connections with families through automated updates, real-time reporting, and a seamless user experience."
        ]}
      />

      <SplitFeature
        image="/images/products/edu1.webp"
        title="
Transforming Education with Smart
Technology"
        body={`The education industry is undergoing a digital transformation, with institutions adopting advanced technology to improve learning experiences, administrative efficiency, and student engagement. Educational management solutions have become essential for schools, colleges, universities, and corporate training programs to automate processes, track student progress, and deliver personalized learning experiences.`}
        body2={`At PanaceaIT Service, we develop next-generation educational management systems that empower institutions to offer seamless, secure, and data-driven educational services. With features like automated student enrollment, AI-based performance analytics, and cloud-based learning management, our solutions help educational organizations stay ahead in the rapidly evolving digital education landscape.`}
        imageLeft={true}
      />

      <SplitFeature
        image="/images/products/edu2.webp"
        title="AI-Driven Personalized Learning &
Administration"
        body={`We integrate AI and machine learning into educational platforms to enable personalized learning recommendations, automated grading, and predictive student analytics. From identifying learning gaps to suggesting tailored content, our AI-driven solutions enhance student outcomes and optimize teaching methodologies`}
        body2={`Our educational management solutions support secure, hassle-free online fee payments, including credit/debit cards, UPI, wallets, and cryptocurrency, ensuring a smooth and transparent transaction process. Additionally, we integrate scholarship and financial aid management systems, helping institutions simplify fee collection and financial planning.`}
        imageLeft={false}
      />
{/* ====== Educational Features Section (dynamic via props) ====== */}
      <EducationalFeaturesSection
        title="Educational Management Software Features"
        itemsLeft={leftFeatures}
        itemsRight={rightFeatures}
        background="linear-gradient(135deg, #ffffff 0%, #f0f8ff 100%)"
      />




      <FeatureList
        title="Benefits of Choosing PanaceaIT Educational Management Solutions"
        items={[
          {
            title: "End-to-End Education Management Solutions",
            desc:
              "AI-powered analytics, cloud-based learning platforms, and real-time data tracking.",
          },
          {
            title: "User-Friendly & Intuitive UI/UX",
            desc:
              "Designed for seamless navigation and optimized student-teacher interactions.",
          },
          {
            title: "Secure & Compliant Payment Solutions",
            desc:
              "PCI-compliant fee management systems with encrypted student data protection.",
          },
          {
            title: "Scalable Learning & Assessment Tools",
            desc:
              "Monitor and optimize academic performance with real-time analytics.",
          },
          {
            title: "Real-Time Notifications & Academic Alerts",
            desc:
              "Keep students, faculty, and parents updated on schedules, grades, and announcements.",
          },
        ]}
        illustrationSrc="/images/products/edu3.webp"
        illustrationAlt="Educational Management illustration"
        imageLeft={true}
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
        company={["About Us", "Our Team", "Careers", "Portfolio", "Blog", "Contact"]}
        legal={["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"]}
      />
    </section>
  );
};

export default ChildCareManagement;
