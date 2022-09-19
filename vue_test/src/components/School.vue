<!--
 * @Author: wangyunfei
 * @Date: 2022-09-17 19:56:04
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-09-19 22:13:44
 * @Description: file contentv
 * @FilePath: /vue_test/src/components/School.vue
-->


<template>
  <div class="demo">
    <h2>学校名称：{{name | mySlice}}</h2>
    <h2>学校地址：{{addr}}</h2>
    <button @click="test">点我测试hello方法</button>
  </div>
</template>

<script>
export default {
  name: 'SchoolInfo',
  data() {
    return {
      name: '尚硅谷123124123',
      addr: '北京'
    }
  },
  methods: {
    test(){
      this.hello()
    }
  },
}
</script>
