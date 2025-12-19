# Design System

The GeniVerse design system forms a cohesive visual language and component library that ensures consistency, accessibility, and a modern user experience across all platforms and interfaces.

---

## Design Tokens

Design tokens are standardized values (colors, typography, spacing, radii, shadows) used across all platform components and products. They ensure UI integrity and simplify theme maintenance.

---

### Color Palette

#### Primary Colors

- **Background**: `#0B0D0C` — deep dark background for reduced eye strain
- **Surface**: `#141716` — elevated surfaces and cards
- **Accent**: `#34E1A1` — primary accent for CTAs and highlights
- **Text Primary**: `#E8F9F0` — main text color for high contrast
- **Text Secondary**: `#B8D4C5` — secondary text for less emphasis

#### Semantic Colors

- **Success**: `#34E1A1` — success states and positive feedback
- **Warning**: `#FFB84D` — warnings and risk messages
- **Error**: `#FF6B6B` — errors and critical alerts
- **Info**: `#4DABF7` — informational messages

#### Neutral Colors

- **Border**: `#1F2321` — borders and dividers
- **Hover**: `rgba(52, 225, 161, 0.1)` — hover state
- **Active**: `rgba(52, 225, 161, 0.15)` — active state
- **Overlay**: `rgba(11, 13, 12, 0.9)` — modal windows and overlays

---

### Typography

#### Font Families

- **Headings**: Garet — geometric sans-serif for headings
- **Body**: Inter — readable sans-serif for body text
- **Monospace**: JetBrains Mono — code and technical content

#### Size Scale

- **H1**: `2.5rem` / `3rem` line-height — page headings
- **H2**: `2rem` / `2.5rem` line-height — section headings
- **H3**: `1.5rem` / `2rem` line-height — subsection headings
- **H4**: `1.25rem` / `1.75rem` line-height — minor headings
- **Body Large**: `1.125rem` / `1.75rem` line-height — emphasized body text
- **Body**: `1rem` / `1.5rem` line-height — standard body text
- **Body Small**: `0.875rem` / `1.25rem` line-height — secondary text
- **Caption**: `0.75rem` / `1rem` line-height — captions and labels

#### Font Weights

- **Light**: `300` — thin text
- **Regular**: `400` — standard text
- **Medium**: `500` — emphasized text
- **Semibold**: `600` — semibold text
- **Bold**: `700` — bold text

---

### Spacing

Base unit: 8px.

- `4px` — xs
- `8px` — s
- `16px` — m
- `24px` — l
- `32px` — xl
- `48px` — 2xl
- `64px` — 3xl
- `96px` — 4xl

---

### Border Radii

- `4px` — small elements (icons, tags)
- `6px` — standard elements (buttons, input fields)
- `8px` — cards and containers
- `12px` — large containers
- `16px` — modal windows and dialogs

---

### Shadows

- **Small**: `0 1px 2px rgba(0, 0, 0, 0.1)`
- **Medium**: `0 4px 8px rgba(0, 0, 0, 0.15)`
- **Large**: `0 8px 16px rgba(0, 0, 0, 0.2)`
- **Accent**: `0 4px 12px rgba(52, 225, 161, 0.2)`

---

## Component Library

The component library implements design tokens as cohesive UI components for web, mobile, and XR interfaces.

---

### Buttons

#### Primary Button

