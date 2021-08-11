const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Dukka',
  tagline: 'Documentation',
  url: 'https://deji2443.github.io',
  baseUrl: '/dukka-help-test/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'deji2443', // Usually your GitHub org/user name.
  projectName: 'dukka-help-test', // Usually your repo name.
  themeConfig: {
    navbar: {
      // title: 'Dukka',
      logo: {
        alt: 'Dukka',
       src: 'img/logo_text_apricot.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Tutorial',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://www.dukka.com',
          label: 'Home',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              "label": "Home",
              "href": "https://www.dukka.com"
            },
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          
          ],
        },
        {
          title: 'Company',
          items: [
            {
              "label": "About",
              "href": "https://www.dukka.com/inner-pages/about.html"
            },
            {
              "label": "Contact us",
              "href": "https://www.dukka.com/inner-pages/contact.html"
            },
            {
              "label": "Career",
              "href": "https://www.dukka.com/#:~:text=Contact%20us-,Career,-Legal"
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            // {
            //   label: 'Blog',
            //   to: '/blog',
            // },
         
            {
              "label": "Terms",
              "href": "https://www.dukka.com/inner-pages/terms.html"
            },
            {
              "label": "Privacy",
              "href": "https://www.dukka.com/inner-pages/privacy.html"
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Dukka, Inc.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
