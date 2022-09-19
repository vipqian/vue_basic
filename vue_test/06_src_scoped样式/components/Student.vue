<!--
 * @Author: wangyunfei
 * @Date: 2022-09-17 19:56:04
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-09-19 22:58:24
 * @Description: file contentv
 * @FilePath: /vue_test/src/components/Student.vue
-->
<template>
  <div class="demo">
    <h2>学生的姓名：{{name}}</h2>
    <h2 class="at">学生的年龄：{{age}}</h2>
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
  }
  
}
</script>

<!-- <style scoped>
.demo{
  background-color: blue;
}
</style> -->

<style lang="less" scoped>
.demo{
  background-color: palegoldenrod;
  .at{
    font-size: 20px;
  }
}
</style>