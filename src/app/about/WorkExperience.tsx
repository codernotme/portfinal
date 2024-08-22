import React from "react";
import { motion } from "framer-motion"; // For animations
const workExperience = [
  {
    company: "Company Name",
    role: "Full Stack Developer",
    duration: "June 2022 - Present",
    responsibilities: [
      "Developed and maintained web applications using React and Node.js.",
      "Collaborated with cross-functional teams to define, design, and ship new features.",
      "Optimized applications for maximum speed and scalability.",
      "Integrated APIs and worked on database management.",
    ],
  },
  {
    company: "Previous Company",
    role: "Backend Developer",
    duration: "January 2021 - May 2022",
    responsibilities: [
      "Designed and implemented RESTful APIs for client applications.",
      "Managed databases and optimized queries for better performance.",
      "Worked closely with frontend developers to integrate APIs.",
      "Participated in code reviews and provided mentorship to junior developers.",
    ],
  },
  // Add more experiences as needed
];
const WorkExperience: React.FC = () => {
  return (
    <motion.div
      className="work-experience-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1 className="tech-title">Work Experience</motion.h1>
      <motion.div className="experience-cards">
        {workExperience.map((experience, index) => (
          <motion.div
            className="experience-card"
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h2 className="company-name">{experience.company}</h2>
            <h3 className="role">{experience.role}</h3>
            <p className="duration">{experience.duration}</p>
            <ul className="responsibilities">
              {experience.responsibilities.map((task, taskIndex) => (
                <li key={taskIndex}>{task}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default WorkExperience;
