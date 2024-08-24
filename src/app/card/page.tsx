import WorkPage from "./WorkPage";

export default function ProjectsPage() {
  return (
    <main className="flex flex-col items-center justify-center w-full">
      <div className="text-center my-8">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Check out my work
        </h1>
        <p className="text-md text-gray-400 mb-6 text-center">
          I've worked on a variety of projects, from simple websites to complex
          integrations. Here are a few of my favorites.
        </p>
      </div>
      <WorkPage />
    </main>
  );
}
