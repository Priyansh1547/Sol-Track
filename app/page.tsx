"use client";
import { AppBar } from "@/components/AppBar";
import { Hero } from "@/components/Hero";
import { AnimationContainer } from "@/components/global/animation-container";

export default function Home() {
  return (
    <>
      <main className="bg-[#0F172A] min-h-screen">
        <div>
          <header>
            <AppBar isDashboard={false} />
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
