<!--
 * @Author: wangyunfei
 * @Date: 2022-10-04 20:32:59
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-10-07 23:42:30
 * @Description: file content
 * @FilePath: /vue_test/src/components/Person.vue
-->
<template>
    <div>
      <h3>人员列表</h3>
      <h3 style="color: red">和为：{{$store.state.CountOptions.sum}}</h3>
      <h3 style="color: red">和为：{{firstPersonName}}</h3>
      <input type="text" placeholder="请输入姓名" v-model="name">
      性别：
      <select v-model="sex">
        <option value="男">男</option>
        <option value="女">女</option>
      </select>
      年龄：<input type="text" placeholder="请输入年龄" v-model.number="age">
      
      <button @click="addPerson">点击提交</button>
      <button @click="addPerson1">无条件增加</button>
      <button @click="addPersonServer">网络添加</button>
      <ul>
        <li v-for="person in persons" :key="person.id">姓名：{{person.name}} 年龄：{{person.age}} 性别：{{person.sex}}</li>
      </ul>
    </div>
</template>

<script>
  import { nanoid } from "nanoid";
  export default {
    name: 'Person',
    data() {
      return {
        name: '',
        age: 15,
        sex: '男'
      }
    },
    methods: {

      addPerson(){
        const person = {id:nanoid(), name: this.name, age: this.age, sex: this.sex}
        this.$store.dispatch('PersonOptions/addPerson', person)
      },
      addPerson1(){
        const person = {id:nanoid(), name: this.name, age: this.age, sex: this.sex}
        this.$store.commit('PersonOptions/ADD_PERSON', person)
      },
      addPersonServer(){
        this.$store.dispatch('PersonOptions/addPersonServer')
      }
  
    },
    computed: {
      persons(){
        return this.$store.state.PersonOptions.persons
      },
      firstPersonName(){
        return this.$store.getters['PersonOptions/firstPersonName']
      }
    },
    mounted() {
      console.log(this.$store);
    },

  }
</script>

<style>
  button {
    margin-left: 5px;
  }

  h3 {
    text-align: center;
    background-color: burlywood;
  }

</style>