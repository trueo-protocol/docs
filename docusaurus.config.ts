import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Trueo',
  tagline: 'Trueo Documentation',
  favicon: 'img/favicon.svg',

  // -------------------------------------------------------------------------
  // 1. Deployment Configuration
  // -------------------------------------------------------------------------
  url: 'https://docs.trueo.io',
  baseUrl: '/',

  organizationName: 'trueoio',
  projectName: 'docs',
  trailingSlash: false,

  // This setting is enough for checking broken links
  onBrokenLinks: 'throw', 
  
  // onBrokenMarkdownLinks is deprecated, so we just remove it.
  // The 'onBrokenLinks' above handles the validation nicely.

  // -------------------------------------------------------------------------
  // 2. Internationalization
  // -------------------------------------------------------------------------
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // -------------------------------------------------------------------------
  // 3. Presets (Docs-only mode)
  // -------------------------------------------------------------------------
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/', 
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  // -------------------------------------------------------------------------
  // 4. Theme Configuration
  // -------------------------------------------------------------------------
  themeConfig: {
    image: 'img/truemarkets-social-card.png',

    navbar: {
      title: 'Trueo',
      logo: {
        alt: 'Trueo Logo',
        src: 'img/logo.svg', // Ensure you have this file in static/img/
      },
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Product',
          items: [
            {
              label: 'App',
              href: 'https://trueo.io/',
            },
            {
              label: 'Attesters',
              href: 'https://trueo.io/en/attesters/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/truemarkets',
            },
            {
              label: 'X',
              href: 'https://x.com/truemarkets',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/trueoio',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Trueo. Built with Docusaurus.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;