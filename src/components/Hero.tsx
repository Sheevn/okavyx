"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import Link from "next/link";

export default function Hero() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#D4AF37", // Use brand gold color
        },
        links: {
          color: "#D4AF37", // Use brand gold color
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 2, // Slowed down slightly for a more elegant feel
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    [] // No longer dependent on theme
  );

  return (
    <section
      className="relative h-screen w-full flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-background.png')" }}
    >
      <div className="absolute inset-0 bg-black/60" />
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
          className="absolute inset-0 z-0"
        />
      )}
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