import React from "react";
import styles from "./ServicesSection.module.css";

/**
 * ServicesSection
 *
 * Props:
 *  - title (string)
 *  - items (array) => [{ id, title, image }]
 *  - highlightedIndex (number) => index of card to highlight (blue outline)
 *
 * Example:
 *  const items = [
 *    { id: 1, title: "Order Tracking", image: "/images/order-tracking.png" },
 *    { id: 2, title: "Payment Gateway Setup", image: "/images/payment-gateway.png" },
 *    { id: 3, title: "Website Development", image: "/images/website-dev.png" },
 *  ];
 *  <ServicesSection title="Online Shopping Web Development Services" items={items} highlightedIndex={1} />
 */
const ServicesSection = ({ title = "Online Shopping Web Development Services", items = [], highlightedIndex = 1 }) => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>{title}</h2>

        <div className={styles.grid}>
          {items.map((item, idx) => (
            <article
              key={item.id ?? idx}
              className={`${styles.card} ${idx === highlightedIndex ? styles.cardHighlighted : ""}`}
              aria-label={item.title}
            >
              <div className={styles.imageWrap}>
                <img src={item.image} alt={item.title} className={styles.image} />
              </div>

              <h3 className={styles.cardTitle}>{item.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
