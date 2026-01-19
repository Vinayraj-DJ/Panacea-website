import React from "react";
import styles from "./FeaturesSection.module.css";

const featuresData = [
  {
    id: 1,
    title: "Easy Registration & Login",
    description: "Quick signup with simple login access.",
    image: "/assets/login.png",
  },
  {
    id: 2,
    title: "Service Booking",
    description: "Book car wash services anytime, anywhere.",
    image: "/assets/booking.png",
  },
  {
    id: 3,
    title: "Real Time Tracking",
    description: "Track your car wash in real time.",
    image: "/assets/tracking.png",
  },
  {
    id: 4,
    title: "Payment Integration",
    description: "Secure and seamless online payment options.",
    image: "/assets/payment.png",
  },
  {
    id: 5,
    title: "Ratings & Reviews",
    description: "Share feedback and rate service quality.",
    image: "/assets/reviews.png",
  },
  {
    id: 6,
    title: "Service Status Updates",
    description: "Get instant updates on service progress.",
    image: "/assets/status.png",
  },
  {
    id: 7,
    title: "Service Selection",
    description: "Choose preferred wash type and package.",
    image: "/assets/selection.png",
  },
];

const FeaturesSection = ({
  bgColor = "#f8e6ff", // Light pink inner section
  title = "Features Of Car Washing App",
  subtitle = "A Car Washing App comes with a range of smart and user-friendly features designed to make vehicle cleaning services more convenient, efficient, and accessible. Here are the key features:",
  features = featuresData,
}) => {
  return (
    <section className={styles.featuresWrapper}>
      <div
        className={styles.featuresSection}
        style={{ backgroundColor: bgColor }}
      >
        <div className={styles.container}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>

          <div className={styles.grid}>
            {features.map((feature) => (
              <div className={styles.card} key={feature.id}>
                <img
                  src={feature.image}
                  alt={feature.title}
                  className={styles.image}
                />
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <p className={styles.cardDesc}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
