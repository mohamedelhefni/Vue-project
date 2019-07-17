import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./sass/main.scss";
import "materialize-css";
import "materialize-css/dist/css/materialize.css";
import "material-icons/iconfont/material-icons.scss";
import "axios";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
