"use client";
import { AppBar } from "@/components/AppBar";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <>
      <main className="bg-[#0E0F14]">
        <div>
          <header>
            <AppBar />
          </header>
        </div>
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
          <Hero />
        </div>
      </main>
    </>
  );
}
