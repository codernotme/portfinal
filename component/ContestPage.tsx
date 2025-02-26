"use client";
import { Trophy, Award, Medal, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { Badge } from "./badge";

interface ContestProps {
  className?: string;
}

interface Achievement {
  id: number;
  title: string;
  organization: string;
  date: string;
  description: string;
  image: string;
  category: "contest" | "hackathon" | "certification";
  position?: string;
  skills?: string[];
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: "Top 10 Finalist - HackIITK 2k25",
    organization: "IIT Kanpur (C3I Hub)",
    date: "November 2024 - February 2025",
    description:
      "Recognized as a Top 10 Finalist at HackIITK 2k25 for developing an innovative solution using AI and blockchain.",
    image: "/certificates/hackiitk.jpg",
    category: "hackathon",
    position: "Top 10 Finalist",
    skills: ["AI/ML", "Blockchain", "Next.js", "MongoDB"],
  },
  {
    id: 2,
    title: "AWS APAC Solutions Architecture",
    organization: "AWS Forage",
    date: "2024",
    description:
      "Completed AWS APAC Solutions Architecture program, gaining expertise in cloud computing, security, and networking.",
    image: "/certificates/aws-forage.jpg",
    category: "certification",
    skills: ["AWS", "Cloud Computing", "DevOps"],
  },
];

export default function Contest({ className = "" }: ContestProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

  const filteredAchievements = selectedCategory === "all"
    ? achievements
    : achievements.filter(achievement => achievement.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "contest":
        return <Trophy className="achievement-icon" />;
      case "hackathon":
        return <Award className="achievement-icon" />;
      case "certification":
        return <Medal className="achievement-icon" />;
      default:
        return null;
    }
  };

  return (
    <article className={`contests ${className}`} data-page="contests">
      <header>
        <h2 className="h2 article-title text-center achievements-title">Achievements</h2>
      </header>

      {/* Category Filters */}
      <div className="flex justify-center filter-list space-x-3 my-4">
        {["all", "contest", "hackathon", "certification"].map((category) => (
          <button
            key={category}
            className={`achievement-category ${selectedCategory === category ? "bg-purple-500 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Achievements Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 achievements-container">
        {filteredAchievements.map((achievement) => (
          <div
            key={achievement.id}
            className="achievement-item bg-gray-900 text-white p-4 rounded-lg shadow-lg cursor-pointer transition hover:scale-105"
            onClick={() => setSelectedAchievement(achievement)}
          >
            <div className="flex items-center gap-3">
              <div className="achievement-icon">{getCategoryIcon(achievement.category)}</div>
              <div>
                <h3 className="font-semibold text-lg achievement-text">{achievement.title}</h3>
                <p className="text-gray-400">{achievement.organization}</p>
                <p className="text-sm text-gray-500 date">{achievement.date}</p>
              </div>
            </div>
            {achievement.position && (
              <div className="mt-3 flex items-center text-yellow-300">
                <Trophy className="h-4 w-4 mr-2" />
                <span>{achievement.position}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Achievement Modal */}
      {selectedAchievement && (
        <div className="modal-overlay" onClick={() => setSelectedAchievement(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedAchievement(null)}>
              <X className="h-6 w-6" />
            </button>

            <div className="modal-header flex justify-center items-center space-x-2">
              <div className="modal-icon">{getCategoryIcon(selectedAchievement.category)}</div>
              <h2 className="text-xl font-bold">{selectedAchievement.title}</h2>
            </div>

            <div className="mt-4">
              <p className="text-gray-300">{selectedAchievement.description}</p>
            </div>

            {/* Skills Section */}
            {selectedAchievement.skills && (
              <div className="skills-section mt-4">
                <h3 className="text-lg font-semibold">Skills Demonstrated</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedAchievement.skills.map((skill, index) => (
                    <Badge key={index} variant="default" className="badge">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Image Display */}
            <div className="mt-4">
              <Image
                src={selectedAchievement.image}
                alt={selectedAchievement.title}
                width={500}
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
