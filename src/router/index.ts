import { createRouter, createWebHashHistory, type RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/home',
            children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('@/views/home/index.vue'),
                meta: { title: '首页'},
            },
            ],
    },
    {
        path: '/index',
        component: () => import('@/views/layout/index.vue'),
    },
    {
        path: '/guidang',
        component: () => import('@/views/file/index.vue'),
    },
    {
        path: '/tag',
        component: () => import('@/views/label/index.vue'),
    }
]
const router =createRouter({
    history: createWebHashHistory(),
    routes
})
export default router