import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-muted p-6 md:py-12 w-full">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div className="grid gap-1">
          <h3 className="font-semibold">Okavyx AI</h3>
          <p className="text-muted-foreground">
            Unleash the Future with AI
          </p>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Company</h3>
          <Link href="/about">
            About Us
          </Link>
          <Link href="#">
            Our Team
          </Link>
          <Link href="#">
            Careers
          </Link>
          <Link href="/contact">
            Contact Us
          </Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Social</h3>
          <Link href="#">
            Twitter
          </Link>
          <Link href="#">
            LinkedIn
          </Link>
          <Link href="#">
            GitHub
          </Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Legal</h3>
          <Link href="#">
            Privacy Policy
          </Link>
          <Link href="#">
            Terms of Service
          </Link>
        </div>
      </div>
      <div className="container mx-auto mt-8 flex items-center justify-between text-xs text-muted-foreground">
        <p>&copy; 2024 Okavyx AI. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="#" className="hover:underline">
            Privacy
          </Link>
          <Link href="#" className="hover:underline">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
} 