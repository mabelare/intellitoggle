# IntelliToggle

A landing page for IntelliToggle, built with Nuxt 3, Vue 3, and Tailwind CSS.

## Hosted URL

Deployed on Netlify: _https://intellitoggleclone.netlify.app_

## Setup

```bash
# Install dependencies
npm install

# Start the development server (runs on port 3001)
npm run dev

# Build for production (static generation)
npm run generate

# Preview the production build
npm run preview
```

## Tech Stack

- **Framework:** Nuxt 3 (v4.3.1) with Vue 3
- **Styling:** Tailwind CSS
- **Fonts:** DM Sans, Poppins, Plus Jakarta Sans, Satoshi, Inter, Merriweather Sans
- **Deployment:** Netlify (static generation via `nuxt generate`)

## Project Structure

```
app/
  app.vue              - Root component (skip nav, main landmark, section composition)
  components/          - Vue components (HeroSection, FeatureSection, AiSection, etc.)
  assets/css/          - Global styles (reset.css, fonts.css)
nuxt.config.ts         - Nuxt configuration
tailwind.config.ts     - Tailwind CSS custom theme (fonts, colors)
netlify.toml           - Netlify deployment settings
pixelay/               - Pixelay overlay screenshots and comparison notes
```

## Interactive Elements

- **Mobile menu toggle:** Hamburger/close icon in the header toggles a full-screen mobile navigation overlay with smooth open/close behavior and proper ARIA attributes.

## Accessibility

- Skip-to-content link for keyboard navigation
- Semantic HTML throughout (header, nav, main, section, article, footer)
- ARIA labels on all sections, navigation landmarks, and interactive controls
- Visible focus indicators on all interactive elements
- Proper heading hierarchy (h1, h2, h3)
- Form label and autocomplete on the newsletter email input
- Lazy-loaded images below the fold
- Decorative images marked with aria-hidden

## Tradeoffs and Shortcuts

- **Single-page architecture:** The site is a single-page application with no route-based pages. All content lives in `app.vue` composed from section components. This is appropriate for a landing page but would need a pages directory for multi-page navigation.
- **Font approximation:** Some fonts used in the Figma design may render differently in the browser due to antialiasing and hinting differences across platforms.
- **Responsive breakpoints:** Tailwind's default breakpoint system was used rather than matching Figma's exact artboard widths. This provides a more maintainable responsive layout but may introduce minor spacing differences at certain viewport sizes.
- **Static generation:** The site uses `nuxt generate` for deployment. No server-side rendering at request time, which is appropriate for a marketing page.
- **Floating overlay cards:** The decorative UI preview cards in the hero section are only shown at xl (1280px+) breakpoints to prevent viewport overflow at narrower desktop widths.

## Pixelay Comparison

The `pixelay/` directory contains the Figma-to-browser overlay comparison. A desktop overlay screenshot (`pixelay-desktop.png`) was captured at 50% opacity using Pixelay's transparent overlay mode. A mobile overlay could not be captured reliably. See `pixelay/notes.md` for details on visible differences.
