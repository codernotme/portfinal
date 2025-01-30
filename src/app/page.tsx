"use client";
import React from "react";
import Home from "./home/heroPage";
import Card from "./card/page";
import Footer from "@/components/Footer";
import SocialFooter from "./socials/SocialComponent";
import About from "./about/page";

export default function Main() {
  return (
    <>
      <main className="flex flex-col items-center justify-between min-h-screen bg-background text-foreground">
          <Home />
          <About />
          <Card />
          <Footer />
        <SocialFooter />
      </main>
    </>
  );
}
