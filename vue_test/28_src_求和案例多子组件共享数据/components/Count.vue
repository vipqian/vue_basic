<!--
 * @Author: wangyunfei
 * @Date: 2022-10-04 20:32:59
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-10-07 21:03:58
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
      /*
      程序员自己写的
      increment(){
        this.$store.commit('INCREMENT', this.n)
      },
      decrement(){
        this.$store.commit('DECREMENT', this.n)
      },
      */

     //  借助mapMutations方法生成对应的方法，里边包含commit去练习mutations，方法中的参数需要再使用时传递 对象方法
     ...mapMutations({increment: 'INCREMENT', decrement: 'DECREMENT'}),
     
     //  借助mapMutations方法生成对应的方法，里边包含commit去练习mutations，方法中的参数需要再使用时传递 数组方法
    //  ...mapMutations(['DECREMENT','INCREMENT']),



     /*-------------------------------------*/

     /*
      incrementOdd(){
        this.$store.dispatch('incrementOdd', this.n)
      },
      incrementWait(){
        this.$store.dispatch('incrementWait', this.n)
      },
      */

      //  借助mapActions方法生成对应的方法，里边包含dispatch去练习actions，方法中的参数需要再使用时传递 对象方法
      // ...mapActions({incrementOdd:'incrementOdd', incrementWait: 'incrementWait'}),

      //  借助mapActions方法生成对应的方法，里边包含dispatch去练习actions，方法中的参数需要再使用时传递 数组方法
      ...mapActions(['incrementOdd', 'incrementWait'])



      
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
      ...mapState(['sum', 'school', 'subject', 'persons']),


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