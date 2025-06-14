# `src/app/services/page.tsx`

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