"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Сайт-портфолио на React",
    description: "Портфолио с моими работами",
    image: "/images/projects/portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/EredinHawk/portfolio",
    previewUrl: "/projects/portfolio",
  },
  {
    id: 2,
    title: "Backend Roadmap",
    description: "Дорожная карта по которой я обучаюсь",
    image: "/images/projects/roadmap.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/EredinHawk?tab=repositories",
    previewUrl: "https://roadmap.sh/backend",
  },
  {
    id: 3,
    title: "Проектирование БД",
    description: "Проетирование базы данных (В разработке)",
    image: "/images/projects/BD.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/EredinHawk/data_base",
    previewUrl: "/projects/database",
  },
  {
    id: 4,
    title: "API",
    description: "(В планах)",
    image: "/images/projects/API.jpg",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "/projects/notstarted",

  },
  {
    id: 5,
    title: "Тестирование",
    description: "(В планах)",
    image: "/images/projects/Testing.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/projects/notstarted",
  },
  {
    id: 6,
    title: "Кэширование",
    description: "(В планах)",
    image: "/images/projects/Caching.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/EredinHawk/Caching",
    previewUrl: "/projects/notstarted",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="mb-12">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Мои работы
      </h2>

      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
      <div id="email">

      </div>
    </section>
  );
};

export default ProjectsSection;
