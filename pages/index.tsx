"use client";
import { useState } from "react";
import Main from "@/component/MainPage";
import Navbar from "@/component/Navbar";
import About from "@/component/AboutPage";
import Resume from "@/component/ResumePage";
import Work from "@/component/WorkPage";
import Blog from "@/component/BlogPage";
import Contact from "@/component/ContactPage";
import Contest from "@/component/ContestPage";

export default function Home() {
  const [activePage, setActivePage] = useState("about");

  return (
    <main>
      <div>
        <Main />
      </div>
      <div className="main-content">
        <Navbar activePage={activePage} setActivePage={setActivePage} />
        <div className="page-content">
          <About className={activePage === "about" ? "active" : ""} />
          <Resume className={activePage === "resume" ? "active" : ""} />
          <Contest className={activePage === "contests" ? "active" : ""} />
          <Work className={activePage === "portfolio" ? "active" : ""} />
          <Blog className={activePage === "blog" ? "active" : ""} />
          <Contact className={activePage === "contact" ? "active" : ""} />
        </div>
      </div>
    </main>
  );
}