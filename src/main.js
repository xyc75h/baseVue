import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Routers from './router/router.js';
import {getToken, setTitle} from './libs/util';

Vue.use(VueRouter);

// The routing configuration
const RouterConfig = {
    mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

const LOGIN_PAGE_NAME = 'login'
const REGISTER_PAGE_NAME = 'register'

router.beforeEach((to, from, next) => {
    const token = getToken()
    if (token && (to.name === LOGIN_PAGE_NAME || to.name === REGISTER_PAGE_NAME)) {
        // 已登录访问登录或注册页
        next({
            name: 'index'
        })
    }
    next();
});

router.afterEach((to) => {
    setTitle(to, router.app);
    window.scrollTo(0, 0);
});

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
