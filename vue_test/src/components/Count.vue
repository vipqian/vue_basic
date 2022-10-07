<!--
 * @Author: wangyunfei
 * @Date: 2022-10-04 20:32:59
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-10-07 22:42:42
 * @Description: file content
 * @FilePath: /vue_test/src/components/Count.vue
-->
<template>
    <div>
      <h3>和是{{sum}}</h3>
      <h3>和放大10倍的结果是{{bigSum}}</h3>
      <h3>我在{{school}},学习{{subject}}</h3>
      <h3 style="color: red">学生的总人数是{{persons.length}}</h3>
      <div>
        <select v-model.number="n">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <!-- <button @click="INCREMENT(n)">+</button>
        <button @click="DECREMENT(n)">-</button> -->
        <button @click="incrementOdd(n)">奇数时加</button>
        <button @click="incrementWait(n)">等待一会再加</button>
      </div>
    </div>
  
</template>

<script>
  import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
  export default {
    name: 'Count',
    data() {
      return {
        n: 1
      }
    },
    methods: {
      ...mapMutations('CountOptions', {increment: 'INCREMENT', decrement: 'DECREMENT'}),
      ...mapActions('CountOptions', ['incrementOdd', 'incrementWait'])
    },
    computed: {
      ...mapState('CountOptions', ['sum', 'school', 'subject']),
      ...mapState('PersonOptions', ['persons']),
      ...mapGetters('CountOptions', ['bigSum'])
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