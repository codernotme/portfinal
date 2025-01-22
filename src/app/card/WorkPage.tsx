"use client"

import { useState } from "react"
import { Button } from "@heroui/react"
import { Badge } from "@/components/ui/badge"
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/react"
import { motion } from "framer-motion"
import { ExternalLink, Github, Star, Clock, Zap, Construction, LucideIcon } from "lucide-react"
import Image from "next/image"
import React from "react"
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@heroui/react"

type ProjectStatus = 'beta' | 'completed' | 'in-progress' | 'always-updating';

interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
  content: string;
  image: string;
  tags: string[];
  priority: boolean;
  status: ProjectStatus;
}

const statusConfig: Record<ProjectStatus, { icon: LucideIcon; text: string; className: string }> = {
  beta: { icon: Zap, text: "Beta", className: "bg-yellow-500 text-yellow-950" },
  completed: { icon: Star, text: "Completed", className: "bg-green-500 text-green-950" },
  "in-progress": { icon: Clock, text: "In Progress", className: "bg-blue-500 text-blue-950" },
  "always-updating": { icon: Construction, text: "Always Updating", className: "bg-purple-500 text-purple-950" },
}

const projects: Project[] = [
  {
    id: 1,
    title: "ECHO",
    description:
      "An online social media platform designed to bring people together in a space where they can post, chat, and connect with others.",
    link: "https://socialmed-echo.vercel.app",
    content:
      "It's a platform that enables users to chat with others, share ideas, and much more. To check out the alpha version, click the link below.",
    image: "/img/echo.png",
    tags: ["Chat App", "Next.js", "Convex", "Clerk"],
    priority: true,
    status: "beta",
  },
  {
    id: 2,
    title: "Chess App",
    description: "Chess game using Python and Pygame.",
    link: "https://github.com/codernotme/chess-app",
    content: "For the project codes, you can click the link below.",
    image: "/img/chessapp.png",
    tags: ["Chess", "Python", "Pygame"],
    priority: true,
    status: "completed",
  },
  {
    id: 3,
    title: "Kirby Game",
    description: "Using Vite and TypeScript.",
    link: "https://kirby-game-ts.vercel.app/",
    content:
      "This is a simple Kirby-themed game built using Vite for bundling, Vanilla TypeScript for the game logic, and type-checking.",
    image: "/img/kirby.png",
    tags: ["Vite", "TypeScript", "Game Dev", "Vanilla JS", "Interactive", "Animation"],
    priority: false,
    status: "in-progress",
  },
  {
    id: 4,
    title: "Password Manager",
    description: "Password manager using JavaScript.",
    link: "https://codernotme.github.io/password-manager/",
    content:
      "This is a simple password manager built using JavaScript. You can create a new password, update an existing password, or delete passwords.",
    image: "/img/password.png",
    tags: ["Password Manager", "GitHub", "JavaScript", "HTML", "CSS", "Open Source"],
    priority: false,
    status: "completed",
  },
  {
    id: 5,
    title: "Weather App",
    description: "Weather App.",
    link: "https://codernotme.github.io/weather-app/",
    content: "This is a simple weather app built using JavaScript. You can check the weather of any city.",
    image: "/img/weather.png",
    tags: ["Weather App", "GitHub", "JavaScript", "HTML", "CSS", "Open Source"],
    priority: false,
    status: "completed",
  },
  {
    id: 6,
    title: "GitHub Profile",
    description: "GitHub Profile.",
    link: "https://github.com/codernotme",
    content: "If you want to see the codes and my other projects, you can check out my GitHub profile.",
    image: "/img/github.png",
    tags: ["GitHub", "Profile", "Open Source", "Developer", "Repositories", "Code Sharing"],
    priority: false,
    status: "always-updating",
  },
]

export default function Projects() {
  const [modalOpenIndex, setModalOpenIndex] = useState<number | null>(null)

  const handleOpenModal = (index: number) => setModalOpenIndex(index)
  const handleCloseModal = () => setModalOpenIndex(null)

  return (
    <section className="py-12 bg-gradient-to-b from-background/10 via-background/30 to-background/50" id="projects">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col bg-background/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors duration-200">
                <CardHeader className="p-0">
                  <div className="relative h-48 w-full">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-lg"
                    />
                    <div className="absolute top-2 left-2 flex flex-wrap gap-2">
                      {project.priority && (
                        <Badge variant="secondary" className="bg-primary text-primary-foreground">
                          <Star className="w-3 h-3 mr-1" /> Featured
                        </Badge>
                      )}
                      {project.status &&
                        (
                          <Badge className={`flex items-center ${statusConfig[project.status].className}`}>
                          {React.createElement(statusConfig[project.status].icon, { className: "w-3 h-3 mr-1" })}
                          {statusConfig[project.status].text}
                        </Badge>
                        )}
                    </div>
                  </div>
                </CardHeader>
                <CardBody className="flex-grow p-4">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardBody>
                <CardFooter className="p-4">
                  <Button onClick={() => handleOpenModal(index)} className="w-full text-sm">
                    Explore
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {modalOpenIndex !== null && (
          <Modal backdrop="blur" isOpen={true} onClose={handleCloseModal}>
            <ModalContent className="sm:max-w-[425px] max-h-[90vh] overflow-y-auto">
              <ModalHeader className="flex items-center gap-2">
                {projects[modalOpenIndex].title}
                {projects[modalOpenIndex].status && (
                  <Badge className={`${statusConfig[projects[modalOpenIndex].status].className} text-xs`}>
                    {React.createElement(statusConfig[projects[modalOpenIndex].status].icon, { className: "w-3 h-3 mr-1" })}
                    {statusConfig[projects[modalOpenIndex].status].text}
                  </Badge>
                )}
              </ModalHeader>
              <ModalBody>
                <p>{projects[modalOpenIndex].description}</p>
                <div className="relative h-48 w-full mb-4">
                  <Image
                    src={projects[modalOpenIndex].image || "/placeholder.svg"}
                    alt={projects[modalOpenIndex].title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <p className="text-sm text-muted-foreground mb-4">{projects[modalOpenIndex].content}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {projects[modalOpenIndex].tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </ModalBody>
              <ModalFooter className="flex flex-col sm:flex-row justify-between gap-2">
                <Button variant="bordered" onPress={handleCloseModal} className="w-full sm:w-auto">
                  Close
                </Button>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button
                    variant="bordered"
                    onPress={() => window.open(projects[modalOpenIndex].link, "_blank")}
                    className="w-full sm:w-auto"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit Project
                  </Button>
                  <Button
                    variant="bordered"
                    onPress={() =>
                      window.open(
                        `https://github.com/codernotme/${projects[modalOpenIndex].title.toLowerCase().replace(/\s+/g, "-")}`,
                        "_blank",
                      )
                    }
                    className="w-full sm:w-auto"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                </div>
              </ModalFooter>
            </ModalContent>
          </Modal>
        )}
      </div>
    </section>
  )
}

