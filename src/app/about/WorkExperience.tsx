"use client"

import { Avatar } from "@heroui/react"
import { ChevronDown } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

const workExperience = [
  {
    company: "Ignitia Web Team",
    role: "Frontend Developer",
    duration: "April 2024",
    responsibilities: [
      "Created the Ignitia 2k24 website for the college fest.",
      "Learned teamwork, industry practices, and meeting client expectations.",
      "Technologies used: NextJS, MongoDB.",
    ],
    logo: "/img/ignitia.png",
  },
  {
    company: "Internshala",
    role: "Internshala Student Partner",
    duration: "June 2023 - August 2023",
    responsibilities: [
      "Contributed to business marketing by promoting deals and products through various marketing activities.",
      "Engaged in strategic planning and hands-on execution.",
      "Convinced peers and college colleagues to purchase products and avail exciting deals.",
    ],
    logo: "/img/internshala.png",
  },
]

export default function WorkExperience() {
  return (
    <div className="max-w-2xl mx-auto">
      <h3 className="text-3xl font-bold mb-6 text-center">Work Experience</h3>
      <div className="space-y-4">
        {workExperience.map((experience) => (
          <Collapsible key={experience.company}>
            <CollapsibleTrigger className="flex justify-between items-center w-full p-4 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors duration-200">
              <div className="flex items-center space-x-4">
                <Avatar className="w-12 h-12" src={experience.logo || "/placeholder.svg"} />
                <div className="text-left">
                  <h4 className="text-xl font-semibold">{experience.company}</h4>
                  <p className="text-sm text-muted-foreground">{experience.role}</p>
                  <p className="text-xs text-muted-foreground">{experience.duration}</p>
                </div>
              </div>
              <ChevronDown className="w-5 h-5 text-muted-foreground transition-transform duration-200" />
            </CollapsibleTrigger>
            <CollapsibleContent className="px-4 pt-2 pb-4">
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                {experience.responsibilities.map((task, index) => (
                  <li key={index}>{task}</li>
                ))}
              </ul>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    </div>
  )
}

