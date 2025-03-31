import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'IGRP',
  tagline: 'Inovação e Transformação Digital 𝑳𝒐𝒘 𝑪𝒐𝒅𝒆 para 𝑵𝒐 𝑪𝒐𝒅𝒆!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://igrp.cv',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'nosi-code', // Usually your GitHub org/user name.
  projectName: 'igrp', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
           routeBasePath: '/', // Serve from root of baseUrl
          sidebarPath: './sidebars.ts',
          includeCurrentVersion: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // TODO
          /*editUrl:
            'https://git.nosi.cv/igrp-3_0/portal/portal-igrp-docusaurus/-/tree/main/versioned_docs/',*/
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // TODO
          /*editUrl:
            'https://git.nosi.cv/igrp-3_0/portal/portal-igrp-docusaurus/-/tree/main/versioned_docs/',*/
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/igrp-card.webp',
    navbar: {
      title: 'IGRP',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
        href: 'https://igrp.cv',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs IGRP',
        },

        {
          type: 'docsVersionDropdown',
          position: 'right',
        },

        {
          href: 'https://github.com/NOSiCode-CV/IGRP-Framework',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs IGRP Legacy',
          items: [
            {
              label: 'IGRP 2.0',
              href: 'https://docs.igrp.cv/v2',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.com/channels/1247935914403958905/1334510445326762077',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/NOSiCode-CV/IGRP-Framework',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} IGRP, Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  plugins: [
    async function tailwindPlugin(context, options) {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require('tailwindcss'));
          postcssOptions.plugins.push(require('autoprefixer'));
          return postcssOptions;
        },
      };
    },
  ],
};

export default config;
