<!--
 * @Author: wangyunfei
 * @Date: 2022-09-18 10:40:08
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-09-30 23:01:27
 * @Description: file content
 * @FilePath: /vue_test/src/components/MyHeader.vue
-->
<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名字，按回车确认" v-model="tile" @keyup.enter="add">
  </div>
</template>

<script>
  import { nanoid } from "nanoid";
  export default {
    name: "MyHeader",
    props: ['addTodo'],
    data() {
      return {
        tile: ''
      }
    },
    methods: {
      add(){
        // 校验数据
        if(!this.tile.trim()) return alert('输入不能为空')
        // 将用户输入包装成一个对象
        const todoObj = {
          id: nanoid(),
          title: this.tile,
          status: false
        }
        // 通知app组件添加一个todo
        this.$emit('addTodo', todoObj)
        // 清空输入
        this.tile = ''
      }
    },
  }
</script>

<style>
/* header */
  .todo-header input{
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }
  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgb(0, 0, 0, 0.075) 0 0 8px rgb(82, 168, 236, 0.6);

  }
</style>