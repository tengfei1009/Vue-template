import Vue from 'vue'
// 导入Vue和Vue Router
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import { component } from 'vue/types/umd'
// Vue.use(VueRouter) 是在 Vue.js 中使用 Vue Router 插件的方法。
// 它用于全局注册 Vue Router 插件，以便你可以在整个 Vue 应用程序中使用 Vue Router 的功能。
Vue.use(VueRouter)

// 定义路由
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      index: 1 // 添加 meta 属性, 约定 1 为第一级
    }
  },
  // 其他路由...
  {
    path: '/about',
    name: 'About',
    // 路由级别的代码分割（code- splitting）的说明：
    // 1.route level code-splitting(将特定路由所需的代码拆分为单独的块，以实现按需加载)

    // 2.this generates a separate chunk (about.[hash].js) for this route(这会为这条路由生成一个单独的块(约.[hash.js]))
    //   这意味着为当前路由生成一个单独的 JavaScript 文件块，文件名可能包含哈希（hash）值。
    //   这样做的目的是将当前路由所需的代码与其他代码分开，以便在访问路由时只加载必要的代码。

    // 3.which is lazy-loaded when the route is visited.(当访问路由时懒加载)
    //   这表示在访问特定路由时才会加载相关的 JavaScript 代码)
    //   通常，Vue Router 默认情况下采用懒加载（lazy loading）的方式加载路由组件，这意味着只有在需要时才会下载和渲染相关的组件。

    // 动态导入(lazy loading)一个名为 '../views/AboutView.vue' 的组件
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),

    meta: {
      index: 2 // 添加meta属性,约定 2 为第二级
    }
  }
]
// 创建Router实例
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// 导出Router实例
export default router
