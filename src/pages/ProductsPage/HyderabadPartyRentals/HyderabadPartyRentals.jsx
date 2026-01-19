// ChildCareManagement.jsx
import React from "react";
import FooterSection from "../../../sections/HomePageSection/FooterSection/FooterSection";
import HeroTitleChip from "../../../components/common/HeroTitleChip";
import EducationalFeaturesSection from "../../../components/EducationalFeaturesSection/EducationalFeaturesSection"; // <-- added
import styles from "./HyderabadPartyRentals.module.css";
import HightLightSection from "../../../sections/AboutUs/HightLightSection/HightLightSection";
import HeroSection from "../../../components/common/HeroSection";
import SmartScalableSection from "../../../sections/Products/SmartScalableSection";
import FeaturesGrid from "../../../sections/FeaturesGridd/FeaturesGrid";
const SOCIALS = {
  linkedin:
    "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

const Hypare = () => {
  // feature data for the EducationalFeaturesSection
  const leftFeatures = [
    {
      image: "/images/products/H1.webp",
      title: "Tents & Canopies:",
      desc: "Wide variety of tents, marquees, and canopies suitable for outdoor or indoor events, available in multiple sizes and styles.",
    },
    {
      image: "/images/products/H2.webp",
      title: "Tables & Chairs",
      desc: "Elegant dining tables, cocktail tables, banquet chairs, sofas, and lounge seating to suit your theme and comfort needs.",
    },
    {
      image: "/images/products/H3.webp",
      title: "Stage & Flooring",
      desc: "Professional stages, platforms, dance floors, and carpets for performances, ceremonies, or entertainment zones.",
    },
  ];

  const rightFeatures = [
    {
      image: "/images/products/H4.webp",
      title: "Lighting & Sound Systems",
      desc: "High-quality LED lights, chandeliers, decorative lighting, DJ sound systems, speakers, and microphones for a lively event experience.",
    },
    {
      image: "/images/products/H5.webp",
      title: "Catering Equipment",
      desc: "Chafing dishes, buffet counters, tables, cutlery, crockery, glassware, and kitchen setups for smooth food service.",
    },
    {
      image: "/images/products/H6.webp",
      title: "Event Furniture",
      desc: "Stylish furniture like bar counters, coffee tables, stools, and lounge seating to enhance your event’s elegance.",
    },
  ];

  const ITEMS = [
    {
      title: "DevOps",
      image: "/images/services/devops.webp",
      description:
        "DevOps combines development and operations practices to deliver software faster and more reliably. It focuses on automation, CI/CD pipelines, infrastructure as code, monitoring, and collaboration between teams.",
    },
    {
      title: "AWS",
      image: "/images/services/aws.webp",
      description:
        "AWS (Amazon Web Services) offers a broad set of cloud services — compute, storage, databases, networking, analytics, and more — enabling scalable and cost-efficient infrastructure for applications.",
    },
    {
      title: "Windows Azure",
      image: "/images/services/azure.webp",
      description:
        "Microsoft Azure provides an enterprise-grade cloud platform for building, deploying, and managing applications — with strong hybrid-cloud capabilities, PaaS services, and extensive developer tooling.",
    },
    {
      title: "Cloud Consulting Services",
      image: "/images/services/consulting.webp",
      description:
        "Cloud Consulting helps organizations design cloud strategies, migrate workloads, optimize costs, and implement governance and security best practices to get the most value from cloud platforms.",
    },
  ];

  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <HeroTitleChip
          imageSrc="/images/products/HPR.webp"
          alt="hpr"
          title={"Hyderabad\nParty Rentals"}
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

      <HeroSection
        title="Make Your Dream Celebration Come True with Effortless Planning and Perfect Rentals"
        description="Make your wedding planning simple and joyful with our smart Wedding App — organize every detail, track expenses, and enjoy a stress-free celebration."
        imageSrc="/images/products/HPR2.webp"
        accent="#4070B1"
      />
      <HeroSection
        title="Event Planning And Managing"
        description="Wedding and Party Rentals offer a complete range of event essentials designed to make your celebration elegant, organized, and stress-free. These services provide everything you need — from décor and furniture to lighting and sound — ensuring your event runs smoothly from start to finish. Whether it’s a grand wedding, birthday, anniversary, or corporate event, rental services help you create the perfect atmosphere without the hassle of managing multiple vendors."
        imageSrc="/images/products/HPR3.webp"
        accent="#4070B1"
        reverse={true}
      />

      <FeaturesGrid />

      <HeroSection
        title="Why Choose Our Party Rentals Website ?"
        description="Our Party Rentals Website is designed to make event planning simple, efficient, and stress-free. Whether you’re organizing a wedding, birthday, or corporate event, we bring together everything you need in one easy-to-use platform. From browsing rental items to booking and managing services, our website ensures a smooth and transparent experience from start to finish."
        description2="Our Party Rentals Website makes event planning effortless and enjoyable. It connects you with trusted vendors and offers a wide range of rental options for weddings, birthdays, corporate events, and celebrations of all kinds. You can explore beautiful décor themes, rent high-quality equipment, and manage bookings online — all in one convenient platform."
        imageSrc="/images/products/HPR4.webp"
        accent="#4070B1"
      />

      {/* ====== Educational Features Section (dynamic via props) ====== */}
      <EducationalFeaturesSection
        title="Party Rentals Equipment & Facilities"
        itemsLeft={leftFeatures}
        itemsRight={rightFeatures}
        background="linear-gradient(135deg, #ffffff 0%, #f0f8ff 100%)"
      />

      <SmartScalableSection title="User’s Get Service’s" />

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

export default Hypare;
