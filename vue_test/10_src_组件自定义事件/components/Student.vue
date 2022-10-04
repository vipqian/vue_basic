<!--
 * @Author: wangyunfei
 * @Date: 2022-09-17 19:56:04
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-09-30 21:52:34
 * @Description: file contentv
 * @FilePath: /vue_test/src/components/Student.vue
-->
<template>
  <div class="student">
    <h2>学生的姓名：{{name}}</h2>
    <h2>学生的年龄：{{age}}</h2>
    <h3>求和的值是{{numebr}}</h3>
    <button @click="add">点我n+1</button>
    <button @click="sendStudentName">将学习的名字发送给app</button>
    <button @click="unbind">解绑自定义事件</button>
    <button @click="death">点我销毁Student实例对象</button>
  </div>
</template>

<script>
export default {
  name: 'StudentInfo',
  data() {
    return {
      name: 'Tom',
      age: 18,
      numebr: 0
    }
  },
  methods: {
    add(){
      console.log('add被调用了');
      this.numebr++
    },
    sendStudentName(){
      this.$emit('atguigu', this.name, 666, 777,8888)
      this.$emit('demo', this.name, 666, 777,8888)
    },
    unbind(){
      // this.$off('atguigu') //解绑单个事件
      // this.$off(['atguigu', 'demo']) //解绑多个事件
      this.$off() //解绑所有的事件
    },
    death(){
      this.$destroy()  //销毁Student实例对象,销毁后所有Student自定义的实例对象都不奏效了
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