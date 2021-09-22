import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import animated from 'animate.css' 
Vue.use(animated)
Vue.config.productionTip = false
window.addEventListener('popstate', function () {
  router.isBack = true
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')