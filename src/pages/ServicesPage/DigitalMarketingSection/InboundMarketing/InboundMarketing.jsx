import React from "react";
import CtaPanel from "../../../../components/CtaPanel/CtaPanel";
import FooterSection from "../../../../sections/HomePageSection/FooterSection/FooterSection";
import SectionIntro from "../../../../components/common/SectionIntro";
import SplitFeature from "../../../../components/common/SplitFeature";
import FeatureList from "../../../../components/FeatureList/FeatureList";
import HeroTitleChip from "../../../../components/common/HeroTitleChip";
import styles from "./InboundMarketing.module.css";

const SOCIALS = {
  linkedin:
    "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

export default function InboundMarketing() {
  return (
    <section className={styles.page}>
      {/* HERO SECTION */}
      <div className={styles.hero}>
        <HeroTitleChip
          imageSrc="/images/services/in1.webp"
          alt="Inbound Marketing"
          title={"Inbound\nMarketing"}
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

      {/* SECTION INTRO */}
      <SectionIntro
        title="Inbound Marketing Services"
        paragraphs={[
          "Inbound Marketing Services focus on attracting, engaging, and delighting potential customers through valuable and relevant content rather than traditional advertising. These services include strategies like SEO, content marketing, email campaigns, and social media engagement to draw visitors organically and convert them into loyal clients.",
          "By understanding customer needs and providing solutions through blogs, videos, and eBooks, inbound marketing helps build trust and long-term relationships. It’s a cost-effective and measurable approach that aligns marketing with customer intent, ensuring consistent brand growth and improved ROI for businesses in the digital space.",
        ]}
      />

      {/* WHY CHOOSE INBOUND MARKETING */}
      <SplitFeature
        image="/images/services/in2.webp"
        title="Why you should Choose Inbound Marketing And how Panacea can help you"
        body={`Inbound Marketing is one of the most effective ways to attract the right audience and convert them into loyal customers. Instead of chasing leads through paid ads or cold calls, inbound marketing focuses on creating valuable content that draws customers to you naturally. This customer-centric approach not only reduces marketing costs but also delivers better-quality leads and higher engagement, resulting in stronger relationships and improved ROI.`}
        body2={`Panacea IT Services provides complete inbound marketing solutions designed to grow your business organically. Our expert team focuses on strategy, content creation, SEO optimization, and lead nurturing to attract and convert your target audience.`}
        imageLeft={true}
      />

      {/* ABOUT INBOUND MARKETING */}
      <SplitFeature
        image="/images/services/in3.webp"
        title="About Inbound Marketing"
        body={`Inbound Marketing is a modern, customer-focused approach that helps businesses attract potential clients through valuable and relevant content instead of traditional advertising. It’s all about creating meaningful experiences that solve customer problems and build trust in your brand. This strategy combines content marketing, SEO, social media, and email campaigns to guide customers through their buying journey — from awareness to decision-making.`}
        body2={`By focusing on delivering value rather than pushing sales, inbound marketing strengthens brand credibility, generates high-quality leads, and drives long-term growth. It’s a sustainable way to connect, engage, and convert your audience in today’s digital landscape.`}
        imageLeft={false}
      />

      {/* KEY BENEFITS */}
      <FeatureList
        title="Key Benefits Of Inbound Marketing Services"
        items={[
          {
            title: "Increased Brand Visibility",
            desc: "Inbound marketing uses SEO, blogs, and social media to make your brand easily discoverable by your target audience, helping you reach more potential customers organically.",
          },
          {
            title: "High-Quality Lead Generation",
            desc: "By focusing on customers who are already searching for your products or services, inbound marketing attracts qualified leads who are more likely to convert.",
          },
          {
            title: "Cost-Effective Strategy",
            desc: "Unlike paid advertising, inbound marketing relies on organic methods such as content and SEO, offering long-term results at a lower cost.",
          },
          {
            title: "Builds Trust and Credibility",
            desc: "Consistently providing valuable information helps establish your brand as an industry expert, earning customer trust and loyalty over time.",
          },
        ]}
        illustrationSrc="/images/services/in3.1.webp"
        illustrationAlt="Inbound marketing benefits"
        imageLeft={true}
      />

      {/* CTA PANEL */}
      <CtaPanel
        title="KNOW MORE PROJECTS"
        description="To know more projects and about all the details of the projects , the Technolgies that we used to make the project successful in very short span of time please do contact us"
        buttonLabel="Call us"
        href="/contact"
        align="center"
        maxWidth={794}
      />

      {/* FOOTER */}
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
        company={[
          "About Us",
          "Our Team",
          "Careers",
          "Portfolio",
          "Blog",
          "Contact",
        ]}
        legal={[
          "Privacy Policy",
          "Terms of Service",
          "Cookie Policy",
          "GDPR",
        ]}
      />
    </section>
  );
}
