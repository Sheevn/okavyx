# Okavyx AI Website Specification (As-Built)

This document provides a detailed specification for the Okavyx AI website as of its latest version. It summarizes the project's features, architecture, and key components.

## 1. Project Overview

A modern, futuristic, and fully functional multi-page website for Okavyx AI, a boutique AI consultancy. The site is built as a full-stack web application using Next.js, React, TypeScript, and Tailwind CSS, and is designed to showcase the company's philosophy, services, and brand identity.

## 2. Core Features

-   **Responsive Design:** Fully responsive layout for desktop, tablet, and mobile devices.
-   **Light/Dark Mode:** A user-toggleable theme system powered by `next-themes`, with a custom "Gilded Graphite" color palette.
-   **Dynamic Hero Animation:** A custom particle animation in the hero section, contained within the component's boundaries.
-   **Secure Contact Form:** A contact form protected by Google reCAPTCHA v3 and validated on the server using Zod.
-   **Dedicated X (Twitter) Feed Page:** A page at `/x-posts` that displays the latest posts from the @okavyx account using the official X widget.
-   **Custom Content Sections:** Includes a "Manifesto" and "Okavyx Origins" section to communicate the brand's unique story and value proposition.

## 3. Architectural Rulings & Key Decisions

This section documents the key architectural decisions made during development.

-   **Core Technology Versions**:
    -   Next.js: `15.3.3`
    -   React: `19.0.0`
    -   TypeScript: `^5.0.0`
    -   Tailwind CSS: `^3.4.1`

-   **Architectural Decisions**:
    1.  **React Server Actions:** All server mutations (e.g., contact form submission) are handled by React Server Actions for security and modern architecture.
    2.  **Library-Free reCAPTCHA:** After encountering compatibility issues with third-party libraries, Google reCAPTCHA v3 was implemented directly using the official Google script and a manual verification flow for maximum stability.
    3.  **Contained Particle Animation:** The hero section animation is explicitly configured with `fullScreen: false` to ensure it is contained within its parent component and does not cover the entire page.
    4.  **Component Abstraction:** Key UI elements like icons (`icons.tsx`) and the theme toggle (`theme-toggle.tsx`) are abstracted into their own components for reusability.
    5.  **Dedicated Content Pages:** Dynamic or heavy content, such as the X feed, is placed on dedicated pages rather than embedded on the homepage to improve performance and user experience.

## 4. Project Configuration

### 4.1. Environment Variables

The project requires a `.env.local` file in the root directory to store API keys for Google reCAPTCHA. This file is not committed to source control.

**`.env.local` format:**

NEXT_PUBLIC_RECAPTCHA_SITE_KEY="YOUR_RECAPTCHA_V3_SITE_KEY"
RECAPTCHA_SECRET_KEY="YOUR_RECAPTCHA_V3_SECRET_KEY"


## 5. Key Components Overview

This is a high-level overview of the main components that make up the application.

-   **`src/app/layout.tsx`**: The root layout, responsible for the main HTML structure and integrating the `ThemeProvider`.
-   **`src/app/page.tsx`**: The homepage, which assembles the various content and feature components.
-   **`src/components/Header.tsx`**: The site's main navigation header, which includes navigation links and the theme toggle.
-   **`src/components/Footer.tsx`**: The site's footer, containing secondary navigation and social links.
-   **`src/components/Hero.tsx`**: The homepage hero section, featuring the custom particle animation.
-   **`src/components/Manifesto.tsx`**: A dedicated component displaying the company's philosophy on AI.
-   **`src/components/XFeed.tsx`**: A component that embeds the X (Twitter) timeline widget.
-   **`src/app/contact/page.tsx`**: The contact page, which loads the Google reCAPTCHA script and renders the contact form.
-   **`src/actions/contact.ts`**: The Server Action that handles the backend logic for the contact form, including Zod validation and reCAPTCHA verification.