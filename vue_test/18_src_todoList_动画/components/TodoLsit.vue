<!--
 * @Author: wangyunfei
 * @Date: 2022-09-19 23:18:36
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-10-03 08:53:07
 * @Description: file content
 * @FilePath: /vue_test/src/components/TodoLsit.vue
-->
<template>
  <ul class="todo-main">
    <Item v-for="todoObj in todoList" :key="todoObj.id" :todo="todoObj"></Item>

  </ul>
</template>

<script>
import Item from './Item.vue';
  export default {
    name: "TodoList",
    components: { Item },
    props: ['todoList']
}
</script>

<style scoped>

/* main */
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0;
  }
  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>