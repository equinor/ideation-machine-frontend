const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Ideation Machine',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#243746' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    logo: 'https://raw.githubusercontent.com/equinor/ideation-machine-frontend/ab4e09d820b8442b079793a007557267568a2723/src/NIdeationMachineLogo-NoSlogan.svg',
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [

      {
        text: 'Docs',
        link: 'docs/'
      },
      {
        text: 'Get started',
        link: ''
      },
      {
        text: 'About us',
        link: ''
      },
      {
        text: 'Contact us',
        link: ''
      },
      {
        text: 'Use cases',
        link: ''
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '',
            'using-vue',
          ]
        }
      ],
      '/docs/': [
        {
          title: 'Docs',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '',
            'disaster-recovery/',
            'contact/',
            'access/'
          ]
        }
      ],
      '/': [], // Fallback to README.md
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
