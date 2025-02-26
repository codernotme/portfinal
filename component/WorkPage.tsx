'use client';
import { Image, Card, CardHeader, CardBody, CardFooter} from '@heroui/react';
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
      "Designed to foster collaboration, build communities, and facilitate mentorship, VYBE redefines campus social interactions.",
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
      "It's a platform that enables users to chat with others, share ideas, and much more. To check out the alpha version,",
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
    content: "For the project codes, you can",
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
  const [filter, setFilter] = useState<string>("All");

  const filteredProjects = filter === "All" ? projects : projects.filter(project => project.category === filter);

  return (
    <article className={`portfolio ${className}`} data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Works</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          <li className="filter-item"><button className={filter === "All" ? "active" : ""} onClick={() => setFilter("All")}>All</button></li>
          <li className="filter-item"><button className={filter === "Web Design" ? "active" : ""} onClick={() => setFilter("Web Design")}>Web Design</button></li>
          <li className="filter-item"><button className={filter === "Applications" ? "active" : ""} onClick={() => setFilter("Applications")}>Applications</button></li>
          <li className="filter-item"><button className={filter === "Web Development" ? "active" : ""} onClick={() => setFilter("Web Development")}>Web Development</button></li>
        </ul>

        <div className="filter-select-box">
          <button className="filter-select" data-select>
            <div className="select-value" data-select-value>{filter}</div>
            <div className="select-icon">
              <ChevronDown />
            </div>
          </button>

          <ul className="select-list">
            <li className="select-item"><button onClick={() => setFilter("All")}>All</button></li>
            <li className="select-item"><button onClick={() => setFilter("Web Design")}>Web Design</button></li>
            <li className="select-item"><button onClick={() => setFilter("Applications")}>Applications</button></li>
            <li className="select-item"><button onClick={() => setFilter("Web Development")}>Web Development</button></li>
          </ul>
        </div>

        <ul className="project-list">
          {filteredProjects.map(project => (
            <li key={project.id} className="project-item active" data-filter-item data-category={project.category}>
              <div onClick={() => setSelectedProject(project)}>
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <EyeIcon />
                  </div>
                  <Image src={project.image} alt={project.title} loading="lazy" />
                </figure>
                <h3 className="service-item-title h4">{project.title}</h3>
                <p className="service-item-text">{project.description}</p>
                <div className={`status ion-icon ${statusConfig[project.status].className}`}>
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
          <Card className="modal-content1" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn1" onClick={() => setSelectedProject(null)}>
              <X className="h-6 w-6" />
            </button>

            <CardHeader className="modal-header1 flex justify-center items-center space-x-2">
              <div className="modal-icon1">{React.createElement(statusConfig[selectedProject.status].icon)}</div>
              <h2 className="service-item-title">{selectedProject.title}</h2>
            </CardHeader>

            <CardBody>
              <div className="mt-4">
                <Image src={selectedProject.image} alt={selectedProject.title} width={500} height={300} className="proj-img" />
              </div>

              <div className='service-item-text proj'>
                <p className="text-gray-300">{selectedProject.content}</p>
              </div>
              <div className="service-item-text tech">
                <span>Tech Stacks</span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2 badge-1 justify-center">
                {selectedProject.tags.map((tag, index) => (
                  <Badge key={index} className="service-item-text badge">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardBody>

            <CardFooter className="card-foot">
              {selectedProject.websiteLink && (
                <button
                  onClick={() => window.open(selectedProject.websiteLink, "_blank")}
                  className='btn-web'
                >
                  Visit Website
                </button>
              )}
              {selectedProject.githubLink && (
                <button
                  onClick={() => window.open(selectedProject.githubLink, "_blank")}
                  className='btn-git'
                >
                  View on GitHub
                </button>
              )}
            </CardFooter>
          </Card>
        </div>
      )}
    </article>
  );
}