# Quick Start Guide

## Installation & Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm start
   ```
   The site will be available at `http://localhost:3000`

## Project Structure

- **`docs/`** - All documentation markdown files
- **`src/pages/`** - React pages (landing page, diagrams page)
- **`src/css/`** - Custom CSS with design tokens
- **`static/img/`** - Static assets (logo, favicon)
- **`docusaurus.config.ts`** - Main configuration file
- **`sidebars.ts`** - Navigation sidebar configuration

## Key Features

✅ **Docs-only site** with landing page at `/`
✅ **11 documentation sections** covering all aspects of GeniVerse
✅ **Mermaid diagrams** integrated throughout documentation
✅ **Diagrams page** (`/diagrams`) with SVG export functionality
✅ **Local search** using `@easyops-cn/docusaurus-search-local`
✅ **Custom design** with GeniVerse brand colors
✅ **Dark theme** optimized for readability

## Design Tokens

- Background: `#0B0D0C`
- Accent: `#34E1A1`
- Text: `#E8F9F0`
- Fonts: Space Grotesk (headings), Inter (body)

## Building for Production

```bash
npm run build
```

The built site will be in the `build/` directory, ready for deployment to any static hosting service.

## Adding New Documentation

1. Create a new `.md` file in the `docs/` directory
2. Add it to `sidebars.ts` to include it in navigation
3. Use Mermaid syntax for diagrams: ` ```mermaid ... ``` `

## Customization

- **Colors**: Edit `src/css/custom.css` CSS variables
- **Navigation**: Edit `sidebars.ts`
- **Configuration**: Edit `docusaurus.config.ts`
- **Landing Page**: Edit `src/pages/index.tsx`

## Troubleshooting

- **Diagrams not rendering**: Ensure `@docusaurus/theme-mermaid` is installed
- **Search not working**: Verify `@easyops-cn/docusaurus-search-local` is installed
- **Build errors**: Run `npm run clear` then `npm run build`

