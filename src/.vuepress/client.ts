import { defineAsyncComponent } from 'vue';
import { defineClientConfig } from "vuepress/client";
import { setupRunningTimeFooter } from "vuepress-theme-hope/presets/footerRunningTime.js";
import { setupSnowFall } from "vuepress-theme-hope/presets/snowFall.js";
import "vuepress-theme-hope/presets/round-blogger-avatar.scss";
// import "vuepress-theme-hope/presets/left-blog-info.scss";
import "vuepress-theme-hope/presets/bounce-icon.scss";
import "vuepress-theme-hope/presets/hr-driving-car.scss";

const TopNavBeautify = defineAsyncComponent(() => import('./components/TopNavBeautify.vue'));

export default defineClientConfig({
  setup: () => {
    setupRunningTimeFooter(
        new Date("2023-01-01"),
        {
          "/": "已运行 :day 天 :hour 小时 :minute 分钟 :second 秒",
        },
        true,
      );
      setupSnowFall({speed: 1, count: 30});
      // setupTransparentNavbar({ type: "all", threshold: 20 });  // type?: "homepage" | "blog-homepage" | "all";
  },
  rootComponents: [
    TopNavBeautify,
  ],
});