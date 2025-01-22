const techStack = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "MySQL",
  "MongoDB",
  "Convex",
  "Git/GitHub",
  "Figma",
  "Vercel",
  "AWS",
  "Google Cloud",
  "Google APIs",
  "Meta APIs",
  "Prompt Engineering",
  "Clerk",
  "Clerk Next.js",
  "Clerk UI",
  "Clerk Auth",
]

export default function TechStack() {
  return (
    <div className="mb-12">
      <h3 className="text-3xl font-bold mb-6 text-center">Tech Stack</h3>
      <ul className="flex flex-wrap justify-center gap-4">
        {techStack.map((tech) => (
          <li
            key={tech}
            className="px-4 py-2 bg-primary/10 text-primary rounded-md shadow-md border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
          >
            {tech}
          </li>
        ))}
      </ul>
    </div>
  )
}

