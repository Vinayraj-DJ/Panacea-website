// ChildCareManagement.jsx
import React from "react";
import FooterSection from "../../../sections/HomePageSection/FooterSection/FooterSection";
import SectionIntro from "../../../components/common/SectionIntro";
import HeroTitleChip from "../../../components/common/HeroTitleChip";
import styles from "./SchoolApp.module.css";
import HightLightSection from "../../../sections/AboutUs/HightLightSection/HightLightSection";
import HeroSection from "../../../components/common/HeroSection";
import TravelInfoSection from "../../../sections/TravelInfoSection/TravelInfoSection";
import ServicesSection from "../../../sections/ServicesSection/ServicesSection";
import FeaturesGrid from "../../../sections/FeaturesGrid/FeaturesGrid";

const SOCIALS = {
  linkedin:
    "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

const SchoolApp = () => {
  // feature data for the EducationalFeaturesSection

  const services = [
    {
      id: 1,
      title: "Communication between  students, and parents",
      image: "/images/products/image 186.webp",
      description:
        "Streamline announcements, homework, and parent-teacher communication.",
    },
    {
      id: 2,
      title: "Ensures transparency and accountability",
      image: "/images/products/image 187.webp",
      description:
        "Keep records, reports and audit trails accessible for stakeholders.",
    },
    {
      id: 3,
      title: "Reduces paperwork with automation of key tasks",
      image: "/images/products/image 188.webp",
      description:
        "Automate attendance, grading, and administrative workflows.",
    },
  ];

  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <HeroTitleChip
          imageSrc="/images/products/SA.webp"
          alt="School App"
          title={"School App"}
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
        title="School App "
        paragraphs={[
          "Our School Management App is an all-in-one digital platform designed to simplify academic and administrative tasks for schools. It connects students, teachers, and parents in a seamless ecosystem that enhances communication and learning. From managing attendance, assignments, and exams to enabling online classes and fee payments, the app ensures smooth and transparent operations. With real-time notifications, performance tracking, and easy access to study materials, it empowers schools to focus on quality education while embracing technology-driven efficiency.",
        ]}
      />

      <FeaturesGrid
        title="Key Features Provide in School App"
        features={[
          {
            id: 1,
            img: "/images/products/school/school11.webp",
            title: "Student & Teacher Dashboard",
          },
          {
            id: 2,
            img: "/images/products/school/school12.webp",
            title: "Attendance Management",
          },
          {
            id: 3,
            img: "/images/products/school/school13.webp",
            title: "Online Classes & Homework",
          },
          {
            id: 4,
            img: "/images/products/school/school14.webp",
            title: "Exams & Results",
          },
          {
            id: 5,
            img: "/images/products/school/fee-payment.webp",
            title: "Fee Payment Integration",
          },
        ]}
      />

      <ServicesSection
        title="Why Choose Our School App ?"
        items={services}
        highlightedIndex={1} // highlight the middle card like your screenshot
        columns={3}
      />

      <HeroSection
        title="Benefits of School App Development"
        description="The School App offers numerous benefits by bringing all academic and administrative activities onto one digital platform. It enhances communication between teachers, students, and parents, ensuring transparency and engagement in the learning process. Schools can save time and reduce paperwork with automated attendance, report generation, and online fee management. Students benefit from easy access to study materials, assignments, and performance reports, while parents stay informed about their child’s progress in real time. Overall, the app promotes efficiency, accountability, and a smarter approach to school management."
        imageSrc="/images/products/school.webp"
        accent="#4070B1"
        reverse={true}
      />

      <TravelInfoSection
        leftImage="/images/products/school1.webp"
        rightImage="/images/products/school2.webp"
        title="Smart Learning in Every Hand."
        highlight1="Learning"
        textColor="#222222"
        colorPrimary="#0077cc"
        colorSecondary="#ff8c00"
        reverse={false}
        layout="three-col"
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
        legal={["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"]}
      />
    </section>
  );
};

export default SchoolApp;
