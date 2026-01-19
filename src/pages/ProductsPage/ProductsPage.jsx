import React from "react";
import styles from "./ProductsPage.module.css";
import FooterSection from "../../sections/HomePageSection/FooterSection/FooterSection";
import ProductsSection from "../../sections/Products/ProductsSection";
import SmartScalableSection from "../../sections/Products/SmartScalableSection";
import ProductsPlatformsSection from "../../sections/Products/ProductsPlatformsSection";

const SOCIALS = {
  linkedin:
    "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle", // replace
};

const ProductsPage = () => {
  return (
    <section className={styles.page}>
      {/* Hero with overlay icons */}
      <div className={styles.hero}>
        <img
          src="/images/productstopimage.webp"
          alt="Our Products"
          className={styles.heroImg}
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

      {/* Page Sections */}
      <ProductsSection />
      <SmartScalableSection />
      <ProductsPlatformsSection />
      <FooterSection />
    </section>
  );
};

export default ProductsPage;
