import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap-icons/font/bootstrap-icons.css";
import VueSmoothScroll from "vue3-smooth-scroll";

createApp(App).use(router).use(VueSmoothScroll).mount("#app");
