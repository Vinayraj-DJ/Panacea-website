
// ChildCareManagement.jsx
import React from "react";

import FooterSection from "../../../sections/HomePageSection/FooterSection/FooterSection";
import HeroTitleChip from "../../../components/common/HeroTitleChip";
import SectionIntro from "../../../components/common/SectionIntro";

import styles from "./BabaCarWash.module.css";
import HightLightSection from "../../../sections/AboutUs/HightLightSection/HightLightSection";

import EducationalFeaturesSection from "../../../components/EducationalFeaturesSection/EducationalFeaturesSection";
import FeaturesSection from "../../../sections/FeaturesSection/FeaturesSection";
import PlatformFeaturesSection from "../../../sections/PlatformFeaturesSection/PlatformFeaturesSection";
const SOCIALS = {
  linkedin: "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

const BabaCarWash = () => {

   const leftFeatures = [
   {
    image: "/images/products/car1.webp",
    title: "Custom Car Wash App Solutions",
    desc: "Tailored app development to meet the specific needs of your car wash business, whether it's for a single location or a large franchise"
  },
   {
    image: "/images/products/car2.webp",
    title: "Real-Time Booking & Scheduling",
    desc: "Integration of live availability features, allowing customers to book services at their convenience."
  },
   {
    image: "/images/products/car3.webp",
    title: "On-Demand Car Wash App Development",
    desc: "Build apps that enable customers to book car wash services instantly from their mobile devices."
  }
    
  ];

  const rightFeatures = [
     {
    image: "/images/products/car4.webp",
    title: "Multiple Payment Gateway Integration",
    desc: "Secure payment methods including credit/debit cards, digital wallets, and in-app purchases."
  },
   {
    image: "/images/products/car5.webp",
    title: "GPS Tracking ",
    desc: "Enable users to locate nearby car wash stations and track service providers in real-time."
  },
   {
    image: "/images/products/car66.webp",
    title: "Admin Dashboard Development",
    desc: "A powerful backend system for admins to manage appointments, monitor business analytics, track orders, and maintain user data."
  }
  
  ];

    const myFeatures = [
    {
      id: 1,
      title: "Easy Registration & Login",
      description: "Quick signup with simple login access.",
      image: "/images/products/c1.webp",
    },
    {
      id: 2,
      title: "Service Booking",
      description: "Book car wash services anytime, anywhere.",
      image: "/images/products/c2.webp",
    },
    {
      id: 3,
      title: "Real Time Tracking",
      description: "Track your car wash in real time.",
      image: "/images/products/c3.webp",
    },

     {
      id: 4,
      title: "Payment Integration",
      description: "Secure and seamless online payment options.",
      image: "/images/products/c4.webp",
    },
    {
      id: 5,
      title: "Ratings & Reviews",
      description: "Share feedback and rate service quality.",
      image: "/images/products/c5.webp",
    },
    {
      id: 6,
      title: "History & Invoices",
      description: "Access past bookings and detailed invoices.",
      image: "/images/products/c6.webp",
    },
    {
      id: 7,
      title: "Service Status Updates",
      description: "Get instant updates on service progress.",
      image: "/images/products/c7.webp",
    },
    {
      id: 8,
      title: "Service Selection",
      description: "Choose preferred wash type and package.",
      image: "/images/products/c8.webp",
    },
  ];

  return (
    
    <section className={styles.page}>
      <div className={styles.hero}>
        <HeroTitleChip
          imageSrc="/images/products/BCR.webp"
          alt="Baba Car Wash"
          title={"Baba\nCar Wash"}
          
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
        title="Baba Car Wash App"
        paragraphs={[
          "A Car Wash App is an on-demand mobile application that allows users to easily book car cleaning and detailing services from their smartphones. It connects vehicle owners with nearby car wash providers, offering doorstep or station-based washing options. The app includes features like real-time booking, GPS location tracking, online payment through UPI or cards, service customization, and instant notifications. Users can select wash types, schedule appointments, and track service progress conveniently. For businesses, the app helps manage bookings, monitor staff performance, and handle payments efficiently. Designed for convenience and time-saving, a car wash app brings professional cleaning services right to the customer’s location with transparency, reliability, and ease."
          
        ]}
      />
        <PlatformFeaturesSection
      title="Supported Platforms for Car Wash Application"
      platforms={[
        {
          id: "android",
          icon: "/images/products/A.webp",
          name: "Android",
          description:
            "An Android Car Wash App is a mobile application designed specifically for Android users to book and manage car cleaning services easily.",
        },
        {
          id: "ios",
          icon: "/images/products/I.webp",
          name: "IOS",
          description:
            "An iOS Car Wash App is a mobile application built for iPhone and iPad users to conveniently access car wash and detailing services.",
        },
      ]}
    />

       <FeaturesSection
        // bgColor="#eaf6ff"
        // title="Why Choose Our Car Wash App?"
        // subtitle="Experience top-notch car cleaning services at your convenience with advanced features."
        features={myFeatures}
      />
      
      <EducationalFeaturesSection
              title="Car Washing App Development Services"
              itemsLeft={leftFeatures}
              itemsRight={rightFeatures}
              background="linear-gradient(135deg, #ffffff 0%, #f0f8ff 100%)"
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

export default BabaCarWash;
