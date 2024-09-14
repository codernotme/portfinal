import TechStack from "./TechStack";
import WorkExperience from "./WorkExperience";

export default function About() {
  return (
    <main className="flex flex-col items-center justify-center" id="about">
      <div className="flex flex-col items-center justify-center text-center">
        {/* About Text */}
        <div className="max-w-xl text-center px-5">
          <p className="text-lg leading-relaxed">
            A dedicated Full Stack Developer with a passion for creating
            seamless and intuitive user experiences. Currently pursuing a B.Tech
            in Computer Science with a specialization in Artificial
            Intelligence, I am deeply invested in the intersection of technology
            and creativity. My journey in web development is driven by a love
            for solving complex problems and bringing innovative ideas to life.
          </p>
        </div>
      </div>
      <TechStack />
      <WorkExperience />
    </main>
  );
}
