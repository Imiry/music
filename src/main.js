import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/base.scss'

import fastclick from 'fastclick'
fastclick.attach(document.body)//借助fastclick解决移动端100~300ms的点击事件延迟问题

Vue.config.productionTip = false

new Vue({
  router,
  store,

  render: h => h(App)
}).$mount('#app')
