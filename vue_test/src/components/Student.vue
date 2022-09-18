<!--
 * @Author: wangyunfei
 * @Date: 2022-09-17 19:56:04
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-09-18 10:21:18
 * @Description: file contentv
 * @FilePath: /vue_test/src/components/Student.vue
-->
<template>
  <div class="demo">
    <h1>{{msg}}</h1>
    <h2>学生的姓名：{{name}}</h2>
    <h2>学生的性别：{{sex}}</h2>
    <h2>学生的年龄：{{myAge + 1}}</h2>
    <button @click="updateAge">修改年龄</button>
  </div>
</template>

<script>

export default {
  name: 'Student',
  data() {
    return {
      msg: '我是一个学习vue的学生',
      myAge: this.age
    }
  },
  methods: {
    updateAge(){
      this.myAge++
    }
  },
  // 简单声明函数接收
  // props: ['name', 'age', 'sex']

  // 接收的同时对数据类型进行验证
  /*
  props:{
    name: String,
    age: Number,
    sex: String
  }
  */
   // 接收的同时对数据：类型进行验证+默认值的指定+必要性的限制
  props:{
    name: {
      type: String, //指令类型值
      required: true  //是否为必填项
    },
    age: {
      type: Number,  //指令类型值
      default: 80    //默认值
    },
    sex: {
      tyep: String,
      required: false
    }
  }


}
</script>
