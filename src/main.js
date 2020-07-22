import Vue from "vue";
import App from "./App.vue";
import router from "./router.js";
import "./assets/css/main.css";
import Meta from "vue-meta";
require("dotenv").config();

Vue.config.productionTip = false;

Vue.use(Meta);

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
