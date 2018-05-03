import Vue from 'vue'
Vue.filter('filterString', function (value) {
    return value ? 'flag为true' : 'flag为false'
})