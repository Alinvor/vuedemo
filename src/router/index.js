import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/index'
      // requiresAuth: true
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
      // keepAlive: true,
      // requiresAuth: true
    }
  ]
})