- background: accent (#34E1A1)
- text: background color or very dark contrasting
- hover: darker shade of accent
- active state: pressed state with shadow

#### Secondary Button

- background: transparent
- border: accent (#34E1A1)
- text: accent
- hover: accent background with low opacity

#### Tertiary Button

- background: transparent
- text: primary text color (#E8F9F0)
- hover: surface background (#141716)

---

### Forms

#### Input Fields

- background: surface (#141716)
- border: border (#1F2321)
- text: primary text color (#E8F9F0)
- focus: accent border (#34E1A1) and light glow
- placeholder: secondary text color (#B8D4C5)
- error states: border (#FF6B6B), text (#FF6B6B), background (error with low opacity)

---

### Cards

#### Standard Card

- background: surface (#141716)
- border: border (#1F2321)
- radius: 8px
- padding: 24px
- shadow: medium (0 4px 8px rgba(0, 0, 0, 0.15))

#### Interactive Card

- hover: accent border (#34E1A1)
- shadow: accent shadow (0 4px 12px rgba(52, 225, 161, 0.2))
- transition: smooth transitions

---

### Navigation

#### Top Bar

- background: background (#0B0D0C) with bottom border
- height: 64px
- border: 1px with border color (#1F2321)

#### Sidebar

- background: surface (#141716)
- border: right border with border color (#1F2321)
- width: 280px, collapsed state 64px
- menu items: padding 12px 16px, radius 6px, hover with accent background, active state with accent background and text

---

### Typographic Components

#### Headings

- font: Garet
- weight: semibold (600)
- letter-spacing: -0.02em
- color: primary text color (#E8F9F0)

#### Body Text

- font: Inter
- weight: regular (400)
- line-height: 1.5
- color: primary text color (#E8F9F0)

#### Links

- color: accent (#34E1A1)
- hover: lighter shade of accent (#58E6B2)
- underline: on hover, when needed

---

### Code Blocks

```javascript
function example() {
  return "Code example";
}
```

- background: surface (#141716)
- border: border (#1F2321)
- font: JetBrains Mono
- theme: dark with accent highlights

---

### Tables

| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Row 1    | Data     | Value    |
| Row 2    | Data     | Value    |
| Row 3    | Data     | Value    |

- header: surface background (#141716)
- rows: alternating surface background
- borders: border color (#1F2321)
- hover: accent background with low opacity

---

## Layout Patterns

### Grid System

12-column grid:

- maximum width: 1280px
- gap: 24px
- breakpoints:
  - mobile: < 768px
  - tablet: 768px–1024px
  - desktop: > 1024px

### Container Sizes

- small: up to 640px
- medium: up to 960px
- large: up to 1280px
- full: 100%

### Spacing Patterns

- section spacing: 64px vertically
- component spacing: 32px vertically
- element spacing: 16px vertically
- internal spacing: 8px horizontally

---

## Accessibility

### Color Contrast

- text on background: minimum ratio 4.5:1
- large text: minimum ratio 3:1
- interactive elements: minimum ratio 3:1

### Focus States

- focus ring: 2px solid accent color (#34E1A1)
- focus offset: 2px
- keyboard navigation: all interactive elements accessible

### Screen Reader Support

- semantic HTML for basic components
- aria attributes for complex components
- alternative text for images
- correct landmarks and page structures

---

## Responsive Design

### Mobile-First Approach

Design is projected from mobile screens and scales to larger ones.

### Breakpoints

- mobile: up to 768px
- tablet: 768px–1024px
- desktop: over 1024px

### Responsive Components

- navigation transitions to hamburger menu on mobile
- tables become scrollable or displayed in card format
- forms optimized for mobile devices

---

## Dark Theme

All components support dark theme with correct contrasts and states.

**Theme Switching:**

- automatic detection of system settings
- manual switching by user
- saving user choice

---

## Animations and Transitions

### Animation Principles

- duration: 200–300 ms
- easing: natural smoothing curves
- purpose: animations enhance UX and don't distract from learning

### Animation Types

- transitions between component states
- loading indicators and skeletons
- user action feedback
- micro-interactions for interaction confirmation

---

## XR Interaction Patterns

- gaze as selection method in XR scenarios
- pointing and action confirmation
- object capture and manipulation
- gestures as separate input type when device support is available

---

## Implementation

### CSS Variables

Design tokens are available as CSS variables for theming and configuration.

### Component Library

React components implement the design system and are used in the platform web interface.

### Design Tools

Figma files and component libraries are maintained for solution consistency and rapid development.

---

## Usage Guidelines

- use standard components for consistency
- customize components only when needed
- always consider accessibility
- follow spacing and typography scales

---

## Best Practices

- consistency: use design system components
- accessibility: check contrast, focus, and keyboard navigation
- performance: optimize components and animations
- responsiveness: test all critical scenarios on different screens
