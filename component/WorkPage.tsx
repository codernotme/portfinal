'use client';
import { Image } from '@heroui/react';
import { Zap, Star, Clock, Construction, ChevronDown, EyeIcon, X } from 'lucide-react';
import React, { useState } from 'react';
import { Badge } from './badge';

type ProjectStatus = 'beta' | 'completed' | 'in-progress' | 'always-updating';

interface Project {
  id: number;
  title: string;
  description: string;
  websiteLink?: string;
  githubLink?: string;
  content: string;
  image: string;
  tags: string[];
  priority: boolean;
  status: ProjectStatus;
  category: string;
}

const statusConfig: Record<ProjectStatus, { icon: React.ComponentType; text: string; className: string }> = {
  beta: { icon: Zap, text: "Beta", className: "bg-yellow-500 text-yellow-950" },
  completed: { icon: Star, text: "Completed", className: "bg-green-500 text-green-950" },
  "in-progress": { icon: Clock, text: "In Progress", className: "bg-blue-500 text-blue-950" },
  "always-updating": { icon: Construction, text: "Always Updating", className: "bg-purple-500 text-purple-950" },
}

const projects: Project[] = [
  {
    id: 1,
    title: "VYBE",
    description:
      "A unique social platform that empowers students, mentors, and communities within colleges to connect meaningfully.",
    websiteLink: "https://vybe-nu.vercel.app/",
    githubLink: "https://github.com/codernotme/vybe",
    content:
      "Designed to foster collaboration, build communities, and facilitate mentorship, VYBE redefines campus social interactions. Click the link below.",
    image: "/img/vybe.png",
    tags: ["Chat App", "Next.js", "Convex", "Clerk"],
    priority: true,
    status: "beta",
    category: "Applications"
  },
  {
    id: 2,
    title: "ECHO",
    description:
      "An online social media platform designed to bring people together in a space where they can post, chat, and connect with others.",
    websiteLink: "https://socialmed-echo.vercel.app/",
    githubLink: "https://github.com/codernotme/echo",
    content:
      "It's a platform that enables users to chat with others, share ideas, and much more. To check out the alpha version, click the link below.",
    image: "/img/echo.png",
    tags: ["Chat App", "Next.js", "Convex", "Clerk"],
    priority: true,
    status: "completed",
    category: "Applications"
  },
  {
    id: 3,
    title: "Chess App",
    description: "Chess game using Python and Pygame.",
    githubLink: "https://github.com/codernotme/chess-app",
    content: "For the project codes, you can click the link below.",
    image: "/img/chessapp.png",
    tags: ["Chess", "Python", "Pygame"],
    priority: true,
    status: "completed",
    category: "Applications"
  },
  {
    id: 4,
    title: "Kirby Game",
    description: "Using Vite and TypeScript.",
    websiteLink: "https://kirby-game-ts.vercel.app/",
    githubLink: "https://github.com/codernotme/kirby-game-ts",
    content:
      "This is a simple Kirby-themed game built using Vite for bundling, Vanilla TypeScript for the game logic, and type-checking.",
    image: "/img/kirby.png",
    tags: ["Vite", "TypeScript", "Game Dev", "Vanilla JS", "Interactive", "Animation"],
    priority: false,
    status: "completed",
    category: "Web Development"
  },
  {
    id: 5,
    title: "Allocam",
    description: "Omegle Substitute made using vite and react.",
    websiteLink: "https://allocam.vercel.app/",
    githubLink: "https://github.com/codernotme/allocam",
    content:
      "Allocam is a real-time camera and streaming application designed for secure and responsive live video interactions. Built with Vite, Node.js, and Socket.IO, Allocam ensures minimal delay and a user-friendly interface.",
    image: "/img/allocam.png",
    tags: ["Omegle", "GitHub", "JavaScript", "HTML", "CSS", "Open Source"],
    priority: true,
    status: "in-progress",
    category: "Web Development"
  },
  {
    id: 6,
    title: "AlgoMitra",
    description: "AlgoMitra is a visually engaging, interactive educational tool aimed at making algorithm learning enjoyable and accessible.",
    websiteLink: "https://algomitra.vercel.app/",
    githubLink: "https://github.com/codernotme/AlgoMitra",
    content: "AlgoMitra is a visually engaging, interactive educational tool aimed at making algorithm learning enjoyable and accessible. Built with Next.js and TypeScript, and powered by NextUI, AlgoMitra offers seamless visualizations that allow users to intuitively explore a wide variety of algorithms, from basic sorting and searching to advanced dynamic programming and graph traversal techniques.",
    image: "/img/algomitra.png",
    tags: ["Algorithms", "Next.js", "GitHub", "JavaScript", "HTML", "CSS", "Open Source"],
    priority: false,
    status: "in-progress",
    category: "Web Development"
  },
  {
    id: 7,
    title: "GitHub Profile",
    description: "GitHub Profile.",
    githubLink: "https://github.com/codernotme",
    content: "If you want to see the codes and my other projects, you can check out my GitHub profile.",
    image: "/img/github.png",
    tags: ["GitHub", "Profile", "Open Source", "Developer", "Repositories", "Code Sharing"],
    priority: false,
    status: "always-updating",
    category: "Web Design"
  },
]

