(アルファベット順)
<script setup lang="ts">
import { data as modules } from "./.vitepress/modules.data.ts";
import { useData } from 'vitepress'
const base = '/foundry-hub'
</script>
<!-- TODO: 変数化する -->

<ul>
  <li v-for="m in modules" :key="m.url">
    <a :href="base + m.url">{{ m.frontmatter.title }}</a>
      —
      <span v-for="desc in m.frontmatter.description" :key="desc" class="description">
        {{ desc }}
    </span>
  </li>
</ul>

theripper93製のMOD - Automated Animation, Smart Target, Levelsなどいろいろ

まだまだ全然分類してないし，中身の説明は真っ白・v13で動かないのもあってなんの意味もないリストです，めちゃめちゃ追記予定
