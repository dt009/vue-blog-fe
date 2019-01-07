/*
 * @Author: duantao-ds
 * @Date: 2018-08-09 16:17:25
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-21 16:01:47
 */

import Vue from 'vue';
import Router from 'vue-router';

const Home = () => import(/* webpackChunkName: 'Home' */ '../component/Home.vue');

const About_Home = () => import(/* webpackChunkName: 'About_Home' */ '../component/About_Home.vue');

const About_Message = () => import(/* webpackChunkName: 'About_Message' */ '../component/About_Message.vue');

const About = () => import(/* webpackChunkName: 'About' */ '../component/About.vue');


Vue.use(Router);

const router =  new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: About,
            children: [
                {
                    path: 'home',
                    name: 'About_Home',
                    component: About_Home
                },
                {
                    path: 'message',
                    name: 'About_Message',
                    component: About_Message
                }
            ]
        }
    ]
})

// 通过导航守卫可以设置默认路由
// router.beforeEach((to, from, next) => {
//     if (to.name === 'About') {
//         next('/about/home')
//     }
//     else {
//         next()
//     }
// })

export default router;
