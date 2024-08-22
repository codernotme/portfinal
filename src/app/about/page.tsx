/* eslint-disable @next/next/no-img-element */

import TechStack from "./TechStack";
import WorkExperience from "./WorkExperience";

/* eslint-disable react/no-unescaped-entities */
export default function About() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center"
      id="about"
    >
      {/*<div className="profile-container">
        <img
          src="./images/myimage.png"
          alt="Aryan Bajpai"
          className="profile-picture"
        />
      </div>*/}
      <div className="profile-container">
        <div className="about-text">
          <p className="description">
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
