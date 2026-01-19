import React from "react";
import TestimonialCard from "../../components/TestimonialCard/TestimonialCard";
import styles from "./TestimonialsSection.module.css";

// ✅ Dummy testimonials data
const testimonials = [
  {
    name: "Steeve Waugh",
    role: "Mutual Fund Client",
    image: "/images/testimonials/client1.webp",
    testimonial:
      "Working with Panacea has been a truly rewarding experience. From the beginning, their team was professional, attentive, and committed to understanding our needs. The quality of their work exceeded our expectations, and their dedication to customer satisfaction was evident at every stage. I highly recommend their services to anyone looking for reliable and results-driven solutions.",
  },
  {
    name: "Varun Kota",
    role: "Business Owner",
    image: "/images/testimonials/client2.webp",
    testimonial:
      "Working with Panacea has been a truly rewarding experience. From the beginning, their team was professional, attentive, and committed to understanding our needs. The quality of their work exceeded our expectations, and their dedication to customer satisfaction was evident at every stage. I highly recommend their services to anyone looking for reliable and results-driven solutions.",
  },
  {
    name: "Tejaswi Velivala",
    role: "Tech Entrepreneur",
    image: "/images/testimonials/client3.webp",
    testimonial:
      "Working with Panacea has been a truly rewarding experience. From the beginning, their team was professional, attentive, and committed to understanding our needs. The quality of their work exceeded our expectations, and their dedication to customer satisfaction was evident at every stage. I highly recommend their services to anyone looking for reliable and results-driven solutions.",
  },
 
  {
    name: "Tejaswi Velivala",
    role: "Tech Entrepreneur",
    image: "/images/testimonials/client2.webp",
    testimonial:
      "Working with Panacea has been a truly rewarding experience. From the beginning, their team was professional, attentive, and committed to understanding our needs. The quality of their work exceeded our expectations, and their dedication to customer satisfaction was evident at every stage. I highly recommend their services to anyone looking for reliable and results-driven solutions.",
  },
 
  {
    name: "Darshan Kotla",
    role: "Founder",
    image: "/images/testimonials/client1.webp",
    testimonial:
      "Working with Panacea has been a truly rewarding experience. From the beginning, their team was professional, attentive, and committed to understanding our needs. The quality of their work exceeded our expectations, and their dedication to customer satisfaction was evident at every stage. I highly recommend their services to anyone looking for reliable and results-driven solutions.",
  },
];

const TestimonialsSection = () => {
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
      <h2 className={styles.heading}>What people Say</h2>
      <p className={styles.subheading}>
        At Panacea, we build powerful, scalable, and user-friendly software
        solutions that help businesses innovate, grow, and thrive in the digital
        age. From idea to execution, our products are designed to deliver real
        impact.
      </p>
      <div className={styles.scrollContainer}>
        {testimonials.map((t, idx) => (
          <TestimonialCard
            key={idx}
            image={t.image}
            name={t.name}
            role={t.role}
            testimonial={t.testimonial}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
