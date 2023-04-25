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
        path: '/',
        component: () => import('@/views/layout/index.vue'),
    }
]
const router =createRouter({
    history: createWebHashHistory(),
    routes
})
export default router