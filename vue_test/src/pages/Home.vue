<!--
 * @Author: wangyunfei
 * @Date: 2022-10-07 10:07:28
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-10-08 14:05:14
 * @Description: file content
 * @FilePath: /vue_test/src/pages/Home.vue
-->
<template>
  <h2>我是Home内容</h2>
</template>

<script>
  export default {
    name: "Home",
    mounted() {
      console.log('Home组件被挂载了');
    },
    beforeDestroy(){
      console.log('Home组件被销毁了');
    }

  }
</script>

<style>

</style>