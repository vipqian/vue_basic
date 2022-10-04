<!--
 * @Author: wangyunfei
 * @Date: 2022-09-17 19:56:04
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-10-02 09:00:46
 * @Description: file content
 * @FilePath: /vue_test/src/App.vue
-->
<template>
  <div class="app">
    <h2>{{msg}}</h2>
    <SchoolInfo/>
    <hr>
    <StudentInfo/>
  </div>
</template>

<script>
import StudentInfo from './components/Student'
import SchoolInfo from './components/School.vue';

export default {
  name: 'App',
  components: {
    StudentInfo,
    SchoolInfo
  },
  data() {
    return {
      msg: '你好啊！'
    }
  }
}
</script>

<style>
  .app{
    background-color: bisque;
    padding: 5px;
  }
</style>
