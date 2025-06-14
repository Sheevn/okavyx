# `src/app/page.tsx`

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