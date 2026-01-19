import React from "react";
import styles from "./ContactMapSection.module.css";

/**
 * ContactMapSection - interactive map version
 *
 * Props:
 *  - embedUrl (string) optional: full google embed iframe url (if provided it is used as-is)
 *  - query (string) optional: fallback address/search query (used to build a maps embed URL)
 *  - name, streetLines (array), country, phone, notes
 *
 * Example:
 *  <ContactMapSection
 *    query="Panaceaitservices, 100Feet Road, Ayyappa Society, Madhapur, Hyderabad"
 *    name="Panaceaitservices"
 *    ...
 *  />
 */
export default function ContactMapSection({
  embedUrl = "",
  query = "Panaceaitservices, 100Feet Road, Ayyappa Society, Madhapur, Hyderabad-500072, India",
  name = "Panaceaitservices",
  streetLines = [
    "100Feet Road , Ayyappa Society,",
    "Madhapur. Hyderabad-500072,",
    "Landmark: Narayana School Beside."
  ],
  country = "India",
  phone = "8686818384 / 9347959536",
  notes = "Near Hitech city"
}) {
  // If user passed a custom embedUrl use it, otherwise build a simple embed using the q param.
  const safeEmbedUrl = embedUrl && embedUrl.trim().length > 0
    ? embedUrl
    : `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;

  return (
    <section className={styles.section} aria-labelledby="contact-map-heading">
      <div className={styles.container}>
        <div className={styles.card}>
          <h3 id="contact-map-heading" className={styles.label}>Name:</h3>
          <div className={styles.value}>{name}</div>

          <h4 className={styles.label}>Street:</h4>
          <div className={styles.value}>
            {streetLines.map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </div>

          <h4 className={styles.label}>County:</h4>
          <div className={styles.value}>{country}</div>

          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <strong>Phone:</strong>
              <div className={styles.metaText}>{phone}</div>
            </div>

            <div className={styles.metaItem}>
              <strong>Notes:</strong>
              <div className={styles.metaText}>{notes}</div>
            </div>
          </div>

          <div className={styles.buttonWrap}>
            <a href={safeEmbedUrl.replace("&output=embed", "")} target="_blank" rel="noopener noreferrer" className={styles.directionsBtn}>
              Get Directions
            </a>
          </div>
        </div>

        <div className={styles.mapWrap}>
          <iframe
            title="Office location map"
            src={safeEmbedUrl}
            className={styles.mapIframe}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            aria-label="Map showing office location"
          />
        </div>
      </div>
    </section>
  );
}
