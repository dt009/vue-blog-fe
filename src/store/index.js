/*
 * @Author: duantao-ds
 * @Date: 2018-08-09 17:39:29
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-09 17:44:02
 */

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        message: 'hello world'
    }
})


export default store;
