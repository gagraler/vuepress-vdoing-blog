---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/181114277?s=200&v=4',
    name: 'GreatSQL Operator',
    desc: 'GreatSQL Operator for MySQL based on MySQL Group Replication Cluster',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/greatsql-sigs/greatsql-operator' },
    ]
  },

  {
    avatar: 'https://avatars.githubusercontent.com/u/205871116?s=200&v=4',
    name: 'Go Viem',
    desc: 'Go Viem is a Go library for Ethereum JSON-RPC API, inspired by Viem.',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/AutoArbi/go-viem' },
    ]
  }
  
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Open Source Projects ｜ 开源项目
    </template>
    <template #lead>
      The following projects were created and participated by me.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members />
</VPTeamPage>
