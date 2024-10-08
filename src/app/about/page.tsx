import React from "react"; // Make sure to import React
import TechStack from "./TechStack";
import WorkExperience from "./WorkExperience";

export default function About() {
  return (
    <main
      className="flex flex-col items-center justify-center py-12 bg-gradient-to-b from-background/50 to-background/80"
      id="about"
    >
      <div className="flex flex-col items-center justify-center text-center mb-12">
        {/* About Text */}
        <div className="max-w-xl text-center px-5">
          <p className="text-lg leading-relaxed text-foreground">
            A dedicated Full Stack Developer with a passion for creating
            seamless and intuitive user experiences. Currently pursuing a B.Tech
            in Computer Science with a specialization in Artificial
            Intelligence, I am deeply invested in the intersection of technology
            and creativity. My journey in web development is driven by a love
            for solving complex problems and bringing innovative ideas to life.
          </p>
        </div>
      </div>

      {/* TechStack and WorkExperience sections */}
      <TechStack />
      <WorkExperience />
    </main>
  );
}
