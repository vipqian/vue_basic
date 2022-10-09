<!--
 * @Author: wangyunfei
 * @Date: 2022-10-04 20:32:59
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-10-08 14:04:59
 * @Description: file conten
 * @FilePath: /vue_test/src/pages/About.vue
-->
<template>
  <h2>我是About内容</h2>
</template>

<script>
  export default {
    name: "About",
    mounted() {
      console.log('about组件被挂载了');
    },
    beforeDestroy(){
      console.log('about组件被销毁了');
    }


  }
</script>

<style>

</style>