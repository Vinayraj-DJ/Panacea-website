import React from "react";
import styles from "./OMRFeaturesSection.module.css";

/**
 * OMRFeaturesSection
 *
 * Props:
 *  - title: string
 *  - heroImage: string (path or url)
 *  - features: array of { id, icon, title, subtitle? }
 *
 * Example usage:
 * const features = [
 *   { id: 1, icon: "/images/icons/design.png", title: "Design & Layout", subtitle: "Customization" },
 *   { id: 2, icon: "/images/icons/template.png", title: "Template Management" },
 *   { id: 3, icon: "/images/icons/print.png", title: "Upload & Printing Options" },
 *   { id: 4, icon: "/images/icons/report.png", title: "Result & Report Generation" },
 * ];
 *
 * <OMRFeaturesSection
 *   title="OMR Sheet Customization Features"
 *   heroImage="/images/hero/omr-mock.png"
 *   features={features}
 * />
 */

const OMRFeaturesSection = ({ title = "", heroImage = "", features = [] }) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* left: hero image */}
        <div className={styles.left}>
          <div className={styles.heroWrap}>
            <img src={heroImage} alt={title} className={styles.heroImage} />
          </div>
        </div>

        {/* right: title + stacked feature items */}
        <div className={styles.right}>
          <h2 className={styles.heading}>{title}</h2>

          <ul className={styles.featureList}>
            {features.map((f) => (
              <li key={f.id} className={styles.featureItem}>
                <div className={styles.featureInner}>
                  <div className={styles.iconWrap}>
                    <img src={f.icon} alt={f.title} className={styles.icon} />
                  </div>
                  <div className={styles.textWrap}>
                    <div className={styles.featureTitle}>{f.title}</div>
                    {f.subtitle && <div className={styles.featureSubtitle}>{f.subtitle}</div>}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OMRFeaturesSection;
