import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'GeniVerse',
  tagline: 'AI-Powered Immersive Learning Platform',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://geniverse.ai',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'geniverse',
  projectName: 'geniverse-docs',

  onBrokenLinks: 'throw',
  // Enable Mermaid diagrams
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  themes: ['@docusaurus/theme-mermaid'],

  // Temporarily disabled search plugin to fix validation error
  // plugins: [
  //   [
  //     '@easyops-cn/docusaurus-search-local',
  //     {
  //       hashed: true,
  //     },
  //   ],
  // ],

  // Internationalization configuration
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'uk'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
      },
      uk: {
        label: 'Українська',
        direction: 'ltr',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: undefined,
        },
        blog: false,
        pages: {},
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/geniverse-social-card.jpg',
    mermaid: {
      theme: {light: 'base', dark: 'base'},
      options: {
        themeVariables: {
          primaryColor: '#1a1a1a',
          primaryTextColor: '#ffffff',
          primaryBorderColor: '#7CECBF',
          lineColor: '#7CECBF',
          secondaryColor: '#2d2d2d',
          tertiaryColor: '#3a3a3a',
          background: '#0B0D0C',
          mainBkg: '#1a1a1a',
          secondBkg: '#2d2d2d',
          mainContrastColor: '#ffffff',
          darkMode: true,
          textColor: '#ffffff',
          nodeBorder: '#7CECBF',
          clusterBkg: '#2d2d2d',
          clusterBorder: '#7CECBF',
          defaultLinkColor: '#7CECBF',
          titleColor: '#ffffff',
          edgeLabelBackground: '#1a1a1a',
          nodeTextColor: '#ffffff',
          fontSize: '18px',
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        },
      },
    },
    navbar: {
      title: 'GeniVerse',
      logo: {
        alt: 'GeniVerse Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          to: '/diagrams',
          label: 'Diagrams',
          position: 'left',
        },
        {
          to: '/pythagorean',
          label: 'Pythagorean',
          position: 'left',
        },
        {
          type: 'localeDropdown',
          position: 'right',
          dropdownItemsAfter: [],
          dropdownItemsBefore: [],
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} FuturumXR. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.vsDark,
      darkTheme: prismThemes.vsDark,
      additionalLanguages: ['bash', 'json', 'yaml'],
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

