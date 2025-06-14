Of course. I have analyzed the technical specification and am prepared to present my findings and our initial project files.

Here is the complete content for `spec.md`, `PROJECT.md`, and `.cursorrules`.

***

### `spec.md`

# Okavyx AI Website Specification

This document provides a detailed specification for the Okavyx AI website. It includes all configuration files, source code, and assets required to rebuild the project exactly as it was created.

## 1. Project Overview

A modern, futuristic, and fully functional multi-page website for Okavyx AI, a fictional company specializing in revolutionary AI solutions. The site is built as a full-stack web application using Next.js, React, TypeScript, and Tailwind CSS.

## 2. Architectural Rulings & Version Constraints

This section documents the results of the initial dependency analysis and establishes key architectural decisions for the project.

*   **Core Technology Versions**:
    *   **Next.js**: `15.3.3` (Release Candidate). We will be using a pre-release version of Next.js. This allows us to leverage the latest features but requires careful testing, as APIs may change before the final stable release.
    *   **React**: `19.0.0`. The project will be built on React 19, which is a major new version. We will embrace the new patterns it introduces.
    *   **TypeScript**: `^5.0.0`.
    *   **Tailwind CSS**: `^3.4.1`.

*   **Architectural Rulings**:
    1.  **Embrace React 19 Actions**: For all server mutations, such as the contact form submission, we will use React Actions. This avoids client-side state management (`useState`) for form status, simplifies the code, and aligns with the latest React/Next.js patterns for progressive enhancement.
    2.  **Dependency Consolidation (`tsParticles`)**: The initial spec listed two particle animation libraries (`@tsparticles/react` and `react-tsparticles`). The code exclusively uses `@tsparticles/react`. To prevent conflicts and reduce bundle size, the `react-tsparticles` dependency will be removed.
    3.  **Leverage Next.js Link Prefetching**: The spec frequently uses `prefetch={false}` on `<Link>` components. The Next.js App Router has an optimized prefetching strategy (links are prefetched as they enter the viewport). We will remove `prefetch={false}` to rely on this superior default behavior, improving navigation performance.
    4.  **Icon Component Abstraction**: SVG icons defined within components (e.g., `MountainIcon`, `MenuIcon` in `Header.tsx`) will be abstracted into a central `src/components/icons.tsx` file. This promotes reusability, cleans up component code, and makes the icon set easier to manage.
    5.  **Strict App Router Structure**: All pages and layouts will reside in the `src/app` directory. All reusable components will be placed in `src/components`. Path aliases (`@/*`) will be used for all internal imports.

## 3. Setup and Deployment

### 3.1. Local Development

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    ```

3.  Open [http://localhost:3000](http://localhost:3000) in a browser.

### 3.2. Deployment

The application is optimized for deployment on the [Vercel Platform](https://vercel.com/new).

---

## 4. Project Configuration

### 4.1. `package.json`

This file lists all project dependencies, dev dependencies, and scripts.

```json
{
  "name": "site",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@tsparticles/react": "^3.0.0",
    "@tsparticles/slim": "^3.8.1",
    "autoprefixer": "^10.4.21",
    "framer-motion": "^12.18.1",
    "lucide-react": "^0.515.0",
    "next": "15.3.3",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-tsparticles": "^2.12.2",
    "tailwindcss-animate": "^1.0.7",
    "tsparticles": "^3.8.1"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "15.3.3",
    "postcss": "^8",
    "tailwindcss": "^3.4.1",
    "typescript": "^5"
  }
}
```

### 4.2. `tailwind.config.ts`

Tailwind CSS configuration, including the design system (colors, border radius, animations) and content paths.

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
```

### 4.3. `postcss.config.mjs`

PostCSS configuration to process Tailwind CSS and Autoprefixer.

```javascript
export default {
  plugins: {
    'tailwindcss': {},
    'autoprefixer': {},
  },
};
```

### 4.4. `next.config.ts`

