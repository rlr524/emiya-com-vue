/**
 * Emiya Consulting LLC
 * emiyaconsulting.com
 *
 * @version 1.1.0
 * @author Rob Ranf
 * @license Apache-2.0
 *
 */

import Vue from "vue";
import App from "./App.vue";
import router from "./router.js";
import "./assets/css/main.css";
import Meta from "vue-meta";

Vue.config.productionTip = false;

Vue.use(Meta);

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
