<!--
 * @Author: wangyunfei
 * @Date: 2022-09-17 19:56:04
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-10-02 17:04:09
 * @Description: file contentv
 * @FilePath: /vue_test/src/components/School.vue
-->


<template>
  <div class="school">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{addr}}</h2>
  </div>
</template>

<script>
export default {
  name: 'SchoolInfo',
  props: ['getSchooName'],
  data() {
    return {
      name: '尚硅谷',
      addr: '北京'
    }
  },
  mounted() {
    console.log('school');
    this.$bus.$on('demo', (data)=>{
      console.log('我是school组件，我接收到了数据', data);
    })
  },
  beforeDestroy() {
    this.$bus.$off('demo')
  },
  
}
</script>
<style scoped>
  .school{
    background-color: aquamarine;
    padding: 5px;
  }
</style>
