import React from "react";
import styles from "./SpotlightCard.module.css";
import { FiArrowUpRight } from "react-icons/fi";

export default function SpotlightCard({
  image = "/images/products/blog-1.jpg",
  avatar = "/images/team1.jpg",
  author = "Sophie lee",
  title = "How Technology is Shaping Our World",
  excerpt = "Technology is revolutionizing every aspect of our lives, from how we communicate to how we work.",
  date = "19 Jan 2002",
  href = "#",
}) {
  return (
    <article className={styles.card}>
      {/* Banner */}
      <div className={styles.thumb}>
        {/* banner image */}
        <img src={image} alt={title} />
        {/* small overlapping avatar */}
        <img className={styles.avatar} src={avatar} alt={author} />
      </div>

      {/* Body */}
      <div className={styles.body}>
        <a
          className={styles.author}
          href={href}
          onClick={(e) => e.preventDefault()}
        >
          {author}
        </a>

        <a
          className={styles.titleRow}
          href={href}
          onClick={(e) => e.preventDefault()}
        >
          <h3 className={styles.title}>{title}</h3>
          <FiArrowUpRight className={styles.arrow} />
        </a>

        <p className={styles.excerpt}>{excerpt}</p>
        <div className={styles.date}>{date}</div>
      </div>
    </article>
  );
}
