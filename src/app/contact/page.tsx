"use client";

import { useFormState } from "react-dom";

async function submitAction(prevState: any, formData: FormData) {
  "use server";
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return "Message sent successfully!";
}

export default function ContactPage() {
  const [state, formAction] = useFormState(submitAction, null);

  return (
    <div className="bg-background text-foreground">
      <main className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Contact Us
          </h1>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Have a question or want to work with us? Drop us a line.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <form action={formAction} className="grid gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full rounded-md bg-input border-border shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full rounded-md bg-input border-border shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-1 block w-full rounded-md bg-input border-border shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-primary text-primary-foreground font-semibold py-2 px-4 rounded-md hover:bg-primary/90"
            >
              Send Message
            </button>
          </form>
          {state && (
            <p className="mt-4 text-center text-muted-foreground">{state}</p>
          )}
        </div>
      </main>
    </div>
  );
} 