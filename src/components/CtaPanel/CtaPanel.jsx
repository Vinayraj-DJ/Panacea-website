// import React from "react";
// import styles from "./CtaPanel.module.css";

// /**
//  * Reusable CTA panel
//  *
//  * Props:
//  * - title: string (required)
//  * - description: string (required)
//  * - buttonLabel: string (required)
//  * - onClick: function (optional) — called when button is clicked
//  * - href: string (optional) — if provided, renders an <a> button
//  * - maxWidth: number|string (optional) — content max width; default 794
//  * - align: "center" | "left" (optional) — text alignment; default "center"
//  * - className: string (optional) — to extend styles
//  */
// const CtaPanel = ({
//   title,
//   description,
//   buttonLabel,
//   onClick,
//   href,
//   maxWidth = 794,
//   align = "center",
//   className = "",
// }) => {
//   const contentStyle = { maxWidth: typeof maxWidth === "number" ? `${maxWidth}px` : maxWidth };

//   const ButtonCore = href ? "a" : "button";
//   const buttonProps = href
//     ? { href, role: "button" }
//     : { type: "button", onClick: onClick };

//   return (
//     <section
//       className={[styles.panel, className].join(" ")}
//       aria-label={title}
//     >
//       <div
//         className={[
//           styles.inner,
//           align === "left" ? styles.left : styles.center,
//         ].join(" ")}
//         style={contentStyle}
//       >
//         <h2 className={styles.title}>{title}</h2>
//         <p className={styles.desc}>{description}</p>

//         <div className={styles.buttonRow}>
//           <ButtonCore {...buttonProps} className={styles.cta}>
//             {buttonLabel}
//           </ButtonCore>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CtaPanel;



import React from "react";
import styles from "./CtaPanel.module.css";

/**
 * Reusable CTA panel with default content
 */
const CtaPanel = ({
  title = "KNOW MORE PROJECTS",
  description = "To know more projects and about all the details of the projects , the Technolgies that we used to make the project successful in very short span of time please do contact us",
  buttonLabel = "Call us",
  onClick,
  href = "/contact",
  maxWidth = 794,
  align = "center",
  className = "",
}) => {
  const contentStyle = {
    maxWidth: typeof maxWidth === "number" ? `${maxWidth}px` : maxWidth,
  };

  const ButtonCore = href ? "a" : "button";
  const buttonProps = href
    ? { href, role: "button" }
    : { type: "button", onClick: onClick };

  return (
    <section className={[styles.panel, className].join(" ")} aria-label={title}>
      <div
        className={[
          styles.inner,
          align === "left" ? styles.left : styles.center,
        ].join(" ")}
        style={contentStyle}
      >
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.desc}>{description}</p>

        <div className={styles.buttonRow}>
          <ButtonCore {...buttonProps} className={styles.cta}>
            {buttonLabel}
          </ButtonCore>
        </div>
      </div>
    </section>
  );
};

export default CtaPanel;