interface WorkProps {
  className?: string;
}

export default function Work({ className = "" }: WorkProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <article className={`portfolio ${className}`} data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          <li className="filter-item"><button className="active" data-filter-btn>All</button></li>
          <li className="filter-item"><button data-filter-btn>Web Design</button></li>
          <li className="filter-item"><button data-filter-btn>Applications</button></li>
          <li className="filter-item"><button data-filter-btn>Web Development</button></li>
        </ul>

        <div className="filter-select-box">
          <button className="filter-select" data-select>
            <div className="select-value" data-select-value>Select Category</div>
            <div className="select-icon">
              <ChevronDown />
            </div>
          </button>

          <ul className="select-list">
            <li className="select-item"><button data-select-item>All</button></li>
            <li className="select-item"><button data-select-item>Web Design</button></li>
            <li className="select-item"><button data-select-item>Applications</button></li>
            <li className="select-item"><button data-select-item>Web Development</button></li>
          </ul>
        </div>

        <ul className="project-list">
          {projects.map(project => (
            <li key={project.id} className="project-item active" data-filter-item data-category={project.category}>
              <div onClick={() => setSelectedProject(project)}>
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <EyeIcon />
                  </div>
                  <Image src={project.image} alt={project.title} loading="lazy" />
                </figure>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.description}</p>
                <div className={`status ${statusConfig[project.status].className}`}>
                  {React.createElement(statusConfig[project.status].icon)}
                  {statusConfig[project.status].text}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedProject(null)}>
              <X className="h-6 w-6" />
            </button>

            <div className="modal-header flex justify-center items-center space-x-2">
              <div className="modal-icon">{React.createElement(statusConfig[selectedProject.status].icon)}</div>
              <h2 className="text-xl font-bold">{selectedProject.title}</h2>
            </div>

            <div className="mt-4">
              <p className="text-gray-300">{selectedProject.content}</p>
            </div>

            <div className="mt-4">
              <Image src={selectedProject.image} alt={selectedProject.title} width={500} height={300} className="rounded-lg shadow-md" />
            </div>

            <div className="mt-4 flex justify-center space-x-4">
              {selectedProject.websiteLink && (
                <a href={selectedProject.websiteLink} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                  Visit Website
                </a>
              )}
              {selectedProject.githubLink && (
                <a href={selectedProject.githubLink} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
              )}
            </div>

            <div className="mt-4 flex flex-wrap gap-2 justify-center">
              {selectedProject.tags.map((tag, index) => (
                <Badge key={index} variant="default" className="badge">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      )}
    </article>
  );
}