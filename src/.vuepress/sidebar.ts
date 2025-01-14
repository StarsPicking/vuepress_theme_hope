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
  "/developer/": [
    back_posts,
    {
      text: '开发者',
      icon: 'developer',
      prefix: '/01.developer/',
      link: '/developer/',
      children: 'structure',
    }
  ],
  '/developer/python/': [
    back_developer,
    {
      text: 'python',
      icon: 'python',
      prefix: '01.python/',
      link: '/developer/python/',
      children: 'structure',
    }
  ],
  '/developer/golang/': [
    back_developer,
    {
      text: 'golang',
      icon: 'golang',
      link: '01.developer/golang/',
      children: 'structure',
    },
  ],

  // "/developer/python/": [
  //   back_developer,
  //   {
  //     text: "python",
  //     icon: "python",
  //     prefix: "developer/python",
  //     link: "/developer/python/",
  //     children: "structure",
  //   },
  // ],

  // "/developer/golang/": [
  //   back_developer,
  //   {
  //     text: "golang",
  //     icon: "golang",
  //     link: "/developer/golang/",
  //     children: "structure",
  //   },
  // ],

  // "/developer/devops/": [
  //   back_developer,
  //   {
  //     text: "devops",
  //     icon: "devops",
  //     link: "/developer/devops/",
  //     children: "structure",
  //   },
  // ],

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
      prefix: "01.developer/",
      link: "/developer/",
      children: "structure",
    },
    {
      text: "技术栈",
      icon: "jishuzhan",
      prefix: "02.techstack/",
      link: "techstack/",
      children: "structure",
    },
    {
      text: "资源",
      icon: "ziyuan",
      prefix: "resource/",
      link: "resource/",
      children: "structure",
    },
  ],
});
