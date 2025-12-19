# Design System

GeniVerse's design system provides a cohesive visual language and component library that ensures consistency, accessibility, and a modern user experience across all platforms and interfaces.

## Design Tokens

### Color Palette

**Primary Colors**
- **Background**: `#0B0D0C` - Deep dark background for reduced eye strain
- **Surface**: `#141716` - Elevated surfaces and cards
- **Accent**: `#34E1A1` - Primary accent color for CTAs and highlights
- **Text Primary**: `#E8F9F0` - Main text color for high contrast
- **Text Secondary**: `#B8D4C5` - Secondary text for less emphasis

**Semantic Colors**
- **Success**: `#34E1A1` - Success states and positive feedback
- **Warning**: `#FFB84D` - Warnings and cautionary messages
- **Error**: `#FF6B6B` - Errors and critical alerts
- **Info**: `#4DABF7` - Informational messages

**Neutral Colors**
- **Border**: `#1F2321` - Borders and dividers
- **Hover**: `rgba(52, 225, 161, 0.1)` - Hover states
- **Active**: `rgba(52, 225, 161, 0.15)` - Active states
- **Overlay**: `rgba(11, 13, 12, 0.9)` - Modal and overlay backgrounds

### Typography

**Font Families**
- **Headings**: `'Space Grotesk'` - Modern geometric sans-serif for headings
- **Body**: `'Inter'` - Clean, readable sans-serif for body text
- **Monospace**: `'JetBrains Mono'` - Code and technical content

**Type Scale**
- **H1**: `2.5rem` / `3rem` line-height - Page titles
- **H2**: `2rem` / `2.5rem` line-height - Section headers
- **H3**: `1.5rem` / `2rem` line-height - Subsection headers
- **H4**: `1.25rem` / `1.75rem` line-height - Minor headers
- **Body Large**: `1.125rem` / `1.75rem` line-height - Emphasized body
- **Body**: `1rem` / `1.5rem` line-height - Standard body text
- **Body Small**: `0.875rem` / `1.25rem` line-height - Secondary text
- **Caption**: `0.75rem` / `1rem` line-height - Captions and labels

**Font Weights**
- **Light**: `300` - Subtle emphasis
- **Regular**: `400` - Standard text
- **Medium**: `500` - Medium emphasis
- **Semibold**: `600` - Strong emphasis
- **Bold**: `700` - Maximum emphasis

### Spacing

**Spacing Scale** (8px base unit)
- `4px` - XS spacing
- `8px` - S spacing
- `16px` - M spacing
- `24px` - L spacing
- `32px` - XL spacing
- `48px` - 2XL spacing
- `64px` - 3XL spacing
- `96px` - 4XL spacing

### Border Radius

- `4px` - Small elements (badges, tags)
- `6px` - Standard elements (buttons, inputs)
- `8px` - Cards and containers
- `12px` - Large containers
- `16px` - Modals and dialogs

### Shadows

- **Small**: `0 1px 2px rgba(0, 0, 0, 0.1)`
- **Medium**: `0 4px 8px rgba(0, 0, 0, 0.15)`
- **Large**: `0 8px 16px rgba(0, 0, 0, 0.2)`
- **Accent**: `0 4px 12px rgba(52, 225, 161, 0.2)`

## Component Library

### Buttons

**Primary Button**
- Background: Accent color
- Text: Dark background color
- Hover: Darker accent shade
- Active: Pressed state with shadow

**Secondary Button**
- Background: Transparent
- Border: Accent color
- Text: Accent color
- Hover: Accent background with low opacity

**Tertiary Button**
- Background: Transparent
- Text: Primary text color
- Hover: Surface background

### Forms

**Input Fields**
- Background: Surface color
- Border: Border color
- Text: Primary text color
- Focus: Accent border and glow
- Placeholder: Secondary text color

**Labels**
- Font: Body small, semibold
- Color: Primary text color
- Spacing: 8px below label

**Error States**
- Border: Error color
- Text: Error color
- Background: Error color with low opacity

### Cards

**Standard Card**
- Background: Surface color
- Border: Border color
- Border radius: 8px
- Padding: 24px
- Shadow: Medium shadow

