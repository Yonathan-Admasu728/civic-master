import Image from 'next/image';
import yonathanImg from "@/app/blog/_assets/images/authors/yonathan.png";
import civicmasterHeroImg from "../../../public/assets/images/hero.png";

// ==================================================================================================================================================================
// BLOG CATEGORIES 🏷️
// ==================================================================================================================================================================

const categorySlugs = {
  feature: "feature",
  tutorial: "tutorial",
};

export const categories = [
  {
    slug: categorySlugs.feature,
    title: "Latest Enhancements",
    titleShort: "Features",
    description: "Explore the newest additions to CivicMaster designed to enhance your study experience for the U.S. Citizenship Test.",
    descriptionShort: "Newest features at CivicMaster.",
  },
  {
    slug: categorySlugs.tutorial,
    title: "In-depth CivicMaster tutorials",
    titleShort: "Tutorials",
    description: "Master U.S. citizenship with CivicMaster's intuitive flashcards and quizzes — learn in days, not weeks. Our innovative approach treats you like you have a personal tutor; each flashcard poses a question allowing you a genuine attempt to answer before revealing the solution. This method ensures that you're truly testing your knowledge, not just recalling an accidentally glimpsed answer. Flip the card when ready, and confirm your understanding. Stay updated with the latest in effective learning tools..",
    descriptionShort: "In-depth CivicMaster tutorials.",
  },
];

// ==================================================================================================================================================================
// BLOG AUTHORS 📝
// ==================================================================================================================================================================

const socialIcons = {
  twitter: {
    name: "Twitter",
    svg: <svg version="1.1" id="svg5" x="0px" y="0px" viewBox="0 0 1668.56 1221.19" className="w-9 h-9"><g id="layer1" transform="translate(52.390088,-25.058597)"><path id="path1009" d="M283.94,167.31l386.39,516.64L281.5,1104h87.51l340.42-367.76L984.48,1104h297.8L874.15,558.3l361.92-390.99 h-87.51l-313.51,338.7l-253.31-338.7H283.94z M412.63,231.77h136.81l604.13,807.76h-136.81L412.63,231.77z"/></g></svg>,
  },
  linkedin: {
    name: "LinkedIn",
    svg: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>,
  },
  github: {
    name: "GitHub",
    svg: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>,
  },
};

const authorSlugs = {
  yonathan: "yonathan",
};

export const authors = [
  {
    slug: authorSlugs.yonathan,
    name: "Yonathan Admasu",
    job: "Educational Content Creator",
    description: "Yonathan is a passionate educator and writer dedicated to providing the best study resources for U.S. citizenship aspirants. He has created numerous successful educational programs tailored to enhancing understanding and memory retention .",
    avatar: yonathanImg,
    socials: [
      {
        name: socialIcons.twitter.name,
        icon: socialIcons.twitter.svg,
        url: "",  // Social media link left empty as requested
      },
      {
        name: socialIcons.linkedin.name,
        icon: socialIcons.linkedin.svg,
        url: "",  // Social media link left empty as requested
      },
      {
        name: socialIcons.github.name,
        icon: socialIcons.github.svg,
        url: "",  // Social media link left empty as requested
      },
    ],
  },
];

// ==================================================================================================================================================================
// BLOG ARTICLES 📚
// ==================================================================================================================================================================

const styles = {
  h2: "text-2xl lg:text-4xl font-bold tracking-tight mb-4 text-base-content",
  h3: "text-xl lg:text-2xl font-bold tracking-tight mb-2 text-base-content",
  p: "text-base-content/90 leading-relaxed",
  ul: "list-inside list-disc text-base-content/90 leading-relaxed",
  li: "list-item",
  code: "text-sm font-mono bg-neutral text-neutral-content p-6 rounded-box my-4 overflow-x-scroll select-all",
  codeInline: "text-sm font-mono bg-base-300 px-1 py-0.5 rounded-box select-all",
};

export const articles = [
  {
    slug: "introducing-civicmaster",
    title: "Introducing CivicMaster to Your Study Routine",
    description: "CivicMaster is revolutionizing the way you prepare for the U.S. Citizenship Test with innovative tools and a user-friendly platform.",
    categories: [
      categories.find((category) => category.slug === categorySlugs.feature),
    ],
    author: authors.find((author) => author.slug === authorSlugs.yonathan),
    publishedAt: "2024-05-07",
    image: {
      src: civicmasterHeroImg,
      urlRelative: "/blog/introducing-civicmaster/header.jpg",
      alt: "CivicMaster's innovative study tools",
    },
    content: (
      <>
        <Image
          src={civicmasterHeroImg}
          alt="CivicMaster's innovative study tools"
          width={700}
          height={500}
          priority={true}
          className="rounded-box"
          placeholder="blur"
        />
        <section>
          <h2 className={styles.h2}>Introduction</h2>
          <p className={styles.p}>
            CivicMaster brings cutting-edge tools to your study sessions, making preparation for the U.S. Citizenship Test more effective and engaging than ever before.
          </p>
        </section>
        <section>
          <h3 className={styles.h3}>1. Create a CivicMaster account</h3>
          <p className={styles.p}>
            Start by visiting CivicMaster and registering for an account. It is quick, easy, and opens up a wealth of resources designed specifically for citizenship preparation.
          </p>
          <ul className={styles.ul}>
            <li className={styles.li}>Access to interactive quizzes</li>
            <li className={styles.li}>In-depth flashcards on U.S. history and government</li>
          </ul>
        </section>
      </>
    ),
  },
];
