<!--
 * @Author: wangyunfei
 * @Date: 2022-09-17 19:56:04
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-09-30 21:36:03
 * @Description: file content
 * @FilePath: /vue_test/src/App.vue
-->
<template>
  <div class="app">
    <h2>你好啊！{{msg}}</h2>
    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <SchoolInfo :getSchooName='getSchooName'/>
    <hr>
    <!-- 通过给子组件绑定事件实现：子给父传递数据 第一种写法：使用v-on或者@-->
    <StudentInfo v-on:atguigu="getStudentName"  @demo="m1"/>

    <!-- 通过给子组件绑定事件实现：子给父传递数据 第二种写法：使用ref-->
    <!-- <StudentInfo ref="student"/> -->
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
      msg: ''
    }
  },
  methods: {
    getSchooName(name){
      console.log('APP收到了学校的名字 ', name);
    },
    // 可以传递多个参数
    getStudentName(name, ...params){
      console.log('APP收到了学生的名字 ', name, params);
    },
    m1(){
      console.log('demo被调用了');
    }
  },
  mounted() {
    // setTimeout(() => {
    //   this.$refs.student.$on('atguigu',this.getStudentName)
    // }, 3000);
    // this.$refs.student.$on('atguigu',this.getStudentName) //绑定自定义事件
    // this.$refs.student.$once('atguigu',this.getStudentName) //绑定自定义事件（一次性）
  },
}
</script>

<style>
  .app{
    background-color: bisque;
    padding: 5px;
  }
</style>
