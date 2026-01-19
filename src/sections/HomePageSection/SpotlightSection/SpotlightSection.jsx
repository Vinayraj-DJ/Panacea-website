
import React from "react";
import { Link } from "react-router-dom";
import styles from "./SpotlightSection.module.css";
import SpotlightCard from "../../../components/SpotlightCard/SpotlightCard";

const items = [
  {
    image: "/images/products/blog-1.webp",
    avatar: "/images/team1.webp",
    author: "Sophie lee",
    title: "How Technology is Shaping Our World",
    excerpt:
      "Technology is revolutionizing every aspect of our lives, from how we communicate to how we work.",
    date: "19 Jan 2002",
    href: "#",
  },
  {
    image: "/images/products/blog-2.webp",
    avatar: "/images/team1.webp",
    author: "Sophie lee",
    title: "How Technology is Shaping Our World",
    excerpt:
      "Technology is revolutionizing every aspect of our lives, from how we communicate to how we work.",
    date: "19 Jan 2002",
    href: "#",
  },
  {
    image: "/images/products/blog-3.webp",
    avatar: "/images/team1.webp",
    author: "Sophie lee",
    title: "How Technology is Shaping Our World",
    excerpt:
      "Technology is revolutionizing every aspect of our lives, from how we communicate to how we work.",
    date: "19 Jan 2002",
    href: "#",
  },
];

export default function SpotlightSection({
  title = "Spotlight",
  subtitle = `Stay a head in the digital age with insights on how technology is reshaping industries, enhancing our daily lives, and driving future innovations.`,
  cards = items,
}) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h3 className={styles.heading}>
          {title} <span className={styles.line}></span>
        </h3>
        <p className={styles.subtext}>{subtitle}</p>

        <div className={styles.grid}>
          {cards.map((c, idx) => (
            <Link key={idx} to={c.href} className={styles.cardLink}>
              <SpotlightCard {...c} />
            </Link>
          ))}
        </div>

        <div className={styles.linkWrap}>
          <Link to="/spotlight" className={styles.link}>
            Go to Blogs Page &gt;&gt;
          </Link>
        </div>
      </div>
    </section>
  );
}
