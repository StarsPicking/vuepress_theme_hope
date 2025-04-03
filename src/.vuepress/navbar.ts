import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/posts/",
  // "/demo/",
  // {
  //   text: "导航",
  //   icon: "zonglan",
  //   children: [
  //     {text: "站点地图", icon: "sitemap", link: "/posts/catalog.html"},
  //     {text: "开发者", icon: "kaifazhe", link: "/developer/"},
  //     {text: "devops", icon: "devops", link: "/devops/"},
  //     {text: "面试", icon: "mianshi", link: "/interview/"},
  //     {text: "资源", icon: "resource", link: "/resource/"},
  //   ]
  // },
  {
    text: '开发者',
    icon: 'kaifazhe',
    children: [
      {
        text: "编程语言基础",
        children: [
          { text: 'python', icon: 'python', link: '/developer/python/' },
          { text: 'golang', icon: 'golang', link: '/developer/golang/' },
          { text: 'devops', icon: 'devops', link: '/developer/devops/' },
          { text: '技术栈', icon: 'jishuzhan', link: '/developer/techstack/' },
        ]
      },
      {
        text: "计算机基础与网络",
        children: [
          { text: 'linux', icon: 'linux', link: '/developer/linux/' },
          { text: 'http', icon: 'http', link: '/developer/http/' },
        ]
      },

    ],
  },
  {
    text: '技术栈',
    icon: 'jishuzhan',
    // prefix: '/techtack/',
    // link: 'techstack/',
    children: [
      {
        text: "数据库",
        children: [
          { text: 'mysql', icon: 'mysql', link: '/techstack/database/mysql/' },
          { text: 'redis', icon: 'redis', link: '/techstack/database/redis/' },
          { text: 'mongodb', icon: 'golang', link: '/techstack/database/mongodb/' },
        ]
      },
      {
        text: "微服务",
        children: [
          { text: 'istio', icon: 'istio', link: '/techstack/microsoft/linux/' },
          { text: 'rpc和grpc', icon: 'rpc', link: '/techstack/microsoft/http/' },
        ]
      },
      {
        text: "中间件",
        children: [
          { text: 'nginx', icon: 'nginx', link: '/techstack/component/nginx/' },
          { text: 'elasticsearch', icon: 'es', link: '/techstack/component/es/' },
          { text: 'zabbix', icon: 'zabbix', link: '/techstack/component/zabbix/' },
          { text: 'elk', icon: 'elk', link: '/techstack/component/elk/' },
        ]
      },

    ],
  },

  {
    text: '自媒体',
    icon: 'video',
    // prefix: '/techtack/',
    // link: 'techstack/',
    children: [
      {
        text: "pr",
        children: [
          { text: 'pr小白', icon: 'rumen', link: '/editing/pr/xb/' },
          { text: 'pr进阶',  icon: 'chengzhang', link: '/editing/pr/improvement/' },
          { text: '技巧提升', icon: 'gaoshou', link: '/editing/pr/tip/' },
        ]
      },

    ],
  },



  '/interview/',

  // {
    // text: '面试',
    // icon: 'mianshi',
    // link: 'interview/',
    // children: [
    //   {
    //     text: "编程语言",
    //     icon: 'bianchengyuyan',
    //     children: [
    //       {text: 'python', link: "/interview/python/"},
    //       {text: 'golang',  link: "/interview//golang/web"},
    //     ]
    //   },

    //   {
    //     text: "devops",
    //     icon: 'devops',
    //     children: [
    //       {text: '版本控制', link: "/interview/git/"},
    //       {text: 'jenkins', link: "/interview/devops/"},
    //       {text: 'harbor',  link: "/interview//harbor/"},
    //       {text: 'k8s', link: "/interview/k8s"}
    //     ]
    //   },

    //   {
    //     text: "数据库",
    //     icon: 'database',
    //     children: [
    //       {text: 'mysql', link: "/interview/mysql/"},
    //       {text: 'redis', link: "/interview/redis/"},
    //       {text: 'mongodb',  link: "/interview//mongodb/"}
    //     ]
    //   },
    // ],
  // },

  // {
  //   text: '资源',
  //   icon: 'ziyuan',
  //   link: 'resource/',
  //   children: [
  //     {
  //       text: "娱乐",
  //       icon: 'media',
  //       children: [
  //         {text: '书籍', icon:'book1', link: "/resource/media/books/"},
  //         {text: '电影', icon:'movie', link: "/resource/media/movies/"},
  //         {text: '实用网站', icon: 'web', link: "/resource/media/webs/"},

  //       ]
  //     },
  //     {
  //       text: "工具",
  //       icon: 'tool',
  //       children: [
  //         {text: '绿色软件', icon:'pojie', link: "/resource/tool/greesoftware/"},


  //       ]
  //     },
  //   ],
  // },
  '/resource/'
]);
