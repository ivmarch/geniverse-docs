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
  onBrokenMarkdownLinks: 'warn',

  // Enable Mermaid diagrams
  markdown: {
    mermaid: true,
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
          sidebarItemsGenerator: async ({defaultSidebarItemsGenerator, ...args}) => {
            const sidebarItems = await defaultSidebarItemsGenerator(args);
            return sidebarItems;
          },
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
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} GeniVerse. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.vsDark,
      darkTheme: prismThemes.vsDark,
      additionalLanguages: ['bash', 'json', 'yaml'],
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

