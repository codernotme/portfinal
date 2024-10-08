import React from "react";
import { Avatar } from "@nextui-org/avatar";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/components/ui/collapsible";

const workExperience = [
  {
    company: "Ignitia Web Team",
    role: "Frontend Developer",
    duration: "April 2024",
    responsibilities: [
      "Created the Ignitia 2k24 website for the college fest.",
      "Learned teamwork, industry practices, and meeting client expectations.",
      "Technologies used: NextJS, MongoDB."
    ],
    logo: "/img/ignitia.png"
  },
  {
    company: "Internshala",
    role: "Internshala Student Partner",
    duration: "June 2023 - August 2023",
    responsibilities: [
      "Contributed to business marketing by promoting deals and products through various marketing activities.",
      "Engaged in strategic planning and hands-on execution.",
      "Convinced peers and college colleagues to purchase products and avail exciting deals."
    ],
    logo: "/img/internshala.png"
  }
];

const WorkExperience: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8 text-center">Work Experience</h1>
      <div className="space-y-6">
        {workExperience.map((experience, index) => (
          <Collapsible key={index}>
            <CollapsibleTrigger asChild>
              <div className="flex justify-between items-center p-4 rounded-lg cursor-pointer transition-transform duration-200 hover:bg-gray-800">
                <div className="flex items-center space-x-4">
                  <Avatar src={experience.logo} size="md" />
                  <div>
                    <h2 className="text-xl font-bold">{experience.company}</h2>
                    <h3 className="text-lg text-gray-400">{experience.role}</h3>
                    <p className="text-sm text-gray-500">
                      {experience.duration}
                    </p>
                  </div>
                </div>
                <ChevronDownIcon className="text-gray-400 transition-transform duration-200 [aria-expanded='true']:rotate-180" />
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent className="bg-secondary rounded-lg p-4">
              <ul className="pl-6 mt-2 list-disc">
                {experience.responsibilities.map((task, taskIndex) => (
                  <li key={taskIndex} className="text-gray-300">
                    {task}
                  </li>
                ))}
              </ul>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
