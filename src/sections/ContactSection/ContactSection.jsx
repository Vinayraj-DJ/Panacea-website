import React from "react";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* LEFT SIDE - FORM */}
        <div className={styles.left}>
          <div className={styles.formCard}>
            <h2 className={styles.heading}>Please fill in the form Below</h2>

            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>

              <div className={styles.row}>
                <label className={styles.label}>
                  Full Name
                  <input className={styles.input} placeholder="Enter Name" />
                </label>

                <label className={styles.label}>
                  E-Mail
                  <input className={styles.input} placeholder="Enter E-mail" />
                </label>
              </div>

              <div className={styles.row}>
                <label className={styles.label}>
                  Country
                  <select className={styles.input}>
                    <option>India (+91)</option>
                    <option>United States (+1)</option>
                  </select>
                </label>

                <label className={styles.label}>
                  Contact Number
                  <input className={styles.input} placeholder="Enter Number" />
                </label>
              </div>

              <label className={styles.labelFull}>
                Interested In
                <select className={styles.input}>
                  <option>Website Development</option>
                  <option>Mobile App</option>
                  <option>UI/UX</option>
                </select>
              </label>

              <label className={styles.labelFull}>
                Message
                <textarea
                  className={styles.textarea}
                  rows="4"
                  placeholder="Write your message..."
                />
              </label>

              <label className={styles.checkbox}>
                <input type="checkbox" />
                <span>I agree to the Terms and Conditions of PanaceaIT Services</span>
              </label>

              <button type="submit" className={styles.cta}>
                Send Your Inquiry
              </button>

            </form>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <aside className={styles.right}>
          <div className={styles.infoBlock}>
            <h3 className={styles.infoTitle}>Get In Touch</h3>
            <ul className={styles.infoList}>
              <li>
                <img src="/images/contact/phone.webp" className={styles.iconImg} alt="Phone" />
                8686818384 / 9347959536
              </li>

              <li>
                <img src="/images/contact/whatsapp.webp" className={styles.iconImg} alt="WhatsApp" />
                8686818384 / 9347959536
              </li>

              <li>
                <img src="/images/contact/mail.webp" className={styles.iconImg} alt="Mail" />
                info@panaceaaitservices.com
              </li>
            </ul>
          </div>

          <div className={styles.infoBlock}>
            <h4 className={styles.infoTitle}>Come Meet Us</h4>

            <div className={styles.officeTitle}>India-Hyderabad Office</div>

            <div className={styles.address}>
              <img src="/images/contact/pin.webp" className={styles.iconImg} alt="Pin" />
              Panaceaitservices Privated Limited, 100Feet Road, Ayyappa Society, Madhapur,
              Hyderabad-500072, Landmark: Narayana School Beside.
            </div>

            <a href="#" className={styles.directions}>
              <img src="/images/contact/directions.webp" className={styles.iconImg} alt="Directions" />
              Get Directions
            </a>
          </div>

          <div className={styles.infoBlock}>
            <h4 className={styles.infoTitle}>Follow Us On</h4>

            <div className={styles.socials}>
              <a
                href="https://x.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
              >
                <img src="/images/contact/x.webp" alt="X" />
              </a>

              <a
                href="https://www.linkedin.com/company/107517525/admin/dashboard/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
              >
                <img src="/images/contact/linkedin.webp" alt="LinkedIn" />
              </a>

              <a
                href="https://www.instagram.com/panaceaitservices"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
              >
                <img src="/images/contact/instagram.webp" alt="Instagram" />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61578148200915"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
              >
                <img src="/images/contact/facebook.webp" alt="Facebook" />
              </a>
            </div>
          </div>
        </aside>

      </div>
    </section>
  );
}
