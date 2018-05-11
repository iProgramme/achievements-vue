// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
// import './theme/index.css'
import ElementUI from 'element-ui'
import http from './core/http';
// 自定义过滤器
import filterString from './filters/filterString'
import filterJson from './filters/filterJson'
// 状态管理
import Vuex from 'vuex'
import store from './vuex/store'
// 阻止 vue 在启动时生成生产提示
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

