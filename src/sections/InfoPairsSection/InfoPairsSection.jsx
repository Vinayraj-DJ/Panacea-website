import React from "react";
import styles from "./InfoPairsSection.module.css";
import NumberedHeading from "../NumberedHeading/NumberedHeading";

/**
 * InfoPairsSection
 *
 * Props:
 *  - items: array of { id, title, image, bullets (array of strings) } OR { id, image, bullets }
 *  - containerPadding: CSS padding for section (default "72px 48px")
 *  - highlightColor: accent color used for small markers (default: "#E76F51")
 *
 * This component renders items in pairs (2 per row).
 * Even rows → text left, image right
 * Odd rows → image left, text right
 */
const InfoPairsSection = ({
  items = [],
  containerPadding = "72px 48px",
  highlightColor = "#E76F51",
}) => {
  // chunk array into pairs
  const pairs = [];
  for (let i = 0; i < items.length; i += 2) {
    pairs.push(items.slice(i, i + 2));
  }

  return (
<><NumberedHeading number={2} title="What Users get ?" />
     
    <section
      className={styles.section}
      style={{
        padding: containerPadding,
        ["--accent"]: highlightColor,
      }}
    >

       
      <div className={styles.container}>
        {pairs.map((pair, rowIdx) => {
          const left = pair[0];
          const right = pair[1];
          const isEven = rowIdx % 2 === 0;

          return (
            <div key={rowIdx} className={styles.row}>
              {/* Left column */}
              <div className={`${styles.col} ${styles.leftCol}`}>
                {isEven ? (
                  // Text card (left side)
                  <article className={styles.textCard}>
                    {left?.title && (
                      <h4 className={styles.cardTitle}>{left.title}</h4>
                    )}
                    {left?.bullets ? (
                      <ul className={styles.bullets}>
                        {left.bullets.map((b, i) => (
                          <li key={i}>{b}</li>
                        ))}
                      </ul>
                    ) : (
                      left?.description && (
                        <p className={styles.desc}>{left.description}</p>
                      )
                    )}
                  </article>
                ) : (
                  // Image card (left side, for odd row)
                  left && (
                    <div className={styles.imageCard}>
                      <img
                        src={left.image}
                        alt={left.title || "image"}
                        className={styles.image}
                      />
                    </div>
                  )
                )}
              </div>

              {/* Right column */}
              <div className={`${styles.col} ${styles.rightCol}`}>
                {isEven ? (
                  // image card on right
                  right ? (
                    <div className={styles.imageCard}>
                      <img
                        src={right.image}
                        alt={right.title || "image"}
                        className={styles.image}
                      />
                    </div>
                  ) : (
                    <div />
                  )
                ) : (
                  // text card on right
                  right ? (
                    <article className={styles.textCard}>
                      {right?.title && (
                        <h4 className={styles.cardTitle}>{right.title}</h4>
                      )}
                      {right?.bullets ? (
                        <ul className={styles.bullets}>
                          {right.bullets.map((b, i) => (
                            <li key={i}>{b}</li>
                          ))}
                        </ul>
                      ) : (
                        right?.description && (
                          <p className={styles.desc}>{right.description}</p>
                        )
                      )}
                    </article>
                  ) : (
                    <div />
                  )
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
    </>
  );
};

export default InfoPairsSection;
