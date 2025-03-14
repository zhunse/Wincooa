// .vitepress/config/sidebar.ts

export default [
    {
      text: '关于我们',
      items: [
        { text: '关于本站', link: '/about/Site' },
        { text: '关于团队', link: '/about/me' },
        { text: '更新日志', link: '/about/log'},
      ],
    },
    {
      text: '实用教程',
      items: [
        { text: '选配电脑', link: '/initall/tutorial/Matching' },
        { text: '开箱验机', link: '/initall/tutorial/Unboxing' },
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
      text: '更多玩法',
      items: [
        { text: '制作PE系统', link: '/initall/more/pe' },
      ],
    },
  ];