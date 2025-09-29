import { createContentLoader } from 'vitepress'

export default createContentLoader('modules/*.md', {
  includeSrc: false, // 本文は不要
  transform(raw) {
    return raw
      .filter(page => page.url !== '/modules/') // modules/index.md があれば除外
      .sort((a, b) => a.frontmatter.title.localeCompare(b.frontmatter.title))
  }
})
