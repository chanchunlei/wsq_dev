import Vue from 'vue'
import Router from 'vue-router'
import store from './store.js'

import Home from '@/views/home/Home.vue'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                title: '首页',
                icon: 'icon-home',
            },
        },
        {
            path: '/modbus',
            name: 'Modbus',
            component: () => import('@/views/modbus/Modbus.vue'),
            meta: {
                title: 'Modbus',
                icon: 'icon-iot',
            },
        },
        {
            path: '/pageMaking',
            name: 'PageMaking',
            component: () => import('@/views/pageMaking/PageMaking.vue'),
            meta: {
                title: '自定义表单',
                icon: 'icon-biaodan',
            },
            children: [
                {
                    path: '/pageMaking/makingPage',
                    name: 'MakingPage',
                    component: () => import('@/views/pageMaking/children/MakingPage.vue'),
                    meta: {
                        title: '生成页面',
                    },
                },
                {
                    path: '/pageMaking/generatePage',
                    name: 'GeneratePage',
                    component: () => import('@/views/pageMaking/children/GeneratePage.vue'),
                    meta: {
                        title: '渲染页面',
                    },
                },
            ]
        }
    ]
});


// 监听 路由变化
router.beforeEach((to, from, next) => {
    // console.log(to);
    // 记录 当前路由
    store.commit({
        type: "set_navActive",
        navActive: to.fullPath
    })
    // 设置页面 title
    window.document.title = to.meta.title;
    // 跳转
    next();
});

export default router;