// .vitepress/config/sidebar.ts

export default [
  {
    text: '关于我们',
    items: [
      { text: '关于本站', link: '/about/Site' },
      { text: '关于团队', link: '/about/me' },
      // { text: '关注微信', link: '/about/wx'},
      { text: '更新日志', link: '/about/log' },
    ],
  },
  {
    text: '实用教程',
    items: [
      { text: '选配电脑', link: '/initall/tutorial/Matching' },
      { text: '开箱验机', link: '/initall/tutorial/Unboxing' },
      { text: '新电脑必做的设置', link: '/initall/tutorial/Required' },
      { text: '软件推荐', link: '/initall/tutorial/Software' },
      { text: '未完待续', link: '/initall/await' },
      // {
      //   text: '演示页面',
      //   collapsed: true,
      //   items: [
      //     { text: '演示页面A', link: '/initall/demo/a' },
      //     { text: '演示页面B', link: '/initall/demo/b' },
      //   ],
      // },
    ],
  },
  {
    text: 'PE系统玩法',
    items: [
      { text: '制作PE系统', link: '/initall/pe/pe', },
      // { text: '<span class="gang" title="即将上线">重装系统</span>', link: '#' },
      { text: '重装系统', link: '/initall/pe/Reload' },
      { text: '重置锁屏密码', link: '/initall/pe/reset' },
    ],
  },
  {
    text: '疑难杂症',
    items: [
      { text: '待开发区', link: '/initall/Difficult/go' },
    ],
  },
  {
    text: '更多玩法',
    items: [
      { text: '<span class="gang" title="即将上线">文件资源管理器的玩法</span>', link: '#', },
      // { text: '文件资源管理器的玩法', link: '/initall/more/folder', },
    ],
  },
];