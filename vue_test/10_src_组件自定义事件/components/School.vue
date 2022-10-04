<!--
 * @Author: wangyunfei
 * @Date: 2022-09-17 19:56:04
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-10-02 08:59:53
 * @Description: file contentv
 * @FilePath: /vue_test/10_src_组件自定义事件/components/School.vue
-->


<template>
  <div class="school">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{addr}}</h2>
    <button @click.once="sendSchoolName">将学习的名字发送给app</button>
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
  methods: {
    sendSchoolName(){
      this.getSchooName(this.name)
    }
  }
  
}
</script>
<style scoped>
  .school{
    background-color: aquamarine;
    padding: 5px;
  }
</style>
