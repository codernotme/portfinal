import React from "react"; // Import React
import { motion } from "framer-motion";

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
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center text-foreground"
        >
          Tech Stack
        </motion.h2>
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {techStack.map((tech, index) => (
            <motion.li
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.1, rotate: 2 }}
              className="px-4 py-2 bg-primary/10 text-primary rounded-md shadow-md border border-primary/20 hover:bg-primary/20 hover:shadow-lg"
            >
              {tech}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
