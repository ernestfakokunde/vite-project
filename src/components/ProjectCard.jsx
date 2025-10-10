import React, { useState } from "react";

// Simple inline SVG placeholder (no extra asset file needed)
const PLACEHOLDER_SVG = `data:image/svg+xml;utf8,${encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='480' viewBox='0 0 800 480'>
    <rect width='100%' height='100%' fill='%23151717' />
    <text x='50%' y='50%' fill='%239aa3b2' font-family='Arial, Helvetica, sans-serif' font-size='20' dominant-baseline='middle' text-anchor='middle'>Image not available</text>
  </svg>`
)}`;

const ProjectCard = ({ title, desc, img, tags, href }) => {
  // img is usually a string URL when imported via Vite (import Foo from '../assets/foo.png')
  const initialSrc = img || PLACEHOLDER_SVG;
  const [src, setSrc] = useState(initialSrc);
  const [errored, setErrored] = useState(false);

  const handleError = () => {
    if (!errored) {
      setErrored(true);
      setSrc(PLACEHOLDER_SVG);
    }
  };

  return (
    <article className="project-card" aria-labelledby={`proj-${title.replace(/\s+/g, "-")}`}>
      <div className="project-img">
        <img
          src={src}
          alt={title}
          loading="lazy"
          onError={handleError}
          style={{ width: '100%', height: '160px', objectFit: 'cover' }}
        />
      </div>
      <div className="project-body">
        <h3 id={`proj-${title.replace(/\s+/g, "-")}`}>{title}</h3>
        <p>{desc}</p>
        <div className="tags">
          {tags?.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
        <div className="project-actions">
          <a href={href ?? "#"} className="btn small">View</a>
          <a href={href ?? "#"} className="btn small ghost">Source</a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
