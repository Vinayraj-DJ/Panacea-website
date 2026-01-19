import React from "react";
import styles from "./OurProcess.module.css";

const OurProcess = () => {
  const steps = [
    {
      id: 1,
      title: "UI Design",
      points: ["UX Research", "UI Design", "Prototype"],
      color: "rgba(255, 255, 255, 0.2)",
      border: "rgba(255, 255, 255, 0.5)",
    },
    {
      id: 2,
      title: "Front End",
      points: ["Making it Responsive", "API Integration"],
      color: "#FFF3E0",
      border: "#FFF3E0",
    },
    {
      id: 3,
      title: "Back End",
      points: ["Data Base Design", "API Structure", "Checking"],
      color: "#ECD5F6",
      border: "#ECD5F6",
    },
    {
      id: 4,
      title: "Testing",
      points: ["Testing", "Deployment"],
      color: "rgba(255, 255, 255, 0.2)",
      border: "rgba(255, 255, 255, 0.5)",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.overlay}>
        <img
          src="/images/products/fit1.webp"
          alt="Our Process"
          className={styles.background}
        />
      </div>

      <div className={styles.content}>
        <h2 className={styles.heading}>
          OUR <span className={styles.highlight}>PROCESS</span>
        </h2>

        <div className={styles.cardsWrapper}>
          {steps.map((step) => (
            <div
              key={step.id}
              className={styles.card}
              style={{
                backgroundColor: step.color,
                borderColor: step.border,
              }}
            >
              <div className={styles.circle}>{step.id}</div>
              <h3 className={styles.cardTitle}>{step.title}</h3>
              <ul className={styles.list}>
                {step.points.map((p, index) => (
                  <li key={index}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
