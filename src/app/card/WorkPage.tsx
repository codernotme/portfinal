"use client";
import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Image } from "@nextui-org/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Portfolio() {
  const [modalOpenIndex, setModalOpenIndex] = useState<number | null>(null);

  const cards = [
    {
      id: 1,
      title: "Allotalk.in",
      description: "It is a PHP based chatting platform",
      link: "https://allotalk.in",
      content:
        "It's a PHP based real-time chat application. It is fully functional.",
      image: "/img/allotalk-poster.png",
      tags: ["PHP", "Real-Time", "Chat Application"],
      priority: true,
    },
    {
      id: 2,
      title: "Kirby Game",
      description: "by using Vite and TypeScript",
      link: "https://kirby-game-ts.vercel.app/",
      content:
        "This is a simple Kirby-themed game built using Vite for bundling, Vanilla TypeScript for the game logic, and type-checking.",
      image: "/img/kirby.png",
      tags: ["Vite", "TypeScript", "Game Dev"],
      priority: true,
    },
    {
      id: 3,
      title: "Portfolio",
      description: "Portfolio site",
      link: "https://github.com/codernotme/portfolio.me",
      content: "For the project codes you can click on the link below.",
      image: "/img/portfolio.png",
      tags: ["Portfolio", "GitHub", "Code Repository"],
      priority: false,
    },
    {
      id: 4,
      title: "GitHub",
      description: "GitHub Profile",
      link: "https://github.com/codernotme",
      content:
        "If you want to see the codes and my other projects. You can check out my GitHub profile.",
      image: "/img/github.png",
      tags: ["GitHub", "Profile", "Open Source"],
      priority: false,
    },
  ];

  const handleOpenModal = (index: number) => {
    setModalOpenIndex(index);
  };

  const handleCloseModal = () => {
    setModalOpenIndex(null);
  };

  return (
    <main className="flex flex-col items-center justify-center w-full p-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards
          .sort((a, b) => (b.priority ? 1 : 0) - (a.priority ? 1 : 0))
          .map((card, index) => (
            <Card
              key={card.id}
              className="bg-dark rounded-lg overflow-hidden relative"
            >
              <Image
                width="100%"
                height="auto"
                src={card.image}
                alt={card.title}
                className="rounded-t-lg"
                onClick={() => window.open(card.link, "_blank")}
              />
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg font-semibold text-white">
                    {card.title}
                  </CardTitle>
                  {card.priority && (
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-red-500 absolute top-2 right-2"
                      size="lg"
                    />
                  )}
                </div>
                <CardDescription className="text-gray-400 mb-4">
                  {card.description}
                </CardDescription>
                <div className="flex flex-wrap gap-1 mb-2">
                  {card.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gray-800 text-gray-400 px-2 py-1 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleOpenModal(index)}
                  >
                    Explore
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
      </div>

      {modalOpenIndex !== null && (
        <Dialog open={true} onOpenChange={handleCloseModal}>
          <DialogContent className="p-6 rounded-lg shadow-lg max-w-lg mx-auto">
            <DialogHeader>
              <DialogTitle>{cards[modalOpenIndex].title}</DialogTitle>
            </DialogHeader>
            <div className="p-6">
              <p className="text-md mb-4">
                {cards[modalOpenIndex].description}
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
