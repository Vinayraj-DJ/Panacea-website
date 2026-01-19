import React, { useState } from "react";
import styles from "./SpotlightSection.module.css";
import SpotlightCard from "../../components/SpotlightCard/SpotlightCard";

const CATEGORIES = ["All", "Science", "Technology", "World"];

const items = [
  {
    image: "/images/products/blog-1.webp",
    avatar: "/images/team1.webp",
    author: "Sophie Lee",
    title: "How Technology is Shaping Our World",
    excerpt:
      "Technology is transforming every aspect of our lives — from communication to work — and setting the stage for the future.",
    date: "19 Jan 2002",
    href: "#",
    category: "Technology",
  },
  {
    image: "/images/products/blog-2.webp",
    avatar: "/images/team2.webp",
    author: "Michael Chen",
    title: "The Future of Space Exploration Our World",
    excerpt:
      "From reusable rockets to Mars missions, space exploration is pushing the boundaries of science and human ambition.",
    date: "05 Mar 2005",
    href: "#",
    category: "Science",
  },
  {
    image: "/images/products/blog-3.webp",
    avatar: "/images/team3.webp",
    author: "Aarav Patel",
    title: "Global Trends in Sustainable Living",
    excerpt:
      "Sustainability is more than a buzzword — it’s a lifestyle movement driving change across industries and communities worldwide.",
    date: "12 Sep 2010",
    href: "#",
    category: "World",
  },
];

export default function SpotlightSection({
  title = "What's new",
  subtitle = "Our blog is your go-to space for fresh perspectives and expert takes.",
  cards = items,
}) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? cards
      : cards.filter((c) => c.category === activeCategory);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Heading */}
        <h3 className={styles.heading}>{title}</h3>
        <p className={styles.subtext}>{subtitle}</p>

        {/* Tabs */}
        <div className={styles.tabs}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`${styles.tab} ${
                activeCategory === cat ? styles.active : ""
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {filtered.map((c, idx) => (
            <SpotlightCard key={idx} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
