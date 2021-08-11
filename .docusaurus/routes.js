
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/dukka-help-test/',
    component: ComponentCreator('/dukka-help-test/','b4c'),
    exact: true
  },
  {
    path: '/dukka-help-test/blog',
    component: ComponentCreator('/dukka-help-test/blog','229'),
    exact: true
  },
  {
    path: '/dukka-help-test/blog/hello-world',
    component: ComponentCreator('/dukka-help-test/blog/hello-world','34b'),
    exact: true
  },
  {
    path: '/dukka-help-test/blog/hola',
    component: ComponentCreator('/dukka-help-test/blog/hola','679'),
    exact: true
  },
  {
    path: '/dukka-help-test/blog/tags',
    component: ComponentCreator('/dukka-help-test/blog/tags','b80'),
    exact: true
  },
  {
    path: '/dukka-help-test/blog/tags/docusaurus',
    component: ComponentCreator('/dukka-help-test/blog/tags/docusaurus','94e'),
    exact: true
  },
  {
    path: '/dukka-help-test/blog/tags/facebook',
    component: ComponentCreator('/dukka-help-test/blog/tags/facebook','1e7'),
    exact: true
  },
  {
    path: '/dukka-help-test/blog/tags/hello',
    component: ComponentCreator('/dukka-help-test/blog/tags/hello','2e3'),
    exact: true
  },
  {
    path: '/dukka-help-test/blog/tags/hola',
    component: ComponentCreator('/dukka-help-test/blog/tags/hola','73d'),
    exact: true
  },
  {
    path: '/dukka-help-test/blog/welcome',
    component: ComponentCreator('/dukka-help-test/blog/welcome','385'),
    exact: true
  },
  {
    path: '/dukka-help-test/markdown-page',
    component: ComponentCreator('/dukka-help-test/markdown-page','965'),
    exact: true
  },
  {
    path: '/dukka-help-test/docs',
    component: ComponentCreator('/dukka-help-test/docs','a5c'),
    routes: [
      {
        path: '/dukka-help-test/docs/intro',
        component: ComponentCreator('/dukka-help-test/docs/intro','42d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/dukka-help-test/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/dukka-help-test/docs/tutorial-basics/congratulations','bbb'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/dukka-help-test/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/dukka-help-test/docs/tutorial-basics/create-a-blog-post','379'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/dukka-help-test/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/dukka-help-test/docs/tutorial-basics/create-a-document','316'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/dukka-help-test/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/dukka-help-test/docs/tutorial-basics/create-a-page','002'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/dukka-help-test/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/dukka-help-test/docs/tutorial-basics/deploy-your-site','e35'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/dukka-help-test/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/dukka-help-test/docs/tutorial-basics/markdown-features','3c5'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/dukka-help-test/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/dukka-help-test/docs/tutorial-extras/manage-docs-versions','bf1'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/dukka-help-test/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/dukka-help-test/docs/tutorial-extras/translate-your-site','262'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
