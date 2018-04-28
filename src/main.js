// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './common.css'
import axios from 'axios'

Vue.config.productionTip = false

Vue.use(ElementUI)
/* eslint-disable no-new */


new Vue({
  el: '#app',
  router,
  components: { 
    'App':App,
   },
  template: '<App/>',
  render: h => h(App)
})
Vue.prototype.$http = axios

