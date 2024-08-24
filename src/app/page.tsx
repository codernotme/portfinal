"use client";
import React, { useState, useEffect } from "react";
import Home1 from "./home/page";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";
import Preloader from "@/components/Preloader";
import Home from "./home/heroPage";

export default function Main() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 8000); // Adjust the time as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <main className="flex min-h-screen flex-col items-center justify-center bg-black">
          <ScrollAnimationWrapper>
            <Home />
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <Home1 />
          </ScrollAnimationWrapper>
        </main>
      )}
    </>
  );
}
