const baiduCode = require('./config/baiduCode.js'); // 百度统计hm码
const htmlModules = require('./config/htmlModules.js');

module.exports = {
  theme: 'vdoing', // 使用依赖包主题

  title: "XuHuaian,s Blog",
  description: '记录自己的工作学习心得，争取当一条有梦想的咸鱼',
  // base: '/', // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）
  markdown: {
    lineNumbers: true // 代码块是否显示行号
  },
  serviceWorker: true, // 是否开启 PWA
  head: [ // 注入到页面<head> 中的标签
    ['link', {rel: 'icon', href: 'https://v3.cn.vuejs.org/logo.png'}], //favicon，资源放在public文件夹
    ['meta', {name: 'theme-color', content: '#11a8cd'}], // 移动浏览器主题颜色
  ],

  // 主题配置
  themeConfig: {
    nav: [
      {text: '首页', link: '/'},

      {
        text: '后端', items: [
          // gRPC部分
          {
            text: 'gRP笔记', items: [
              {text: 'RPC', link: '/pages/52d5c3/'},
              {text: 'gRPC', link: '/pages/a2f161/'},
              {text: 'Hello gRPC', link: '/pages/793dcb/'},
              {text: 'gRPC Bug', link: '/pages/2f674a/'},
            ],
          },
        ],
      },

      // Java部分
      {
        text: 'Java', items: [
          // 环境搭建部分
          {
            text: '环境搭建', items: [
              {text: 'Windows下Java开发环境搭建', link: '/pages/a32ce8/'},
              {text: 'Linux下Java运行环境搭建', link: '/pages/f22bdb/'},
            ],
          },
          // hutool笔记部分
          {
            text: 'HuTool笔记', items: [
              {text: 'HuTool', link: '/pages/5fedc1/'},
              {text: 'HuTool组件', link: '/pages/f83d9d/'},
            ]
          },

          // 其他部分
          {
            text: '其他', items: [
              {text: 'Linux下使用命令systemctl管理部署Java jar包', link: '/pages/82aec0/'},
            ]
          },
        ],
      },

      // 运维部分
      {
        text: '运维', items: [
            // 挖矿病毒部分
          {
            text: 'Linux', items: [
              {text: 'Linux下挖矿病毒排杀过程', link: '/pages/af9ce4/'},
              {text: 'Linux主机巡检脚本', link: '/pages/11d270/'},
            ],
          },
            // 内核升级
          {
            text: 'Centos内核版本升级', items: [
              {text: '在线升级', link: '/pages/42150c/'},
              {text: '离线升级', link: '/pages/79a802/'},
            ],
          },
        ],
      },

      {
        text: '其他', items: [
          // 挖矿病毒部分
          {
            text: '博客搭建', items: [
              {text: 'Vuepress搭建博客', link: '/pages/0737a0/'},
            ],
          },
        ],
      },

      // 资源部分
      // {
      //   text: '资源', items: [
      //     { text: 'Mysql', link: '/pages/023c74/'},
      //     { text: '系统映像', link: '/pages/1361c7/'}
      //   ],
      // },

      // { text: '案例', link: '/pages/5d571c/' },
      {text: '关于我', link: '/pages/db78e2/'},
      {text: 'Gitee', link: 'https://gitee.com/keington/'},
      {text: 'Github', link: 'https://github.com/keington/'}
    ],
    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    logo: '/images/logo.jpg', // 导航栏logo
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: '上次更新', // 更新的时间，及前缀文字   string | boolean (取值为git提交时间)

    // 以下配置是Vdoing主题改动的和新增的配置
    sidebar: {mode: 'structuring', collapsable: false}, // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页

    sidebarOpen: true, // 初始状态是否打开侧边栏，默认true
    updateBar: { // 最近更新栏
      showToArticle: false, // 显示到文章页底部，默认true
      moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
    },

    // categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'

    // contentBgStyle: 1,

    category: true, // 是否打开分类功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含分类字段 2.页面中显示与分类相关的信息和模块 3.自动生成分类页面（在@pages文件夹）。如关闭，则反之。
    tag: true, // 是否打开标签功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含标签字段 2.页面中显示与标签相关的信息和模块 3.自动生成标签页面（在@pages文件夹）。如关闭，则反之。
    archive: false, // 是否打开归档功能，默认true。 如打开，会做的事情有：1.自动生成归档页面（在@pages文件夹）。如关闭，则反之。

    author: { // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, href: String}
      name: '许怀安', // 必需
      link: 'https://github.com/keington', // 作者链接（可选）
    },

    // 博主信息 (显示在首页侧边栏)
    blogger: {
      avatar: '/images/logo.jpg',
      name: '许怀安',
      slogan: '所思，所学，所想，所行',
    },

    social: { // 社交图标，显示于博主信息栏和页脚栏
      iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
      icons: [
        {
          iconClass: 'icon-youjian',
          title: 'Email',
          link: 'mailto:keington@outlook.com'
        },
        {
          iconClass: 'icon-QQ',
          title: 'QQ',
          link: 'tencent://message/?uin=qq1950974755&Site=Sambow&Menu=yes'
        },
        {
          iconClass: 'icon-github',
          title: 'Github',
          link: 'https://github.com/keington/'
        }
      ]
    },
    footer: { // 页脚信息
      createYear: 2020, // 博客创建年份
      // 博客版权信息，支持a标签
      copyrightInfo: '许怀安 | MIT License <br> <a target="_blank" href="http://beian.miit.gov.cn/" >青ICP备2022000072号-1</a>' +
                     '<a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=63010302000386" >' +
                     ' | 青公网安备 63010302000386号</a>'
},

htmlModules,
},

  // 插件
  plugins: [

    ['fulltext-search'], // 全文搜索

    // ['thirdparty-search', { // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）
    //   thirdparty: [ // 可选，默认 []
    //     {
    //       title: '在GitHub中搜索',
    //       frontUrl: 'https://github.com/search?q=', // 搜索链接的前面部分
    //       behindUrl: '' // 搜索链接的后面部分，可选，默认 ''
    //     },
    //     {
    //       title: '在npm中搜索',
    //       frontUrl: 'https://www.npmjs.com/search?q=',
    //     },
    //     {
    //       title: '在Bing中搜索',
    //       frontUrl: 'https://cn.bing.com/search?q='
    //     }
    //   ]
    // }],
    [
      'vuepress-plugin-baidu-tongji', // 百度统计
      {
        hm: baiduCode || '9b9b3e79c929cfce252e54a57c3833df'
      }
    ],

    ['one-click-copy', { // 代码块复制按钮
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: false // whether to display on the mobile side, default: false.
    }],
    [
      'vuepress-plugin-zooming', // 放大图片
      {
        selector: '.theme-vdoing-content img:not(.no-zoom)',
        options: {
          bgColor: 'rgba(0,0,0,0.6)'
        },
      },
    ],
    [
      '@vuepress/last-updated', // "上次更新"时间格式
      {
        transformer: (timestamp, lang) => {
          const dayjs = require('dayjs') // https://day.js.org/
          return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
        },
      }
    ]
  ],
}
