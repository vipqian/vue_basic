<!--
 * @Author: wangyunfei
 * @Date: 2022-10-08 13:52:43
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-10-09 22:06:43
 * @Description: file content
 * @FilePath: /vue_test/src/components/Banner.vue
-->
<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header"><h2>Vue Router Demo</h2></div>
    <button @click="back">前进</button>
    <button @click="forward">后退</button>
    <button @click="test">测试一下go</button>
  </div>
</template>

<script>
  export default {
    name: "Banner",
    methods: {
      back(){
        this.$router.back()
      },
      forward(){
        this.$router.forward()
      },
      test(){
        this.$router.go(1)
      },
    },

  }
</script>

<style>

</style>