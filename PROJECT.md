### `PROJECT.md`

```markdown
# Project Implementation Plan: Okavyx AI Website

This document outlines the step-by-step plan to build the Okavyx AI website according to the technical specification and architectural rulings. Each step represents a single prompt-and-commit cycle.

## Phase 1: Project Initialization & Configuration

*   **Goal:** Set up the Next.js project, install dependencies, and create all necessary configuration files.
*   **Outcome:** A runnable, empty Next.js application with the correct structure and configuration.

**Step 1.1: Initialize Next.js Project**
*   **Action:** Use `create-next-app` to bootstrap the project with the specified versions and settings.
*   **Prompt:** "Prompt 1.1: Initialize a new Next.js project named 'okavyx-site' using TypeScript, Tailwind CSS, and ESLint. Ensure the `src/` directory is used and App Router is enabled."

**Step 1.2: Install Dependencies & Apply Rulings**
*   **Action:** Install all required dependencies from the spec and remove the redundant `react-tsparticles` package as per our ruling.
*   **Prompt:** "Prompt 1.2: Install the project's dependencies and dev dependencies as specified in `package.json`, and uninstall the redundant `react-tsparticles` package."

**Step 1.3: Configure Tailwind CSS and PostCSS**
*   **Action:** Create `tailwind.config.ts` and `postcss.config.mjs` with the exact content from the spec.
*   **Prompt:** "Prompt 1.3: Create the `tailwind.config.ts` and `postcss.config.mjs` files with the content provided in the specification."

**Step 1.4: Configure TypeScript**
*   **Action:** Overwrite the default `tsconfig.json` with the one from the spec to ensure our specific compiler options are used.
*   **Prompt:** "Prompt 1.4: Replace the contents of `tsconfig.json` with the configuration from the specification."

## Phase 2: Global Layout & Static Assets

*   **Goal:** Implement the global styles, root layout, shared components (Header/Footer), and static assets.
*   **Outcome:** All pages will share a consistent layout and style.

**Step 2.1: Implement Global Styles**
*   **Action:** Populate `src/app/globals.css` with the base styles, Tailwind layers, and CSS variables for the light/dark themes.
*   **Prompt:** "Prompt 2.1: Replace the content of `src/app/globals.css` with the styles defined in the specification."

**Step 2.2: Create Placeholder Asset**
*   **Action:** Create the `public/placeholder.svg` file.
*   **Prompt:** "Prompt 2.2: Create the `public/placeholder.svg` file with the content from the specification."

**Step 2.3: Abstract Icons**
*   **Action:** Create `src/components/icons.tsx` and move the `MountainIcon` and `MenuIcon` into it, per Architectural Ruling #4.
*   **Prompt:** "Prompt 2.3: Create a new file `src/components/icons.tsx` and place the `MountainIcon` and `MenuIcon` SVG components inside it. Export both components."

**Step 2.4: Create Header Component**
*   **Action:** Create `src/components/Header.tsx`, importing icons from the new `icons.tsx` file and removing `prefetch={false}` from all Links, per Architectural Ruling #3.
*   **Prompt:** "Prompt 2.4: Create the `src/components/Header.tsx` component. It must import `MountainIcon` and `MenuIcon` from `@/components/icons.tsx`. Remove the `prefetch={false}` prop from all `Link` components."

**Step 2.5: Create Footer Component**
*   **Action:** Create `src/components/Footer.tsx`, removing `prefetch={false}` from all Links per Architectural Ruling #3.
*   **Prompt:** "Prompt 2.5: Create the `src/components/Footer.tsx` component. Remove the `prefetch={false}` prop from all `Link` components."

**Step 2.6: Create Root Layout**
*   **Action:** Create the root layout `src/app/layout.tsx` which ties together the global styles, fonts, Header, and Footer.
*   **Prompt:** "Prompt 2.6: Create the root layout at `src/app/layout.tsx` using the code from the specification."

## Phase 3: Home Page Components

*   **Goal:** Build all individual components that make up the home page.
*   **Outcome:** A complete, multi-section home page.

**Step 3.1: Create Hero Component**
*   **Action:** Create `src/components/Hero.tsx`.
*   **Prompt:** "Prompt 3.1: Create the `src/components/Hero.tsx` component as specified, ensuring the `prefetch={false}` prop is removed from the Link."

**Step 3.2: Create Features Component**
*   **Action:** Create `src/components/Features.tsx`.
*   **Prompt:** "Prompt 3.2: Create the `src/components/Features.tsx` component as specified."

**Step 3.3: Create Testimonials Component**
*   **Action:** Create `src/components/Testimonials.tsx`.
*   **Prompt:** "Prompt 3.3: Create the `src/components/Testimonials.tsx` component as specified."

**Step 3.4: Create Newsletter Component**
*   **Action:** Create `src/components/Newsletter.tsx`.
*   **Prompt:** "Prompt 3.4: Create the `src/components/Newsletter.tsx` component as specified."

**Step 3.5: Assemble Home Page**
*   **Action:** Create `src/app/page.tsx` to assemble the home page components.
*   **Prompt:** "Prompt 3.5: Create the home page at `src/app/page.tsx` by assembling the Hero, Features, Testimonials, and Newsletter components."

## Phase 4: Content Pages

*   **Goal:** Build out the remaining pages of the site.
*   **Outcome:** A fully navigable website with all specified pages.

**Step 4.1: Create About Page**
*   **Action:** Create `src/app/about/page.tsx`.
*   **Prompt:** "Prompt 4.1: Create the About page at `src/app/about/page.tsx` as specified."

**Step 4.2: Create Services Page**
*   **Action:** Create `src/app/services/page.tsx`.
*   **Prompt:** "Prompt 4.2: Create the Services page at `src/app/services/page.tsx` as specified."

**Step 4.3: Create Case Studies Page**
*   **Action:** Create `src/app/case-studies/page.tsx`, removing `prefetch={false}`.
*   **Prompt:** "Prompt 4.3: Create the Case Studies page at `src/app/case-studies/page.tsx`, ensuring `prefetch={false}` is removed from the Links."

**Step 4.4: Create Blog Index Page**
*   **Action:** Create `src/app/blog/page.tsx`, removing `prefetch={false}`.
*   **Prompt:** "Prompt 4.4: Create the Blog index page at `src/app/blog/page.tsx`, ensuring `prefetch={false}` is removed from the Links."

**Step 4.5: Create Dynamic Blog Post Page**
*   **Action:** Create `src/app/blog/[slug]/page.tsx`.
*   **Prompt:** "Prompt 4.5: Create the dynamic blog post page at `src/app/blog/[slug]/page.tsx` as specified."

**Step 4.6: Create Contact Page with React Actions**
*   **Action:** Create `src/app/contact/page.tsx`, refactoring the form to use a React Server Action per Architectural Ruling #1.
*   **Prompt:** "Prompt 4.6: Create the Contact page at `src/app/contact/page.tsx`. Refactor the form to use a React Server Action for submission handling instead of client-side state."