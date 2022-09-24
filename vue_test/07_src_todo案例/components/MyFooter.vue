<!--
 * @Author: wangyunfei
 * @Date: 2022-09-19 23:17:36
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-09-24 09:11:52
 * @Description: file content
 * @FilePath: /vue_test/src/components/MyFooter.vue
-->
<template>
  <div class="todo-footer" v-if="total">
    <label>
      <!-- <input type="checkbox" :checked="isAll" @click="checkAll"> -->
      <input type="checkbox" v-model="isAll">
    </label>
    <span>
      <span>已完成{{todoTotal}}</span>/ 全部 {{total}}
    </span>
    <button class="btn btn-danger" @click="delDoneTodos">清除已完成任务</button>
  </div>
</template>

<script>
  export default {
    name: "MyFooter",
    props:['todoList', 'delDoneTodos', 'checkAllTodo'],
    computed: {
      total(){
        return  this.todoList.length
      },
      todoTotal(){
        // const temp = this.todoList.filter(todo => todo.status == true)
        // console.log(temp)
        // return temp.length
        return this.todoList.reduce((pre, currentValue) => { 
          return pre + (currentValue.status ? 1:0)
         }, 0)

      },
      // isAll(){
      //   console.log(this.todoTotal == this.total);
      //   return this.todoTotal === this.total && this.todoTotal > 0
      // }
      isAll:{
        get(){
          return this.todoTotal === this.total && this.todoTotal > 0
        },
        set(value){
          this.checkAllTodo(value)
        }
      }
    },
    // methods: {
    //   checkAll(e){
    //     this.checkAllTodo(e.target.checked)
    //   }
    // },
  }
</script>

<style scoped>
/* footer  */
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }
  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }
  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>