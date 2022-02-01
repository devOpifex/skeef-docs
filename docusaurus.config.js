// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Skeef',
  tagline: 'Near real-time visualisation of Twitter networks',
  url: 'https://skeef.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'devOpifex', // Usually your GitHub org/user name.
  projectName: 'skeef', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/devOpifex/skeef/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/devOpifex/skeef/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Skeef',
        logo: {
          alt: 'Skeef Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'install',
            position: 'left',
            label: 'Installation',
          },
          {
            type: 'doc',
            docId: 'run',
            position: 'left',
            label: 'Run',
          },
          {
            type: 'doc',
            docId: 'setup',
            position: 'left',
            label: 'Setup',
          },
          {
            type: 'doc',
            docId: 'stream',
            position: 'left',
            label: 'Stream',
          },
          {
            href: 'https://github.com/devOpifex/skeef',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Connect',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/devOpifex'
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/devOpifex',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Opifex',
                href: 'https://opifex.org',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Opifex.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;