<!--
 * @Author: wangyunfei
 * @Date: 2022-09-17 19:56:04
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-10-02 16:59:49
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
      this.$bus.$emit('demo', this.name)
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