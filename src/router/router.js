export default [
    {
        path: '/',
        name: 'index',
        component: () => import('@/view/base/home'),
        children:[
            {
                path: '/',
                name:'index',
                meta: {
                    title: '首页'
                },
                component: () => import('@/view/index')
            },
        ]
    },
    {
        path: '/login.html',
        name: 'login',
        meta: {
            title: '登录'
        },
        component: () => import('@/view/login')
    },
    {
        path: '/register.html',
        name: 'register',
        meta: {
            title: '用户注册'
        },
        component: () => import('@/view/register')
    },
    {
        path: '*',
        name: '404',
        meta: {
            title: '404'
        },
        component: () => import('@/view/404')
    }
]
