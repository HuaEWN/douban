// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

import $ from 'jquery'

// import 'bootstrap/dist/css/bootstrap.min.css'
 
// import 'bootstrap/dist/js/bootstrap.min.js'


import mui from './assets/mui/js/mui.js'
import './assets/mui/css/mui.css'

Vue.prototype.mui=mui


import axios from 'axios'
Vue.prototype.axios = axios 

require("./mock"); //引用mock

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  components: { App },
  template: '<App/>'
})
