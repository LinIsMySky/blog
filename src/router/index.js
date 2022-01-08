import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login.vue'
import Blogs from '../views/Blogs.vue'
import BlogEdit from '../views/BlogEdit.vue'
import BlogDetail from '../views/BlogDetail.vue'
import Info from '../views/Info.vue'
import ResInfo from '../views/ResInfo.vue'
import Reg from '../views/Reg'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'index',
        redirect: {
            name: "Blogs"
        }
    },
    {
        path: '/blogs',
        name: 'Blogs',
        component: Blogs
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/info',
        name: 'Info',
        component: Info
    },
    {
        path: '/reg',
        name: 'Reg',
        component: Reg
    },
    {
        path: '/resinfo',
        name: 'ResInfo',
        component: ResInfo
    },
    {
        path: '/blog/add',
        name: 'BlogAdd',
        component: BlogEdit,
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/blog/:blogId/edit',
        name: 'BlogEdit',
        component: BlogEdit,
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/blog/:blogId',
        name: 'BlogDetail',
        component: BlogDetail
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router