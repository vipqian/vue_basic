<!--
 * @Author: wangyunfei
 * @Date: 2022-10-04 20:32:59
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-10-06 21:12:23
 * @Description: file content
 * @FilePath: /vue_test/src/components/Count.vue
-->
<template>
    <div>
      <h3>和是{{sum}}</h3>
      <div>
        <select v-model.number="n">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">奇数时加</button>
        <button @click="incrementWait">等待一会再加</button>
      </div>
    </div>
  
</template>

<script>
  export default {
    name: 'Count',
    data() {
      return {
        sum: 0,
        n: 1
      }
    },
    methods: {
      increment(){
        this.sum += this.n
      },
      decrement(){
        this.sum -= this.n
      },
      incrementOdd(){
        if(this.sum % 2){
          this.sum += this.n
        }
      },
      incrementWait(){
        setTimeout(() => {
          this.sum += this.n
        }, 500);
      }
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