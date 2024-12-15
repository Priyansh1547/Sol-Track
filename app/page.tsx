"use client";
import { AppBar } from "@/components/AppBar";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <>
      <div>
        <header>
          <AppBar />
        </header>
      </div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Hero />
      </main>
    </>
  );
}
