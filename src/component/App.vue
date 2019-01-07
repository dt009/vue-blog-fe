/*
 * @Author: duantao-ds
 * @Date: 2018-08-08 23:47:49
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-09 17:43:25
 */

<template>
    <div class="app">
        <h1>{{name}}</h1>
        <transition name="aa">
            <router-view class="router-view"></router-view>
        </transition>
    </div>
</template>


<script>
    export default {
        name: 'APP',
        data() {
            return {
                message: 'Hello World!!'
            }
        },
        computed: {
            name() {
                return this.$store.state.message;
            }
        }
    }
</script>

<style lang="less" scoped>

</style>
