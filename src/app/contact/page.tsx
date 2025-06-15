"use client";

import { useActionState, useRef, useEffect, useTransition } from "react";
import Script from "next/script";
import { submitAction } from "@/actions/contact";

// Make grecaptcha available on the window object
declare global {
  interface Window {
    grecaptcha: any;
  }
}

export default function ContactPage() {
  const [state, formAction] = useActionState(submitAction, null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isPending, startTransition] = useTransition();
  
  // Correctly read the site key from environment variables
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  // This robust effect manages the badge's state and cleans up duplicates.
  useEffect(() => {
    const showBadge = () => {
      // Find all badges on the page
      const badges = document.querySelectorAll('.grecaptcha-badge');
      if (badges.length > 0) {
        // Keep the first badge and make it visible
        const mainBadge = badges[0] as HTMLElement;
        mainBadge.style.visibility = 'visible';

        // Destroy any subsequent "ghost" badges
        for (let i = 1; i < badges.length; i++) {
          badges[i].remove();
        }
      }
    };

    // Show the badge immediately on mount
    showBadge();

    // The Google script can sometimes be slow. Re-run our logic after a short delay
    // to catch any badges that are created after our initial check.
    const timer = setTimeout(showBadge, 500);

    // The cleanup function will hide the one true badge when we navigate away
    return () => {
      clearTimeout(timer);
      const badge = document.querySelector('.grecaptcha-badge');
      if (badge) {
        (badge as HTMLElement).style.visibility = 'hidden';
      }
    };
  }, []);

  // Reset the form if the submission was successful
  useEffect(() => {
    if (state?.message?.includes("successfully")) {
      formRef.current?.reset();
    }
  }, [state]);

  const handleSendMessage = async () => {
    if (!formRef.current || !siteKey) {
      console.error("Form reference or site key not available");
      return;
    }

    if (typeof window.grecaptcha === "undefined") {
      console.error("reCAPTCHA script not loaded");
      return;
    }

    window.grecaptcha.ready(() => {
      window.grecaptcha.execute(siteKey, { action: 'submit' }).then((token: string) => {
        const formData = new FormData(formRef.current!);
        formData.set("token", token);
        startTransition(() => {
          formAction(formData);
        });
      });
    });
  };

  // If the site key isn't loaded, don't render the form to prevent errors
  if (!siteKey) {
    return (
      <div className="container mx-auto text-center py-24">
        <p className="text-red-500">reCAPTCHA is not configured correctly. Site key is missing.</p>
      </div>
    );
  }

  return (
    <>
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${siteKey}`}
        strategy="afterInteractive"
      />
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
            <form ref={formRef} className="grid gap-4">
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
                {state?.errors?.name && <p className="text-red-500 text-sm mt-1">{state.errors.name}</p>}
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
                {state?.errors?.email && <p className="text-red-500 text-sm mt-1">{state.errors.email}</p>}
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
                {state?.errors?.message && <p className="text-red-500 text-sm mt-1">{state.errors.message}</p>}
              </div>
              <button
                type="button"
                onClick={handleSendMessage}
                className="bg-primary text-primary-foreground font-semibold py-2 px-4 rounded-md hover:bg-primary/90"
              >
                Send Message
              </button>
            </form>
            {state?.message && (
              <p className="mt-4 text-center text-muted-foreground">{state.message}</p>
            )}
          </div>
        </main>
      </div>
    </>
  );
} 