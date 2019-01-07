/*
 * @Author: duantao-ds
 * @Date: 2018-08-09 16:27:01
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-09 16:41:02
 */

<template>
    <div class="home">
        <h1>{{message}}</h1>
        <router-link :to="{name: 'About', params: {}}">关于我</router-link>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        data() {
            return {
                message: '这是 Home 页'
            }
        }
    }
</script>

<style lang="less" scoped>
    .home {
        background: #f00;
    }
</style>
