import { defineUserConfig} from "vuepress";
import { path } from "vuepress/utils";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "",
  description: "摘星的博客",

  theme,

  alias: {
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
      __dirname,
      "./components/BlogHero.vue",
    ),
  },
});
