/*
 * @Author: chenhua
 * @Date: 2020-07-16 17:06:53
 * @LastEditors: chenhua
 * @LastEditTime: 2020-07-17 14:41:19
 * @Description: 
 * @FilePath: \supermall\src\router\index.js
 */ 
import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () =>import('views/home/Home')
const Category = () =>import('views/category/Category')
const Cart = () =>import('views/cart/Cart')
const Profile = () =>import('views/profile/Profile')

// 1 安装插件
Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  { 
    path: '/home', 
    component: Home
  },
  { 
    path: '/category', 
    component: Category
  },
  { 
    path: '/cart', 
    component: Cart
  },
  { 
    path: '/profile', 
    component: Profile
  },
]

// 2 创建路由对象
const router = new VueRouter({
  routes,
  mode: 'history'
})

// 3 导出
export default router