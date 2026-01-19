import React from "react";
import styles from "./RecommendedSpotlight.module.css";
import SpotlightNewsCard from "../../../components/SpotlightNewsCard/SpotlightNewsCard";

const items = [
  {
    image: "/images/products/blog-4.webp",
    title: "How Technology is Shaping Our World",
    excerpt:
      "Technology is revolutionizing every aspect of our lives, from how we communicate to how we work.",
    date: "19 Jan 2002",
  },
  {
    image: "/images/products/blog-2.webp",
    title: "The Rise of Remote Work Culture",
    excerpt:
      "Remote work has transformed the workplace, bringing flexibility but also new challenges.",
    date: "07 Jul 2005",
  },
  {
    image: "/images/products/blog-3.webp",
    title: "AI and the Future of Innovation",
    excerpt:
      "Artificial intelligence is powering innovations in healthcare, finance, and transportation.",
    date: "22 Oct 2015",
  },
  {
    image: "/images/products/blog-3.webp",
    title: "Sustainability in Tech",
    excerpt:
      "From greener data centers to eco-friendly gadgets, sustainability is reshaping the tech world.",
    date: "02 Mar 2018",
  },
];

export default function RecommendedSpotlight() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Recommended Spotlight</h2>

        <div className={styles.layout}>
          {/* Big feature card on left */}
          <div className={styles.feature}>
            <SpotlightNewsCard {...items[0]} large />
          </div>

          {/* Smaller stacked cards on right */}
          <div className={styles.sideGrid}>
            {items.slice(1).map((item, idx) => (
              <SpotlightNewsCard key={idx} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