The configuration for Next.js. No custom configuration was added.

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
```

### 4.5. `tsconfig.json`

TypeScript compiler configuration.

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

---

## 5. Global Styles & Layout

### 5.1. `src/app/globals.css`

This file contains the global stylesheets, including Tailwind directives and the definition of all CSS variables for the color palette and design system.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;

    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;

    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;

    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;

    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;

    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;

    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;

    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;

    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;

    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;

    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;

    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;

    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;

    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;

    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;

    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;

    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 210 40% 98%;
  }

  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

### 5.2. `src/app/layout.tsx`

The root layout for the application, which includes the `<html>` and `<body>` tags, global font settings, and renders the `Header` and `Footer` on all pages.

```typescript
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Okavyx AI",
  description: "Unleash the Future with Okavyx AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
```

---

## 6. Components

This section details all reusable React components.

### 6.1. `src/components/Header.tsx`

A fixed navigation header with the company logo, navigation links, and a mobile menu button.

```typescript
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="text-lg font-semibold">Okavyx AI</span>
        </Link>
        <nav className="hidden space-x-4 md:flex">
          <Link
            href="/about"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Services
          </Link>
          <Link
            href="/case-studies"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Case Studies
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
        <button className="md:hidden">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </button>
      </div>
    </header>
  );
}

function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
```

### 6.2. `src/components/Footer.tsx`

The site footer, containing navigation links, social media links, legal links, and a copyright notice.

```typescript
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-muted p-6 md:py-12 w-full">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div className="grid gap-1">
          <h3 className="font-semibold">Okavyx AI</h3>
          <p className="text-muted-foreground">
            Unleash the Future with AI
          </p>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Company</h3>
          <Link href="/about" prefetch={false}>
            About Us
          </Link>
          <Link href="#" prefetch={false}>
            Our Team
          </Link>
          <Link href="#" prefetch={false}>
            Careers
          </Link>
          <Link href="/contact" prefetch={false}>
            Contact Us
          </Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Social</h3>
          <Link href="#" prefetch={false}>
            Twitter
          </Link>
          <Link href="#" prefetch={false}>
            LinkedIn
          </Link>
          <Link href="#" prefetch={false}>
            GitHub
          </Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Legal</h3>
          <Link href="#" prefetch={false}>
            Privacy Policy
          </Link>
          <Link href="#" prefetch={false}>
            Terms of Service
          </Link>
        </div>
      </div>
      <div className="container mx-auto mt-8 flex items-center justify-between text-xs text-muted-foreground">
        <p>&copy; 2024 Okavyx AI. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="#" className="hover:underline" prefetch={false}>
            Privacy
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
```

### 6.3. `src/components/Hero.tsx`

A full-screen hero section for the homepage. It features a particle animation background using `react-tsparticles`, a headline, a subheadline, and a call-to-action button.

```typescript
"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
} from "@tsparticles/engine";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.
import Link from "next/link";


export default function Hero() {
    const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
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
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
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
          speed: 6,
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
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
  );
  
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center text-white bg-[#0d47a1]">
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
          className="absolute inset-0 z-0"
        />
      )}
      <div className="relative z-10 p-4">
        <h1 className="text-5xl md:text-7xl font-bold">
          Unleash the Future with Okavyx AI
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Revolutionary AI solutions for healthcare, finance, and creative arts.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block bg-white text-blue-900 font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors"
          prefetch={false}
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
```

### 6.4. `src/components/Features.tsx`

A section to highlight the key features of Okavyx AI, laid out in a three-column grid with icons from `lucide-react`.

```typescript
import { CodeIcon, LayersIcon, ZapIcon } from "lucide-react";

