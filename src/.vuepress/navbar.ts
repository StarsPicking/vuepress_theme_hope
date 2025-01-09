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
    link: 'techstack/',
    children: [
      {
        text: "数据库",
        children: [
          { text: 'mysql', icon: 'mysql', link: '/techstack/mysql/' },
          { text: 'redis', icon: 'redis', link: '/techstack/redis/' },
          { text: 'mongodb', icon: 'golang', link: '/techstack/mongodb/' },
          { text: 'es', icon: 'es', link: '/developer/es/' },
        ]
      },
      {
        text: "微服务",
        children: [
          { text: 'istio', icon: 'linux', link: '/techstack/linux/' },
          { text: 'rpc和grpc', icon: 'http', link: '/techstack/http/' },
        ]
      },
      {
        text: "中间件",
        children: [
          { text: 'nginx', icon: 'nginx', link: '/techstack//nginx/' },
          { text: 'zabbix', icon: 'zabbix', link: '/techstack/zabbix/' },
          { text: 'elk', icon: 'elk', link: '/techstack/elk/' },
        ]
      },

    ],
  },

  {
    text: '资源',
    icon: 'ziyuan',
    link: 'resource/',
    children: [
      {
        text: "娱乐",
        icon: 'media',
        children: [
          {text: '书籍', icon:'book1', link: "/resource/media/books/"},
          {text: '电影', icon:'movie', link: "/resource/media/movies/"},
          {text: '实用网站', icon: 'web', link: "/resource/media/webs/"},

        ]
      },
      {
        text: "工具",
        icon: 'tool',
        children: [
          {text: '绿色软件', icon:'pojie', link: "/resource/tool/greesoftware/"},


        ]
      },
    ],
  },
  '/about/',
]);
