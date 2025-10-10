import React from "react";

const About = () => {
  return (
    <section className="container about-page">
      <h2 className="text-3xl mb-4">About me</h2>
      <p>
        I'm Ernest Ayodele Fakokunde  a fullstack developer who builds performant,
        responsive web applications. I focus on clean code, maintainable architecture and strong UX.
      </p>
      <ul className="about-list space-y-5 font-bold">
        <li>Experience: Frontend & Backend</li>
        <li>Skills: HTML, CSS, JavaScript, React, Node</li>
        <li>Location: Abuja, Nigeria</li>
        <li>Email: ernestfakokunde9@gmail.com</li>
      </ul>
    </section>
  );
};

export default About;
