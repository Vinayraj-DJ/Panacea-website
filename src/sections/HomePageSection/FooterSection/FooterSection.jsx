// import React from "react";
// import styles from "./FooterSection.module.css";
// import { LuFacebook, LuInstagram, LuLinkedin, LuTwitter } from "react-icons/lu";
// import logo from "../../../assets/images/logo.png";

// /* Inline Icon Component */
// function Icon({ children, className }) {
//   return (
//     <svg
//       className={className}
//       width="20"
//       height="20"
//       viewBox="0 0 24 24"
//       fill="currentColor"
//       aria-hidden
//       focusable="false"
//     >
//       {children}
//     </svg>
//   );
// }

// function MailIcon(props) {
//   return (
//     <Icon {...props}>
//       <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5L4 8V6l8 5 8-5v2z" />
//     </Icon>
//   );
// }

// function PhoneIcon(props) {
//   return (
//     <Icon {...props}>
//       <path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.2 1.3.5 2.7.8 4.1.8.7 0 1.3.6 1.3 1.3v3.6c0 .7-.6 1.3-1.3 1.3C9.9 22 2 14.1 2 4.3 2 3.6 2.6 3 3.3 3h3.6c.7 0 1.3.6 1.3 1.3 0 1.4.3 2.8.8 4.1.2.4.1.9-.2 1.2l-2.2 2.2z" />
//     </Icon>
//   );
// }

// function MapPinIcon(props) {
//   return (
//     <Icon {...props}>
//       <path d="M12 2C8.1 2 5 5.1 5 9c0 5.3 7 13 7 13s7-7.7 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z" />
//     </Icon>
//   );
// }

// /* FooterSection Component */
// export default function FooterSection({
//   brand = "Portfolio",
//   year = new Date().getFullYear(),
//   services = [
//     "Web Development",
//     "Mobile Apps",
//     "UI/UX Design",
//     "Digital Marketing",
//     "SEO Optimization",
//     "Consulting",
//   ],
//   company = ["About Us", "Our Team", "Careers", "Portfolio", "Blog", "Contact"],
//   legal = ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"],
// }) {
//   return (
//     <footer className={styles.footer}>
//       <div className={styles.inner}>
//         <div className={styles.grid}>
//           {/* Company Info */}
//           <div className={styles.col}>
//             <div className={styles.brandRow}>
//               <div className={styles.footerLogoBlock}>
//                 <img
//                   src={logo}
//                   alt="Panacea logo"
//                   className={styles.footerLogo}
//                 />
//                 <div className={styles.footerTitleBlock}>
//                   <span className={styles.footerTitle}>Panacea</span>
//                   <span className={styles.footerSubtitle}>
//                     IT Services Pvt.Ltd
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <p className={styles.lead}>
//               We create innovative digital solutions that help businesses grow
//               and connect with their audiences through modern design and
//               cutting-edge technology.
//             </p>

//             <div className={styles.socialRow}>
//               <a className={styles.socialBtn} href="#" aria-label="Facebook">
//                 <LuFacebook className={styles.socialIcon} />
//               </a>
//               <a className={styles.socialBtn} href="#" aria-label="Twitter">
//                 <LuTwitter className={styles.socialIcon} />
//               </a>
//               <a
//                 className={styles.socialBtn}
//                 href="https://instagram.com/panaceaitservices"
//                 target="_blank"
//                 rel="noreferrer"
//                 aria-label="Instagram"
//               >
//                 <LuInstagram className={styles.socialIcon} />
//               </a>
//               <a className={styles.socialBtn} href="#" aria-label="LinkedIn">
//                 <LuLinkedin className={styles.socialIcon} />
//               </a>
//             </div>
//           </div>

//           {/* Services and Company side by side */}
//           <div className={styles.servicesCompanyRow}>
//             {/* Services */}
//             <div className={styles.col}>
//               <h3 className={styles.heading}>Services</h3>
//               <ul className={styles.list}>
//                 {services.map((s, i) => (
//                   <li key={i} className={styles.listItem}>
//                     <a href="#" className={styles.link}>
//                       {s}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Company */}
//             <div className={styles.col}>
//               <h3 className={styles.heading}>Company</h3>
//               <ul className={styles.list}>
//                 {company.map((c, i) => (
//                   <li key={i} className={styles.listItem}>
//                     <a href="#" className={styles.link}>
//                       {c}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           {/* Contact */}
//           <div className={styles.col}>
//             <h3 className={styles.heading}>Contact</h3>
//             <div className={styles.contactStack}>
//               <div className={styles.contactRow}>
//                 <MailIcon className={styles.iconSmall} />
//                 <div>
//                   <p className={styles.contactMain}>
//                     info@panaceaitservices.com
//                   </p>
//                   <p className={styles.contactSub}>Get in touch</p>
//                 </div>
//               </div>

