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