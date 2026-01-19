import React from "react";
import styles from "./SecurePaymentSection.module.css";

const HERO_IMG = "/images/products/securepayment.webp";

export default function SecurePaymentMiniSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* IMAGE */}
        <div className={styles.imageWrap}>
          <img src={HERO_IMG} alt="delivery person" className={styles.image} />
        </div>

        {/* TEXT */}
        <div className={styles.textWrap}>
          <p className={styles.subTitle}>Smart Seamless shopping</p>

          <h2 className={styles.title}>
            <span className={styles.emphasis}>Secure</span> payments And{" "}
            <span className={styles.emphasis}>doorstep</span> delivery.
          </h2>
        </div>
      </div>
    </section>
  );
}
