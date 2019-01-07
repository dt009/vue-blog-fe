/*
 * @Author: duantao-ds
 * @Date: 2018-08-09 16:37:53
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-22 19:00:32
 */

<template>
    <div class="about-home">
        <h2>{{message}}</h2>
    </div>
</template>

<script>
    export default {
        name: 'About_Home',
        data() {
            return {
                message: '这是关于我子路由 --  主页'
            }
        }
    }
</script>

<style lang="less" scoped>
    .about-home {
        color: #0ff;
    }
</style>
