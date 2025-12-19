# GeniVerse Documentation

This is the documentation website for GeniVerse, an AI-powered immersive learning platform.

## Getting Started

### Prerequisites

- Node.js >= 18.0
- npm or yarn

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm start
```

The site will be available at `http://localhost:3000`.

### Production Build

Build the site for production:

```bash
npm run build
```

The built site will be in the `build/` directory.

### Serve Production Build

Serve the production build locally:

```bash
npm run serve
```

## Project Structure

```
.
├── docs/                    # Documentation markdown files
│   ├── overview.md
│   ├── vision-purpose.md
│   ├── product-principles.md
│   ├── pedagogical-framework.md
│   ├── roles-permissions.md
│   ├── core-capabilities.md
│   ├── ai-layer.md
│   ├── xr-immersive.md
│   ├── design-system.md
│   ├── safety-ethics-compliance.md
│   └── modularity-deployment.md
├── src/
│   ├── css/
│   │   └── custom.css       # Custom styles and design tokens
│   └── pages/
│       ├── index.tsx        # Landing page
│       └── diagrams.tsx     # Diagrams aggregation page
├── static/
│   └── img/                 # Static images and assets
├── docusaurus.config.ts     # Docusaurus configuration
├── sidebars.ts              # Sidebar navigation configuration
└── package.json             # Dependencies and scripts
```

## Features

- **Docs-Only Site**: Documentation-focused with a simple landing page
- **Mermaid Diagrams**: Interactive diagrams throughout the documentation
- **Diagrams Page**: Aggregated diagrams with SVG export capability
- **Local Search**: Full-text search without external dependencies
- **Custom Design**: GeniVerse brand colors and typography
- **Dark Theme**: Optimized dark theme with custom color tokens

## Design Tokens

- **Background**: `#0B0D0C`
- **Accent**: `#34E1A1`
- **Text**: `#E8F9F0`
- **Fonts**: Space Grotesk (headings), Inter (body)

## Documentation Sections

1. **Overview** - Introduction and system architecture
2. **Vision & Purpose** - Mission and strategic goals
3. **Product Principles** - Core design principles
4. **Pedagogical Framework** - Learning theories and methodologies
5. **Roles & Permissions** - RBAC system and user roles
6. **Core Capabilities** - Platform features and functionality
7. **AI Layer** - Artificial intelligence components
8. **XR & Immersive** - Extended reality technologies
9. **Design System** - UI/UX guidelines and components
10. **Safety, Ethics & Compliance** - Security and regulatory considerations
11. **Modularity & Deployment** - Architecture and deployment options

## Customization

### Adding New Documentation

Add new markdown files to the `docs/` directory and update `sidebars.ts` to include them in the navigation.

### Modifying Styles

Edit `src/css/custom.css` to customize the design system and color tokens.

### Adding Diagrams

Add Mermaid diagrams to any markdown file using the standard Mermaid syntax. They will automatically render and be available on the Diagrams page.

## Deployment

The site can be deployed to any static hosting service:

- **Vercel**: Connect your repository for automatic deployments
- **Netlify**: Connect your repository for automatic deployments
- **GitHub Pages**: Use `npm run deploy` after configuring GitHub Pages
- **AWS S3**: Upload the `build/` directory to an S3 bucket
- **Any Static Host**: Upload the `build/` directory contents

## License

Copyright © GeniVerse. All rights reserved.

