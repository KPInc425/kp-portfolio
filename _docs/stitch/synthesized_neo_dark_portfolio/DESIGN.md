---
name: Synthesized Neo-Dark Portfolio
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#383939'
  surface-container-lowest: '#0d0e0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#292a2a'
  surface-container-highest: '#343535'
  on-surface: '#e3e2e2'
  on-surface-variant: '#bacbb9'
  inverse-surface: '#e3e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#859585'
  outline-variant: '#3b4a3d'
  surface-tint: '#00e475'
  primary: '#75ff9e'
  on-primary: '#003918'
  primary-container: '#00e676'
  on-primary-container: '#00612e'
  inverse-primary: '#006d35'
  secondary: '#c8c6c5'
  on-secondary: '#313030'
  secondary-container: '#4a4949'
  on-secondary-container: '#bab8b7'
  tertiary: '#ffdec4'
  on-tertiary: '#4b2800'
  tertiary-container: '#ffba79'
  on-tertiary-container: '#794810'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#62ff96'
  primary-fixed-dim: '#00e475'
  on-primary-fixed: '#00210b'
  on-primary-fixed-variant: '#005226'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#ffdcbf'
  tertiary-fixed-dim: '#fdb878'
  on-tertiary-fixed: '#2d1600'
  on-tertiary-fixed-variant: '#6a3c03'
  background: '#121414'
  on-background: '#e3e2e2'
  surface-variant: '#343535'
  background-deep: '#0A0A0A'
  surface-elevated: '#1E1E1E'
  surface-stroke: '#2A2A2A'
  success-emerald: '#4CAF50'
  code-highlight: '#16211A'
typography:
  display-xl:
    fontFamily: Geist
    fontSize: 72px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.02em
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  section-gap-desktop: 160px
  section-gap-mobile: 80px
  component-padding-sm: 12px
  component-padding-md: 24px
---

## Brand & Style

The design system establishes a high-performance, technical persona for a full-stack developer. It targets hiring managers and technical recruiters who value precision, clean code, and modern aesthetics. The brand personality is **sophisticated, technical, and high-energy**.

The chosen style is **Minimalist-Tech**. This approach combines a refined dark mode with neon accents to evoke a terminal-like precision while maintaining the elegance of high-end SaaS platforms. It prioritizes clarity and whitespace to ensure the developer's work is the focal point, utilizing subtle gradients and razor-sharp UI elements to communicate modern engineering proficiency.

## Colors

The palette is anchored by a deep-gray foundation rather than pure black to reduce eye strain and provide better depth for layering. 

- **Primary Green (#00E676):** A vibrant, high-energy neon green used exclusively for primary calls to action, active states, and critical highlights.
- **Surface Strategy:** The background uses `#0A0A0A` as the base. UI containers and cards utilize `#1E1E1E` to create a logical separation of content layers.
- **Accents:** Semantic greens like `#4CAF50` are reserved for success states, while `#2A2A2A` serves as the standard border color for low-contrast definition.

## Typography

This system uses a tiered font strategy to reinforce the developer aesthetic:

- **Headlines:** **Geist** provides a modern, geometric feel that looks "engineered." Large display sizes use tight tracking for a punchy, editorial impact.
- **Body:** **Inter** is used for maximum readability in project descriptions and bios, ensuring a professional and neutral tone.
- **Functional:** **JetBrains Mono** is utilized for tags, code snippets, and technical metadata, grounding the design in developer culture.

Vertical rhythm is maintained through a consistent 1.5x line-height for body text, while display headings are kept tight to maintain visual density.

## Layout & Spacing

The layout follows a **Fixed Grid** model for desktop, centered within the viewport to maintain focus.

- **Grid System:** A 12-column grid with 24px gutters. Project cards typically span 4 or 6 columns depending on priority.
- **Sectioning:** Large vertical gaps (160px) are used between major sections (Hero, Projects, Contact) to provide visual breathing room and emphasize the minimalist aesthetic.
- **Responsive Behavior:** 
  - **Desktop:** Full 12-column visibility.
  - **Tablet:** 8-column grid with 40px side margins.
  - **Mobile:** Single column stack with 20px side margins. Typography scales down appropriately to prevent overflow.

## Elevation & Depth

Hierarchy is achieved through **Tonal Layers** and **Low-Contrast Outlines** rather than heavy shadows.

- **Base Layer:** `#0A0A0A` (Deepest depth).
- **Surface Layer:** `#1E1E1E` for cards and navigation bars. These surfaces should have a 1px solid border of `#2A2A2A` to define their edges.
- **Interactive Depth:** On hover, cards should lift slightly using a subtle, low-opacity glow of the primary color (`#00E676` at 10% opacity) rather than a traditional black shadow.
- **Navigation:** The fixed header uses a backdrop-blur (12px) effect with a semi-transparent background (`#0A0A0A` at 80% alpha) to maintain context while scrolling.

## Shapes

The design system uses a **Soft** shape language to balance the technical "hardness" of the dark theme. 

- **Components:** Standard buttons and input fields use a `0.25rem` (4px) radius.
- **Containers:** Large project cards and modals use `0.5rem` (8px) for a more refined, modern feel.
- **Iconography:** Use linear, 2px stroke icons with slightly rounded corners to match the UI's roundedness. Avoid sharp, jagged edges.

## Components

### Navigation Bar
A fixed top-bar with a blur effect. Navigation links use `label-caps` typography. The active state is indicated by a 2px bottom border in the Primary Green.

### Buttons
- **Primary:** Background in `#00E676`, text in `#0A0A0A`. No border. High-contrast and impactful.
- **Secondary/Ghost:** Border in `#2A2A2A`, text in `#FFFFFF`. On hover, the border changes to `#00E676`.

### Project Cards
Cards should feature a subtle 1px border. The project title uses `headline-md`. Technical tags are displayed as small "Chips" using `label-code` typography with a dark background (`#2A2A2A`) and subtle green text.

### Inputs & Forms
Fields are dark-filled (`#1E1E1E`) with a 1px border (`#2A2A2A`). Focus states must trigger a Primary Green border transition and a very subtle outer glow.

### Code Snippets / Decorative Elements
Use a monospaced font for decorative code-like comments (e.g., `// Powered by Passion`) in a muted neutral color to reinforce the developer motif without distracting from the main content.