import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./OurProductsSection.module.css";

const products = [
  {
    title: "Child Care Management",
    img: "/images/products/childcaremanage.webp",
    path: "/products/child-care-management"
  },
  { 
    title: "Influencer App", 
    img: "/images/products/influencer-app.webp",
    path: "/products/influencers-app"
  },
  { 
    title: "Mutual Funds", 
    img: "/images/products/mutual-funds.webp",
    path: "/products/mutual-funds"
  },
  { 
    title: "Stocks App", 
    img: "/images/products/stocks-app.webp",
    path: "/stox11"
  },
  { 
    title: "OMR Customization", 
    img: "/images/products/omr-customization.webp",
    path: "/products/omr-customization"
  },
  { 
    title: "Hyderabad Party Rentals", 
    img: "/images/products/partyrentals.webp",
    path: "/products/hyderabad-party-rentals"
  },
];

const OurProductsSection = () => {
  const navigate = useNavigate();

  const handleProductClick = (path) => {
    navigate(path);
  };

  return (
    <div className={styles.section}>
      <div className={styles.bgWrapper}>
        <img
          src="/images/ourproductsimage.webp"
          alt="Our Products Background"
          className={styles.bgImage}
        />
        <div className={styles.textBox}>
          <h2 className={styles.heading}>Our Products</h2>
          <p className={styles.description}>
            We provide innovative, tailor-made solutions to meet your business
            needs. Our team delivers high-quality products with a focus on
            efficiency and results. Client satisfaction is our priority—we
            ensure timely, reliable, and scalable solutions.
          </p>
        </div>
      </div>

      <div className={styles.cardWrapper}>
        <div className={styles.cards}>
          {products.map((p) => (
            <img
              key={p.title}
              src={p.img}
              alt={p.title}
              className={styles.cardImg}
              loading="lazy"
              onClick={() => handleProductClick(p.path)}
              style={{ cursor: "pointer" }}
            />
          ))}
        </div>

        <div className={styles.link}>
          <a href="/products">Go to Products Page &gt;&gt;</a>
        </div>
      </div>
    </div>
  );
};

export default OurProductsSection;
