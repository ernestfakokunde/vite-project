import React from "react";
import ZenImg from "../assets/Zen.png";

const Hero = () => {
  return (
    <section className="hero container">
      <div className="hero-left">
        <h1>Hi, I'm Ernest  I build fast, elegant web experiences.</h1>
        <p className="lead">
          FullStack developer focused on clean architecture, responsive UI and
          performant frontends. HTML  CSS  JavaScript  React
        </p>
        <div className="hero-actions">
          <a className="btn primary" href="#projects">See Projects</a>
          <a className="btn ghost" href="mailto:ernestfakokunde9@gmail.com">Contact</a>
        </div>
      </div>
      <div className="hero-right" aria-hidden>
        <div className="hero-card">
          <div className="card-image">
            <img src={ZenImg} alt="Example project" />
          </div>
          <div className="card-meta mt-3">
            <h4 className="font-bold text-2xl">Zen autos</h4>
            <p>Logistics landing page  HTML/CSS/JS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
