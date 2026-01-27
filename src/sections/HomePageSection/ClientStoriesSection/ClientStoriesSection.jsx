import React from "react";
import ClientStoriesCard from "../../../components/ClientStoriesCard/ClientStoriesCard";
import styles from "./ClientStoriesSection.module.css";

const stories = [
  {
    name: "Darshan",
    image: "/images/Home/darshan.webp",
    text: "Panacea helped us streamline our inventory processes, giving our team more time to focus on growth.",
  },
  {
    name: "Harika",
    image:"/images/Home/harika.webp",
    text: "Working with Panacea transformed our daily operations. Their solution improved accuracy  significantly.",
  },
  {
    name: "Varun",
    image: "/images/Home/varun.webp",
    text: "Thanks to Panacea, our business now runs smoother than ever. The efficiency gains have saved us both time and money.",
  },
   {
    name: "Deekshith",
    image: "/images/Home/deekshith.webp",
    text: "Their automation tools reduced manual work dramatically. Our workflow is now faster and error-free.",
  },
  {
    name: "Vinay Raj",
    image: "/images/Home/vinayraj2.webp",
    text: "Panacea delivered exactly what we needed — a powerful, user-friendly system that boosted our productivity.",
  },
  
];


const ClientStoriesSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.heading}>Client Stories</div>
      <div className={styles.scrollContainer}>
        {stories.map((story, idx) => (
          <ClientStoriesCard
            key={idx}
            name={story.name}
            image={story.image}
            text={story.text}
          />
        ))}
      </div>
    </section>
  );
};

export default ClientStoriesSection;



