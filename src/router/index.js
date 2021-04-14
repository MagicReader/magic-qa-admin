import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push // 获取原型对象上的push函数
VueRouter.prototype.push = function push (location) { // 修改原型对象中的push方法
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    name: 'navigation',
    component: () => import('../views/navigation.vue'),
    redirect: { name: 'ums-index' },
    children: [
      // 用户管理
      {
        path: '/ums',
        name: 'ums-index',
        component: () => import('../views/ums/index.vue'),
        redirect: { name: 'userInfo-index' },
        children: [
          // 用户信息管理
          {
            path: 'userInfo',
            name: 'userInfo-index',
            component: () => import('../views/ums/userInfo/index.vue')
          },
          {
            path: 'userInfo/detail*',
            name: 'userInfo-detail',
            component: () => import('../views/ums/userInfo/detail.vue')
          },
          // 真实身份审核
          {
            path: 'trueIdentity',
            name: 'trueIdentity-index',
            component: () => import('../views/ums/trueIdentity.vue')
          }
        ]
      },
      // 网站管理
      {
        path: '/wms',
        name: 'wms-index',
        component: () => import('../views/wms/index.vue'),
        redirect: { name: 'announcement' },
        children: [
          // 发言信息管理
          {
            path: 'qa/postInfo',
            name: 'qa-postInfo',
            component: () => import('../views/wms/qa/postInfo.vue')
          },
          {
            path: 'qa/commentInfo',
            name: 'qa-commentInfo',
            component: () => import('../views/wms/qa/commentInfo.vue')
          },
          {
            path: 'qa/replyInfo',
            name: 'qa-replyInfo',
            component: () => import('../views/wms/qa/replyInfo.vue')
          },
          // 推送公告
          {
            path: 'announcement',
            name: 'announcement',
            component: () => import('../views/wms/announcement.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
