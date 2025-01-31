"use client"

import { Avatar } from "@heroui/react"
import { motion } from "framer-motion"
import ThemeButton from "@/components/ThemeButton"

export default function Home() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden  bg-gradient-to-b from-background via-background/90 to-background/80">
      <div className="absolute top-5 right-5 z-10">
        <ThemeButton />
      </div>

      <div className="text-center mt-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative"
        >
          <Avatar className="mb-8 w-40 h-40 md:w-48 md:h-48 mx-auto ring-4 ring-primary/50" src="/images/myimage.png"/>

          <motion.h1
            className="text-5xl md:text-8xl font-extrabold mb-4"
            animate={{ backgroundPosition: ["0%", "100%"] }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            style={{
              backgroundImage: "linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundSize: "200% 200%",
            }}
          >
            Aryan Bajpai
          </motion.h1>

          <motion.h2
            className="text-xl md:text-2xl font- mb-6 text-primary/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Web Developer | Python Enthusiast | AI Enthusiast
          </motion.h2>
        </motion.div>
      </div>
    </section>
  )
}

