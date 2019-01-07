/*
 * @Author: duantao-ds
 * @Date: 2018-08-09 16:35:18
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-09 17:36:42
 */

<template>
    <div class="about">
        <h2>{{message}}</h2>
        <router-link :to="{name: 'Home', params: {}}">主页</router-link>
        <router-link :to="{name: 'About_Home', params: {}}">关于我的主页</router-link>
        <router-link :to="{name: 'About_Message', params: {}}">关于我的信息</router-link>
        <transition name="aa">
            <router-view class="router-view"></router-view>
        </transition>

    </div>
</template>

<script>
    export default {
        name: 'About',
        data() {
            return {
                message: '这是关于我的页面'
            }
        }
    }
</script>

<style lang="less" scoped>
    .about {
        background: #f2f2f2;
    }
</style>
