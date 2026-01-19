import React from "react";
import { Link } from "react-router-dom";

export default function CategoryCard({
  title,
  img,
  to,
  classes, // pass styles from CSS module
}) {
  const Wrapper = to ? Link : "div";
  const wrapperProps = to ? { to } : {};

  return (
    <article className={classes.card}>
      <Wrapper {...wrapperProps} aria-label={title} className={classes.link}>
        <div className={classes.imageWrap}>
          <img src={img} alt={title} className={classes.img} loading="lazy" />
        </div>
        <span className={classes.caption}>{title}</span>
      </Wrapper>
    </article>
  );
}
