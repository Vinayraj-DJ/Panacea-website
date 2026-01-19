import React from "react";
import CtaPanel from "../../../../components/CtaPanel/CtaPanel";
import FooterSection from "../../../../sections/HomePageSection/FooterSection/FooterSection";
import SectionIntro from "../../../../components/common/SectionIntro";
import SplitFeature from "../../../../components/common/SplitFeature";
import FeatureList from "../../../../components/FeatureList/FeatureList";
import HeroTitleChip from "../../../../components/common/HeroTitleChip";
import styles from "./PPCMarketing.module.css";

const SOCIALS = {
  linkedin: "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

export default function PPCMarketing() {
  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <HeroTitleChip
          imageSrc="/images/services/PPCM.webp"
          alt="Pay Per Click Marketing"
          title={"Pay Per Click\nMarketing"}
        />
        <div className={styles.heroSocialIcons}>
          <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={`${styles.social} ${styles.linkedin}`}><span className={styles.text}>in</span></a>
          <a href={SOCIALS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={`${styles.social} ${styles.facebook}`}><span className={styles.text}>F</span></a>
        </div>
      </div>

      <SectionIntro
  title="Pay Per Click Marketing Services"
  paragraphs={[
    "Pay-Per-Click (PPC) Marketing is a highly effective digital advertising strategy that drives instant visibility and targeted traffic to your website. With PPC, businesses only pay when users click on their ads, making it a cost-efficient and results-driven marketing solution. At PanaceaIT Services, we specialize in creating and managing high-performing PPC campaigns across platforms like Google Ads, Bing Ads, Facebook, and LinkedIn. Our certified experts use data-driven strategies, keyword optimization, and continuous performance tracking to maximize ROI, boost conversions, and help your business reach the right audience at the right time.",
  ]}
/>

<SplitFeature
  image="/images/services/image 70.webp"
  title="Why you should Choose Pay per click Marketing And how panacea can help you"
  body={`In the fast-paced digital world, Pay-Per-Click (PPC) Marketing offers one of the quickest and most measurable ways to generate leads and increase online visibility. Unlike organic marketing, PPC delivers immediate results by placing your brand at the top of search engine results and social media platforms. With precise targeting, you can reach potential customers who are actively searching for your products or services — ensuring that every click brings you closer to conversion.`}
  body2={`At PanaceaIT Services, we take a strategic, data-driven approach to PPC campaign management. Our team of certified professionals handles everything — from keyword research and ad creation to bid management and performance optimization.`}
  imageLeft={true}
/>


      <SplitFeature
  image="/images/services/image 71.webp"
  title="About Pay Per Click Marketing"
  body={`Pay-Per-Click (PPC) Marketing is a digital advertising model that allows businesses to display ads on search engines and social media platforms, paying only when users click on their ads. It’s a fast and efficient way to drive qualified traffic, boost brand visibility, and achieve measurable results. By targeting specific keywords, demographics, and locations, PPC helps businesses reach the right audience at the right time. At PanaceaIT Services, we specialize in designing and managing data-driven PPC campaigns that maximize ROI, enhance conversions, and accelerate your business growth through strategic ad placement and performance optimization.`}
  imageLeft={false}
/>


      <FeatureList
  title="Key Benefits Of PPC Marketing Services"
  items={[
    {
      title: "Instant Visibility and Results",
      desc: "PPC ads appear immediately on search engines and social platforms, helping your business gain quick visibility and traffic.",
    },
    {
      title: "Highly Targeted Advertising",
      desc: "Reach your ideal audience through precise targeting options such as location, keywords, demographics, interests, and devices.",
    },
    {
      title: "Cost-Effective Marketing",
      desc: "You only pay when someone clicks your ad, ensuring that your marketing budget is spent on genuine, interested prospects.",
    },
    {
      title: "Measurable Performance",
      desc: "Every click, impression, and conversion can be tracked, providing clear insights into your campaign’s success and ROI.",
    },
  ]}
  illustrationSrc="/images/services/image 72.webp"
  illustrationAlt="PPC benefits illustration"
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
