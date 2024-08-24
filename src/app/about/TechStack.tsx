import React from "react";

const techStack = [
  "JavaScript",
  "React.js",
  "Next.js",
  "MongoDB",
  "Node.js",
  "MySQL",
  "Python",
  "C++",
  "Java",
  "HTML5",
  "CSS3",
  "Git/GitHub",
  // Add more as needed
];

const TechStack: React.FC = () => {
  return (
    <div className="tech-stack-container">
      <h1 className="tech-title">Tech Stack</h1>
      <div className="tech-stack-container fade-in">
        <ul className="tech-list">
          {techStack.map((tech, index) => (
            <li className="tech-item hover-effect" key={index}>
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TechStack;
