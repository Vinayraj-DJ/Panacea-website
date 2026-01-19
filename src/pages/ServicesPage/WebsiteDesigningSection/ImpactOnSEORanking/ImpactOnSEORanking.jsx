// File: SeoRanking.jsx
import React from "react";
import CtaPanel from "../../../../components/CtaPanel/CtaPanel";
import FooterSection from "../../../../sections/HomePageSection/FooterSection/FooterSection";
import SectionIntro from "../../../../components/common/SectionIntro";
import SplitFeature from "../../../../components/common/SplitFeature";
import HeroTitleChip from "../../../../components/common/HeroTitleChip";
import FeatureList from "../../../../components/FeatureList/FeatureList";
import styles from "./ImpactOnSEORanking.module.css"

const SOCIALS = {
  linkedin:
    "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

const SeoRanking = () => {
  return (
    <section className={styles.page}>
      {/* HERO */}
      <div className={styles.hero}>
        <HeroTitleChip
          imageSrc="/images/services/impact.webp"
          alt="Impact On SEO Ranking"
          title={`Impact On SEO\nRanking`}
        />

        <div className={styles.heroSocialIcons}>
          <a
            href={SOCIALS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={`${styles.social} ${styles.linkedin}`}
          >
            <span className={styles.text}>in</span>
          </a>
          <a
            href={SOCIALS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className={`${styles.social} ${styles.facebook}`}
          >
            <span className={styles.text}>F</span>
          </a>
        </div>
      </div>

      {/* INTRO */}
      <SectionIntro
        title="Impact On SEO Ranking"
        paragraphs={[
          "Web designing plays a crucial role in determining a website’s performance on search engines, and one of the most significant factors influencing this is User Experience (UX). Search engines like Google prioritize websites that provide visitors with a seamless, engaging, and fast-loading experience. A website that is visually appealing, easy to navigate, and mobile-responsive tends to rank higher because it meets Google’s core ranking factors—such as page speed, mobile-friendliness, and low bounce rates.",
        ]}
      />

      {/* HOW DESIGN INFLUENCES SEO */}
      <SplitFeature
        image="/images/services/SEO1.webp"
        title="How Does Web Design Influence SEO Ranking?"
        body={`Web design has a direct impact on how search engines evaluate and rank a website. A well-structured, user-friendly design helps search engines crawl and index your site more efficiently. Elements like clear navigation, proper heading structure, internal linking, and clean coding make it easier for Google to understand your content.`}
        body2={`Moreover, when users can easily find what they’re looking for, they stay longer and interact more, which lowers the bounce rate—a key factor that positively affects SEO ranking. In short, a good design not only attracts visitors visually but also strengthens your site’s technical foundation for better visibility in search results.`}
        imageLeft={true}
      />

      {/* WHY UX MATTERS */}
      <SplitFeature
        image="/images/services/SEO2.webp"
        title="Why is User Experience Important for SEO Performance?"
        body={`User experience (UX) is one of the most critical ranking factors for modern websites. Google’s algorithms are designed to reward websites that deliver an excellent experience to their visitors. A website with smooth navigation, readable typography, consistent visuals, and fast performance keeps users engaged longer, reducing bounce rates and increasing dwell time—both of which contribute positively to SEO.`}
        body2={`UX-focused design also makes it easier for users to find the information they need, which improves interaction metrics and encourages return visits and shares.`}
        imageLeft={false}
      />

      {/* BENEFITS LIST */}
      <FeatureList
        title="Key Benefits Of Flexible Images for web designing ."
        items={[
          {
            title: "Higher Visibility in Search Results",
            desc:
              "A well-structured and SEO-optimized web design helps your website appear higher in search engine rankings.",
          },
          {
            title: "Improved User Engagement and Retention",
            desc:
              "Web design directly influences how visitors interact with your website. A clean layout and intuitive navigation improve engagement.",
          },
          {
            title: "Faster Website Loading Speed",
            desc:
              "Speed is a critical ranking factor for SEO, and an optimized web design ensures that your website loads quickly on all devices.",
          },
          {
            title: "Better Mobile Optimization",
            desc:
              "With Google’s mobile-first indexing, having a responsive web design that adapts seamlessly to mobile screens is essential.",
          },
        ]}
        illustrationSrc="/images/services/SEO3.webp"
        illustrationAlt="SEO illustration"
        imageLeft={true}
      />

      <CtaPanel
        
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

export default SeoRanking;