//               <div className={styles.contactRow}>
//                 <PhoneIcon className={styles.iconSmall} />
//                 <div>
//                   <p className={styles.contactMain}>8686818384 / 9347959536</p>
//                   <p className={styles.contactSub}>Call us anytime</p>
//                 </div>
//               </div>

//               <div className={styles.contactRow}>
//                 <MapPinIcon className={styles.iconSmall} />
//                 <div>
//                   <p className={styles.contactMain}>Sanath Nagar</p>
//                   <p className={styles.contactSub}>Our headquarters</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* bottom */}
//         <div className={styles.bottom}>
//           <p className={styles.copy}>
//             © {year} {brand}. All rights reserved.
//           </p>

//           <div className={styles.legalRow}>
//             {legal.map((l, i) => (
//               <a key={i} href="#" className={styles.legalLink}>
//                 {l}
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }



// import React from "react";
// import styles from "./FooterSection.module.css";
// import { LuFacebook, LuInstagram, LuLinkedin, LuTwitter, LuMail, LuPhone, LuMapPin } from "react-icons/lu";
// import logo from "../../../assets/images/logo.png";

// export default function FooterSection() {
//   return (
//     <footer className={styles.footer}>
//       {/* top panel */}
//       <div className={styles.panel}>
//         <div className={styles.container}>
//           {/* Newsletter (left block) */}
//           <section className={styles.newsletter}>
//             <label htmlFor="footer-email" className={styles.newsletterLabel}>
//               Enter Your Email Id
//             </label>
//             <div className={styles.newsletterRow}>
//               <input
//                 id="footer-email"
//                 type="email"
//                 className={styles.input}
//                 placeholder=""
//                 aria-label="Email address"
//               />
//               <button type="button" className={styles.cta}>
//                 Subscribe
//               </button>
//             </div>
//           </section>

//           {/* Services */}
//           <nav className={styles.col}>
//             <h3 className={styles.heading}>Services</h3>
//             <ul className={styles.list}>
//               <li><a className={styles.link} href="#">Software Development</a></li>
//               <li><a className={styles.link} href="#">Mobile App Development</a></li>
//               <li><a className={styles.link} href="#">Website Development</a></li>
//               <li><a className={styles.link} href="#">UI / UX Designing</a></li>
//               <li><a className={styles.link} href="#">Digital Marketing</a></li>
//             </ul>
//           </nav>

//           {/* Products */}
//           <nav className={styles.col}>
//             <h3 className={styles.heading}>Products</h3>
//             <ul className={styles.list}>
//               <li><a className={styles.link} href="#">Child Care Management System</a></li>
//               <li><a className={styles.link} href="#">Influencers App</a></li>
//             </ul>
//           </nav>

//           {/* About Us */}
//           <nav className={styles.col}>
//             <h3 className={styles.heading}>About Us</h3>
//             <ul className={styles.list}>
//               <li><a className={styles.link} href="#">Why choose Us</a></li>
//               <li><a className={styles.link} href="#">Privacy Policy</a></li>
//               <li><a className={styles.link} href="#">Terms &amp; Conditions</a></li>
//             </ul>
//           </nav>

