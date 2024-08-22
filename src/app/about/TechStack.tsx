import React from "react";
import { motion } from "framer-motion"; // For animations
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
    <motion.div
      className="tech-stack-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1 className="tech-title">My Tech Stack</motion.h1>
      <motion.ul className="tech-list">
        {techStack.map((tech, index) => (
          <motion.li
            className="tech-item"
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {tech}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default TechStack;
