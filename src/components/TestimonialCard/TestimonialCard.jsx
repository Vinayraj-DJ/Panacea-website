import React from "react";
import styles from "./TestimonialCard.module.css";
import { FaStar } from "react-icons/fa";

const TestimonialCard = ({ image, name, role, testimonial }) => {
  return (
    <div className={styles.card}>
      {/* Default view */}
      <div className={styles.front}>
        <img src={image} alt={name} className={styles.img} />
        <div className={styles.info}>
          <h3>{name}</h3>
          <p>{role}</p>
        </div>
      </div>

      {/* Hover view */}
      <div className={styles.back}>
        <div className={styles.header}>
          <img src={image} alt={name} className={styles.avatar} />
          <div>
            <h3>{name}</h3>
            <p>{role}</p>
          </div>
        </div>
        <p className={styles.text}>“ {testimonial} ”</p>
        <div className={styles.stars}>
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <FaStar key={i} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
