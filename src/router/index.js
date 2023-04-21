import { createRouter, createWebHistory } from 'vue-router'

export const constantRoutes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login.vue'),
    },

    {
        path: '/',
        name: 'layout',
        component: () => import('@/views/layout/index.vue'),
        children: [
            {
                path: '',
                name: 'index',
                component: () => import('@/pages/index/index.vue'),
                meta: {
                    title: '首页'
                }
            },
            {
                path: 'product',
                meta: {
                    title: '产品管理'
                },
                children: [
                    {
                        path: 'list',
                        component: () => import('@/pages/product/list.vue'),
                        meta: {
                            title: '产品列表'
                        }
                    },
                    {
                        path: 'category',
                        component: () => import('@/pages/product/category.vue'),
                        meta: {
                            title: '产品分类'
                        }
                    }
                ]
            },
            {
                path: 'order',
                meta: {
                    title: '订单管理'
                },
                children: [
                    {
                        path: 'index',
                        component: () => import('@/pages/order/index.vue'),
                        meta: {
                            title: '订单汇总'
                        }
                    },
                    {
                        path: 'list',
                        component: () => import('@/pages/order/list.vue'),
                        meta: {
                            title: '订单列表'
                        }
                    },
                    {
                        path: 'examine',
                        component: () => import('@/pages/order/examine.vue'),
                        meta: {
                            title: '订单审核'
                        }
                    }
                ]
            },
            {
                path: 'advertisement',
                component: () => import('@/pages/adv/index.vue'),
                meta: {
                    title: '广告管理'
                }
            },
            {
                path: 'system',
                component: () => import('@/pages/system/index.vue'),
                meta: {
                    title: '系统管理'
                }
            }
        ]
    },

    {
        path: '/404',
        name: 'not found',
        component: () => import('@/components/NotFound.vue')
    },

    {
        path: '/:pathMatch(.*)*',
        redirect: '/404'
    }
]

const router = createRouter(
    {
        routes: constantRoutes,
        history: createWebHistory(),
    }
)

router.beforeEach(
    function (to, from, next) {
        if (localStorage.getItem('token')) {
            next()
        } else {
            if (to.path == '/login' || to.path == '/404') {
                next()
            } else {
                if (to.path == '/') {
                    next('/login')
                } else {
                    next('/404')
                }
            }
        }
    }
)

export default router