import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";

import {
  CATEGORY_PROJECTS,
  PROJECT_CATEGORIES,
  type ProjectCategory,
} from "../constants";
import { styles } from "../styles";
import { cn } from "../utils/lib";
import { fadeIn, textVariant } from "../utils/motion";

const DomainHighlights = [
  "Curated case-study layout",
  "Dummy projects ready to replace",
  "Large visual preview cards",
] as const;

const ProjectPreviewCard = ({
  project,
  index,
}: {
  project: (typeof CATEGORY_PROJECTS)[ProjectCategory["slug"]][number];
  index: number;
}) => (
  <motion.article
    variants={fadeIn("up", "spring", index * 0.15, 0.75)}
    className="group h-full"
  >
    <div className="relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-tertiary p-5 shadow-card">
      <div className="relative h-[260px] overflow-hidden rounded-[22px]">
        <img
          src={project.image}
          alt={project.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black-200 via-black-200/40 to-transparent" />
        <div className="absolute left-5 top-5">
          <span className="inline-flex rounded-full border border-white/20 bg-black/30 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white">
            Placeholder Project
          </span>
        </div>
      </div>

      <div className="mt-6 flex flex-1 items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-[24px] font-bold text-white">{project.name}</h3>
          <p className="mt-3 text-[14px] leading-6 text-secondary">
            {project.description}
          </p>
        </div>
        <div className="hidden rounded-full border border-white/10 px-3 py-2 text-xs text-secondary sm:block">
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <p
            key={`${project.name}-${tag.name}`}
            className={cn(tag.color, "text-[14px]")}
          >
            #{tag.name}
          </p>
        ))}
      </div>
    </div>
  </motion.article>
);

export const ProjectsPage = () => {
  const { slug } = useParams();
  const category = PROJECT_CATEGORIES.find((item) => item.slug === slug);

  if (!category) {
    return (
      <div className="min-h-screen bg-primary px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <p className={styles.sectionSubText}>Projects</p>
          <h1 className={styles.sectionHeadText}>Category not found.</h1>
          <Link
            to="/"
            className="mt-8 inline-flex rounded-xl bg-tertiary px-5 py-3 text-white"
          >
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  const projects = CATEGORY_PROJECTS[category.slug];

  return (
    <div className="min-h-screen bg-primary">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-16">
        <motion.section
          variants={textVariant()}
          initial="hidden"
          animate="show"
          className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0d0b1f] p-8 sm:p-12"
        >
          <div className="absolute inset-0 opacity-40">
            <div className="absolute -left-16 top-0 h-56 w-56 rounded-full bg-fuchsia-600/20 blur-3xl" />
            <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
          </div>

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <Link
                to="/#work"
                className="inline-flex items-center rounded-full border border-secondary/30 px-4 py-2 text-sm text-secondary transition hover:border-secondary hover:text-white"
              >
                Back to projects
              </Link>

              <p className={cn(styles.sectionSubText, "mt-8")}>
                Selected Domain
              </p>
              <h1 className={cn(styles.sectionHeadText, "mt-2 max-w-4xl")}>
                {category.title}
              </h1>
              <p className="mt-5 max-w-3xl text-[17px] leading-[30px] text-secondary">
                These are showcase placeholders for the {category.shortTitle}{" "}
                domain. Swap the titles, copy, and images later with your real
                work and this layout will still hold up cleanly.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {DomainHighlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-black-200/60 p-4">
              <div className="relative h-[320px] overflow-hidden rounded-[22px]">
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs uppercase tracking-[0.24em] text-secondary">
                    Featured Direction
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-white">
                    {category.shortTitle}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          variants={fadeIn(undefined, undefined, 0.2, 1)}
          initial="hidden"
          animate="show"
          className="mt-16"
        >
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className={styles.sectionSubText}>Project Gallery</p>
              <h2 className="text-[34px] font-black text-white sm:text-[42px]">
                Placeholder Work Samples
              </h2>
            </div>
            <p className="max-w-xl text-[15px] leading-7 text-secondary">
              Use these cards as a starter grid. You can replace each image and
              description later without needing to rebuild the layout.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectPreviewCard
                key={`${category.slug}-${project.name}`}
                project={project}
                index={index}
              />
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};
