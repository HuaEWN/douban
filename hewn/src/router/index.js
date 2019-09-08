import Vue from 'vue'
import Router from 'vue-router'

import Zhuce from '../pages/zhuce'
import Denglu from '../pages/denglu'
import Index from '../components/index'
import Dianying from '../pages/dianying'
import Tushu from '../pages/tushu'
import Guangbo from '../pages/guangbo'
import Xiaozu from '../pages/xiaozu'
import Sousuo from '../pages/sousuo'
import Bots from '../pages/bots'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/index'
    },
    {
      path: '/zhuce',
      name: 'Zhuce',
      component: Zhuce
    },
    {
      path: '/denglu',
      name: 'Denglu',
      component: Denglu
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/dianying',
      name: 'Dianying',
      component: Dianying
    },
    {
      path: '/tushu',
      name: 'Tushu',
      component: Tushu
    },
    {
      path: '/guangbo',
      name: 'Guangbo',
      component: Guangbo
    },
    {
      path: '/xiaozu',
      name: 'Xiaozu',
      component: Xiaozu
    },
    {
      path: '/sousuo',
      name: 'Sousuo',
      component: Sousuo
    },
    {
      path: '/bots',
      name: 'Bots',
      component: Bots
    },
    {
      path: '*',
      redirect:'/index'
    },
    
   
  ]
})
