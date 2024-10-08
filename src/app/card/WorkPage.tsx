"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaStar, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const cards = [
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
    priority: true
  },
  {
    id: 2,
    title: "Chess App",
    description: "Chess game using Python and Pygame.",
    link: "https://github.com/codernotme/chess-app",
    content: "For the project codes, you can click the link below.",
    image: "/img/chessapp.png",
    tags: ["Chess", "Python", "Pygame"],
    priority: true
  },
  {
    id: 3,
    title: "Kirby Game",
    description: "Using Vite and TypeScript.",
    link: "https://kirby-game-ts.vercel.app/",
    content:
      "This is a simple Kirby-themed game built using Vite for bundling, Vanilla TypeScript for the game logic, and type-checking.",
    image: "/img/kirby.png",
    tags: [
      "Vite",
      "TypeScript",
      "Game Dev",
      "Vanilla JS",
      "Interactive",
      "Animation"
    ],
    priority: false
  },
  {
    id: 4,
    title: "Password Manager",
    description: "Password manager using JavaScript.",
    link: "https://codernotme.github.io/password-manager/",
    content:
      "This is a simple password manager built using JavaScript. You can create a new password, update an existing password, or delete passwords.",
    image: "/img/password.png",
    tags: [
      "Password Manager",
      "GitHub",
      "JavaScript",
      "HTML",
      "CSS",
      "Open Source"
    ],
    priority: false
  },
  {
    id: 5,
    title: "Weather App",
    description: "Weather App.",
    link: "https://codernotme.github.io/weather-app/",
    content:
      "This is a simple weather app built using JavaScript. You can check the weather of any city.",
    image: "/img/weather.png",
    tags: ["Weather App", "GitHub", "JavaScript", "HTML", "CSS", "Open Source"],
    priority: false
  },
  {
    id: 6,
    title: "GitHub Profile",
    description: "GitHub Profile.",
    link: "https://github.com/codernotme",
    content:
      "If you want to see the codes and my other projects, you can check out my GitHub profile.",
    image: "/img/github.png",
    tags: [
      "GitHub",
      "Profile",
      "Open Source",
      "Developer",
      "Repositories",
      "Code Sharing"
    ],
    priority: false
  }
];

export default function Portfolio() {
  const [modalOpenIndex, setModalOpenIndex] = useState<number | null>(null);

  const handleOpenModal = (index: number) => setModalOpenIndex(index);
  const handleCloseModal = () => setModalOpenIndex(null);

  return (
    <main className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards
          .sort((a, b) => (b.priority ? 1 : 0) - (a.priority ? 1 : 0))
          .map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden bg-secondary h-full flex flex-col">
                <CardHeader className="p-0">
                  <div className="relative h-48 w-full">
                    <Image
                      src={card.image}
                      alt={card.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-lg"
                    />
                    {card.priority && (
                      <div className="absolute top-2 right-2">
                        <Badge variant="secondary">
                          <FaStar className="mr-1" /> Featured
                        </Badge>
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow p-4">
                  <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                  <p className="text-gray-300 mb-4">{card.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {card.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-4">
                  <Button
                    onClick={() => handleOpenModal(index)}
                    className="w-full"
                  >
                    Explore
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
      </div>

      {modalOpenIndex !== null && (
        <Dialog open={true} onOpenChange={handleCloseModal}>
          <DialogContent className="bg-gray-900 text-white">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">
                {cards[modalOpenIndex].title}
              </DialogTitle>
              <DialogDescription className="text-gray-300">
                {cards[modalOpenIndex].description}
              </DialogDescription>
            </DialogHeader>
            <div className="relative h-64 w-full mb-4">
              <Image
                src={cards[modalOpenIndex].image}
                alt={cards[modalOpenIndex].title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <p className="text-gray-300 mb-4">
              {cards[modalOpenIndex].content}
            </p>
            <div className="flex justify-between">
              <Button variant="outline" onClick={handleCloseModal}>
                Close
              </Button>
              <div className="space-x-2">
                <Button
                  variant="outline"
                  onClick={() =>
                    window.open(cards[modalOpenIndex].link, "_blank")
                  }
                >
                  <FaExternalLinkAlt className="mr-2" /> Visit Project
                </Button>
                <Button
                  variant="outline"
                  onClick={() =>
                    window.open(
                      `https://github.com/codernotme/${cards[
                        modalOpenIndex
                      ].title
                        .toLowerCase()
                        .replace(" ", "-")}`,
                      "_blank"
                    )
                  }
                >
                  <FaGithub className="mr-2" /> View Code
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </main>
  );
}
