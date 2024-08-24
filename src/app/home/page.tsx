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
      <main
        className="flex min-h-screen   flex-col items-center justify-center bg-black"
        style={{ width: "600px" }}
      >
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
      </main>
    </>
  );
}
