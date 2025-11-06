import React from "react";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import ContactForm from "../components/ContactForm";

// Import images from src/assets so Vite can bundle them
import AyoVR from "../assets/AyoVR.png";
import Zen from "../assets/Zen.png";
import swiftdrop from "../assets/swiftdrop.png";
import cocacola from "../assets/cocacola.png";

const projects = [
  { title: "Zen autos", desc: "Logistics landing page", img: Zen, tags: ["React","Tailwind"] },
  { title: "Transport logistic page", desc: "swift-drop", img: swiftdrop, tags: ["React","Tailwind", "Firebase"] },
  { title: "SwiftDrop", desc: "Transport logistic page", img: swiftdrop, tags: ["React","Tailwind", "Firebase"] },
  { title: "Futuristic.io", desc: "Web3 hero", img: AyoVR, tags: ["React","Tailwind"] },
  {title:"Coca-cola", desc:"Thrilling Coca-cola UI", img:cocacola, tags:["React","Tailwind"] }
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
          <h3>Full‑Stack web development</h3>
          <p>
            I build production‑ready web applications with clean, component-driven frontends and reliable backend APIs. I focus on performance, accessibility and maintainability, and I enjoy turning product ideas into polished user experiences.
          </p>

          <ul className="about-list">
            <li>Ship fast: prototypes to production with clear priorities and pragmatic architecture.</li>
            <li>Design-minded: polished UI powered by React + Tailwind for consistent design systems.</li>
            <li>APIs & data: reliable Express.js backends and integrations with Firebase or MongoDB.</li>
          </ul>

          <div className="skills" aria-hidden>
            <span className="skill">React</span>
            <span className="skill">Tailwind CSS</span>
            <span className="skill">Express.js</span>
            <span className="skill">Firebase</span>
            <span className="skill">MongoDB</span>
            <span className="skill">TypeScript</span>
            <span className="skill">Vite</span>
          </div>

          <p className="about-cta">Interested? View my projects or send a quick note — I typically respond within 48 hours.</p>
          <div className="hero-actions" style={{marginTop:'.6rem'}}>
            <a className="btn primary" href="#projects">View work</a>
            <a className="btn ghost" href="mailto:ernestfakokunde9@gmail.com">Hire me</a>
          </div>
        </div>
        <div className="contact-right">
          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default Home;
