// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Insights from Gabriel',
  tagline: 'AV Engineer. Cloud & Security. Documenting the journey.',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://blog.profgabs.me',
  baseUrl: '/',

  organizationName: 'profgabs05',
  projectName: 'profgabs-blog',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig: ({
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
    },
    navbar: {
      title: 'Insights from Gabriel',
      logo: {
        alt: 'Prof Gabs Logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Notes',
        },
        {
          href: 'https://github.com/profgabs05',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://profgabs.me',
          label: 'About',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Content',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Notes',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Connect',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/profgabs05',
            },
            {
              label: 'LinkedIn',
              href: 'https://linkedin.com/in/gabriel-olawoyin',
            },
            {
              label: 'Email',
              href: 'mailto:gabrielolawoyin05@gmail.com',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'About Me',
              href: 'https://profgabs.me',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Gabriel Olawoyin. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  }),
};

export default config;