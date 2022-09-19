<!--
 * @Author: wangyunfei
 * @Date: 2022-09-17 19:56:04
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-09-19 22:08:13
 * @Description: file content
 * @FilePath: /vue_test/src/App.vue
-->
<template>
  <div>
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
}
</script>

<style>
  
</style>