export default function Features() {
  return (
    <section className="py-12 lg:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">
          Key Features of Okavyx AI
        </h2>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <ZapIcon className="h-12 w-12 text-primary" />
            <h3 className="mt-4 text-xl font-semibold">Machine Learning</h3>
            <p className="mt-2 text-muted-foreground">
              Advanced machine learning models to power your business.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <LayersIcon className="h-12 w-12 text-primary" />
            <h3 className="mt-4 text-xl font-semibold">Generative AI</h3>
            <p className="mt-2 text-muted-foreground">
              Create new and original content with our generative AI solutions.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <CodeIcon className="h-12 w-12 text-primary" />
            <h3 className="mt-4 text-xl font-semibold">Data Analytics</h3>
            <p className="mt-2 text-muted-foreground">
              Turn your data into actionable insights with our analytics platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
```

### 6.5. `src/components/Testimonials.tsx`

A section to display client testimonials in a card-based grid layout.

```typescript
export default function Testimonials() {
  return (
    <section className="bg-muted py-12 lg:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">
          What Our Clients Say
        </h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-card p-6 rounded-lg shadow-md">
            <p className="text-muted-foreground">
              "Okavyx AI has revolutionized our patient care with their predictive analytics. We can now identify at-risk patients with incredible accuracy."
            </p>
            <div className="mt-4 font-semibold">
              Dr. Jane Doe, Healthcare Innovators
            </div>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md">
            <p className="text-muted-foreground">
              "The generative AI from Okavyx has unlocked new creative possibilities for our artists. The results are simply breathtaking."
            </p>
            <div className="mt-4 font-semibold">
              John Smith, Creative Studios
            </div>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md">
            <p className="text-muted-foreground">
              "Their financial modeling AI has given us a significant edge in a competitive market. It's an indispensable tool for our firm."
            </p>
            <div className="mt-4 font-semibold">
              Emily White, Finance Corp
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

### 6.6. `src/components/Newsletter.tsx`

A newsletter signup form section.

```typescript
export default function Newsletter() {
  return (
    <section className="py-12 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="bg-primary text-primary-foreground p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold">
            Stay Ahead with Okavyx AI
          </h2>
          <p className="mt-2">
            Subscribe to our newsletter for the latest AI insights and company news.
          </p>
          <div className="mt-4 max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow p-2 rounded-l-md border-0 text-gray-800"
            />
            <button
              type="submit"
              className="bg-secondary text-secondary-foreground font-semibold p-2 rounded-r-md"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

## 7. Pages

This section details all pages in the `src/app` directory.

### 7.1. Home Page: `src/app/page.tsx`

The main landing page, which assembles the `Hero`, `Features`, `Testimonials`, and `Newsletter` components.

```typescript
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Testimonials />
      <Newsletter />
    </main>
  );
}
```

### 7.2. About Page: `src/app/about/page.tsx`

Provides information about the company, its team, and its history.

```typescript
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      <main className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
              About Okavyx AI
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Okavyx AI is at the forefront of the artificial intelligence
              revolution. Our mission is to build transformative AI solutions
              that empower industries and enrich human potential.
            </p>
          </div>
          <div>
            <Image
              src="/placeholder.svg"
              alt="Okavyx AI Team"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>

        <section className="py-12 md:py-24">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="text-center">
                <Image
                  src="/placeholder.svg"
                  alt={`Team Member ${i + 1}`}
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="font-semibold text-lg">Team Member</h3>
                <p className="text-muted-foreground">Role</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 md:py-24">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Journey
          </h2>
          <div className="relative">
            {/* Timeline component would go here */}
            <p className="text-center text-muted-foreground">
              A timeline of our achievements will be displayed here.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
```

### 7.3. Services Page: `src/app/services/page.tsx`

Details the AI services offered by the company.

```typescript
import { BarChartIcon, BotIcon, BrainCircuitIcon } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="bg-background text-foreground">
      <main className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Our AI-Powered Services
          </h1>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            We offer a suite of AI services designed to solve complex
            challenges and drive growth for your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <BrainCircuitIcon className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Machine Learning Solutions
            </h3>
            <p className="text-muted-foreground">
              Custom machine learning models to automate processes, predict
              outcomes, and uncover hidden insights in your data.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <BotIcon className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Generative AI & Creativity
            </h3>
            <p className="text-muted-foreground">
              Leverage the power of generative models to create unique text,
              images, and other media for your creative projects.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <BarChartIcon className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Advanced Data Analytics
            </h3>
            <p className="text-muted-foreground">
              Go beyond traditional analytics with our AI-driven platform that
              provides deeper, more predictive insights.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
```

### 7.4. Case Studies Page: `src/app/case-studies/page.tsx`

Showcases examples of the company's work.

```typescript
import Image from "next/image";
import Link from "next/link";

export default function CaseStudiesPage() {
  return (
    <div className="bg-background text-foreground">
      <main className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Case Studies
          </h1>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Discover how our AI solutions have transformed businesses across
            various industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card rounded-lg overflow-hidden shadow-md">
            <Image
              src="/placeholder.svg"
              alt="Case Study 1"
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Healthcare: Predictive Patient Monitoring
              </h3>
              <p className="text-muted-foreground mb-4">
                See how we helped a major hospital reduce readmission rates by
                25% with our predictive analytics platform.
              </p>
              <Link
                href="#"
                className="text-primary hover:underline"
                prefetch={false}
              >
                Read More
              </Link>
            </div>
          </div>
          <div className="bg-card rounded-lg overflow-hidden shadow-md">
            <Image
              src="/placeholder.svg"
              alt="Case Study 2"
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Finance: AI-Powered Fraud Detection
              </h3>
              <p className="text-muted-foreground mb-4">
                Learn how our machine learning models helped a financial firm
                detect and prevent fraudulent transactions in real-time.
              </p>
              <Link
                href="#"
                className="text-primary hover:underline"
                prefetch={false}
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
```

### 7.5. Blog Index Page: `src/app/blog/page.tsx`

A list of all blog posts.

```typescript
import Link from "next/link";

export default function BlogPage() {
  const posts = [
    {
      slug: "ai-in-healthcare",
      title: "The Future of AI in Healthcare",
      excerpt:
        "AI is poised to revolutionize healthcare, from diagnostics to personalized treatment plans...",
      date: "October 26, 2023",
    },
    {
      slug: "generative-ai-explained",
      title: "Generative AI: A Creative Revolution",
      excerpt:
        "Exploring how generative AI is transforming creative industries and what it means for artists...",
      date: "October 20, 2023",
    },
  ];

  return (
    <div className="bg-background text-foreground">
      <main className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Okavyx AI Blog
          </h1>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Insights, news, and thoughts on the world of artificial
            intelligence.
          </p>
        </div>

        <div className="grid gap-8">
          {posts.map((post) => (
            <article key={post.slug} className="bg-card p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-2">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:underline"
                  prefetch={false}
                >
                  {post.title}
                </Link>
              </h2>
              <p className="text-muted-foreground mb-4">{post.excerpt}</p>
              <div className="text-sm text-muted-foreground">{post.date}</div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
```

### 7.6. Dynamic Blog Post Page: `src/app/blog/[slug]/page.tsx`

A template for displaying individual blog posts based on a dynamic slug.

```typescript
export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  // In a real app, you would fetch the post content based on the slug
  // For this example, we'll just display the slug.
  return (
    <div className="bg-background text-foreground">
      <main className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <article className="prose prose-lg dark:prose-invert mx-auto">
          <h1 className="text-4xl font-bold mb-4">Blog Post: {slug}</h1>
          <p>
            This is a placeholder for the blog post content. In a real
            application, you would fetch the content of the post with slug
            &quot;{slug}&quot; from a CMS or a local markdown file and render
            it here.
          </p>
          <p>
            For example, you could use a library like `gray-matter` to parse
            markdown files with frontmatter.
          </p>
        </article>
      </main>
    </div>
  );
}
```

### 7.7. Contact Page: `src/app/contact/page.tsx`

A page with a contact form.

```typescript
"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Submitting...");
    // This is where you would handle form submission, e.g., send to an API endpoint.
    // For this example, we'll just simulate a delay.
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setStatus("Message sent successfully!");
  };

  return (
    <div className="bg-background text-foreground">
      <main className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Contact Us
          </h1>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Have a question or want to work with us? Drop us a line.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full rounded-md bg-input border-border shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full rounded-md bg-input border-border shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-1 block w-full rounded-md bg-input border-border shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-primary text-primary-foreground font-semibold py-2 px-4 rounded-md hover:bg-primary/90"
            >
              Send Message
            </button>
          </form>
          {status && (
            <p className="mt-4 text-center text-muted-foreground">{status}</p>
          )}
        </div>
      </main>
    </div>
  );
}
```

---

## 8. Static Assets

### 8.1. `public/placeholder.svg`

A generic placeholder image used for team photos and case study images.

```xml
<svg width="600" height="400" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="400" fill="#E5E7EB" />
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" fill="#9CA3AF" dominant-baseline="middle" text-anchor="middle">
    Placeholder
  </text>
</svg>
