<!--
 * @Author: wangyunfei
 * @Date: 2022-10-08 15:11:11
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-10-08 15:24:49
 * @Description: file content
 * @FilePath: /vue_test/src/pages/Detail.vue
-->
<template>
  <ul>
    <li>消息的编号:{{$route.query.id}}</li>
    <li>消息的标题:{{$route.query.title}}</li>
  </ul>
</template>

<script>
  export default {
    name: "Detail"
  }
</script>

<style>

</style>