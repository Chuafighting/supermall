/*
 * @Author: chenhua
 * @Date: 2020-07-16 15:00:16
 * @LastEditors: chenhua
 * @LastEditTime: 2020-07-16 17:09:11
 * @Description: 
 * @FilePath: \fruit\supermall\src\main.js
 */ 
import Vue from 'vue'
import App from './App.vue'

import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
