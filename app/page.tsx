"use client";
import { AppBar } from "@/components/navbar/AppBar";
import { Hero } from "@/components/Hero";
import { AnimationContainer } from "@/components/global/animation-container";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-secondary">
        <div>
          <header>
            <AppBar />
          </header>
        </div>
        <AnimationContainer duration={0.6}>
          <div className="text-center mt-10 lg:mt-4 flex flex-col">
            <Hero />
          </div>
        </AnimationContainer>
      </main>
    </>
  );
}
