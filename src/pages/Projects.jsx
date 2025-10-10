import React from "react";
import ProjectCard from "../components/ProjectCard";
import Ecommerce from "../assets/ecommerce.png";
import AyoVR from "../assets/AyoVR.png";
import Zen from "../assets/Zen.png";

const projects = [
  { title: "Zen Ecommerce", desc: "Ecommerce landing page", img: Ecommerce, tags: ["React","Tailwind"] },
  { title: "Ayodele VR", desc: "Interactive VR demo", img: AyoVR, tags: ["React","Tailwind"] },
  { title: "Zen Autos", desc: "Web3 hero", img: Zen, tags: ["React","Tailwind"] },
];

const Projects = () => {
  return (
    <section className="container projects-page">
      <h2>All projects</h2>
      <div className="projects-grid">
        {projects.map(p => <ProjectCard key={p.title} {...p} />)}
      </div>
    </section>
  );
};

export default Projects;
