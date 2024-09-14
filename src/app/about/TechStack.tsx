import React from "react";

const techStack = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "MySql",
  "MongoDB",
  "Convex",
  "Git/GitHub",
  "Figma",
  "Vercel",
  "Aws",
  "Google Cloud",
  "Google Apis",
  "Meta Apis",
  "Prompt Engineering",
  "Clerk",
  "Clerk Next.js",
  "Clerk UI",
  "Clerk Auth"
];

const TechStack: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center my-10">
      <h1 className="text-3xl mb-8">Tech Stack</h1>
      <ul className="flex flex-wrap justify-center gap-4">
        {techStack.map((tech, index) => (
          <li
            key={index}
            className="px-4 py-2  rounded-md shadow-md transform transition-transform hover:scale-105"
            style={{ border: "1px solid" }}
          >
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechStack;
