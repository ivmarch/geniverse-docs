import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/uk/diagrams',
    component: ComponentCreator('/uk/diagrams', 'da1'),
    exact: true
  },
  {
    path: '/uk/uk/',
    component: ComponentCreator('/uk/uk/', '0dc'),
    exact: true
  },
  {
    path: '/uk/uk/diagrams',
    component: ComponentCreator('/uk/uk/diagrams', '734'),
    exact: true
  },
  {
    path: '/uk/',
    component: ComponentCreator('/uk/', '69b'),
    exact: true
  },
  {
    path: '/uk/',
    component: ComponentCreator('/uk/', 'c29'),
    routes: [
      {
        path: '/uk/',
        component: ComponentCreator('/uk/', '3c3'),
        routes: [
          {
            path: '/uk/',
            component: ComponentCreator('/uk/', '918'),
            routes: [
              {
                path: '/uk/ai-layer',
                component: ComponentCreator('/uk/ai-layer', 'c52'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uk/core-capabilities',
                component: ComponentCreator('/uk/core-capabilities', 'f6c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uk/design-system',
                component: ComponentCreator('/uk/design-system', '1ca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uk/modularity-deployment',
                component: ComponentCreator('/uk/modularity-deployment', '237'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uk/overview',
                component: ComponentCreator('/uk/overview', '390'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uk/pedagogical-framework',
                component: ComponentCreator('/uk/pedagogical-framework', '9f4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uk/product-principles',
                component: ComponentCreator('/uk/product-principles', 'a3a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uk/roles-permissions',
                component: ComponentCreator('/uk/roles-permissions', '3e8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uk/safety-ethics-compliance',
                component: ComponentCreator('/uk/safety-ethics-compliance', '990'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uk/uk/ai-layer',
                component: ComponentCreator('/uk/uk/ai-layer', 'd0c'),
                exact: true
              },
              {
                path: '/uk/uk/core-capabilities',
                component: ComponentCreator('/uk/uk/core-capabilities', '8c1'),
                exact: true
              },
              {
                path: '/uk/uk/design-system',
                component: ComponentCreator('/uk/uk/design-system', '483'),
                exact: true
              },
              {
                path: '/uk/uk/modularity-deployment',
                component: ComponentCreator('/uk/uk/modularity-deployment', 'ad3'),
                exact: true
              },
              {
                path: '/uk/uk/overview',
                component: ComponentCreator('/uk/uk/overview', '15d'),
                exact: true
              },
              {
                path: '/uk/uk/pedagogical-framework',
                component: ComponentCreator('/uk/uk/pedagogical-framework', '2e7'),
                exact: true
              },
              {
                path: '/uk/uk/product-principles',
                component: ComponentCreator('/uk/uk/product-principles', '019'),
                exact: true
              },
              {
                path: '/uk/uk/roles-permissions',
                component: ComponentCreator('/uk/uk/roles-permissions', '29a'),
                exact: true
              },
              {
                path: '/uk/uk/safety-ethics-compliance',
                component: ComponentCreator('/uk/uk/safety-ethics-compliance', '34b'),
                exact: true
              },
              {
                path: '/uk/uk/vision-purpose',
                component: ComponentCreator('/uk/uk/vision-purpose', '5c9'),
                exact: true
              },
              {
                path: '/uk/uk/xr-immersive',
                component: ComponentCreator('/uk/uk/xr-immersive', '173'),
                exact: true
              },
              {
                path: '/uk/vision-purpose',
                component: ComponentCreator('/uk/vision-purpose', 'e35'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uk/xr-immersive',
                component: ComponentCreator('/uk/xr-immersive', 'df5'),
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
