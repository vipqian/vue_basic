<template>
  <div>
    <h3 v-text="msg" ref="title"></h3>
    <button @click="showDom" ref="btn">点我显示DOM</button>
    <School ref="sch"/>
  </div>
</template>

<script>
import School from './components/School'

export default {
  name: 'App',
  components: {
    School
  },
  data() {
    return {
      msg: "欢迎学习vue"
    }
  },
  methods: {
    showDom(){
      console.log(this.$refs.title) //真是DOM元素
      console.log(this.$refs.btn) //真是DOM元素
      console.log(this.$refs.sch) //组件的实例对象，也就是常说的（vc）
    }
  },
  
}
</script>

<style>
  
</style>
