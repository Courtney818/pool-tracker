import Vue from 'vue';
import Router from 'vue-router';
import NProgress from 'nprogress';

Vue.use(Router);

const HomePage = () => import(/* webpackChunkName: "datapassFeatured" */ '@/pages/HomePage.vue');

const routes = [
    {
        path: '*',
        redirect: '/',
    },
    {
        path: '/home',
        name: 'homePage',
        component: HomePage,
    },
];

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

NProgress.configure({ showSpinner: false, trickleSpeed: 180 });

router.beforeEach((to, _from, next) => {
    if (to.name) NProgress.configure({ showSpinner: false });
    NProgress.start();
    next();
});

router.afterEach(() => {
    NProgress.done();
});

export default router;