import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/index.vue'
import Login from '@/views/Login/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'
import Detail from '@/views/Detail/index.vue'
import CartList from '@/views/CartList/index.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    // 始终滚动到顶部
    return { top: 0 }
  },
  routes: [
    {
      path: '/', component: Layout, children: [
        { path: '', component: Home },
        { path: 'category/:id', component: Category },
        { path: 'category/sub/:id', component: SubCategory },
        { path: 'detail/:id', component: Detail },
        { path: 'cartlist', component: CartList }
      ]
    },
    { path: '/login', component: Login }
  ]
})

export default router
