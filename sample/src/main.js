import router from "./router.js";
import Vue from "vue";
import App from "./App";

new Vue({
  el: "#app",
  router, // アプリケーションに登録
  render: h => h(App)
});
