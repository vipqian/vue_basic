<!--
 * @Author: wangyunfei
 * @Date: 2022-09-17 19:56:04
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-10-03 09:27:37
 * @Description: file contentv
 * @FilePath: /vue_test/src/components/Student.vue
-->
<template>
  <div class="student">
    <h2>学生的姓名：{{name}}</h2>
    <h2>学生的年龄：{{age}}</h2>
    <button @click="sendStudentName">将学生的姓名传递给school组件</button>

  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: 'StudentInfo',
  data() {
    return {
      name: 'Tom',
      age: 18
    }
  },
  
  methods: {
    sendStudentName(){
      pubsub.publish('hello', this.name)
    }
  },
  
}
</script>

<!-- <style scoped>
.demo{
  background-color: blue;
}
</style> -->

<style lang="less" scoped>
.student{
  background-color: palegoldenrod;
  padding: 5px;
  margin-top: 30px;
}
</style>