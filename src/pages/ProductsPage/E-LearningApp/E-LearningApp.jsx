
// ChildCareManagement.jsx
import React from "react";

import FooterSection from "../../../sections/HomePageSection/FooterSection/FooterSection";
import SectionIntro from "../../../components/common/SectionIntro";

import HeroTitleChip from "../../../components/common/HeroTitleChip";


import styles from "./E-LearningApp.module.css";
import HightLightSection from "../../../sections/AboutUs/HightLightSection/HightLightSection";
import HeroSection from "../../../components/common/HeroSection";
import FeaturesSection from "../../../sections/FeaturesSection/FeaturesSection";
import OMRFeaturesSection from "../../../sections/OMRFeaturesSection/OMRFeaturesSection";

const SOCIALS = {
  linkedin: "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

const ELearningApp = () => {
  // feature data for the EducationalFeaturesSection


  const myFeatures = [
  {
    id: 1,
    title: "Custom E-Learning App",
    description: "Custom Solutions for Business Training & Education.",
    image: "/images/products/e1.webp",
  },
  {
    id: 2,
    title: "Learning Management",
    description: "Seamless Integration with Learning Management Systems.",
    image: "/images/products/e2.webp",
  },
  {
    id: 3,
    title: "Gamification Learning",
    description: "Engaging Features: Leaderboards, Rewards & Quizzes.",
    image: "/images/products/e3.webp",
  },
  {
    id: 4,
    title: "Live Classes Streaming",
    description: "On-demand video courses and live virtual classrooms.",
    image: "/images/products/e4.webp",
  },
  {
    id: 5,
    title: "AI-Powered Personalization",
    description: "Personalized Learning Based on Preferences & Progress.",
    image: "/images/products/e5.webp",
  },
  {
    id: 6,
    title: "Multilingual Support",
    description: "Personalized UI & Content for International Students.",
    image: "/images/products/e6.webp",
  },
  {
    id: 7,
    title: "Assessment & Certification",
    description: "E-Certifications, Skill Tests & Online Examinations.",
    image: "/images/products/e7.webp",
  },
  {
    id: 8,
    title: "Cloud Based Scalability",
    description: "Secured Solutions and Flawless Operations.",
    image: "/images/products/e8.webp",
  },
];




  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <HeroTitleChip
          imageSrc="/images/products/ELA.webp"
          alt="e-learning app"
          title={"E- Learning\nApp"}
          
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
        title="E-Learning App "
        paragraphs={[
          "An E-Learning App is a digital platform that enables users to access educational content anytime and anywhere through their smartphones, tablets, or computers. It provides interactive learning experiences with video lectures, quizzes, live classes, and downloadable study materials. Students can learn at their own pace, track progress, and receive instant feedback on performance. Teachers or institutions can upload courses, manage students, and conduct assessments online. The app supports various subjects, skill-based training, and professional development programs, making learning flexible and accessible. With features like progress tracking, push notifications, and certificates, an E-Learning App bridges the gap between traditional classrooms and modern digital education."
        ]}
      />

      <OMRFeaturesSection
  title="Essential Features for Smooth Functionality"
  heroImage="/images/products/learning.webp"
 
  features={[
    { id: 1, icon: "/images/products/learn1.webp", title: "Interactive Lessons" },
    { id: 2, icon: "/images/products/learn2.webp", title: "Progress Tracking" },
    { id: 3, icon: "/images/products/learn3.webp", title: "Multi-Device & Accessibility" },
    { id: 4, icon: "/images/products/learn4.webp", title: "Offline Mode" },
  ]}
/>



       <HeroSection
              title="Custom On-Demand E-Learning App Development"
              description="Custom On-Demand E-Learning App Development focuses on creating personalized educational platforms that cater to the unique needs of learners and institutions. These apps allow users to access a wide range of courses, live classes, and interactive learning materials anytime, anywhere. With custom development, features like user dashboards, course management, progress tracking, and secure payment gateways can be tailored to fit specific goals. The solution ensures scalability, high performance, and an engaging user experience across all devices. Designed with advanced technologies and intuitive interfaces, a custom on-demand e-learning app empowers educators to teach effectively and helps learners achieve their goals efficiently."
             
              imageSrc="/images/products/El1.webp"
              accent="#4070B1"
              reverse={true}
            />

<FeaturesSection
  bgColor="#eaf3ff"
  title="E-Learning App Development Services"
  subtitle="Revolutionize Learning with Innovative, Engaging, and Scalable E-Learning Solutions."
  features={myFeatures}
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

export default ELearningApp;
