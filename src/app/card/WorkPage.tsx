"use client";
import React, { useState, useEffect } from "react";
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
export default function Portfolio() {
  const [modalOpenIndex, setModalOpenIndex] = useState<number | null>(null);

  const [cards, setCards] = useState([
    {
      id: 1,
      title: "Allotalk.in",
      description: "It is a PHP based chatting platform",
      link: "https://allotalk.in",
      content:
        "It's a PHP based real-time chat application. It is fully functional.",
      image: "/img/allotalk-poster.png",
    },
    {
      id: 2,
      title: "Kirby Game",
      description: "by using Vite and TypeScript",
      link: "https://kirby-game-ts.vercel.app/",
      content:
        "This is a simple Kirby-themed game built using Vite for bundling, Vanilla TypeScript for the game logic, and type-checking.",
      image: "/img/kirby.png",
    },
    {
      id: 3,
      title: "Todo-List",
      description: "Todo list using html css",
      link: "https://codernotme.github.io/todo-list-html/",
      content:
        "This project serves as a practice exercise for implementing basic concepts of HTML, CSS, and JS to create a Todo-List.",
      image: "/img/todo.png",
    },
    {
      id: 4,
      title: "Amazone Clone",
      description: "Simple amazon home page clone",
      link: "https://amazon-clone-seven-blush.vercel.app/",
      content: "It is a simple Amazon Home page clone using Html and css",
      image: "/img/amazon.png",
    },
    {
      id: 5,
      title: "PortXme",
      description: "Portfolio site",
      link: "https://portxme.vercel.app/",
      content: "This is an earlier version of my portfolio website",
      image: "/img/portxme.png",
    },
    {
      id: 6,
      title: "Portfolio",
      description: "Portfolio site",
      link: "https://github.com/codernotme/portfolio.me",
      content: "For the project codes you can click on the link below",
      image: "/img/portfolio.png",
    },
    {
      id: 7,
      title: "GitHub",
      description: "GitHub Profile",
      link: "https://github.com/codernotme",
      content:
        "If you want to see the codes and my other projects. You can check out my GitHub profile",
      image: "/img/github.png",
    },
  ]);

  useEffect(() => {
    const shuffleArray = (array: any[]) => {
      const shuffledArray = [...array];
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [
          shuffledArray[j],
          shuffledArray[i],
        ];
      }
      return shuffledArray;
    };
    setCards(shuffleArray(cards));
  }, []);

  const handleOpenModal = (index: number) => {
    setModalOpenIndex(index);
  };

  const handleCloseModal = () => {
    setModalOpenIndex(null);
  };

  return (
    <main
      className="flex flex-row items-center justify-center flex-wrap gap-4 p-4"
      id="work"
    >
      {cards.map((card, index) => (
        <Card
          key={card.id}
          className="w-full max-w-md bg-dark rounded-lg shadow-lg transition-transform duration-300"
        >
          <CardHeader className="flex justify-between items-center">
            <CardTitle>{card.title}</CardTitle>
            <Button variant="outline" onClick={() => handleOpenModal(index)}>
              View
            </Button>
          </CardHeader>
          <CardContent>
            <CardDescription>{card.description}</CardDescription>
            <Image
              width={500}
              height={"auto"}
              src={card.image}
              alt={card.title}
            />
          </CardContent>
        </Card>
      ))}

      {modalOpenIndex !== null && (
        <Dialog open={true} onOpenChange={handleCloseModal}>
          <DialogContent className=" p-6 rounded-lg shadow-lg">
            <DialogHeader>
              <DialogTitle>{cards[modalOpenIndex].title}</DialogTitle>
            </DialogHeader>
            <div className="p-6">
              <p className="text-md mb-4">{cards[modalOpenIndex].content}</p>
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
