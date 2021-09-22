import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import animated from 'animate.css'
import echarts from 'echarts'
Vue.use(animated)
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
window.addEventListener('popstate', function () {
  router.isBack = true
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
