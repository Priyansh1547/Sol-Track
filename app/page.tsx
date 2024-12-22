"use client";
import { AppBar } from "@/components/AppBar";
import { Hero } from "@/components/Hero";
import { AnimationContainer } from "@/components/global/animation-container";

export default function Home() {
  return (
    <>
      <main className="bg-[#0F172A]">
        <div>
          <header>
            <AppBar isDashboard={false} />
          </header>
        </div>
        <AnimationContainer duration={0.6}>
          <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <Hero />
          </div>
        </AnimationContainer>
      </main>
    </>
  );
}
