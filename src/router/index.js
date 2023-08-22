import Vue from 'vue'
import VueRouter from 'vue-router'
// 解决跳转报错
// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location, onResolve, onReject) {
// if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
// return originalPush.call(this, location).catch(err => err)
// }

Vue.use(VueRouter)

const routes = [

  {
    path: '/home',
    name: 'Home',
    meta: {
      title: '工作',
      showTab: true
    },
    component: () => import('@/views/home.vue')
  },
  {
    path: '/hello',
    name: 'hello',
    component: () => import('@/views/hello'),
    meta: {
      title: '助手',
      showTab: true
    }
  },
  {
    path: '/health-activity',
    name: 'HealthActivity',
    component: () => import('@/views/health-activity'),
    meta: {
      title: '分析',
      showTab: true,
      deepth: 1
    }
  },
  {
    path: '/challenge',
    name: 'Challenge',
    component: () => import('@/views/challenge'),
    meta: {
      title: '常用',
      showTab: true
    }
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('@/views/user'),
    meta: {
      title: '我的',
      showTab: true
    }
  }
]
const router = new VueRouter({
  mode: 'history',
  // base: '/health-h5',
  scrollBehavior: () => ({ y: 0 }),
  routes
})

export default router
