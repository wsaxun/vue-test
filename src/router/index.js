import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import index from '@/components/common/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'null',
      component: Layout,
      redirect: 'index',
      children: [
        {
          path: '/index',
          name: 'index',
          component: index,
        },
      ]
    },
    {
      path: '*',
      name: 'error',
      component: Layout,
      redirect: 'index',
    }
  ]
})
