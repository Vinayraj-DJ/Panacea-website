// import React, { Fragment } from "react";
// import styles from "./SectionIntro.module.css";

// /**
//  * Reusable intro header for service pages.
//  *
//  * Props:
//  * - title: string
//  * - paragraphs: string | string[]                 // one or many paragraphs
//  * - kicker?: string                               // small label above title
//  * - subtitle?: string                             // smaller line under title
//  * - align?: "left" | "center"                     // default: "left"
//  * - maxWidth?: number                             // container max width (px). default 1280
//  * - padXDesktop?: string                          // horizontal padding desktop. default "5.5rem"
//  * - padXTablet?: string                           // default "2rem"
//  * - padXMobile?: string                           // default "1rem"
//  * - showLine?: boolean                            // show the small colored line. default true
//  * - titleColor?: string                           // override title color (e.g. "#436FB0")
//  * - lineColor?: string                            // override line color (e.g. "#436FB0")
//  * - actions?: React.ReactNode                     // buttons/links row
//  * - className?: string
//  * - style?: React.CSSProperties
//  */
// export default function SectionIntro({
//   title = "Section Title",
//   paragraphs = [],
//   kicker,
//   subtitle,
//   align = "left",
//   maxWidth = 1280,
//   padXDesktop = "5.5rem",
//   padXTablet = "2rem",
//   padXMobile = "1rem",
//   showLine = true,
//   titleColor = "#436FB0",
//   lineColor = "#436FB0",
//   actions,
//   className = "",
//   style,
// }) {
//   // Normalize paragraphs: string → [string]; split on \n if needed
//   const paraList = Array.isArray(paragraphs)
//     ? paragraphs
//     : typeof paragraphs === "string"
//     ? paragraphs.split(/\n{2,}|\r?\n(?=\r?\n)/).filter(Boolean) || [paragraphs]
//     : [];

//   return (
//     <header
//       className={[
//         styles.wrap,
//         align === "center" ? styles.center : styles.left,
//         className,
//       ].join(" ")}
//       style={{
//         "--maxw": `${maxWidth}px`,
//         "--padx-desktop": padXDesktop,
//         "--padx-tablet": padXTablet,
//         "--padx-mobile": padXMobile,
//         "--line-color": lineColor,
//         color: "inherit",
//         ...style,
//       }}
//     >
//       {kicker && <div className={styles.kicker}>{kicker}</div>}

//       <h2 className={styles.title} style={{ color: titleColor }}>
//         {title}
//         {showLine && <span className={styles.line} />}
//       </h2>

//       {subtitle && <p className={styles.subtitle}>{subtitle}</p>}

//       {paraList.map((t, i) => (
//         <p key={i} className={styles.intro}>
//           {t}
//         </p>
//       ))}

//       {actions ? <div className={styles.actions}>{actions}</div> : <Fragment />}
//     </header>
//   );
// }



import React, { Fragment } from "react";
import styles from "./SectionIntro.module.css";

/**
 * Reusable intro header for service pages.
 *
 * Props:
 * - title: string
 * - paragraphs: string | string[]                 // one or many paragraphs
 * - kicker?: string                               // small label above title
 * - subtitle?: string                             // smaller line under title
 * - align?: "left" | "center"                     // default: "left"
 * - maxWidth?: number                             // container max width (px). default 1280
 * - padXDesktop?: string                          // horizontal padding desktop. default "5.5rem"
 * - padXTablet?: string                           // default "2rem"
 * - padXMobile?: string                           // default "1rem"
 * - showLine?: boolean                            // show the small colored line. default true
 * - titleColor?: string                           // override title color (e.g. "#436FB0")
 * - lineColor?: string                            // override line color (e.g. "#436FB0")
 * - actions?: React.ReactNode                     // buttons/links row
 * - className?: string
 * - style?: React.CSSProperties
 */
export default function SectionIntro({
  title = "Section Title",
  paragraphs = [],
  kicker,
  subtitle,
  align = "left",
  maxWidth = 1500,
  padXDesktop = "5.5rem",
  padXTablet = "2rem",
  padXMobile = "1rem",
  showLine = true,
  titleColor = "#436FB0",
  lineColor = "#436FB0",
  actions,
  className = "",
  style,
}) {
  const paraList = Array.isArray(paragraphs)
    ? paragraphs
    : typeof paragraphs === "string"
    ? paragraphs.split(/\n{2,}|\r?\n(?=\r?\n)/).filter(Boolean) || [paragraphs]
    : [];

  return (
    <header
      className={[
        styles.wrap,
        align === "center" ? styles.center : styles.left,
        className,
      ].join(" ")}
      style={{
        "--maxw": `${maxWidth}px`,
        "--padx-desktop": padXDesktop,
        "--padx-tablet": padXTablet,
        "--padx-mobile": padXMobile,
        "--line-color": lineColor,
        color: "inherit",
        ...style,
      }}
    >
      {kicker && <div className={styles.kicker}>{kicker}</div>}

      <h2 className={styles.title} style={{ color: titleColor }}>
        {title}
        {showLine && <span className={styles.line} />}
      </h2>

      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}

      {paraList.map((t, i) => (
        <p key={i} className={styles.intro}>
          {t}
        </p>
      ))}

      {actions ? <div className={styles.actions}>{actions}</div> : <Fragment />}
    </header>
  );
}
