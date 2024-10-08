"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { Image } from "@nextui-org/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Portfolio() {
  const [modalOpenIndex, setModalOpenIndex] = useState<number | null>(null);

  const cards = [
    {
      id: 1,
      title: "ECHO",
      description:
        "An online social media platform designed to bring people together in a space where they can post, chat, and connect with others",
      link: "https://socialmed-echo.vercel.app",
      content:
        "It's a platform that enables users to chat with others, share ideas, and much more. To check out the alpha version click on the link below.",
      image: "/img/echo.png",
      tags: ["Chat App", "Next.js", "Convex", "Clerk"],
      priority: true
    },
    {
      id: 2,
      title: "Chess App",
      description: "Chess game using Python and Pygame",
      link: "https://github.com/codernotme/chess-app",
      content: "For the project codes you can click on the link below.",
      image: "/img/chessapp.png",
      tags: ["Chess", "Python", "Pygame"],
      priority: true
    },
    {
      id: 3,
      title: "Kirby Game",
      description: "Using Vite and TypeScript",
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
      description: "Password manager using JavaScript",
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
      description: "Weather App",
      link: "https://codernotme.github.io/weather-app/",
      content:
        "This is a simple weather app built using JavaScript. You can check the weather of any city.",
      image: "/img/weather.png",
      tags: [
        "Weather App",
        "GitHub",
        "JavaScript",
        "HTML",
        "CSS",
        "Open Source"
      ]
    },
    {
      id: 6,
      title: "GitHub",
      description: "GitHub Profile",
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

  const handleOpenModal = (index: number) => {
    setModalOpenIndex(index);
  };

  const handleCloseModal = () => {
    setModalOpenIndex(null);
  };

  return (
    <main className="flex flex-col items-center justify-center w-full p-4 ">
      {/* Responsive grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {cards
          .sort((a, b) => (b.priority ? 1 : 0) - (a.priority ? 1 : 0))
          .map((card, index) => (
            <Card
              key={card.id}
              className={`bg-dark rounded-lg overflow-hidden relative max-w-xs mx-auto flex flex-col transition-transform duration-300 ${
                card.priority ? "border-2 border-blue-500" : ""
              } hover:shadow-lg hover:scale-105`}
            >
              <Image
                width="100%"
                height="auto"
                src={card.image}
                alt={card.title}
                className={`rounded-t-lg cursor-pointer transition-transform ${
                  card.priority ? "hover:scale-105" : ""
                }`}
                onClick={() => window.open(card.link, "_blank")}
              />
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <CardTitle className="text-lg font-semibold text-white">
                    {card.title}
                  </CardTitle>
                  {card.priority && (
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400"
                      size="lg"
                    />
                  )}
                </div>
                <CardDescription className="text-gray-400 mb-4">
                  {card.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-2">
                  {card.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gray-800 text-gray-400 px-2 py-1 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={() => handleOpenModal(index)}
                >
                  Explore
                </Button>
              </CardContent>
            </Card>
          ))}
      </div>

      {modalOpenIndex !== null && (
        <Dialog open={true} onOpenChange={handleCloseModal}>
          <DialogContent className="p-6 rounded-lg shadow-lg max-w-lg mx-auto bg-background">
            <DialogHeader className="flex justify-between items-center">
              <DialogTitle className="text-white">
                {cards[modalOpenIndex].title}
              </DialogTitle>
              <Button variant="ghost" onClick={handleCloseModal}>
                Close
              </Button>
            </DialogHeader>
            <div className="p-6">
              <p className="text-md mb-4 text-gray-300">
                {cards[modalOpenIndex].content}
              </p>
              <a
                href={cards[modalOpenIndex].link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Visit Project
              </a>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </main>
  );
}
