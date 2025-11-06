import React from "react";
import ProjectCard from "../components/ProjectCard";
import AyoVR from "../assets/AyoVR.png";
import Zen from "../assets/Zen.png";
import swiftdrop from "../assets/swiftdrop.png";
import cocacola from "../assets/cocacola.png";
const projects = [
  { title: "Zen Ecommerce", desc: "Tansport logistic landing pagen", img: swiftdrop, tags: ["React","Tailwind"] },
  { title: "Ayodele VR", desc: "Interactive VR demo", img: AyoVR, tags: ["React","Tailwind"] },
  { title: "Zen Autos", desc: "Web3 hero", img: Zen, tags: ["React","Tailwind"] },
  {title:"Coca-cola", desc:"Thrilling Coca-cola UI", img:cocacola, tags:["React","Tailwind"], href:"https://coca-cola-three.vercel.app/" }
];

const Projects = () => {
  return (
    <section className="container projects-page">
      <h2 className="text-3xl font-bold tracking-wide mb-4">All projects</h2>
      <div className="projects-grid">
        {projects.map(p => <ProjectCard key={p.title} {...p} />)}
      </div>
    </section>
  );
};

export default Projects;
