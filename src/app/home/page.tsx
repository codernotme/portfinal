"use client";
import Home from "./heroPage";
import Socials from "@/app/socials/page";
import About from "@/app/about/page";
import Card from "@/app/card/page";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";
import Footer from "@/components/Footer";
export default function Main() {
  return (
    <>
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
        <Socials />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <Footer />
      </ScrollAnimationWrapper>
    </>
  );
}