//           {/* Contact Us with icons */}
//           <section className={styles.col}>
//             <h3 className={styles.heading}>Contact Us</h3>
//             <ul className={styles.contactList}>
//               <li className={styles.contactItem}>
//                 <LuPhone className={styles.contactIcon} aria-hidden />
//                 <span>8686818384 / 9347959536</span>
//               </li>
//               <li className={styles.contactItem}>
//                 <LuMail className={styles.contactIcon} aria-hidden />
//                 <span>info@panaceaitservices.com</span>
//               </li>
//               <li className={styles.contactItem}>
//                 <LuInstagram className={styles.contactIcon} aria-hidden />
//                 <span>panaceaitservices</span>
//               </li>
//             </ul>
//             <div className={styles.socialRow}>
//               <a className={styles.socialBtn} href="#" aria-label="Facebook"><LuFacebook /></a>
//               <a className={styles.socialBtn} href="#" aria-label="Twitter"><LuTwitter /></a>
//               <a className={styles.socialBtn} href="#" aria-label="Instagram"><LuInstagram /></a>
//               <a className={styles.socialBtn} href="#" aria-label="LinkedIn"><LuLinkedin /></a>
//             </div>
//           </section>
//         </div>
//       </div>

//       {/* bottom bar */}
//       <div className={styles.bottom}>
//         <div className={styles.bottomInner}>
//           <div className={styles.brandLeft}>
//             <img src={logo} alt="Panacea logo" className={styles.logo} />
//             <span className={styles.brand}>Panacea</span>
//           </div>
//           <p className={styles.copy}>© 2024. All rights reserved</p>
//         </div>
//       </div>
//     </footer>
//   );
// }




// import React from "react";
// import styles from "./FooterSection.module.css";
// import { LuFacebook, LuInstagram, LuLinkedin, LuTwitter } from "react-icons/lu";
// import logo from "../../../assets/images/logo.png";

// /* Inline Icon Component */
// function Icon({ children, className }) {
//   return (
//     <svg
//       className={className}
//       width="20"
//       height="20"
//       viewBox="0 0 24 24"
//       fill="currentColor"
//       aria-hidden
//       focusable="false"
//     >
//       {children}
//     </svg>
//   );
// }

// function MailIcon(props) {
//   return (
//     <Icon {...props}>
//       <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5L4 8V6l8 5 8-5v2z" />
//     </Icon>
//   );
// }

// function PhoneIcon(props) {
//   return (
//     <Icon {...props}>
//       <path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.2 1.3.5 2.7.8 4.1.8.7 0 1.3.6 1.3 1.3v3.6c0 .7-.6 1.3-1.3 1.3C9.9 22 2 14.1 2 4.3 2 3.6 2.6 3 3.3 3h3.6c.7 0 1.3.6 1.3 1.3 0 1.4.3 2.8.8 4.1.2.4.1.9-.2 1.2l-2.2 2.2z" />
//     </Icon>
//   );
// }

// function MapPinIcon(props) {
//   return (
//     <Icon {...props}>
//       <path d="M12 2C8.1 2 5 5.1 5 9c0 5.3 7 13 7 13s7-7.7 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z" />
//     </Icon>
//   );
// }

// /* FooterSection Component */
// export default function FooterSection({
//   brand = "Portfolio",
//   year = new Date().getFullYear(),
//   services = [
//     "Web Development",
//     "Mobile Apps",
//     "UI/UX Design",
//     "Digital Marketing",
//     "SEO Optimization",
//     "Consulting",
//   ],
//   company = ["About Us", "Our Team", "Careers", "Portfolio", "Blog", "Contact"],
//   legal = ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"],
// }) {
//   return (
//     <footer className={styles.footer}>
//       <div className={styles.inner}>
//         <div className={styles.grid}>
//           {/* Company Info */}
//           <div className={styles.col}>
//             <div className={styles.brandRow}>
//               <div className={styles.footerLogoBlock}>
//                 <img
//                   src={logo}
//                   alt="Panacea logo"
//                   className={styles.footerLogo}
//                 />
//                 <div className={styles.footerTitleBlock}>
//                   <span className={styles.footerTitle}>Panacea</span>
//                   <span className={styles.footerSubtitle}>
//                     IT Services Pvt.Ltd
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <p className={styles.lead}>
//               We create innovative digital solutions that help businesses grow
//               and connect with their audiences through modern design and
//               cutting-edge technology.
//             </p>

//             <div className={styles.socialRow}>
//               <a className={styles.socialBtn} href="https://www.facebook.com/your-handle" aria-label="Facebook">
//                 <LuFacebook className={styles.socialIcon} />
//               </a>
//               <a className={styles.socialBtn} href="#" aria-label="Twitter">
//                 <LuTwitter className={styles.socialIcon} />
//               </a>
//               <a
//                 className={styles.socialBtn}
//                 href="https://instagram.com/panaceaitservices"
//                 target="_blank"
//                 rel="noreferrer"
//                 aria-label="Instagram"
//               >
//                 <LuInstagram className={styles.socialIcon} />
//               </a>
//               <a className={styles.socialBtn} href="https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in" aria-label="LinkedIn">
//                 <LuLinkedin className={styles.socialIcon} />
//               </a>
//             </div>
//           </div>

