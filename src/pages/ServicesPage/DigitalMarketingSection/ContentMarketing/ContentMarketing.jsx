import React from "react";
import CtaPanel from "../../../../components/CtaPanel/CtaPanel";
import FooterSection from "../../../../sections/HomePageSection/FooterSection/FooterSection";
import SectionIntro from "../../../../components/common/SectionIntro";
import SplitFeature from "../../../../components/common/SplitFeature";
import FeatureList from "../../../../components/FeatureList/FeatureList";
import HeroTitleChip from "../../../../components/common/HeroTitleChip";
import styles from "./ContentMarketing.module.css";

const SOCIALS = {
  linkedin: "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

export default function ContentMarketing() {
  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <HeroTitleChip
          imageSrc="/images/services/CM.webp"
          alt="Content Marketing"
          title={"Content\nMarketing"}
        />
        <div className={styles.heroSocialIcons}>
          <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={`${styles.social} ${styles.linkedin}`}><span className={styles.text}>in</span></a>
          <a href={SOCIALS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={`${styles.social} ${styles.facebook}`}><span className={styles.text}>F</span></a>
        </div>
      </div>

      <SectionIntro
        title="Content Marketing Services"
        paragraphs={[
        " Content Marketing focuses on creating, publishing, and distributing valuable content that attracts, engages, and converts your target audience. Instead of directly promoting a product, it aims to build trust and authority by offering information that solves problems or adds value. At PanaceaIT Services, we craft high-quality blogs, articles, web copy, videos, infographics, and case studies tailored to your business goals. Our strategic content marketing approach enhances brand visibility, improves SEO performance, and drives meaningful customer engagement — helping your business grow organically and sustainably."
        ]}
      />

      <SplitFeature
        image="/images/services/image 733.webp"
        title="Why you should Choose Content Marketing And how panacea can help you"
        body={`In today’s competitive digital world, Content Marketing is essential for building trust, educating your audience, and positioning your brand as an industry leader. High-quality, relevant content attracts potential customers, keeps them engaged, and nurtures them through the buying journey. From blog posts and articles to videos and social media updates, content marketing helps businesses connect with their audience, drive organic traffic, and boost long-term brand loyalty.`}
        body2={`At PanaceaIT Services, we understand that effective content marketing goes beyond writing — it’s about delivering the right message to the right audience at the right time.  We focus on storytelling, SEO optimization, and data-driven insights to ensure every piece of content delivers measurable impact.`}
        imageLeft={true}
      />

      <SplitFeature
        image="/images/services/image 74.webp"
        title="About Content Marketing"
        body={`Content Marketing is a strategic approach focused on creating and sharing valuable, relevant, and consistent content to attract and engage a clearly defined audience. Instead of direct advertising, it aims to build trust and credibility by delivering information that educates, inspires, and solves customer problems.  By using blogs, articles, videos, infographics, and social media posts, content marketing helps businesses strengthen their brand presence and drive customer action. At PanaceaIT Services, we specialize in crafting content strategies that enhance visibility, boost SEO rankings, and generate meaningful engagement for long-term growth.`}
        imageLeft={false}
      />

      <FeatureList
  title="Key Benefits Of Content Marketing Services"
  items={[
    {
      title: "Builds Brand Awareness and Authority",
      desc: "High-quality, consistent content helps establish your business as an industry expert and trusted source of information.",
    },
    {
      title: "Boosts Website Traffic and SEO Rankings",
      desc: "Optimized content attracts organic traffic from search engines, improving visibility and discoverability online.",
    },
    {
      title: "Enhances Customer Engagement",
      desc: "Engaging blogs, videos, and social posts keep your audience interested, informed, and connected to your brand.",
    },
    {
      title: "Generates Quality Leads",
      desc: "Valuable and targeted content attracts potential customers who are genuinely interested in your products or services.",
    },
  ]}
  illustrationSrc="/images/services/image 75.webp"
  illustrationAlt="Content benefits illustration"
  imageLeft={true}
/>


      <CtaPanel
        title="KNOW MORE PROJECTS"
        description="To know more projects and about all the details of the projects , the Technolgies that we used to make the project successful in very short span of time please do contact us"
        buttonLabel="Call us"
        href="/contact"
        align="center"
        maxWidth={794}
      />

      <FooterSection
        brand="Panacea IT Services"
        year={new Date().getFullYear()}
        services={["Software Development","Mobile Apps","UI/UX Design","Digital Marketing","SEO Optimization","Consulting"]}
        company={["About Us","Our Team","Careers","Portfolio","Blog","Contact"]}
        legal={["Privacy Policy","Terms of Service","Cookie Policy","GDPR"]}
      />
    </section>
  );
}
