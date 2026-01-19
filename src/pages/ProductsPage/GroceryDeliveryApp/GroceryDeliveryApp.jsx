// ChildCareManagement.jsx
import React from "react";
import FooterSection from "../../../sections/HomePageSection/FooterSection/FooterSection";
import SectionIntro from "../../../components/common/SectionIntro";
import HeroTitleChip from "../../../components/common/HeroTitleChip";
import styles from "./GroceryDeliveryApp.module.css";
import HightLightSection from "../../../sections/AboutUs/HightLightSection/HightLightSection";
// import CloudImageComponent from "../../../sections/CloudImageComponent/CloudImageComponent";
import GroceryImageComponent from "../../../sections/CloudImageComponent/GroceryImageComponent";
// import InfoPairsSection from "../../../sections/InfoPairsSection/InfoPairsSection";
import InfoPair from "../../../sections/InfoPair/InfoPair";
import UserGrocery from "../../../sections/UserGrocery/UserGrocery";
import SecurePaymentMiniSection from "../../../sections/SecurePaymentSection/SecurePaymentSection";

const SOCIALS = {
  linkedin:
    "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

const GroceryApp = () => {
  const bulletsA = [
    "Exclusive discounts and personalized offers.",
    "Fresh and high-quality products guaranteed for sure.",
    "Time-saving doorstep delivery.",
  ];

  const bulletsB = [
    "24/7 customer support.",
    "Hassle-free online grocery shopping.",
    "Order History & Reorder Option.",
    "Eco-Friendly Packaging.",
  ];
  // feature data for the EducationalFeaturesSection
  const items = [
    {
      id: 1,
      // title: "Exclusive discounts and personalized offers",
      bullets: [
        "Exclusive discounts and personalized offers",
        "Exclusive discounts and personalized offers.",
        "Fresh and high-quality products guaranteed for sure.",
        "Time-saving doorstep delivery.",
      ],
    },
    {
      id: 2,
      image: "/images/products/grocery-basket.webp",
    },
    {
      id: 3,
      image: "/images/products/worker-tablet.webp",
    },
    {
      id: 4,
      bullets: [
        "24/7 customer support.",
        "Hassle-free online grocery shopping.",
        "Order History & Reorder Option.",
        "Eco-Friendly Packaging.",
      ],
    },
  ];

  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <HeroTitleChip
          imageSrc="/images/products/GRoapp.webp"
          alt="Grocery DeliveryApp"
          title={"Grocery Delivery\nApp"}
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
        title="Grocery Delivery App"
        paragraphs={[
          "Our Grocery Delivery App simplifies daily shopping by bringing fresh groceries, essentials, and household items directly to users’ doorsteps. Built with an intuitive design and powerful backend, the platform connects local stores, delivery agents, and customers seamlessly for a smooth shopping experience..",
        ]}
      />
      <SecurePaymentMiniSection />

      <GroceryImageComponent />

      

      <InfoPair
        reverse={false}
        bullets={bulletsA}
        imageSrc="/images/products/groceries1.webp"
        imageAlt="delivery basket"
      />

      {/* bottom row — image left, text right (reverse true) */}
      <InfoPair
        reverse={true}
        bullets={bulletsB}
        imageSrc="/images/products/groceries2.webp"
        imageAlt="groceries and tablet"
      />

      <UserGrocery
        showcaseSrc="/images/products/grocery-showcase.webp"
        heading={"User Friendly\nInterface"}
        products={[
          {
            image: "/images/products/apple1.webp",
            price: "$8.00",
            title: "Fresh Peach",
            subtitle: "dozen",
          },
          {
            image: "/images/products/apple2.webp",
            price: "$9.90",
            title: "Pineapple",
            subtitle: "1.50 lbs",
          },
        ]}
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

export default GroceryApp;
