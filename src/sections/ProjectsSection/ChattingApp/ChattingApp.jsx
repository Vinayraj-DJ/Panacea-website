import React from "react";
import styles from "./ChattingApp.module.css";

/**
 * ChattingApp component renders two layout variants:
 *  - variant="chatting"   -> image on left, details card on right (default)
 *  - variant="influencer" -> image on right, details card on left (influencer style)
 *
 * Props: variant, image, title, desc, platform, duration, technologies, whatWeDid, imageRound
 */
const ChattingApp = ({
  variant = "chatting",
  image = "/images/chatting.webp",
  title,
  desc,
  platform = "Android, iOS, Website",
  duration = "6 Months",
  technologies = "React Native, React JS, Node JS, WebSocket, Firebase, Figma, Adobe",
  whatWeDid = [
    "End-to-end design (UI/UX) and development",
    "Real-time messaging architecture with WebSocket/Firebase",
    "App Store & Play Store deployment with ongoing support",
  ],
  imageRound = false,
}) => {
  const isInfluencer = variant === "influencer";

  const heading =
    title ||
    (isInfluencer
      ? "Influencer App (Mobile APP)"
      : "Chatting App (Mobile App)");
  const description =
    desc ||
    (isInfluencer
      ? "This app connects influencers and venue owners (restaurants, clubs, pubs, etc.). It helps them promote each other and run events, contests and collaborations smoothly in their own way."
      : "This app is more than just a chatting platform — it’s a seamless communication experience designed for speed, security, and simplicity. Designed for mobile it ensures you stay connected anytime, anywhere.");

  return (
    <div className={styles.page}>
      <div className={styles.projectBackground}>
        <div className={styles.projectHeader}>
          <h3
            className={`${styles.projectTitle} ${
              isInfluencer ? "ruleLeft" : "ruleRight"
            }`}
          >
            {heading}
          </h3>
          <p className={styles.projectDesc}>{description}</p>
        </div>

        <div
          className={`${styles.projectBlock} ${
            isInfluencer ? styles.rowReverse : styles.row
          }`}
        >
          <div className={styles.projectImage}>
            <img
              className={imageRound ? styles.imgRound : ""}
              src={image}
              alt={heading}
            />
          </div>

          <div className={styles.projectDetails}>
            <div className={styles.projectCard}>
              <h4 className={styles.techHeader}>Technology</h4>

              <ul className={styles.techList}>
                <li>
                  <span className="label">Platform</span>:{" "}
                  <span className="value">{platform}</span>
                </li>
                <li>
                  <span className="label">Duration</span>:{" "}
                  <span className="value">{duration}</span>
                </li>
                <li>
                  <span className="label">Technologies Used</span>:{" "}
                  <span className="value">{technologies}</span>
                </li>
              </ul>

              <h4 className={styles.techHeader}>What we did</h4>
              <ul className={styles.techList}>
                {whatWeDid.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChattingApp;
