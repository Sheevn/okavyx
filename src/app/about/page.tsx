import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      <main className="container mx-auto px-4 md:px-6 py-12 md:py-24 space-y-16">
        {/* --- Section 1: Our Approach --- */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
              About Okavyx AI
            </h1>
            <h2 className="text-2xl font-semibold text-primary">Our Approach</h2>
            <p className="text-muted-foreground text-lg">
              Okavyx AI partners with Australian businesses to deliver clear, independent AI strategy advice. We help you navigate the complexities of AI, identifying practical opportunities to drive real business outcomes without hype or overspend.
            </p>
            <p className="text-muted-foreground text-lg">
              Our tailored services include AI readiness assessments, strategic roadmaps, vendor evaluations, and low-cost prototyping advisory. Okavyx AI, led by a founder with over 30 years of experience in IT, automation, and management, delivers jargon-free guidance to empower your decision-making.
            </p>
            <p className="text-muted-foreground text-lg">
              Ready to explore AI with a trusted advisor? Contact us to start the conversation.
            </p>
          </div>
          <div>
            <Image
              src="/about-strategy.jpg"
              alt="Abstract visualization of AI strategy"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* --- Section 2: Okavyx Origins --- */}
        <section className="py-16 bg-muted rounded-lg">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Okavyx Origins</h2>
            <div className="max-w-3xl mx-auto text-muted-foreground space-y-4 text-left">
              <p>
                Okavyx (/ˈoʊ.kə.vɪks/, OH-ka-viks) is a unique name, born from a creative twist on the founder's last name. The founder fed their surname into ChatGPT, requesting variations, and explored the suggestions until discovering "Okavyx" — a word that returned zero results on Google.
              </p>
              <p>
                This deliberate choice ensures that as Okavyx AI grows, every search for "Okavyx" points directly to its online presence, building a distinct digital identity. It's a name crafted to stand out, reflecting Okavyx AI's mission to deliver clear, innovative AI solutions for Australian businesses.
              </p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
} 