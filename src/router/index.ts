import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/:catchAll(.*)',
        redirect: '/home'
    },
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'HomePage',
        component: () => import('@/pages/HomePage/HomePage.vue'),
        meta: {
            layout: 'HomePage'
        }
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;
