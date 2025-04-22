// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import { Icon } from '@iconify/vue'
import DefaultTheme from 'vitepress/theme'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
import Linkcard from './components/Linkcard.vue'
import './style.css'
import "vitepress-markdown-timeline/dist/theme/index.css";
// import './style/index.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('Icon', Icon),
    app.component('Linkcard' , Linkcard)
    enhanceAppWithTabs(app)
  },
} satisfies Theme
