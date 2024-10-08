import React from "react"; // Make sure to import React
import TechStack from "./TechStack";
import WorkExperience from "./WorkExperience";
import { motion } from "framer-motion";

export default function About() {
  return (
    <main
      className="flex flex-col items-center justify-center py-12 bg-gradient-to-b from-background/50 to-background/80"
      id="about"
    >
      <motion.div
        className="flex flex-col items-center justify-center text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* About Text */}
        <div className="max-w-xl text-center px-5">
          <motion.p
            className="text-lg leading-relaxed text-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            A dedicated Full Stack Developer with a passion for creating
            seamless and intuitive user experiences. Currently pursuing a B.Tech
            in Computer Science with a specialization in Artificial
            Intelligence, I am deeply invested in the intersection of technology
            and creativity. My journey in web development is driven by a love
            for solving complex problems and bringing innovative ideas to life.
          </motion.p>
        </div>
      </motion.div>

      {/* TechStack and WorkExperience sections */}
      <TechStack />
      <WorkExperience />
    </main>
  );
}
