import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/diagrams',
    component: ComponentCreator('/diagrams', '04e'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'c97'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '891'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '056'),
            routes: [
              {
                path: '/ai-layer',
                component: ComponentCreator('/ai-layer', 'a93'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/core-capabilities',
                component: ComponentCreator('/core-capabilities', '176'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/design-system',
                component: ComponentCreator('/design-system', 'e8e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/modularity-deployment',
                component: ComponentCreator('/modularity-deployment', '1f9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/overview',
                component: ComponentCreator('/overview', '7d0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/pedagogical-framework',
                component: ComponentCreator('/pedagogical-framework', '144'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/product-principles',
                component: ComponentCreator('/product-principles', '23e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/roles-permissions',
                component: ComponentCreator('/roles-permissions', 'f54'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/safety-ethics-compliance',
                component: ComponentCreator('/safety-ethics-compliance', '51a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/vision-purpose',
                component: ComponentCreator('/vision-purpose', '71b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/xr-immersive',
                component: ComponentCreator('/xr-immersive', '772'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
