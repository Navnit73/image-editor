---
version: alpha
name: Apple
website: "https://www.apple.com"
description: A photography-first interface that turns marketing into a museum gallery. Edge-to-edge product tiles alternate light and dark canvases, framed by SF Pro Display headlines with negative letter-spacing and a single Action Blue (#0066cc) interactive color. UI chrome recedes so the product can speak — no decorative gradients, no shadows on chrome, only the one signature drop-shadow under product imagery resting on a surface.

seo:
  title: "Apple Design System for React — Action Blue, SF Pro, and 24 components"
  metaDescription: "Apple's design system as a DESIGN.md file. Action Blue #0066cc, SF Pro, 21 colors, 24 components. For React, Next.js, and AI tools."
  highlights:
    - "Single interactive color — Action Blue #0066cc is every link, every pill CTA, every focus signal; no secondary brand accent exists"
    - "Photography-first chrome — UI recedes so the product can speak; exactly one drop-shadow in the system, reserved for product imagery"
    - "Alternating tile rhythm — full-bleed light and dark canvases stack edge-to-edge; the color change itself is the section divider"
    - "Body at 17px, not 16px — display headlines carry negative letter-spacing for the signature Apple-tight cadence"
    - "Weight 500 is absent — the type ladder runs 300/400/600/700, with the rare weight 300 reserved for airy moments"
  tags:
    - "Consumer Electronics"
    - "Mobile Platforms"
  lastUpdated: "2026-05-12"
  author:
    name: "Dov Azencot"
    url: "https://x.com/dovazencot"
  opening: |
    Apple's web presence is a masterclass in reverent product photography framed by near-invisible UI. Every page is a stack of edge-to-edge product tiles — alternating light and dark canvases, each centered on a hero headline, a one-line tagline, two tiny blue pill CTAs, and an impossibly crisp product render. Nothing competes with the product. Typography is confident but quiet; color is either pure white, an off-white parchment, or a near-black tile; interactive elements are a single, quiet Action Blue at #0066cc. Density is unusually low even by contemporary SaaS standards.

    This page captures Apple's marketing system as a DESIGN.md file — Google Labs' open spec for machine-readable design tokens. Inside: 21 color tokens covering the one signature blue, three near-black tile variants, white and parchment canvases, and a muted text ladder; 16 typography tokens running entirely on SF Pro Display (for display sizes) and SF Pro Text (for body and UI), with weight 500 deliberately absent from the ladder; seven radius tokens that hierarchically split between zero (full-bleed tiles) and pill (every interactive element); and 24 component definitions covering buttons, product tiles, the two-row navigation, store utility cards, the iPhone configurator, and a floating sticky purchase bar.

    Drop the file into Claude, Cursor, GitHub Copilot, or any AI assistant that reads structured design tokens. The agent will produce React components and Tailwind classes that match Apple's actual voice — museum-grade reverence for product, not a generic SaaS template. Use it as a reference for design audits, a starting point for your own product-led marketing surface, or a teaching artifact for talking about restraint, single-accent systems, and the discipline of letting photography do the framing.
  related:
    - href: "https://github.com/google-labs-code/design.md"
      title: "The DESIGN.md specification"
      description: "Google Labs' open spec for machine-readable design system files — the format this page is built on."
    - href: "/design"
      title: "Browse all design systems"
      description: "The full directory of DESIGN.md files on shadcn.io, with live mockups for each."
    - href: "/blocks"
      title: "React blocks for shadcn/ui"
      description: "Production-ready hero, pricing, CTA, and dashboard sections built with the same Tailwind + shadcn primitives."
  questions:
    - id: "primary-color"
      title: "What is Apple's primary brand color?"
      answer: "Action Blue #0066cc — the single interactive color across the entire system. Every link, every pill CTA, every focus signal uses it. There is no secondary brand accent. On dark tiles it shifts to a brighter sibling at #2997ff (Sky Link Blue) because the standard Action Blue would disappear against the #272729 tile background. The focus-ring variant nudges to #0071e3."
    - id: "typography"
      title: "What typography does Apple use, and what should I use if SF Pro isn't available?"
      answer: "SF Pro Display (Apple's proprietary display face, optimized for ≥19px) and SF Pro Text (optimized for body and UI below 20px). The fallback walks 'system-ui, -apple-system' — on Apple platforms this resolves to the real SF Pro. For non-Apple platforms, Inter is the closest open-source substitute. Nudge letter-spacing down by -0.01em on display sizes to re-create the Apple-tight headline feel."
    - id: "body-17px"
      title: "Why does Apple use 17px body text instead of 16px?"
      answer: "That single extra pixel defines the brand's reading pace. SF Pro Text at 17px / 400 / 1.47 line-height with -0.374px letter-spacing reads as 'an article, not a SaaS marketing page.' It's small enough to feel professional, large enough to feel slowed-down. Apple breaks the 16px SaaS convention deliberately — copying their body styling without the 17px misses the voice entirely."
    - id: "tile-rhythm"
      title: "How does Apple structure its long marketing pages?"
      answer: "As a stack of edge-to-edge product tiles. Each tile occupies roughly one viewport, alternating between white, parchment (#f5f5f7), and near-black (#272729 with two micro-step variants for stacked dark tiles). The color change itself is the section divider — no borders, no shadows, no rules. Inside each tile: a centered headline at 40px/600 SF Pro Display, a one-line tagline, two tiny blue pill CTAs, and the product render."
    - id: "shadow-philosophy"
      title: "What's Apple's shadow philosophy?"
      answer: "Exactly one shadow exists in the entire system: rgba(0, 0, 0, 0.22) 3px 5px 30px, applied only to product photography resting on a surface. No shadow on cards. No shadow on buttons. No shadow on text. Elevation comes from surface-color change between tiles and from backdrop-filter blur on sticky bars. The single shadow is about giving the product visual weight, not about UI hierarchy."
    - id: "use-in-project"
      title: "Can I use this DESIGN.md to build my own product page?"
      answer: "Yes — feed it to Claude, Cursor, or GitHub Copilot. The agent will reproduce Apple's restraint (single accent, edge-to-edge tile alternation, museum-grade whitespace) rather than a generic SaaS theme. You can also reference the tokens directly — every color, type style, radius, and spacing value is a quoted value ready to paste into Tailwind config, CSS variables, or your own component library. Pair with high-quality product photography to get the full effect."

colors:
  primary: "#0066cc"
  primary-focus: "#0071e3"
  primary-on-dark: "#2997ff"
  ink: "#1d1d1f"
  body: "#1d1d1f"
  body-on-dark: "#ffffff"
  body-muted: "#cccccc"
  ink-muted-80: "#333333"
  ink-muted-48: "#7a7a7a"
  divider-soft: "#f0f0f0"
  hairline: "#e0e0e0"
  canvas: "#ffffff"
  canvas-parchment: "#f5f5f7"
  surface-pearl: "#fafafc"
  surface-tile-1: "#272729"
  surface-tile-2: "#2a2a2c"
  surface-tile-3: "#252527"
  surface-black: "#000000"
  surface-chip-translucent: "#d2d2d7"
  on-primary: "#ffffff"
  on-dark: "#ffffff"

typography:
  hero-display:
    fontFamily: "SF Pro Display, system-ui, -apple-system, sans-serif"
    fontSize: 56px
    fontWeight: 600
    lineHeight: 1.07
    letterSpacing: -0.28px
  display-lg:
    fontFamily: "SF Pro Display, system-ui, -apple-system, sans-serif"
    fontSize: 40px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: 0
  display-md:
    fontFamily: "SF Pro Text, system-ui, -apple-system, sans-serif"
    fontSize: 34px
    fontWeight: 600
    lineHeight: 1.47
    letterSpacing: -0.374px
  lead:
    fontFamily: "SF Pro Display, system-ui, -apple-system, sans-serif"
    fontSize: 28px
    fontWeight: 400
    lineHeight: 1.14
    letterSpacing: 0.196px
  lead-airy:
    fontFamily: "SF Pro Text, system-ui, -apple-system, sans-serif"
    fontSize: 24px
    fontWeight: 300
    lineHeight: 1.5
    letterSpacing: 0
  tagline:
    fontFamily: "SF Pro Display, system-ui, -apple-system, sans-serif"
    fontSize: 21px
    fontWeight: 600
    lineHeight: 1.19
    letterSpacing: 0.231px
  body-strong:
    fontFamily: "SF Pro Text, system-ui, -apple-system, sans-serif"
    fontSize: 17px
    fontWeight: 600
    lineHeight: 1.24
    letterSpacing: -0.374px
  body:
    fontFamily: "SF Pro Text, system-ui, -apple-system, sans-serif"
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.47
    letterSpacing: -0.374px
  dense-link:
    fontFamily: "SF Pro Text, system-ui, -apple-system, sans-serif"
    fontSize: 17px
    fontWeight: 400
    lineHeight: 2.41
    letterSpacing: 0
  caption:
    fontFamily: "SF Pro Text, system-ui, -apple-system, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: -0.224px
  caption-strong:
    fontFamily: "SF Pro Text, system-ui, -apple-system, sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.29
    letterSpacing: -0.224px
  button-large:
    fontFamily: "SF Pro Text, system-ui, -apple-system, sans-serif"
    fontSize: 18px
    fontWeight: 300
    lineHeight: 1.0
    letterSpacing: 0
  button-utility:
    fontFamily: "SF Pro Text, system-ui, -apple-system, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.29
    letterSpacing: -0.224px
  fine-print:
    fontFamily: "SF Pro Text, system-ui, -apple-system, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: -0.12px
  micro-legal:
    fontFamily: "SF Pro Text, system-ui, -apple-system, sans-serif"
    fontSize: 10px
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: -0.08px
  nav-link:
    fontFamily: "SF Pro Text, system-ui, -apple-system, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: -0.12px

rounded:
  none: 0px
  xs: 5px
  sm: 8px
  md: 11px
  lg: 18px
  pill: 9999px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 17px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 80px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: 11px 22px
  button-primary-focus:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.pill}"
  button-primary-active:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.pill}"
  button-secondary-pill:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: 11px 22px
  button-dark-utility:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button-utility}"
    rounded: "{rounded.sm}"
    padding: 8px 15px
  button-pearl-capsule:
    backgroundColor: "{colors.surface-pearl}"
    textColor: "{colors.ink-muted-80}"
    typography: "{typography.caption}"
    rounded: "{rounded.md}"
    padding: 8px 14px
  button-store-hero:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-large}"
    rounded: "{rounded.pill}"
    padding: 14px 28px
  button-icon-circular:
    backgroundColor: "{colors.surface-chip-translucent}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    size: 44px
  text-link:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.body}"
  text-link-on-dark:
    backgroundColor: transparent
    textColor: "{colors.primary-on-dark}"
    typography: "{typography.body}"
  global-nav:
    backgroundColor: "{colors.surface-black}"
    textColor: "{colors.on-dark}"
    typography: "{typography.nav-link}"
    height: 44px
  sub-nav-frosted:
    backgroundColor: "{colors.canvas-parchment}"
    textColor: "{colors.ink}"
    typography: "{typography.tagline}"
    height: 52px
  product-tile-light:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: 80px
  product-tile-parchment:
    backgroundColor: "{colors.canvas-parchment}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: 80px
  product-tile-dark:
    backgroundColor: "{colors.surface-tile-1}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: 80px
  product-tile-dark-2:
    backgroundColor: "{colors.surface-tile-2}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.none}"
  product-tile-dark-3:
    backgroundColor: "{colors.surface-tile-3}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.none}"
  store-utility-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-strong}"
    rounded: "{rounded.lg}"
    padding: 24px
  configurator-option-chip:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 12px 16px
  configurator-option-chip-selected:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
  search-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: 12px 20px
    height: 44px
  floating-sticky-bar:
    backgroundColor: "{colors.canvas-parchment}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    height: 64px
    padding: 12px 32px
  environment-quote-card:
    backgroundColor: "{colors.surface-tile-1}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: 80px
  footer:
    backgroundColor: "{colors.canvas-parchment}"
    textColor: "{colors.ink-muted-80}"
    typography: "{typography.fine-print}"
    padding: 64px
---
