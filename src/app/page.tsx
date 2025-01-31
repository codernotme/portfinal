"use client";
import React from "react";
import Home from "./home/heroPage";
import Card from "./card/page";
import Footer from "@/components/Footer";
import About from "./about/page";
import SocialFooter from "@/components/SocialComponent";

export default function Main() {
  return (
    <>
      <main className="flex flex-col min-h-screen bg-background">
        <Home />
        <About />
        <Card />
        <Footer />
        <SocialFooter/>
      </main>
    </>
  );
}
