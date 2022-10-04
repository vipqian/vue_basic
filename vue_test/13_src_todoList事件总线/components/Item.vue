<!--
 * @Author: wangyunfei
 * @Date: 2022-10-03 08:37:42
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-10-03 08:58:48
 * @Description: file content
 * @FilePath: /vue_test/src/components/Item.vue
-->
<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.status" @click="updateStatus(todo.id)">
      <!-- 下面代码也能实现功能，但是不推荐使用 -->
      <!-- <input type="checkbox" v-model="todo.status"> -->
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" @click="deleteTodo(todo.id)">删除</button>
  </li>
</template>

<script>
  export default {
    name: "Item",
    props: ['todo'],
    methods: {
      updateStatus(id){
        this.$bus.$emit('checkTodo', id)
      },
      deleteTodo(id){
        if(confirm('确定删除吗？')){
          this.$bus.$emit('delTodo', id)
        }
      }
    }

  }
</script>

<style scoped>
/* iterm */
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }
  li label {
    float: left;
    cursor: pointer;
  }
  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }
  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
  li:hover {
    background-color: #ddd;
  }
  li:hover button {
    display: block;
  }
  
</style>