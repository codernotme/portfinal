import TechStack from "./TechStack"
import WorkExperience from "./WorkExperience"

export default function About() {
  return (
    <section className="py-12 bg-gradient-to-b from-background/50 via-background/30 to-background/10" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg leading-relaxed text-foreground/80">
            A dedicated Full Stack Developer with a passion for creating seamless and intuitive user experiences.
            Currently pursuing a B.Tech in Computer Science with a specialization in Artificial Intelligence, I am
            deeply invested in the intersection of technology and creativity. My journey in web development is driven by
            a love for solving complex problems and bringing innovative ideas to life.
          </p>
        </div>

        <TechStack />
        <WorkExperience />
      </div>
    </section>
  )
}

