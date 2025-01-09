import { sidebar } from "vuepress-theme-hope";

const back_posts = {
  text: '返回总目录',
  icon: 'sort',
  link: '/posts/',
};
const back_developer = {
  text: '返回开发者',
  icon: 'developer',
  link: '/developer/',
};

const back_resource = {
  text: '返回资源',
  icon: 'resource1',
  link: '/resource/',
};


export default sidebar({

  // '/posts/guidang/': [
  //   back_resource,
  //   {
  //     text: '其它',
  //     icon: 'other',
  //     link: 'resource/other/',
  //     children: 'structure',
  //   },
  // ]
  // 开发者侧边栏以及子目录
  '/developer/': [
    back_posts,
    {
      text: '开发者',
      icon: 'developer',
      link: '/developer/',
      children: 'structure',
    },
  ],
  '/developer/python/': [
    back_developer,
    {
      text: 'python',
      icon: 'python',
      link: '/developer/python/',
      children: 'structure',
    },
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
      link: 'developer/devops/',
      children: 'structure',
    },
  ],

  // 资源以及子目录
  '/resource/':[
    back_posts,
    {
      text: '资源',
      icon: 'ziyuan',
      link: '/resource/',
      children: 'structure',
    },
  ],

  '/resource/media/': [
    back_resource,
    {
      text: '娱乐',
      icon: 'media',
      link: 'resource/media/',
      children: 'structure',
    },
  
  ],
  '/resource/tool/': [
    back_resource,
    {
      text: '工具',
      icon: 'tool',
      link: 'resource/tool/',
      children: 'structure',
    },
  ],

  '/resource/other/': [
    back_resource,
    {
      text: '其它',
      icon: 'other',
      link: 'resource/other/',
      children: 'structure',
    },
  ],

  // 回调
  "/": [
    "",
    {
      text: "导航",
      icon: "daohang",
      prefix: "posts/",
      link: "posts/",
      expanded: false,
      children: [
        '1.sitemap.md',
      ]
    },
    {
      text: '开发者',
      icon: 'kaifazhe',
      prefix: 'developer/',
      link: 'developer/',
      collapsible: false,
      children: "structure",
    },
    {
      text: '资源',
      icon: 'ziyuan',
      prefix: 'resource/',
      link: 'resource/',
      collapsible: false,
      children: "structure",
    },
  ],
});
