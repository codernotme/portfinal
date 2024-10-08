import React from "react"; // Import React

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
  "MySQL",
  "MongoDB",
  "Convex",
  "Git/GitHub",
  "Figma",
  "Vercel",
  "AWS",
  "Google Cloud",
  "Google APIs",
  "Meta APIs",
  "Prompt Engineering",
  "Clerk",
  "Clerk Next.js",
  "Clerk UI",
  "Clerk Auth"
];

export default function TechStack() {
  return (
    <section className="py-16 bg-gradient-to-b from-background/50 to-background/80">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
          Tech Stack
        </h2>
        <ul className="flex flex-wrap justify-center gap-4">
          {techStack.map((tech, index) => (
            <li
              key={tech}
              className="px-4 py-2 bg-primary/10 text-primary rounded-md shadow-md border border-primary/20 hover:bg-primary/20 hover:shadow-lg transition-transform duration-300 ease-in-out"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
