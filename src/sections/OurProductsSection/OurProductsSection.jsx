import React from "react";
import styles from "./OurProductsSection.module.css";

const products = [
  {
    title: "Child Care Management",
    img: "/images/products/childcaremanage.webp",
  },
  { title: "Influencer App", img: "/images/products/influencer-app.webp" },
  { title: "Mutual Funds", img: "/images/products/mutual-funds.webp" },
  { title: "Stocks App", img: "/images/products/stocks-app.webp" },
  { title: "OMR Customization", img: "/images/products/omr-customization.webp" },
  { title: "OMR Customization", img: "/images/products/partyrentals.webp" },
];

const OurProductsSection = () => {
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
