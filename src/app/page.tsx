import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Manifesto from "@/components/Manifesto";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Manifesto />
      <Testimonials />
      <Newsletter />
    </main>
  );
}
