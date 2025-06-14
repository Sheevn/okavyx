export default function Manifesto() {
  return (
    <section className="bg-background py-12 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            AI Isn't Just the Future — It's a Whole New Way of Solving Problems
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Most businesses don't know exactly what they want from AI — and that's completely normal. This isn't just another tool. It's a fundamentally different way of thinking about what technology can do.
          </p>
        </div>
        <div className="mt-16 max-w-5xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          <div className="space-y-4 text-center">
            <h3 className="text-xl font-semibold text-primary">Rethink Your Bottlenecks</h3>
            <p className="text-muted-foreground">
              If you've been putting off a repetitive, time-consuming task no one wants to touch — that's exactly where AI shines. And if you're unsure whether AI is "ready" for your business, don't assume the old rules still apply.
            </p>
          </div>
          <div className="space-y-4 text-center">
            <h3 className="text-xl font-semibold text-primary">Accelerate Your Ideas</h3>
            <p className="text-muted-foreground">
              What once took a team of developers months to build could now be delivered as a simple web form and an API call, powered by the right model. At Okavyx AI, we help businesses rethink what's possible.
            </p>
          </div>
        </div>
        <div className="mt-16 max-w-3xl mx-auto text-center">
            <p className="text-lg leading-8 text-muted-foreground">
              It's not about replacing people — it's about removing bottlenecks, accelerating workflows, and turning once-impossible ideas into working systems.
            </p>
            <p className="mt-4 text-xl font-semibold text-foreground">
              This is a new lens. A new mindset. A new way to build.
            </p>
        </div>
      </div>
    </section>
  );
} 