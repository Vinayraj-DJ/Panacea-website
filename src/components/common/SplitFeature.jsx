// // components/common/SplitFeature.jsx
// import React from "react";
// import styles from "./SplitFeature.module.css";

// export default function SplitFeature({
//   title,
//   body,
//   body2,
//   image,
//   imageAlt = "feature image",
//   imageLeft = true,          // true: image left, false: image right
//   maxImage = 606,            // matches your 606×606 example
// }) {
//   return (
//     <section className={`${styles.section} ${imageLeft ? styles.left : styles.right}`}>
//       <div className={styles.media} style={{ maxWidth: maxImage }}>
//         <img src={image} alt={imageAlt} className={styles.img} loading="lazy" />
//       </div>

//       <div className={styles.card}>
//         {title && <h3 className={styles.title}>{title}</h3>}
//         {body && <p className={styles.body}>{body}</p>}
        
//             {body2 && <p className={styles.body2}>{body2}</p>}
//       </div>
//     </section>
//   );
// }


// components/common/SplitFeature.jsx
import React from "react";
import styles from "./SplitFeature.module.css";

export default function SplitFeature({
  title,
  body,
  body2,
  image,
  imageAlt = "feature image",
  imageLeft = true,
  maxImage = 606,
}) {
  return (
    <section className={`${styles.section} ${imageLeft ? styles.left : styles.right}`}>
      {/* ✅ Plain image */}
      <div className={styles.media} style={{ maxWidth: maxImage }}>
        <img src={image} alt={imageAlt} className={styles.artImg} loading="lazy" />
      </div>

      {/* Card untouched */}
      <div className={styles.card}>
        {title && <h3 className={styles.title}>{title}</h3>}
        {body && <p className={styles.body}>{body}</p>}
        {body2 && <p className={styles.body2}>{body2}</p>}
      </div>
    </section>
  );
}
