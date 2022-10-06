<!--
 * @Author: wangyunfei
 * @Date: 2022-09-17 19:56:04
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-10-04 14:37:54
 * @Description: file content
 * @FilePath: /vue_test/src/App.vue
-->
<template>
  <div class="todo-container">
    <button @click="getStudets">获取学生信息</button> 
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'App',
  methods: {
    getStudets(){
      axios.get('http://localhost:8080/students').then(
        response => {
          console.log('请求成功了', response.data.students);
        },
        error => {
          console.log('请求失败了', error.message);
        },
      )
    }
  },
}
</script>

<style scoped>

</style>
