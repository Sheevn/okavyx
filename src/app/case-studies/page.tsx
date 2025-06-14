import Image from "next/image";
import Link from "next/link";

export default function CaseStudiesPage() {
  return (
    <div className="bg-background text-foreground">
      <main className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Case Studies
          </h1>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Discover how our AI solutions have transformed businesses across
            various industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card rounded-lg overflow-hidden shadow-md">
            <Image
              src="/placeholder.svg"
              alt="Case Study 1"
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Healthcare: Predictive Patient Monitoring
              </h3>
              <p className="text-muted-foreground mb-4">
                See how we helped a major hospital reduce readmission rates by
                25% with our predictive analytics platform.
              </p>
              <Link
                href="#"
                className="text-primary hover:underline"
              >
                Read More
              </Link>
            </div>
          </div>
          <div className="bg-card rounded-lg overflow-hidden shadow-md">
            <Image
              src="/placeholder.svg"
              alt="Case Study 2"
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Finance: AI-Powered Fraud Detection
              </h3>
              <p className="text-muted-foreground mb-4">
                Learn how our machine learning models helped a financial firm
                detect and prevent fraudulent transactions in real-time.
              </p>
              <Link
                href="#"
                className="text-primary hover:underline"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 