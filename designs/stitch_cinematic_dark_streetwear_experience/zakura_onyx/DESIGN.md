---
name: Zakura Onyx
colors:
  surface: '#121314'
  surface-dim: '#121314'
  surface-bright: '#393939'
  surface-container-lowest: '#0d0e0f'
  surface-container-low: '#1b1c1c'
  surface-container: '#1f2020'
  surface-container-high: '#292a2a'
  surface-container-highest: '#343535'
  on-surface: '#e4e2e2'
  on-surface-variant: '#c4c7c8'
  inverse-surface: '#e4e2e2'
  inverse-on-surface: '#303031'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c6c6c7'
  primary: '#ffffff'
  on-primary: '#2f3131'
  primary-container: '#e2e2e2'
  on-primary-container: '#636565'
  inverse-primary: '#5d5f5f'
  secondary: '#c9c6c5'
  on-secondary: '#313030'
  secondary-container: '#474646'
  on-secondary-container: '#b7b4b4'
  tertiary: '#ffffff'
  on-tertiary: '#313030'
  tertiary-container: '#e5e2e1'
  on-tertiary-container: '#656464'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c9c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474746'
  background: '#121314'
  on-background: '#e4e2e2'
  surface-variant: '#343535'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 84px
    fontWeight: '800'
    lineHeight: 90%
    letterSpacing: -0.04em
  display-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 100%
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 120%
    letterSpacing: 0.05em
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 160%
    letterSpacing: 0.01em
  technical-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 140%
    letterSpacing: 0.1em
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 100%
    letterSpacing: 0.02em
spacing:
  container-max: 1440px
  gutter: 24px
  margin-edge: 40px
  section-gap: 120px
  element-tight: 8px
  element-loose: 24px
---

## Brand & Style
The design system is built on a foundation of **Cinematic Minimalism** and **Luxury Brutalism**. It targets a high-end streetwear audience, evoking feelings of exclusivity, urban mystery, and underground authority. 

The aesthetic leverages "Obsidian Space"—using deep blacks not just as a background, but as a structural element that frames high-contrast fashion photography. The interface should feel like a digital editorial lookbook, where the product is the protagonist and the UI serves as a precise, technical frame. Key visual motifs include film grain overlays, subtle smoke textures, and monospaced technical metadata that suggests a "classified" or limited-run nature.

## Colors
This design system utilizes a strictly monochromatic, high-contrast palette to maintain a premium, underground feel.

- **Primary (Pure White):** Reserved for high-impact typography, primary actions, and critical branding elements. It must pierce through the darkness.
- **Secondary (Obsidian):** The primary canvas color (#050505). It provides the "void" that allows photography and white text to pop.
- **Tertiary (Charcoal):** Used for subtle depth, such as section dividers, input backgrounds, or hover states for cards.
- **Neutral (Slate Gray):** Utilized for secondary information, technical labels, and monospaced metadata to reduce visual noise while maintaining legibility.

## Typography
The typography strategy creates a tension between bold, aggressive sans-serifs and precise, monospaced accents.

1.  **Headlines:** Use Hanken Grotesk with tight leading and negative letter spacing for a "Nike-editorial" impact. High-tier headers should always be uppercase.
2.  **Body:** Hanken Grotesk provides a clean, neutral reading experience that doesn't distract from the visual imagery.
3.  **Technical Accents:** Use JetBrains Mono for SKU numbers, price points, and "EST. 2024" type details. This reinforces the underground, utilitarian aesthetic.
4.  **Scale:** On mobile, reduce display sizes significantly but maintain the heavy weights to preserve the brand's "loud" personality.

## Layout & Spacing
The layout philosophy is "Editorial Chaos within a Grid." We use a 12-column fixed grid for desktop but allow elements to break the grid slightly to create a more dynamic, fashion-magazine feel.

- **Negative Space:** Use aggressive whitespace (black space) between sections (minimum 120px) to give products a sense of "prestige" and breathing room.
- **Cinematic Sections:** Hero areas and key product drops should utilize 100vh (fullscreen) heights with background-cover photography.
- **Technical Margins:** Use thin, 1px charcoal lines to occasionally frame the layout, suggesting a blueprint or technical drawing style.
- **Mobile:** Transition to a 4-column grid with reduced margins (20px), prioritizing large vertical imagery that fills the width of the screen.

## Elevation & Depth
In this design system, depth is conveyed through **Light and Texture** rather than traditional drop shadows.

- **Tonal Layering:** Depth is achieved by placing #1A1A1A (Charcoal) surfaces over the #050505 (Obsidian) base.
- **Atmospheric Effects:** Use soft, white-to-transparent gradients (at 5-10% opacity) to simulate smoke or grain over UI elements, making them feel part of the environment.
- **Backdrop Blurs:** When using overlays or menus, use high-intensity backdrop blurs (20px+) to create a frosted glass effect that feels like thick, dark acrylic.
- **Glow:** Essential UI elements (like a 'Buy' button) may have a very subtle white outer glow to simulate neon light in a dark alley.

## Shapes
The shape language is strictly **Sharp (0px roundedness)**. 

Curves are avoided to maintain an aggressive, architectural, and masculine aesthetic. All buttons, input fields, and card containers must have 90-degree corners. This reinforces the "Brutalist" aspect of the brand and aligns with the technical, monospaced typography. The only exception to "sharpness" is the use of circular icons or purely circular graphic motifs (like a globe or crosshair) to provide visual contrast.

## Components

- **Buttons:** Primary buttons are solid White with Black text, sharp corners. Hover state: Inverse (Black background, White thin border). Secondary buttons are Ghost-style (White 1px border, no fill).
- **Cards:** Product cards are borderless with the image taking 100% of the container. Information (Name, Price) is placed underneath in monospaced font.
- **Input Fields:** Bottom-border only (1px White), no background fill. Labels use the Technical-SM monospaced style.
- **Chips/Labels:** Small, sharp-edged rectangles with a Charcoal background and White monospaced text, resembling garment tags or serial number stickers.
- **Navigation:** Minimalist top-bar. Links use Hanken Grotesk, uppercase, with a 1px underline that appears on hover.
- **Progressive Disclosure:** Use thin vertical lines and '+' icons for accordions in technical spec sections to mimic architectural diagrams.