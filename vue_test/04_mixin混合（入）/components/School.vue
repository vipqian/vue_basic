<!--
 * @Author: wangyunfei
 * @Date: 2022-09-17 19:56:04
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-09-18 11:00:17
 * @Description: file contentv
 * @FilePath: /vue_test/src/components/School.vue
-->
<template>
  <div class="demo">
    <h2 @click="showName">学校名称：{{name}}</h2>
    <h2>学校地址：{{addr}}</h2>
  </div>
</template>

<script>
export default {
  name: 'School',
  data() {
    return {
      name: '尚硅谷',
      addr: '北京'
    }
  }
}
</script>
