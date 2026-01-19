// File: GameDevelopment.jsx
import React from "react";
import CtaPanel from "../../../../components/CtaPanel/CtaPanel";
import FooterSection from "../../../../sections/HomePageSection/FooterSection/FooterSection";
import SectionIntro from "../../../../components/common/SectionIntro";
import SplitFeature from "../../../../components/common/SplitFeature";
import HeroTitleChip from "../../../../components/common/HeroTitleChip";
import FeatureList from "../../../../components/FeatureList/FeatureList";
import styles from "./GameDevelopment.module.css";

const SOCIALS = {
  linkedin:
    "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

const GameDevelopment = () => {
  return (
    <section className={styles.page}>
      {/* HERO */}
      <div className={styles.hero}>
        <HeroTitleChip
          imageSrc="/images/services/game1.webp"
          alt="Game Development"
          title={`Game\nDevelopment`}
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
        title="Game Development Services"
        paragraphs={[
          "Game development combines creativity, storytelling, and engineering to build immersive experiences for players across platforms. From concept design and art to gameplay programming and deployment, modern game development uses engines like Unity and Unreal, languages such as C# and C++, and tools for 2D/3D art and animation. At Panacea IT Services we design and deliver captivating games for mobile, PC, console, and AR/VR — focusing on performance, player experience, and monetization strategies that align with your business goals.",
        ]}
      />

     {/* WHY GAME DEV */}
      <SplitFeature
  image="/images/services/game2.webp"
  title="Why Game Development Matters And how Panacea can help you"
  body={`In today’s digital landscape, Game Development plays a vital role in delivering immersive, high-performance experiences for users across entertainment, education, and business applications. Games offer a unique balance between creativity and technology, making them ideal for storytelling, engagement, and interactive brand experiences. Developing a high-quality game helps businesses build loyal communities, enhance customer engagement, and drive monetization opportunities through in-app purchases, ads, and premium content.`}
  body2={`At PanaceaIT Services, we specialize in crafting customized, feature-rich game solutions that align with your business goals. Our team leverages industry-leading tools like Unity, Unreal, and Godot to develop games that combine stunning visuals, fluid performance, and exceptional user experiences.`}
  imageLeft={true}
/>


      {/* ABOUT GAME TECH */}
     <SplitFeature
  image="/images/services/game3.webp"
  title="About Game Development Technologies"
  body={`Game Development Technologies combine creativity, innovation, and advanced engineering to build immersive and high-performing gaming experiences across platforms. Core technologies such as Unity, Unreal Engine, and Godot power the development of both 2D and 3D games with stunning graphics, realistic physics, and seamless gameplay. Programming languages like C#, C++, and Python form the backbone of game logic, while tools such as Blender, Maya, and Photoshop bring characters, animations, and environments to life. At PanaceaIT Services, we leverage these cutting-edge technologies to design and develop captivating games for mobile, PC, console, and AR/VR platforms. Our game development process focuses on creativity, performance, and player engagement — delivering experiences that entertain, inspire, and drive lasting user loyalty.`}
  imageLeft={false}
/>



       {/* BENEFITS */}
      <FeatureList
  title="Key Benefits Of Game Development"
  items={[
    {
      title: "High User Engagement",
      desc: "Game development fosters interactive and immersive experiences that capture user attention, keeping players engaged for extended periods.",
    },
    {
      title: "Creative Brand Promotion",
      desc: "Businesses can use games as a unique marketing tool to build brand awareness, loyalty, and customer interaction through gamification and branded content.",
    },
    {
      title: "Cross-Platform Reach",
      desc: "Modern game development technologies allow deployment across multiple platforms — including mobile, web, PC, and consoles — ensuring a broader audience reach.",
    },
    {
      title: "Revenue Generation Opportunities",
      desc: "With options like in-app purchases, subscriptions, and advertisements, games offer multiple monetization streams for businesses and developers.",
    },
  ]}
  illustrationSrc="/images/services/game4.webp"
  illustrationAlt="Game development illustration"
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

export default GameDevelopment;