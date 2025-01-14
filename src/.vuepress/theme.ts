import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  fullscreen: true,
  hostname: "https://hopetest.zhangtq.com",
  author: {
    name: "摘星",
    url: "https://www.cnblogs.com/zhangtq",
    email: "ztq1028354023@163.com"
  },
  // iconAssets: "fontawesome-with-brands",
  // iconAssets: "//at.alicdn.com/t/font_2410206_vuzkjonf4s9.css",
  iconAssets: [
    // "fontawesome-with-brands",
    "//at.alicdn.com/t/c/font_4782397_2ql9i28qpt9.css",
  ],

  headerDepth: 4,
  // logo: "https://zhangtq-blog.oss-cn-hangzhou.aliyuncs.com/content_picture/startpick-cat.png",

  repo: "https://gitee.com/zhangtqup/vuepress_theme_hope.git",
  // 自定义仓库链接文字。默认从 `repo` 中自动推断为
  // "GitHub" / "GitLab" / "Gitee" / "Bitbucket" 其中之一，或是 "Source"。
  // repoLabel: "Gitee",
  docsDir: "src",
  // 导航栏
  navbar,

  // 侧边栏
  sidebar,

  // 页脚
  copyright: false,
  footer: 'Copyright © 2022-至今 摘星 | <a href="https://beian.miit.gov.cn" target="_blank">京ICP备2024070721号</a>',
  displayFooter: true,

  // sidebarSorter: ['order', 'readme', 'title', 'filename'],
  // 博客相关
  blog: {
    description: "手握日月摘星辰，世间无我这般人",
    intro: "/intro.html",
    medias: {
      "163Music": "https://music.163.com/#/user/home?id=61633353",
      Email: "mailto:1028354023@qq.com",
      Gitee: "https://gitee.com/zhangtqup",
      GitHub: "https://github.com/StarsPicking",
      Rss: "https://hope.zhangtq.com/rss.xml",
      "vdoing博客": {
        icon: "https://zhangtq-blog.oss-cn-hangzhou.aliyuncs.com/content_picture/blogger.svg",
        link: "https://www.zhangtq.com",
      },
      "博客园": {
        icon: "https://zhangtq-blog.oss-cn-hangzhou.aliyuncs.com/content_picture/博客园.svg",
        link: "https://www.cnblogs.com/zhangtq",
      },
      // VuePressThemeHope: {
      //   icon: "https://theme-hope-assets.vuejs.press/logo.svg",
      //   link: "https://theme-hope.vuejs.press",
      // },
    },
  },

  // 加密配置
  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },

  // 多语言配置
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,

  // 此处开启了很多功能用于演示，你应仅保留用到的功能。
  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    demo: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    plantuml: true,
    spoiler: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,

    // 取消注释它们如果你需要 TeX 支持
    // markdownMath: {
    //   // 启用前安装 katex
    //   type: "katex",
    //   // 或者安装 mathjax-full
    //   type: "mathjax",
    // },

    // 如果你需要幻灯片，安装 @vuepress/plugin-revealjs 并取消下方注释
    // revealjs: {
    //   plugins: ["highlight", "math", "search", "notes", "zoom"],
    // },

    // 在启用之前安装 chart.js
    // chartjs: true,

    // insert component easily

    // 在启用之前安装 echarts
    // echarts: true,

    // 在启用之前安装 flowchart.ts
    // flowchart: true,

    // 在启用之前安装 mermaid
    // mermaid: true,

    // playground: {
    //   presets: ["ts", "vue"],
    // },

    // 在启用之前安装 @vue/repl
    // vuePlayground: true,

    // 在启用之前安装 sandpack-vue3
    // sandpack: true,
  },

  // 在这里配置主题提供的插件
  plugins: {
    blog: true,

    // 启用之前需安装 @waline/client
    // 警告: 这是一个仅供演示的测试服务，在生产环境中请自行部署并使用自己的服务！
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    // },

    components: {
      components: ["Badge", "VPCard"],
    },
    feed: {
      devServer: true,
      count: 5000,
      rss: true,
      atom: true,
      json: true,
      channel: {
        copyright: "Copyright © 2022-至今 摘星",
      },
    }
    // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
},
{
  custom: true,
});
