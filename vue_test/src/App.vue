<!--
 * @Author: wangyunfei
 * @Date: 2022-09-17 19:56:04
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-09-22 21:24:27
 * @Description: file content
 * @FilePath: /vue_test/src/App.vue
-->
<template>
  <div class="todo-container">
        <div class="todo-wrap">
          <MyHeader :addTodo="addTodo"></MyHeader>
          <TodoLsit :todoList="todoList" :checkTodo="checkTodo" :delTodo="delTodo"></TodoLsit>
          <MyFooter
            :todoList="todoList"
          />
        </div>
      </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue';
import TodoLsit from './components/TodoLsit.vue';
import MyFooter from './components/MyFooter.vue';



export default {
  name: 'App',
  components: {
    MyHeader,
    TodoLsit,
    MyFooter
  },
  data() {
    return {
      todoList: [
        {id: '1',
        title: '学习',
        status: true  
      }
        
      ]
    }
  },
  methods: {
    addTodo(todoObj){
      this.todoList.unshift(todoObj)
    },

    checkTodo(id){
      this.todoList.forEach((todo)=>{
        if(todo.id === id){
          todo.status = !todo.status
        }
      })
    },
    delTodo(id){
      this.todoList = this.todoList.filter((todo)=>{
        return todo.id != id
      })
    }
  },
}
</script>

<style scoped>
  body {
    background: #fff;
  }
  .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px rgb(255, 255, 255, 0.2) 0 1px 2px rgb(0, 0, 0, 0.5);
    border-radius: 4px;
  }
  .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: #bd362f;
  }
  .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
  }
  .btn:focus {
    outline: none;
  }
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
