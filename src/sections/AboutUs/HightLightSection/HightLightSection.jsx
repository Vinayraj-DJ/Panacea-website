import React, { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./HightLightSection.module.css";

const defaultCards = [
  { value: "100 +", text: "Users that are using our services" },
  { value: "50 +", text: "Employees that are well experienced" },
  { value: "10 +", text: "Reputed Companies using our products" },
  { value: "10 +", text: "Professionals in Global Network" },
];

export default function HightLightSection({
  title = "Redefining solutions with purpose and passion.",
  lead = "Use our products that are well made<br/>and built",
  cards = defaultCards,
  columns = 4,
  background = "linear-gradient(180deg, #f3f2f5ff 0%, #e9e2eeff 100%)",
  compact = false,
  className = "",
}) {
  const CARD_LIST = useMemo(() => cards, [cards]);

  return (
    <section
      className={`${styles.section} ${compact ? styles.compact : ""} ${className}`}
      style={{ background }}
      data-columns={columns}
    >
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>

        <div className={styles.leadWrap}>
          <p
            className={styles.lead}
            dangerouslySetInnerHTML={{ __html: lead }}
          />
        </div>
      </div>

      {/* Cards grid */}
      <div
        className={styles.cards}
        style={{ "--cards-cols": Number(columns) || 4 }}
        role="list"
      >
        {CARD_LIST.map((c, i) => (
          <div key={`${c.text}-${i}`} className={styles.card} role="listitem">
            <div className={styles.value}>{c.value}</div>
            <p className={styles.caption}>{c.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

HightLightSection.propTypes = {
  title: PropTypes.string,
  lead: PropTypes.string,
  cards: PropTypes.arrayOf(
    PropTypes.shape({ value: PropTypes.string, text: PropTypes.string })
  ),
  columns: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  background: PropTypes.string,
  compact: PropTypes.bool,
  className: PropTypes.string,
};
