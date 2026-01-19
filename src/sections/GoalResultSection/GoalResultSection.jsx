import React from "react";
import styles from "./GoalResultSection.module.css";

export default function GoalResultSection({
  image = "/images/products/cart-mobile.png",
  items = [
    {
      icon: "/images/products/goal.svg",
      title: "Goal",
      description:
        "To provide a seamless, secure, and enjoyable online shopping experience that connects customers and sellers effortlessly through an intuitive, high-performance mobile platform.",
    },
    {
      icon: "/images/products/result.svg",
      title: "Result",
      description:
        "The E-Commerce App delivered a seamless and efficient shopping experience, increasing user engagement and boosting sales. Businesses experienced faster order management and improved customer retention through real-time updates.",
    },
  ],
}) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* LEFT IMAGE */}
        <div className={styles.imageWrap}>
          <img src={image} alt="Showcase" className={styles.image} />
        </div>

        {/* RIGHT CONTENT */}
        <div className={styles.contentCol}>
          {items.map((item, index) => (
            <div className={styles.item} key={index}>
              
              {/* ICON + TITLE */}
              <div className={styles.titleRow}>
                <div className={styles.iconCircle}>
                  <img src={item.icon} alt={item.title} className={styles.icon} />
                </div>

                <h3 className={styles.title}>{item.title}</h3>
              </div>

              {/* DESCRIPTION */}
              <p className={styles.description}>{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
