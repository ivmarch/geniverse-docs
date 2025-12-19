import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/uk/design-system',
    component: ComponentCreator('/uk/design-system', '45c'),
    exact: true
  },
  {
    path: '/uk/diagrams',
    component: ComponentCreator('/uk/diagrams', '20c'),
    exact: true
  },
  {
    path: '/uk/pythagorean',
    component: ComponentCreator('/uk/pythagorean', '893'),
    exact: true
  },
  {
    path: '/uk/',
    component: ComponentCreator('/uk/', '737'),
    exact: true
  },
  {
    path: '/uk/',
    component: ComponentCreator('/uk/', '17e'),
    routes: [
      {
        path: '/uk/',
        component: ComponentCreator('/uk/', '551'),
        routes: [
          {
            path: '/uk/',
            component: ComponentCreator('/uk/', '60a'),
            routes: [
              {
                path: '/uk/ai-layer',
                component: ComponentCreator('/uk/ai-layer', '6de'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uk/core-capabilities',
                component: ComponentCreator('/uk/core-capabilities', 'e5d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uk/design-system',
                component: ComponentCreator('/uk/design-system', 'f12'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uk/modularity-deployment',
                component: ComponentCreator('/uk/modularity-deployment', 'c06'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uk/overview',
                component: ComponentCreator('/uk/overview', 'b28'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uk/pedagogical-framework',
                component: ComponentCreator('/uk/pedagogical-framework', 'e0d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uk/product-principles',
                component: ComponentCreator('/uk/product-principles', '63b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uk/roles-permissions',
                component: ComponentCreator('/uk/roles-permissions', 'f0d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uk/safety-ethics-compliance',
                component: ComponentCreator('/uk/safety-ethics-compliance', 'e4f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uk/vision-purpose',
                component: ComponentCreator('/uk/vision-purpose', '6a0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uk/xr-immersive',
                component: ComponentCreator('/uk/xr-immersive', 'a87'),
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
