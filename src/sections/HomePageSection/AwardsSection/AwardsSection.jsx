import React from "react";
import AwardCard from "../../../components/AwardCard/AwardCard";
import styles from "./AwardsSection.module.css";
const awards = [
  {
    year: "2024",
    title: "Innovative Design Award",
    desc: "Recognized for pioneering creative solutions that pushed the boundaries of modern design and set new industry benchmarks.",
    img: "/images/award1.webp",
  },
  {
    year: "2023",
    title: "Design Excellence Award",
    desc: "Honored for delivering outstanding design projects that combined functionality, aesthetics, and user experience seamlessly.",
    img: "/images/award2.webp",
  },
  {
    year: "2022",
    title: "Design Mastery Award",
    desc: "Awarded for demonstrating exceptional craftsmanship and mastery across multiple design disciplines and platforms.",
    img: "/images/award3.webp",
  },
  {
    year: "2021",
    title: "Creative Design Award",
    desc: "Celebrated for originality and creativity in design concepts that inspired innovation and set a new creative standard.",
    img: "/images/award4.webp",
  },
];


const AwardsSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.meta}>— OUR AWARD</div>
      <h2 className={styles.heading}>
        Our <span className={styles.gold}>Award-Winning</span> Journey
      </h2>

      <div className={styles.grid}>
        {awards.map((award, i) => (
          <AwardCard
            key={i}
            year={award.year}
            title={award.title}
            desc={award.desc}
            img={award.img}
          />
        ))}
      </div>
    </section>
  );
};

export default AwardsSection;
