"use client";

import { Avatar } from "@nextui-org/avatar";
import { motion } from "framer-motion";
import ThemeButton from "@/components/ThemeButton";

export default function Component() {
  return (
    <main className="relative flex items-center justify-between mx-auto overflow-hidden bg-gradient-to-b from-background to-background/80">
      {/* Theme Button */}
      <div className="absolute top-5 right-5 z-10">
        <ThemeButton />
      </div>

      {/* Main Content */}
      <div className="relative text-center flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative"
        >
          {/* Avatar */}
          <Avatar
            src="/images/myimage.png"
            alt="Aryan"
            className="mb-8 w-40 h-40 md:w-48 md:h-48"
            isBordered
            color="primary"
          />

          {/* Animated Name Heading */}
          <motion.h1
            className="text-5xl md:text-8xl font-extrabold mb-4"
            animate={{ backgroundPosition: ["0%", "100%"] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{
              backgroundImage:
                "linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundSize: "200% 200%",
              height: "fit-content"
            }}
          >
            Aryan Bajpai
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            className="text-xl md:text-2xl font-semibold mb-6 text-foreground/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Web Developer || Python Enthusiast || AI Enthusiast
          </motion.h2>
        </motion.div>
      </div>
    </main>
  );
}
