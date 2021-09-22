import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import index from '@/views/index'
import about from '@/views/about'
import join from '@/views/join'
let constantRouterMap = [
    {
        path: '/',
        component: index,
        meta: {
            title: '首页'
        }
    },
    {
        path: '/about',
        component: about,
        meta: {
            title: '关于'
        }
    },
    {
        path: '/join',
        component: join,
        meta: {
            title: '加入我们'
        }
    },
    {
        path: '*',
        redirect: '/',
    }
]


const router = new VueRouter({
    mode: 'history',
    routes: constantRouterMap
  })
  
  export default router