//           {/* Services and Company side by side */}
//           <div className={styles.servicesCompanyRow}>
//             {/* Services */}
//             <div className={styles.col}>
//               <h3 className={styles.heading}>Services</h3>
//               <ul className={styles.list}>
//                 {services.map((s, i) => (
//                   <li key={i} className={styles.listItem}>
//                     <a href="#" className={styles.link}>
//                       {s}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Company */}
//             <div className={styles.col}>
//               <h3 className={styles.heading}>Company</h3>
//               <ul className={styles.list}>
//                 {company.map((c, i) => (
//                   <li key={i} className={styles.listItem}>
//                     <a href="#" className={styles.link}>
//                       {c}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           {/* Contact */}
//           <div className={styles.col}>
//             <h3 className={styles.heading}>Contact</h3>
//             <div className={styles.contactStack}>
//               <div className={styles.contactRow}>
//                 <MailIcon className={styles.iconSmall} />
//                 <div>
//                   <p className={styles.contactMain}>
//                     info@panaceaitservices.com
//                   </p>
//                   <p className={styles.contactSub}>Get in touch</p>
//                 </div>
//               </div>

//               <div className={styles.contactRow}>
//                 <PhoneIcon className={styles.iconSmall} />
//                 <div>
//                   <p className={styles.contactMain}>8686818384 / 9347959536</p>
//                   <p className={styles.contactSub}>Call us anytime</p>
//                 </div>
//               </div>

//               <div className={styles.contactRow}>
//                 <MapPinIcon className={styles.iconSmall} />
//                 <div>
//                   <p className={styles.contactMain}>Sanath Nagar</p>
//                   <p className={styles.contactSub}>Our headquarters</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* bottom */}
//         <div className={styles.bottom}>
//           <p className={styles.copy}>
//             © {year} {brand}. All rights reserved.
//           </p>

//           <div className={styles.legalRow}>
//             {legal.map((l, i) => (
//               <a key={i} href="#" className={styles.legalLink}>
//                 {l}
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }




import React from "react";
import styles from "./FooterSection.module.css";
import { LuFacebook, LuInstagram, LuLinkedin, LuTwitter } from "react-icons/lu";
import logo from "../../../assets/images/Logo.webp";

/* Inline Icon Component */
function Icon({ children, className }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      focusable="false"
    >
      {children}
    </svg>
  );
}

function MailIcon(props) {
  return (
    <Icon {...props}>
      <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5L4 8V6l8 5 8-5v2z" />
    </Icon>
  );
}

function PhoneIcon(props) {
  return (
    <Icon {...props}>
      <path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.2 1.3.5 2.7.8 4.1.8.7 0 1.3.6 1.3 1.3v3.6c0 .7-.6 1.3-1.3 1.3C9.9 22 2 14.1 2 4.3 2 3.6 2.6 3 3.3 3h3.6c.7 0 1.3.6 1.3 1.3 0 1.4.3 2.8.8 4.1.2.4.1.9-.2 1.2l-2.2 2.2z" />
    </Icon>
  );
}

function MapPinIcon(props) {
  return (
    <Icon {...props}>
      <path d="M12 2C8.1 2 5 5.1 5 9c0 5.3 7 13 7 13s7-7.7 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z" />
    </Icon>
  );
}

