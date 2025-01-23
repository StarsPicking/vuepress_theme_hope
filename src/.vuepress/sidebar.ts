import { sidebar } from "vuepress-theme-hope";

const back_posts = {
  text: "返回总目录",
  icon: "sort",
  link: "/posts/",
};
const back_developer = {
  text: "返回开发者",
  icon: "developer",
  link: "/developer/",
};


const back_techstack = {
  text: "返回技术栈",
  icon: "techstack",
  link: "/techstack/",
};
const back_resource = {
  text: "返回资源",
  icon: "resource1",
  link: "/resource/",
};


export default sidebar({

  // "/developer/": [
  //   back_posts,
  //   {
  //     text: "开发者",
  //     icon: "developer",
  //     // prefix: "01.developer/",
  //     // link: "developer/",
  //     expanded: false,
  //     children: "structure",
  //   },
  // ],


  // "/developer/": [
  //   { text: "🟠 python", icon: "python", prefix:"python/", link: "/developer/python/", children: "structure"},
  //   { text: "🔴 golang", icon: "golang", prefix:"golang/", link: "/developer/golang/", children: "structure"},
  //   { text: "🔵 IP", link: "ip"},
  //   { text: "🟢 HTTP", link: "http"},
  // ],

// 开发者下
  "/developer/": [
    back_posts,
    {
      text: '开发者',
      icon: 'developer',
      // prefix: '/developer/',
      link: '/developer/',
      children: 'structure',
    }
  ],

  '/developer/python/': [
    back_developer,
    {
      text: 'python',
      icon: 'python',
      link: '/developer/python/',
      children: 'structure',
    }
  ],

  '/developer/golang/': [
    back_developer,
    {
      text: 'golang',
      icon: 'golang',
      link: '/developer/golang/',
      children: 'structure',
    },
  ],

  '/developer/devops/': [
    back_developer,
    {
      text: 'devops',
      icon: 'devops',
      link: '/developer/devops/',
      children: 'structure',
    },
  ],


  '/developer/linux/': [
    back_developer,
    {
      text: '操作系统',
      icon: 'linux',
      link: '/developer/linux/',
      children: 'structure',
    },
  ],

  '/developer/network/': [
    back_developer,
    {
      text: 'devops',
      icon: 'devops',
      link: '/developer/network/',
      children: 'structure',
    },
  ],

  // 技术栈
  '/techstack/': [
    back_posts,
    {
      text: '技术栈',
      icon: 'techstack',
      link: '/techstack/',
      children: 'structure',
    },
  ],

  '/techstack/database/': [
    back_techstack,
    {
      text: '数据库',
      icon: 'shujuku',
      link: '/techstack/database/',
      children: 'structure',
    },
  ],

  '/techstack/docker/': [
    back_techstack,
    {
      text: '容器化',
      icon: 'rongqi',
      link: '/techstack/docker/',
      children: 'structure',
    },
  ],

  '/techstack/microservice/': [
    back_techstack,
    {
      text: '微服务',
      icon: 'weifuwu',
      link: '/techstack/microservice/',
      children: 'structure',
    },
  ],
  '/techstack/component/': [
    back_techstack,
    {
      text: '组件',
      icon: 'zujian',
      link: '/techstack/component/',
      children: 'structure',
    },
  ],


  // 面试
  '/interview/': [
    back_posts,
    {
      text: '面试',
      icon: 'mianshi',
      link: '/interview/',
      children: 'structure',
    },
  ],

  // 资源
  '/resource/': [
    back_posts,
    {
      text: '资源',
      icon: 'ziyuan',
      link: '/resource/',
      children: 'structure',
    },
  ],

  // // 资源以及子目录
  // "/resource/":[
  //   back_posts,
  //   {
  //     text: "资源",
  //     icon: "ziyuan",
  //     link: "/resource/",
  //     children: "structure",
  //   },
  // ],

  // "/resource/media/": [
  //   back_resource,
  //   {
  //     text: "娱乐",
  //     icon: "media",
  //     link: "resource/media/",
  //     children: "structure",
  //   },
  
  // ],
  // "/resource/tool/": [
  //   back_resource,
  //   {
  //     text: "工具",
  //     icon: "tool",
  //     link: "resource/tool/",
  //     children: "structure",
  //   },
  // ],

  // "/resource/other/": [
  //   back_resource,
  //   {
  //     text: "其它",
  //     icon: "other",
  //     link: "resource/other/",
  //     children: "structure",
  //   },
  // ],

  // 总路由
  "/": [
    "",
    {
      text: "导航",
      icon: "daohang",
      prefix: "00.posts/",
      link: "posts/",
      expanded: false,
      children: [
        "1.sitemap.md",
      ]
    },
    {
      text: "开发者",
      icon: "kaifazhe",
      prefix: "developer/",
      link: "/developer/",
      children: "structure",
    },
    {
      text: "技术栈",
      icon: "jishuzhan",
      prefix: "techstack/",
      link: "techstack/",
      children: "structure",
    },
    // {
    //   text: "面试",
    //   icon: "mianshi",
    //   prefix: "interview/",
    //   link: "interview/",
    //   children: "structure",
    // },
  //   {
  //     text: "资源",
  //     icon: "ziyuan",
  //     prefix: "resource/",
  //     link: "resource/",
  //     children: "structure",
  //     collapsible: true,
  //     // 可选的。设置分组是否默认展开，默认值是 false
  //     expanded: false,
  //   },
  ],
});
