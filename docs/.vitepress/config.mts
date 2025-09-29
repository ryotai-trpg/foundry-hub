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
          { text: 'What is Foundry?' }
        ]
      },
      {
        text: 'Gamemaster',
        items: [
          { text: 'Module List', link: '/module-list' }
        ]
      },
      {
        items: [
          { text: 'About', link: '/about' },
          { text: 'Management', link: '/management' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ryotai-trpg' }
    ]
  },
  lastUpdated: true
})
