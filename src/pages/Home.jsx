import React from "react";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import ContactForm from "../components/ContactForm";

// Import images from src/assets so Vite can bundle them
import Ecommerce from "../assets/ecommerce.png";
import AyoVR from "../assets/AyoVR.png";
import Zen from "../assets/Zen.png";

const projects = [
  { title: "Zen autos", desc: "Logistics landing page", img: Zen, tags: ["React","Tailwind"] },
  { title: "Ayodele-store", desc: "E-commerce store", img: Ecommerce, tags: ["React","Tailwind", "Firebase"] },
  { title: "Futuristic.io", desc: "Web3 hero", img: AyoVR, tags: ["React","Tailwind"] },
];

const Home = () => {
  return (
    <>
      <Hero />
      <section id="projects" className="container projects-section">
        <h2 className="text-2xl mb-4 font-bold tracking-wide">Selected projects</h2>
        <div className="projects-grid">
          {projects.map(p => <ProjectCard key={p.title} {...p} />)}
        </div>
      </section>

      <section className="container contact-section">
        <div className="contact-left">
          <h3>Interested in working together?</h3>
          <p>Reach out and let's build something great.</p>
        </div>
        <div className="contact-right">
          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default Home;
