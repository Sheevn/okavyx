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
              "Working with Okavyx AI gave us the strategic clarity we were missing. Their insights are now a core part of our decision-making process."
            </p>
            <div className="mt-4 font-semibold">
              Alex Chen, CEO of a Tech Startup
            </div>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md">
            <p className="text-muted-foreground">
              "The custom automation solution built by Okavyx saved us hundreds of hours per month. It's been a complete game-changer for our operational efficiency."
            </p>
            <div className="mt-4 font-semibold">
              Samantha Lee, Director of Operations
            </div>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md">
            <p className="text-muted-foreground">
              "The team at Okavyx doesn't just deliver code, they deliver a competitive advantage. Their expertise is unmatched."
            </p>
            <div className="mt-4 font-semibold">
              Michael B., Head of Innovation
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 