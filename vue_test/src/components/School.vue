<!--
 * @Author: wangyunfei
 * @Date: 2022-09-17 19:56:04
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-09-17 23:19:02
 * @Description: file contentv
 * @FilePath: /vue_test/src/components/School.vue
-->
<template>
  <div class="demo">
    <h2>学校的名称{{name}}</h2>
    <h2>学校的地址{{addr}}</h2>
  </div>
</template>

<script>
export default {
  name: 'School',
  data() {
    return {
      name: "尚硅谷",
      addr: "北京"
    }
  },
}
</script>

<style>
  .demo{
      background-color: gray;
    }
</style>