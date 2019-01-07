/*
 * @Author: duantao-ds
 * @Date: 2018-08-08 23:44:35
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2019-01-07 17:51:13
 */

import Vue from 'vue';
import APP from 'comp/APP.vue';
import setMetaEl from './responsive/meta';
import setHtmlFont from './responsive/font';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import './style/reset.less'

import router from './router/index';
import store from './store/index';

Vue.use(ElementUI, {size: 'medium', zIndex: 3000})

function vueInit() {
    const app = new Vue({
        el: '#app',
        components: {
            APP
        },
        render: h => h(APP),
        router,
        store
    })
}

function init() {
    try {
        setMetaEl(document, window);
        setHtmlFont(),
        vueInit();
    } catch (error) {
        console.log('启动出错, 请检查....');
        console.log(error);
    }
}

init()
