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
              “Okavyx AI has revolutionized our patient care with their predictive analytics. We can now identify at-risk patients with incredible accuracy.”
            </p>
            <div className="mt-4 font-semibold">
              Dr. Jane Doe, Healthcare Innovators
            </div>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md">
            <p className="text-muted-foreground">
              “The generative AI from Okavyx has unlocked new creative possibilities for our artists. The results are simply breathtaking.”
            </p>
            <div className="mt-4 font-semibold">
              John Smith, Creative Studios
            </div>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md">
            <p className="text-muted-foreground">
              “Their financial modeling AI has given us a significant edge in a competitive market. It's an indispensable tool for our firm.”
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