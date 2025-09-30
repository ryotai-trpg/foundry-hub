import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/foundry-hub/",
  title: "Ryotai's FoundryVTT Hub",
  description: "Japanese notes and resources on FoundryVTT.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Modules', link: '/module-list' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is Foundry?', link: 'whats-foundry' }
        ]
      },
      {
        text: 'Gamemaster',
        items: [
          { text: 'Modules', link: '/module-list' },
          { text: 'Tips' },
        ]
      },
      {
        items: [
          { text: 'About', link: '/about' },
          { text: 'Links', link: '/links' }
        ]
      // },
      // {
      //   items: [
      //     { text: 'Memo', link: '/memo' }
      //   ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ryotai-trpg/foundry-hub' }
    ],

    footer: {
        message: 'Released under the CC0 License.',
        copyright: 'No Rights Reserved.'
    }
  },
  lastUpdated: true
})
