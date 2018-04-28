import Vue from 'vue'
import Router from 'vue-router'
import page1 from '../pages/page1/page1'
import page2 from '../pages/page2/page2'
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
          path: 'page2',
          name: 'page2',
          component: page2
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
