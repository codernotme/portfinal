"use client";
import React from "react";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";
import Home from "./home/heroPage";
import About from "./about/page";
import Card from "./card/page";
import Footer from "@/components/Footer";
import SocialFooter from "./socials/SocialComponent";

export default function Main() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <ScrollAnimationWrapper>
          <Home />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <About />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <Card />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <Footer />
        </ScrollAnimationWrapper>
        <SocialFooter />
      </main>
    </>
  );
}
