import Vue from 'vue'
import VueRouter from 'vue-router'
import Recommend from '@/views/recommend';
import HotMusic from '@/views/hotMusic';
import Search from '@/views/search';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    name: 'recommend',
    component: Recommend
  },
  {
    path: '/hotMusic',
    name: 'hotMusic',
    component: HotMusic
  },
  {
    path:'/search',
    name:'search',
    component:Search
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router