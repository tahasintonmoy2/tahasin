"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Next JS Ecommerce App",
    description: "A Modern Ecommerce App",
    image: "/assets/projects/ecommerce.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/tahasintonmoy2?tab=repositories",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Finance Website",
    description: "Finance Website Landing Page",
    image: "/assets/projects/finance-website-landing-page.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tahasintonmoy2?tab=repositories",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Ecommerce Website",
    image: "/assets/projects/original.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tahasintonmoy2?tab=repositories",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Sphere App",
    description: "Sphere Mobile Application",
    image: "/assets/projects/sphere-mobile-app.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/tahasintonmoy2?tab=repositories",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Sphere Web",
    description: "Sphere Web Application",
    image: "/assets/projects/sphere.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tahasintonmoy2?tab=repositories",
    previewUrl: "/",
  },
];

const Projects = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="mx-6 mt-52">
      <h2 className="text-center text-4xl font-bold mt-4 mb-6 md:mb-12">
        Projects
      </h2>
      <div className=" mx-4 flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
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
    </section>
  );
};

export default Projects;