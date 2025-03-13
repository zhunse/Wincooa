import { defineConfig } from 'vitepress'
import { AnnouncementPlugin } from 'vitepress-plugin-announcement'
import mdItCustomAttrs from 'markdown-it-custom-attrs'
import sidebar from './config/sidebar'

export default defineConfig({
  title: "Wincooa",
  description: "电脑的优化指南",
  base: '/',
  lang: 'zh-Hans',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#6b68ff' }],
    [
      "link",
      { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css" },
  ],
  ["script", { src: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js" }],

  ],
  markdown:{
    config: (md) => {
        // use more markdown-it plugins!
        md.use(mdItCustomAttrs, 'image', {
            'data-fancybox': "gallery"
        })
        }
    },
  // https://www.npmjs.com/package/vitepress-plugin-announcement
  // vite: {
  //   plugins: [
  //     AnnouncementPlugin({
  //       title: '公告',
  //       reopen: false,
  //       duration: 5000,
  //       style: `.header{
  //         color: var(--vp-c-brand-2);
  //         border-radius: 8px 8px 0 0;
  //         padding: 8px 8px !important;
  //         }
  //         .theme-blog-popover{
  //         border-radius: 8px !important;
  //         }
  //         .footer{
  //         margin-bottom: 10px;
  //         }
  //      }
  //     `,
  //       body: [
  //         { type: 'text', content: '扫描二维码关注微信公众号' },
  //         {
  //           type: 'image',
  //           src: '/img/qrcode.png',
  //           style: 'margin-bottom: 25px;'
  //         }
  //       ],
  //       footer: [
  //         {
  //           type: 'button',
  //           content: '作者博客',
  //           link: 'https://zhuns.top/'
  //         },
  //         {
  //           type: 'button',
  //           content: '云盘',
  //           link: 'https://cloud.zhuns.top/',
  //           props: {
  //             type: 'success'
  //           }
  //         },
  //       ],
  //     })
  //   ]
  // },

  themeConfig: {
    externalLinkIcon: true,
    langMenuLabel: '切换语言',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    sidebarMenuLabel: '菜单',
    outline: { level: [2, 3], label: '目录' },
    returnToTopLabel: '返回顶部',
    lastUpdated: { text: '更新于' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    logo: "/favicon.ico",
    nav: [
      { text: '首页', link: '/' },
      { text: '关于', link: '/about/Site' },
      { text: "云盘", link: 'https://cloud.zhuns.top/' },
      { text: '博客', link: 'https://www.zhuns.top/' }
    ],

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: "关闭",
            },
          },
        },
      },
    },

    sidebar,
    footer: {
      message: `<a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">
        <img src="./img/icp.png" alt="ICP备案号">陕ICP备2023007133号-2
    </a>
      </br>
    <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=51011502000812" target="_blank" rel="noreferrer">
        <img src="./img/anei.png" alt="川公网安备">川公网安备51011502000812号
    </a>`,
      copyright: `COPYRIGHT © 2024-${new Date().getFullYear()} & <a href="https://zhuns.top/">进函科技社</a>`
    },

    socialLinks: [
      {
        icon: {
          svg: '<img src="/icon/ks.svg" width="55%" color="#808080">'
        },
        link: "https://v.kuaishou.com/rpfhY6",
      },
      {
        icon: {
          svg: '<img src="/icon/wxs.svg" width="65%" color="#808080">'
        },
        link: "https://blog.zhuns.top/wxz/index.html?redirectTo=https://www.cooa.top/",
      }
    ]
  }
})

