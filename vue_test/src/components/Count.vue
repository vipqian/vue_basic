<!--
 * @Author: wangyunfei
 * @Date: 2022-10-04 20:32:59
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-10-06 23:30:41
 * @Description: file content
 * @FilePath: /vue_test/src/components/Count.vue
-->
<template>
    <div>
      <h3>和是{{$store.state.sum}}</h3>
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
        n: 1
      }
    },
    methods: {
      increment(){
        this.$store.commit('INCREMENT', this.n)
      },
      decrement(){
        this.$store.commit('DECREMENT', this.n)
      },
      incrementOdd(){
        this.$store.dispatch('incrementOdd', this.n)
      },
      incrementWait(){
        this.$store.dispatch('incrementWait', this.n)
      },
    }
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