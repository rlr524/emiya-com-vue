import Vue from "vue";
import App from "./App.vue";
import router from "./router.js";
import "./assets/main.css";
import "./assets/icon-fonts.css";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
