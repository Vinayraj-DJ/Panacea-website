import React from "react";
import CtaPanel from "../../../../components/CtaPanel/CtaPanel";
import FooterSection from "../../../../sections/HomePageSection/FooterSection/FooterSection";
import SectionIntro from "../../../../components/common/SectionIntro";
import SplitFeature from "../../../../components/common/SplitFeature";
import FeatureList from "../../../../components/FeatureList/FeatureList";
import HeroTitleChip from "../../../../components/common/HeroTitleChip";
import styles from "./EmailMarketing.module.css"; // reuse hero/social css

const SOCIALS = {
  linkedin: "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

export default function EmailMarketing() {
  return (
    <section className={styles.page}>
      {/* Hero */}
      <div className={styles.hero}>
        <HeroTitleChip
          imageSrc="/images/services/EM.webp"
          alt="Email Marketing"
          title={"Email\nMarketing"}
        />
        <div className={styles.heroSocialIcons}>
          <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={`${styles.social} ${styles.linkedin}`}><span className={styles.text}>in</span></a>
          <a href={SOCIALS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={`${styles.social} ${styles.facebook}`}><span className={styles.text}>F</span></a>
        </div>
      </div>

      {/* Intro */}
      <SectionIntro
        title="Email Marketing Services"
        paragraphs={[
         'Email Marketing is one of the most effective digital marketing strategies for building meaningful customer relationships and driving conversions. It involves sending targeted, personalized, and engaging emails to potential and existing customers to promote products, share updates, and nurture leads. At PanaceaIT Services, we design and execute data-driven email campaigns that deliver measurable results. From crafting compelling content and attractive templates to setting up automated workflows and analyzing performance, our team ensures your message reaches the right audience at the right time — boosting engagement, loyalty, and sales.'
        ]}
      />

      {/* Why + How */}
      <SplitFeature
        image="/images/services/image 67.webp"
        title="Why You Should Choose Email Marketing — And How PanaceaIT Can Help"
        body={`In the digital era, Email Marketing remains one of the most powerful and cost-effective ways to connect with your audience. It allows businesses to communicate directly with potential and existing customers through personalized and targeted messages.                  `}
        body2={`At PanaceaIT Services, we understand that successful email marketing is more than just sending messages — it’s about creating meaningful connections. Our team specializes in crafting tailored email campaigns that reflect your brand’s tone and goals. We focus on audience segmentation, creative design, persuasive content, and automation to ensure maximum open rates, click-throughs, and ROI.`}
        imageLeft={true}
      />

      {/* About */}
      <SplitFeature
        image="/images/services/image 68.webp"
        title="About Email Marketing"
        body={`Email Marketing is a powerful digital strategy that enables businesses to communicate directly with their audience through personalized and targeted email campaigns. It helps promote products, share updates, nurture leads, and build lasting customer relationships. By delivering the right message to the right people at the right time, email marketing enhances engagement, increases conversions, and drives brand loyalty. At PanaceaIT Services, we create strategic, visually appealing, and data-driven email campaigns designed to boost customer retention, maximize ROI, and strengthen your brand’s digital presence.`}
        imageLeft={false}
      />

      {/* Benefits */}
      <FeatureList
        title="Key Benefits Of Email Marketing"
        items={[
          { title: "Direct & Personalized Communication", desc: "Reach the right audience with customized messages that match interests and behavior." },
          { title: "Cost-Effective With Strong ROI", desc: "Consistently one of the highest-return channels compared to other digital tactics." },
          { title: "Improved Customer Engagement", desc: "Useful, timely content keeps audiences informed, engaged, and connected to your brand." },
          { title: "Automation & Efficiency", desc: "Workflows save time while ensuring consistent onboarding, follow-ups, and lifecycle emails." },
        ]}
        illustrationSrc="/images/services/image 69.webp"
        illustrationAlt="Email benefits illustration"
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