**Interactive Card**
- Hover: Accent border
- Shadow: Accent shadow on hover
- Transition: Smooth transitions

### Navigation

**Navbar**
- Background: Background color with border
- Height: 64px
- Border: Bottom border with border color

**Sidebar**
- Background: Surface color
- Border: Right border with border color
- Width: 280px (collapsed: 64px)

**Menu Items**
- Padding: 12px 16px
- Border radius: 6px
- Hover: Accent background with low opacity
- Active: Accent background, accent text

### Typography Components

**Headings**
- Font family: Space Grotesk
- Font weight: Semibold
- Letter spacing: -0.02em
- Color: Primary text color

**Body Text**
- Font family: Inter
- Font weight: Regular
- Line height: 1.5
- Color: Primary text color

**Links**
- Color: Accent color
- Hover: Lighter accent shade
- Underline: On hover (optional)

### Code Blocks

**Syntax Highlighting**
- Background: Surface color
- Border: Border color
- Font: Monospace font
- Theme: Dark theme with accent highlights

### Tables

**Table Structure**
- Header: Surface background
- Rows: Alternating surface background
- Border: Border color
- Hover: Accent background with low opacity

## Layout Patterns

### Grid System

**12-Column Grid**
- Max width: 1280px
- Gutter: 24px
- Breakpoints:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

### Container Sizes

- **Small**: 640px max width
- **Medium**: 960px max width
- **Large**: 1280px max width
- **Full**: 100% width

### Spacing Patterns

- **Section Spacing**: 64px vertical
- **Component Spacing**: 32px vertical
- **Element Spacing**: 16px vertical
- **Inline Spacing**: 8px horizontal

## Accessibility

### Color Contrast

- **Text on Background**: Minimum 4.5:1 ratio (WCAG AA)
- **Large Text**: Minimum 3:1 ratio
- **Interactive Elements**: Minimum 3:1 ratio

### Focus States

- **Focus Ring**: 2px solid accent color
- **Focus Offset**: 2px outline offset
- **Keyboard Navigation**: All interactive elements accessible

### Screen Readers

- **Semantic HTML**: Proper HTML elements
- **ARIA Labels**: Descriptive labels for complex components
- **Alt Text**: All images have descriptive alt text
- **Landmarks**: Proper landmark usage

## Responsive Design

### Breakpoints

- **Mobile**: 0px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1279px
- **Large Desktop**: 1280px+

### Mobile Considerations

- **Touch Targets**: Minimum 44x44px
- **Spacing**: Increased spacing for touch
- **Typography**: Slightly larger on mobile
- **Navigation**: Collapsible navigation

## Animation & Transitions

### Timing Functions

- **Ease In**: `cubic-bezier(0.4, 0, 1, 1)`
- **Ease Out**: `cubic-bezier(0, 0, 0.2, 1)`
- **Ease In Out**: `cubic-bezier(0.4, 0, 0.2, 1)`

### Durations

- **Fast**: 150ms - Micro-interactions
- **Standard**: 250ms - Standard transitions
- **Slow**: 350ms - Complex animations

### Common Animations

- **Fade In**: Opacity 0 to 1
- **Slide In**: Transform translate
- **Scale**: Transform scale
- **Hover**: Subtle scale or shadow increase

## XR Design Considerations

### 3D UI Elements

- **Depth**: Proper Z-ordering for 3D interfaces
- **Scale**: Appropriate sizing for VR/AR
- **Contrast**: High contrast for readability
- **Comfort**: Comfortable viewing angles

### Interaction Patterns

- **Gaze**: Gaze-based selection
- **Point**: Point and click interactions
- **Grab**: Natural grab interactions
- **Gesture**: Hand gesture recognition

## Implementation

### CSS Variables

All design tokens are available as CSS variables for easy theming and customization.

### Component Library

React components implementing the design system are available for use across the platform.

### Design Tools

Figma design files and component libraries are maintained for design consistency.

## Usage Guidelines

### When to Use Components

- Use standard components for consistency
- Customize only when necessary
- Maintain accessibility standards
- Follow spacing and typography guidelines

### Best Practices

- **Consistency**: Use design system components
- **Accessibility**: Always consider accessibility
- **Performance**: Optimize for performance
- **Responsive**: Design for all screen sizes

