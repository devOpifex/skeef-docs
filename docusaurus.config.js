// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

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

  scripts: [
    {
      src: './js/particles.min.js',
    }, {
      src: './js/particle-script.js',
      defer: true,
    }
  ],

  plugins: [
    require.resolve('docusaurus-lunr-search')
  ],

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
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        blog: false
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
            label: 'Documentation',
          },
          {
            href: 'https://github.com/devOpifex/skeef',
            label: 'GitHub',
            position: 'right',
          },
          {
            label: 'Twitter',
            href: 'https://twitter.com/devOpifex',
            position: 'right',
          },
        ],
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      metadata: [
        {name: 'keywords', content: 'twitter,visualisation,real-time,network'},
        {name: 'twitter:card', content: 'summary_large_image'},
        {name: 'twitter:site', content: '@devOpifex'},
        {name: 'twitter:create', content: '@devOpifex'},
        {name: 'twitter:title', content: 'Skeef'},
        {name: 'twitter:description', content: 'Near real-time Twitter network visualisations'},
        {name: 'twitter:image', content: 'https://skeef.io/img/skeef-social.png'},
      ],
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
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
