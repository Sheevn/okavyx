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