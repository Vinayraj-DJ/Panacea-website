
// ChildCareManagement.jsx
import React from "react";

import FooterSection from "../../sections/HomePageSection/FooterSection/FooterSection";
import HeroTitleChip from "../../components/common/HeroTitleChip";


import styles from "./ContactUs.module.css";
import ServicesSection from "../../sections/ServicesSection/ServicesSection";
import ContactSection from "../../sections/ContactSection/ContactSection";
import ContactMapSection from "../../sections/ContactMapSection/ContactMapSection";



const SOCIALS = {
  linkedin: "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

const ContactUs = () => {



    const services = [
  { id: 1, title: "Communicate Your Requirements", image: "/images/products/cu1.webp" },
  { id: 2, title: "Understand Your Requirements", image: "/images/products/cu2.webp" },
  { id: 3, title: "Panacea Respects The Client Needs", image: "/images/products/cu3.webp" },
];
   

 

  

  return (
    
    <section className={styles.page}>
      <div className={styles.hero}>
        <HeroTitleChip
          imageSrc="/images/ContactUs.webp"
          alt="Contact Us"
          title={"Contact Us"}
          
        />

        <div className={styles.heroSocialIcons}>
          <a
            href={SOCIALS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.social} ${styles.linkedin}`}
          >
            <span className={styles.text}>in</span>
          </a>
          <a
            href={SOCIALS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.social} ${styles.facebook}`}
          >
            <span className={styles.text}>F</span>
          </a>
        </div>
      </div>

      <ContactSection />
      <ContactMapSection
        query="Panaceaitservices, 100Feet Road, Ayyappa Society, Madhapur, Hyderabad"
      />


      <ServicesSection
  title="Your opinion matters to us!"
  items={services}
  highlightedIndex={1}
/>
   
 
      <FooterSection
        brand="Panacea IT Services"
        year={new Date().getFullYear()}
        services={[
          "Software Development",
          "Mobile Apps",
          "UI/UX Design",
          "Digital Marketing",
          "SEO Optimization",
          "Consulting",
        ]}
        company={["About Us", "Our Team", "Careers", "Portfolio", "Blog", "Contact"]}
        legal={["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"]}
      />
    </section>
  );
};

export default ContactUs;








