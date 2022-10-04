<!--
 * @Author: wangyunfei
 * @Date: 2022-10-03 08:37:42
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-10-03 20:03:52
 * @Description: file content
 * @FilePath: /vue_test/src/components/Item.vue
-->
<template>
  <li>
    <label>
      <input v-if="!todo.isEdit" type="checkbox" :checked="todo.status" @click="updateStatus(todo.id)">
      <span v-if="!todo.isEdit" >{{todo.title}}</span>
      <input type="text" 
      v-if="todo.isEdit" 
      :value="todo.title" 
      @blur="updateData(todo, $event)"
      ref="inputTitle"
      >
    </label>
    <button  class="btn btn-danger" @click="deleteTodo(todo.id)">删除</button>
    <button  
    v-if="!todo.isEdit" 
    class="btn btn-danger" 
    @click="editTodo(todo, $event)"
    >编辑</button>
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
      },
      editTodo(todo, e){
        // 判断是否存在isEdit
        if(todo.hasOwnProperty('isEdit')){
          todo.isEdit = true
        }
        else{
          console.log(1);
          this.$set(todo, 'isEdit', true)
        }
        this.$nextTick(function(){
          // 下次解析时会触发  获取输入框焦点
          this.$refs.inputTitle.focus()
        })
        
        // 
      },
      updateData(todo, e){
        todo.isEdit = false
        if(!e.target.value.trim()){
          return alert('输入不能为空')
        }
        this.$bus.$emit('updateTodo', todo.id, e.target.value)
      }
    },

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