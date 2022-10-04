<!--
 * @Author: wangyunfei
 * @Date: 2022-09-17 19:56:04
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-10-03 09:30:47
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
  import pubsub from 'pubsub-js'
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
    this.pubId = pubsub.subscribe('hello', (msgName, data)=>{
      console.log('有人发布了hello消息，hello的信息被回调了', msgName, data);
    })
  },
  beforeDestroy() {
    pubsub.unsubscribe(this.pubId)
  },
  
}
</script>
<style scoped>
  .school{
    background-color: aquamarine;
    padding: 5px;
  }
</style>
