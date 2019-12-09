import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/input1',
        name: 'input1',
        component: () => import(/* webpackChunkName: "about" */ '../views/Input1.vue')
    },
    {
        path: '/input2',
        name: 'input2',
        component: () => import(/* webpackChunkName: "about" */ '../views/Input2.vue')
    },
    {
        path: '/input3',
        name: 'input3',
        component: () => import(/* webpackChunkName: "about" */ '../views/Input3.vue')
    }
]

const router = new VueRouter({
    routes
})
export default router
