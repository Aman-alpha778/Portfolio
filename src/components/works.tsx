import { Link } from "react-router-dom";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { PROJECT_CATEGORIES } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

type CategoryCardProps = (typeof PROJECT_CATEGORIES)[number] & {
  index: number;
};

const CategoryCard = ({
  index,
  slug,
  shortTitle,
  description,
  image,
}: CategoryCardProps) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <Link to={`/projects/${slug}`} className="block sm:w-[360px] w-full">
      <Tilt
        options={{
          max: 20,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl w-full cursor-pointer"
      >
        <div className="relative w-full h-[230px] overflow-hidden rounded-2xl">
          <img
            src={image}
            alt={shortTitle}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black-200 via-black-200/50 to-transparent" />
          <div className="absolute left-4 right-4 bottom-4">
            <span className="inline-flex rounded-full bg-black/40 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white">
              View Category
            </span>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{shortTitle}</h3>
          <p className="mt-2 text-secondary text-[14px] leading-6">
            {description}
          </p>
        </div>
      </Tilt>
    </Link>
  </motion.div>
);

// Works
export const Works = () => {
  return (
    <SectionWrapper>
      <>
        {/* Title */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Work</p>
          <h2 className={styles.sectionHeadText}>Projects.</h2>
        </motion.div>

        {/* About */}
        <div className="w-full flex">
          <motion.p
            variants={fadeIn(undefined, undefined, 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            Choose a domain to explore focused project samples. Each card opens
            a dedicated gallery where you can later replace the dummy work with
            your real projects.
          </motion.p>
        </div>

        {/* Category Cards */}
        <div className="mt-20 flex flex-wrap gap-7">
          {PROJECT_CATEGORIES.map((category, i) => (
            <CategoryCard
              key={category.slug}
              index={i}
              {...category}
            />
          ))}
        </div>
      </>
    </SectionWrapper>
  );
};
