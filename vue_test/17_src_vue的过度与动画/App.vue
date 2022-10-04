<!--
 * @Author: wangyunfei
 * @Date: 2022-09-17 19:56:04
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-10-04 08:58:37
 * @Description: file content
 * @FilePath: /vue_test/src/App.vue
-->
<template>
  <div>
    <Demo/>
    <Demo2/>
    <Demo3/>
  </div>
</template>

<script>
  import Demo from './components/demo.vue';
import Demo2 from './components/demo2.vue';
import Demo3 from './components/demo3.vue';

export default {
  name: 'App',
  components: {
    Demo,
    Demo2,
    Demo3,
},
}
</script>