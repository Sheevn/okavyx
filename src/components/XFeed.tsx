"use client";

import { useEffect } from 'react';

export default function XFeed() {
  useEffect(() => {
    // This is the official script that finds the `<a>` tag and turns it into a timeline
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="bg-muted py-12 lg:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Latest on X</h2>
        <div className="flex justify-center">
          <a
            className="twitter-timeline"
            data-height="600"
            data-theme="dark" // The widget will auto-detect light/dark mode from our site's theme
            href="https://twitter.com/okavyx?ref_src=twsrc%5Etfw"
          >
            Posts by @okavyx
          </a>
        </div>
      </div>
    </section>
  );
} 