/* FooterSection Component */
export default function FooterSection({
  brand = "Portfolio",
  year = new Date().getFullYear(),
  services = [
    "Web Development",
    "Mobile Apps",
    "UI/UX Design",
    "Digital Marketing",
    "SEO Optimization",
    "Consulting",
  ],
  company = ["About Us", "Our Team", "Careers", "Portfolio", "Blog", "Contact"],
  legal = ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"],
}) {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* Company Info */}
          <div className={styles.col}>
            <div className={styles.brandRow}>
              <div className={styles.footerLogoBlock}>
                <img
                  src={logo}
                  alt="Panacea logo"
                  className={styles.footerLogo}
                />
                <div className={styles.footerTitleBlock}>
                  <span className={styles.footerTitle}>Panacea</span>
                  <span className={styles.footerSubtitle}>
                    IT Services Pvt.Ltd
                  </span>
                </div>
              </div>
            </div>

            <p className={styles.lead}>
              We create innovative digital solutions that help businesses grow
              and connect with their audiences through modern design and
              cutting-edge technology.
            </p>

            <div className={styles.socialRow}>
              <a
                className={styles.socialBtn}
                href="https://www.facebook.com/profile.php?id=61578148200915"
                aria-label="Facebook"
                target="_blank"
                rel="noreferrer"
              >
                <LuFacebook className={styles.socialIcon} />
              </a>
              <a className={styles.socialBtn} href="#" aria-label="Twitter">
                <LuTwitter className={styles.socialIcon} />
              </a>
              <a
                className={styles.socialBtn}
                href="https://www.instagram.com/panaceaitservices"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <LuInstagram className={styles.socialIcon} />
              </a>
              <a
                className={styles.socialBtn}
                href="https://www.linkedin.com/company/107517525/admin/dashboard/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
              >
                <LuLinkedin className={styles.socialIcon} />
              </a>
            </div>
          </div>

          {/* Services and Company side by side */}
          <div className={styles.servicesCompanyRow}>
            {/* Services */}
            <div className={styles.col}>
              <h3 className={styles.heading}>Services</h3>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <a href="/services/website-development" className={styles.link}>
                    Web Development
                  </a>
                </li>
                <li className={styles.listItem}>
                  <a href="/services/mobile-application" className={styles.link}>
                    Mobile Apps
                  </a>
                </li>
                <li className={styles.listItem}>
                  <a href="/ui-ux-design" className={styles.link}>
                    UI/UX Design
                  </a>
                </li>
                <li className={styles.listItem}>
                  <a href="/services/digital-marketing" className={styles.link}>
                    Digital Marketing
                  </a>
                </li>
                <li className={styles.listItem}>
                  <a href="/services/website-designing/impact-on-seo-ranking" className={styles.link}>
                    SEO Optimization
                  </a>
                </li>
                <li className={styles.listItem}>
                  <a href="/consulting" className={styles.link}>
                    Consulting
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className={styles.col}>
              <h3 className={styles.heading}>Company</h3>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <a href="/aboutuspage" className={styles.link}>
                    About Us
                  </a>
                </li>
                <li className={styles.listItem}>
                  <a href="/team" className={styles.link}>
                    Our Team
                  </a>
                </li>
                <li className={styles.listItem}>
                  <a href="/careers" className={styles.link}>
                    Careers
                  </a>
                </li>
                <li className={styles.listItem}>
                  <a href="/portfolio" className={styles.link}>
                    Portfolio
                  </a>
                </li>
                <li className={styles.listItem}>
                  <a href="/blog" className={styles.link}>
                    Blog
                  </a>
                </li>
                <li className={styles.listItem}>
                  <a href="/contactUs" className={styles.link}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className={styles.col}>
            <h3 className={styles.heading}>Contact</h3>
            <div className={styles.contactStack}>
              <div className={styles.contactRow}>
                <MailIcon className={styles.iconSmall} />
                <div>
                  <p className={styles.contactMain}>
                    info@panaceaitservices.com
                  </p>
                  <p className={styles.contactSub}>Get in touch</p>
                </div>
              </div>

              <div className={styles.contactRow}>
                <PhoneIcon className={styles.iconSmall} />
                <div>
                  <p className={styles.contactMain}>9963917712 / 9347959536</p>
                  <p className={styles.contactSub}>Call us anytime</p>
                </div>
              </div>

              <div className={styles.contactRow}>
                <MapPinIcon className={styles.iconSmall} />
                <div>
                  <p className={styles.contactMain}>100 Feet Road, Ayyappa Society</p>
                  <p className={styles.contactMain}>Madhapur, Hyderabad-500072</p>
                  <p className={styles.contactSub}>Near Hitech City | Narayana School Beside</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {year} {brand}. All rights reserved.
          </p>

          <div className={styles.legalRow}>
            {legal.map((l, i) => (
              <a key={i} href="#" className={styles.legalLink}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
