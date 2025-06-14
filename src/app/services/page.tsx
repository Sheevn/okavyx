import { BarChartIcon, BotIcon, BrainCircuitIcon } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="bg-background text-foreground">
      <main className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Our Consulting Services
          </h1>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            We partner with you to design and implement bespoke AI solutions that deliver tangible business value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <BrainCircuitIcon className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Strategic AI Implementation
            </h3>
            <p className="text-muted-foreground">
              We go beyond models. We help you identify strategic opportunities and integrate custom AI solutions to drive growth and efficiency.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <BotIcon className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Custom Automation & Generative AI
            </h3>
            <p className="text-muted-foreground">
              Leverage bespoke automation and generative AI to unlock new possibilities, streamline workflows, and enhance creative output.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <BarChartIcon className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Data Strategy & Insights
            </h3>
            <p className="text-muted-foreground">
              Turn your data into your most valuable asset. We help you build a data-driven culture with advanced analytics and actionable insights.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
} 