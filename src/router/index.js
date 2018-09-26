import Vue from 'vue'
import Router from 'vue-router'
new Vue()
Vue.use(Router)

import HelloWorld from '@/components/HelloWorld'
import BlogHome   from '@/components/BlogHome'
import BlogDetail from '@/components/BlogDetail'
import BlogChart  from '@/components/BlogChart'
import NotFound   from '@/components/NotFound'

export default new Router({
  mode: 'history',
  routes: [
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/',
    name: 'BlogTop',
    component: BlogHome,
  },
  {
    path: '/blog',
    name: 'BlogHome',
    component: BlogHome,
    children: [
    {
      path: 'charts',
      name: 'BlogChart',
      component: BlogChart,
    },
    {
      path: ':slug',
      name: 'BlogDetail',
      component: BlogDetail,
    },
    ]
  }
  ]
})
