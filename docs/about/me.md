---
title: 关于团队
aside: false
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
} from 'vitepress/theme'

const members = [
  {
    // avatar: '/image/avatar/Mr. Bizarre.jpg',
    avatar: 'https://q.qlogo.cn/g?b=qq&nk=2541704311&s=640',
    name: 'Mr. Bizarre',
    title: '管理员/站长',
    links: [
      {
        icon: {
          svg: '<img src="/icon/me.svg" width="55%" color="#808080">'
        },
        link: "https://zhuns.top/",
      },
      {
        icon: {
        svg: '<img src="/icon/ks.svg" width="55%" color="#808080">'
        },
        link: 'https://v.kuaishou.com/rpfhY6' 
      },
      {
        icon: {
          svg: '<img src="/icon/wxs.svg" width="70%" color="#808080">'
        },
        link: "https://blog.zhuns.top/wxz/index.html?redirectTo=https://win.cooa.top/",
      },
      {
        icon: {
          svg: '<img src="/icon/qq.svg" width="70%" color="#808080">'
        },
        link: "https://qm.qq.com/q/fQdytRLNK2",
      },
      {
        icon: 'github',
        link: "https://github.com/zhunse",
      }
    ],
  },

  {
    avatar: '/image/avatar/user.png',
    name: 'User',
    title: '待定',
    links: [
      {
        icon: {
        svg: '<img src="/icon/wen.svg" width="55%" color="#808080">'
      },
      link: '#' 
      }
    ],
  },

]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      我们的团队
    </template>
    <template #lead>
      下面是我们团队的开发人员 但是 在目前看来这支团队还并不完整 因为只有我一个人在背后操纵网站🤣
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members="members" />
</VPTeamPage>

