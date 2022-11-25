import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout/index.vue'
// 公開路由
const publicRoutes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login/index.vue')
  },
  {
    // Note:
    // 帶有路徑 '/' 的紀錄中的組件"默認"是一個不返回Promise 的函數
    path: '/',
    component: Layout,
    redirect: '/profile',
    children: [
      {
        path: '/profile',
        name: 'profile',
        component: () => import('@/views/profile/index.vue'),
        meta: {
          title: 'profile',
          icon: 'el-icon-user'
        }
      },
      {
        path: '/404',
        name: '404',
        component: () => import('@/views/error-page/error-404.vue')
      },
      {
        path: '/401',
        name: '401',
        component: () => import('@/views/error-page/error-401.vue')
      }
    ]
  },
  {
    path: '/chart',
    name: 'chart',
    component: () => import('@/views/chart/index.vue'),
    meta: {
      title: 'chart',
      icon: 'chart'
    }
  }
]
// 私有路由
const privateRoutes = [
  {
    path: '/user',
    component: Layout,
    redirect: '/user/manage',
    meta: {
      title: 'user',
      icon: 'personnel'
    },
    children: [
      // 用戶管理
      {
        path: '/user/manage',
        component: () => import('@/views/UserManage/index.vue'),
        meta: {
          title: 'userManage',
          icon: 'personnel-manage'
        }
      },
      // 角色列表
      {
        path: '/user/role',
        component: () => import('@/views/RoleList/index.vue'),
        meta: {
          title: 'roleList',
          icon: 'role'
        }
      },
      // 權限列表
      {
        path: '/user/permission',
        component: () => import('@/views/PermissionList/index.vue'),
        meta: {
          title: 'permissionList',
          icon: 'permission'
        }
      },
      // 用戶訊息
      {
        path: '/user/info/:id',
        name: 'userInfo',
        component: () => import('@/views/UserInfo/index.vue'),
        meta: {
          title: 'userInfo'
        }
      },
      // 導入
      {
        path: '/user/import',
        name: 'userInfo',
        component: () => import('@/views/Import/index.vue'),
        meta: {
          title: 'excelImport'
        }
      }
    ]
  }
  // {
  //   path: '/chart',
  //   name: 'chart',
  //   component: () => import('@/views/chart/index.vue'),
  //   meta: {
  //     title: 'chart',
  //     icon: 'chart'
  //   }
  // }
]
// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: HomeView
//   },
//   {
//     path: '/about',
//     name: 'about',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
//   }
// ]

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...publicRoutes, ...privateRoutes]
})

export default router
