"use client";

import Link from "next/link";
import { ParticleContainer } from "./particle-container";

export default function Hero() {
  return (
    <section
      className="relative h-screen w-full flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-background.png')" }}
    >
      <div className="absolute inset-0 bg-black/60" />
      
      <ParticleContainer id="hero-particles" />

      <div className="relative z-10 p-4 text-white">
        <h1 className="text-5xl md:text-7xl font-bold">
          Unleash the Future with Okavyx AI
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Bespoke AI strategies and solutions to elevate your business.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block bg-primary text-primary-foreground font-semibold py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
} 