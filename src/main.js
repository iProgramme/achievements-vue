// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import './common.css'
import http from './core/http';
import filterString from './filters/filterString'
import filterJson from './filters/filterJson'

import Vuex from 'vuex'
import store from './vuex/store'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(Vuex)

console.log('Vue.version:'+Vue.version);

new Vue({
    el: '#app',
    router,
    store,
    components: {
        'App': App,
    },
    template: '<App/>',
    render: h => h(App)
})
// 需对http进行一些处理
Vue.prototype.$http = http

