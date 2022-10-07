<!--
 * @Author: wangyunfei
 * @Date: 2022-10-04 20:32:59
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-10-07 00:43:30
 * @Description: file content
 * @FilePath: /vue_test/src/components/Count.vue
-->
<template>
    <div>
      <h3>和是{{sum}}</h3>
      <h3>和放大10倍的结果是{{bigSum}}</h3>
      <h3>我在{{school}},学习{{subject}}</h3>
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
  import { mapState, mapGetters } from "vuex";
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
    },
    computed: {
      // 程序员自己写计算属性
      /* 
      sum(){
        return this.$store.state.sum
      },
      school(){
        return this.$store.state.school
      },
      subject(){
        return this.$store.state.subject
      }
      */
      //  mapStore:借助mapState计算属性方法，从state中读取数据：对象写法
      // {A ...{B}}将B对象中的每个值写入到A对象中
      // ...mapState({sum: 'sum', school: 'school', subject: 'subject' }),
      //  mapStore:借助mapState计算属性方法，从state中读取数据：数组写法列表中的内容为state种存在的key
      ...mapState(['sum', 'school', 'subject']),


      //  mapGetters:借助mapGetters计算属性方法，从getters中读取数据：对象写法
      // ...mapGetters({bigSum: 'bigSum'}),

      //  mapGetters:借助mapGetters计算属性方法，从getters中读取数据：数组写法
      ...mapGetters(['bigSum'])
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