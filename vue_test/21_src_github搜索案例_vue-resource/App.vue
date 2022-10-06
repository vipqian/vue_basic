<!--
 * @Author: wangyunfei
 * @Date: 2022-09-17 19:56:04
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-10-04 16:49:34
 * @Description: file content
 * @FilePath: /vue_test/src/App.vue
-->
<template>
  <div class="container">
    <Search/>
    <List/>
  </div>
</template>

<script>


import List from './components/list.vue';
import Search from './components/search.vue';

export default {
    name: "App",
    components: { Search, List }
}
</script>

<style scoped>
  

  
</style>
