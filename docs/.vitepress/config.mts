import { defineConfig } from 'vitepress'
import { AnnouncementPlugin } from 'vitepress-plugin-announcement'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import timeline from "vitepress-markdown-timeline";
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
    ['meta', { name: 'baidu-site-verification', content: 'codeva-erygvUFJr0' }],
    [
      "link",
      { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css" },
    ],
    ["script", { src: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js" }],
    // 百度统计代码
    ["script",
      {},
      `var _hmt = _hmt || [];
      (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?196a41df309877885c3c15b0013c7351";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);})();`
    ],
  ],
  markdown: {
    config: (md) => {
      // use more markdown-it plugins!
      md.use(mdItCustomAttrs, 'image', {
        'data-fancybox': "gallery",
      }),
        md.use(timeline);
      md.use(tabsMarkdownPlugin);
    },
  },


  // https://www.npmjs.com/package/vitepress-plugin-announcement
  vite: {
    plugins: [
      AnnouncementPlugin({
        title: '公告',
        reopen: false,
        twinkle: true,
        duration: -1,
        // duration: 4500,
        style: `.header{
          color: var(--vp-c-brand-2);
          border-radius: 15px 15px 0 0;
          padding: 15px 15px !important;
          }
          .theme-blog-popover{
          border-radius: 15px !important;
          }
          .footer{
          margin-bottom: 10px;
          }
          .announcement-button{
          border-radius: 10px !important;
          }
          .body.content img{
          height: 150px !important;
          }
          .body.content p{
          font-weight: bold !important;
          }
          .title-wrapper .title{
          font-weight: bold !important;
          letter-spacing: 3px !important;
          }
          .announcement-button{
          font-weight: bold !important;
          letter-spacing: 3px !important;
          }
       }
      `,
        body: [
          { type: 'text', content: '扫描二维码关注微信公众号' },
          {
            type: 'image',
            src: '/img/qrcode.png',
            style: 'margin-bottom: 25px;'
          }
        ],
        footer: [
          {
            type: 'button',
            content: '远程协助',
            link: 'https://win.cooa.top/about/Site#远程协助'
          },
          {
            type: 'button',
            content: '更新日志',
            link: 'https://win.cooa.top/about/log',
            props: {
              type: 'success'
            }
          },
        ],
      })
    ]
  },

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
        <img src="../img/icp.png" alt="ICP备案号">陕ICP备2023007133号-2
    </a>
      </br>
    <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=51011502000812" target="_blank" rel="noreferrer">
        <img src="../img/anei.png" alt="川公网安备">川公网安备51011502000812号
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
        link: "https://blog.zhuns.top/wxz/index.html?redirectTo=https://win.cooa.top/",
      },
      {
        icon: 'github',
        link: "https://github.com/zhunse/Wincooa",
      }
    ]
  }
})

