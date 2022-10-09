<!--
 * @Author: wangyunfei
 * @Date: 2022-10-08 15:11:11
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-10-09 21:15:58
 * @Description: file content
 * @FilePath: /vue_test/src/pages/Detail.vue
-->
<template>
  <ul>
    <li>消息的编号:{{id}}</li>
    <li>消息的标题:{{title}}</li>

  </ul>
</template>

<script>
  export default {
    name: "Detail",
    props: ['id', 'title']
  }
</script>

<style>

</style>