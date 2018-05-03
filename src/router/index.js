import Vue from 'vue'
import Router from 'vue-router'
import page1 from '../pages/page1/page1.vue'
import page4 from '../pages/page4/page4.vue'
import page3 from '../pages/page3/page3.vue'

import notfind from '../pages/notfind/notfind'
import dashboard from '../pages/dashboard/dashboard'
import login from '../pages/login/login'
import pages from '../pages/pages'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/',
      component: pages,
      children:[
        {
          path: 'page1',
          name: 'page1',
          component: page1
        },
        {
          path: 'page4',
          name: 'page4',
          component:page4
        },
        {
          path: 'page3',
          name: 'page3',
          component:page3
        }
        
      ]
    },
    {
      path: '*',
      name: 'notfind',
      component: notfind
    }
    
  ]
})
