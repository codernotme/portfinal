"use client";
import React from "react";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";
import Home from "./home/heroPage";
import Card from "./card/page";
import Footer from "@/components/Footer";
import SocialFooter from "./socials/SocialComponent";
import About from "./about/page";

export default function Main() {
  return (
    <>
      <main className="flex relative flex-col items-center justify-center min-h-screen bg-background text-foreground scroller-visible">
          <Home />
        
          <About />
        
          <Card />
        
          <Footer />
        
        <SocialFooter />
      </main>
    </>
  );
}
