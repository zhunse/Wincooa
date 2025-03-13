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
    avatar: '/Wincooa/image/avatar/Mr. Bizarre.jpg',
    name: 'Mr. Bizarre',
    title: '管理员',
    links: [
      {
        icon: {
          svg: '<img src="/Wincooa/Wincooa/icon/me.svg" width="55%" color="#808080">'
        },
        link: "https://zhuns.top/",
      },
      {
        icon: {
        svg: '<img src="/Wincooa/icon/ks.svg" width="55%" color="#808080">'
        },
        link: 'https://v.kuaishou.com/rpfhY6' 
      },
      {
        icon: {
          svg: '<img src="/Wincooa/icon/wxs.svg" width="70%" color="#808080">'
        },
        link: "https://blog.zhuns.top/wxz/index.html?redirectTo=https://www.cooa.top/",
      },
      {
        icon: {
          svg: '<img src="/Wincooa/icon/qq.svg" width="70%" color="#808080">'
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
    avatar: '/Wincooa/image/avatar/user.png',
    name: 'User',
    title: '待定',
    links: [
      {
        icon: {
        svg: '<img src="/Wincooa/icon/wen.svg" width="55%" color="#808080">'
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
