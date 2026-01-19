import React from "react";
import cls from "./HeroTitleChip.module.css";

export default function HeroTitleChip({
  imageSrc,
  alt = "",
  height = 420,
  title,
  rect = { width: 278, height: 161, top: 179, left: 93 },
  color = "#4070B1",
  opacity = 0.6,
  outline = true,
}) {
  // ✅ Convert \n into <br/>
  const formattedTitle = title.split("\n").map((line, i) => (
    <React.Fragment key={i}>
      {line}
      {i < title.split("\n").length - 1 && <br />}
    </React.Fragment>
  ));

  return (
    <div
      className={cls.hero}
      style={{
        "--hero-h": `${height}px`,
        "--chip-w": `${rect.width}px`,
        "--chip-h": `${rect.height}px`,
        "--chip-top": `${rect.top}px`,
        "--chip-left": `${rect.left}px`,
        "--chip-bg": color,
        "--chip-alpha": opacity,
        "--chip-outline": outline ? "1" : "0",
      }}
    >
      <img className={cls.heroImg} src={imageSrc} alt={alt} loading="eager" />
      <div className={cls.chip}>
        <span className={cls.title}>{formattedTitle}</span>
      </div>
    </div>
  );
}
