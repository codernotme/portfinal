"use client";
import { Avatar } from "@nextui-org/avatar";
import ThemeButton from "../../components/ThemeButton";
import { useEffect, useRef } from "react";

const Header = () => {
  const bugRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const bug = bugRef.current;
    if (bug) {
      const animateBug = () => {
        bug.style.transform = `translate(${Math.random() * 100}vw, ${
          Math.random() * 100
        }vh)`;
      };

      const interval = setInterval(animateBug, 3000); // Random movement every 3 seconds
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <>
      <main className="flex flex-col items-center justify-center p-4 relative overflow-hidden">
        {/* Theme toggle button */}
        <div className="absolute top-5 right-5 z-20">
          <ThemeButton />
        </div>

        {/* Grid pattern with neon bug animation */}
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <div className="grid-pattern grid gap-4 relative">
            {Array.from({ length: 15 }).map((_, i) => (
              <div key={i} className="w-2 h-2  opacity-10 rounded-full"></div>
            ))}
            {/* Neon blue bug */}
            <div
              ref={bugRef}
              className="absolute w-4 h-4 bg-blue-400 rounded-full shadow-neon"
              style={{
                transition: "transform 2s ease",
                animation: "flicker 1.5s infinite alternate"
              }}
            ></div>
          </div>
        </div>

        <div className="z-10 text-center">
          {/* Avatar */}
          <Avatar
            src="/images/myimage.png"
            alt="aryan"
            className="mb-8 w-40 h-40 rounded-full"
            isBordered
          />

          {/* Heading with white text and background trail animation */}
          <h1 className="text-6xl md:text-8xl font-extrabold mb-4 relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x">
              Aryan Bajpai
            </span>
          </h1>

          <h2 className="text-1xl md:text-2xl font-semibold mb-4">
            Web Developer || Python Enthusiast || AI Enthusiast
          </h2>
        </div>
      </main>
    </>
  );
};

export default Header;
