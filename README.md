# Okavyx AI Website

This repository contains the source code for the official Okavyx AI website, a modern, multi-page web application built with Next.js and React.

## Tech Stack

-   **Framework:** Next.js 15.3 (App Router)
-   **Language:** TypeScript
-   **UI:** React 19
-   **Styling:** Tailwind CSS
-   **Theming:** `next-themes` for light/dark mode
-   **Animation:** `tsparticles` for the hero section animation
-   **Form Handling:** React Server Actions with `zod` for validation
-   **Security:** Google reCAPTCHA v3 (library-free implementation)

## Environment Variables

This project requires Google reCAPTCHA v3 keys to be configured for the contact form to function correctly.

1.  Create a file named `.env.local` in the root of the project.
2.  Add the following lines, replacing the placeholder values with your actual keys:

NEXT_PUBLIC_RECAPTCHA_SITE_KEY="YOUR_RECAPTCHA_V3_SITE_KEY"
RECAPTCHA_SECRET_KEY="YOUR_RECAPTCHA_V3_SECRET_KEY"


## Getting Started

To run the project locally, follow these steps:

1.  **Install dependencies:**
    
    npm install
    

2.  **Run the development server:**
    
    npm run dev
  

3.  Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.