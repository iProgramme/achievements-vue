import Vue from 'vue'
Vue.filter('filterJson', function (value) {
    return JSON.stringify(value)
})