
import React from "react";
import styles from "./ProductsSection.module.css";
import { useNavigate } from "react-router-dom";

const PRODUCTS = [
  { image: "/images/products/childcaree.webp", title: "Child Care Management", path: "/products/child-care-management" },
  { image: "/images/products/influencerimage.webp", title: "Influencer App", path: "/products/influencers-app" },
  { image: "/images/products/mutualfund.webp", title: "Mutual Funds", path: "/products/mutual-funds" },
  { image: "/images/products/influencerimage.webp", title: "Stox11", path: "/stox11" },
  { image: "/images/products/AdminPanl.webp", title: "Admin Panels", path: "/admin-panels" },
  { image: "/images/brainbuzz.webp", title: "Brain Buzz", path: "/brain-buzz" },
  { image: "/images/omrsheet.webp", title: "OMR sheet Customisation", path: "/products/omr-customization" },
  { image: "/images/hyderabadpartyrentals.webp", title: "Hyderabad Party Rentals", path: "/products/hyderabad-party-rentals" },
];

const ProductsSection = () => {
  const navigate = useNavigate();

  return (
    <section
      className={styles.section}
      style={{
        backgroundImage: `url(/images/backgroundwhychooseus.webp)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Header */}
      <div className={styles.header}>
        <h2 className={styles.title}>
          Products <span className={styles.line}></span>
        </h2>
        <p className={styles.description}>
          At <strong>Panacea</strong>, we build powerful, scalable, and
          user-friendly software solutions that help businesses innovate, grow,
          and thrive in the digital age.
        </p>
      </div>

      {/* Grid */}
      <div className={styles.grid}>
        {PRODUCTS.map((p, idx) => (
          <div
            key={p.title}
            className={`${styles.card} ${styles[`card${idx + 1}`]}`}
            onClick={() => navigate(p.path)}
            style={{ cursor: "pointer" }}
          >
            <div className={styles.imageWrap}>
              <img src={p.image} alt={p.title} className={styles.img} />
            </div>
            <div className={styles.caption}>{p.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
