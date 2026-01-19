import React from "react";
import styles from "./UserGrocery.module.css";
import NumberedHeading from "../NumberedHeading/NumberedHeading";

function ProductItem({ image, price, title, subtitle, heart = true }) {
  return (
    <article className={styles.productItem}>
      {/* heart icon */}
      {heart && (
        <button aria-label="favorite" className={styles.heartBtn}>
          <svg viewBox="0 0 24 24" className={styles.heartIcon}>
            <path
              d="M12.1 21.35l-1.1-.98C5.14 15.36 2 12.28 2 8.5 2 6.01 4.01 4 6.5 4c1.74 0 3.41.81 4.5 2.09C12.09 4.81 13.76 4 15.5 4 17.99 4 20 6.01 20 8.5c0 3.78-3.14 6.86-8.9 11.87l-1 0z"
              fill="none"
              stroke="#868889"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}

      {/* white circle w/ product */}
      <div className={styles.productMedia}>
        <div className={styles.mediaCircle}>
          {image ? (
            <img src={image} alt={title} className={styles.productImage} />
          ) : (
            <div className={styles.imagePlaceholder} />
          )}
        </div>
      </div>

      {/* body */}
      <div className={styles.productBody}>
        <div className={styles.price}>{price}</div>
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitle}>{subtitle}</div>
      </div>

      {/* divider */}
      <div className={styles.divider} />

      {/* button */}
      <button className={styles.addToCartBtn}>
        <svg viewBox="0 0 24 24" className={styles.cartIcon}>
          <path
            d="M6 6h15l-1.6 9.6A2 2 0 0 1 17.4 18H8.6a2 2 0 0 1-1.98-1.6L5 4H2"
            fill="none"
            stroke="#3a9b3a"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>Add to cart</span>
      </button>
    </article>
  );
}

export default function UserGrocery({
  showcaseSrc = "/images/showcase.jpg",
  heading = "User Friendly\nInterface",
  products = [
    { image: "/images/peach.png", price: "$8.00", title: "Fresh Peach", subtitle: "dozen" },
    { image: "/images/pineapple.png", price: "$9.90", title: "Pineapple", subtitle: "1.50 lbs" },
  ],
}) {
  const headingLines = heading.split("\n");

  return (
    <section className={styles.section}>
      {/* Numbered heading appears once at the top (as in the reference) */}
      <div className={styles.topHeading}>
        <NumberedHeading number={3} title="Have a Look at it" />
      </div>

      <div className={styles.container}>
        {/* LEFT SHOWCASE */}
        <div className={styles.showcaseWrap}>
          <img src={showcaseSrc} alt="showcase" className={styles.showcaseImg} />
        </div>

        {/* RIGHT SIDE */}
        <div className={styles.rightCol}>
          {/* heading (stacked lines) */}
          <div className={styles.heading}>
            {headingLines.map((ln, idx) => (
              <div key={idx} className={styles.headingLine}>
                {ln}
              </div>
            ))}
          </div>

          {/* product cards */}
          <div className={styles.productStack}>
            {products.map((p, i) => (
              <ProductItem
                key={i}
                image={p.image}
                price={p.price}
                title={p.title}
                subtitle={p.subtitle}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
