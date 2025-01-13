"use client";
import { AppBar } from "@/components/navbar/AppBar";
import { Hero } from "@/components/Hero";
import { AnimationContainer } from "@/components/global/animation-container";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-[#0E0F14]">
        <div className="sticky top-0 z-10 backdrop-blur-sm">
          <header>
            <AppBar />
          </header>
        </div>
        <AnimationContainer duration={0.6}>
          <div className="text-center mt-10 lg:mt-4 flex flex-col ">
            <Hero />
          </div>
        </AnimationContainer>
      </main>
    </>
  );
}
