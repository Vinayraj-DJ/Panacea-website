// src/components/Button/Button.jsx
import React from "react";
import styles from "./Button.module.css";

export default function Button({
  label = "Click Me",
  onClick = () => {},
  fontSize = "var(--Font_Size_3)",
  borderRadius = "5px",
  padding = "10px 24px",
  width = "fit-content",
  height = "auto",
  backgroundColor = "#2980b9",
  textColor = "var(--White_Color)",
  customStyle = {},
  className = "",
}) {
  return (
    <button
      className={`${styles.button} ${className}`}
      style={{
        fontSize,
        borderRadius,
        padding,
        width,
        height,
        backgroundColor,
        color: textColor,
        fontFamily: "var(--Font_Family)",
        ...customStyle,
      }}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
