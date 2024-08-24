import React from "react";

const workExperience = [
  {
    company: "Internshala",
    role: "Internshala Student Partner",
    duration: "June 2023 - August 2023",
    responsibilities: [
      "Contributed to business marketing by promoting deals and products through various marketing activities.",
      "Engaged in strategic planning and hands-on execution.",
      "Convinced peers and college colleagues to purchase products and avail exciting deals.",
    ],
  },
  {
    company: "Ignitia Web Team",
    role: "Frontend Lead",
    duration: "April 2024",
    responsibilities: [
      "Created the Ignitia 2k24 website for the college fest.",
      "Learned teamwork, industry practices, and meeting client expectations.",
      "Technologies used: NextJS, MongoDB.",
    ],
  },
  // Add more experiences as needed
];

const WorkExperience: React.FC = () => {
  return (
    <div className="work-experience-container fade-in">
      <h1 className="work-title">Work Experience</h1>
      <div className="experience-cards">
        {workExperience.map((experience, index) => (
          <div className="experience-card hover-effect" key={index}>
            <h2 className="company-name">{experience.company}</h2>
            <h3 className="role">{experience.role}</h3>
            <p className="duration">{experience.duration}</p>
            <ul className="responsibilities">
              {experience.responsibilities.map((task, taskIndex) => (
                <li key={taskIndex}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
