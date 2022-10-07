<!--
 * @Author: wangyunfei
 * @Date: 2022-09-17 19:56:04
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-10-07 10:13:41
 * @Description: file content
 * @FilePath: /vue_test/src/App.vue
-->
<template>
  <div class="container" >
    <Count></Count>
    <Person></Person>
  </div>
</template>

<script>


import Count from './components/Count.vue';
import Person from './components/Person.vue';

export default {
    name: "App",
    components: { Count, Person
    },
    
}
</script>

<style scoped>
  .container, .foot  {
    display: flex;
    justify-content: space-around;
  }

  img {
    width: 100%;
  }
  video {
    width: 100%;
  }
  h4 {
    text-align: center;
  }
  
</style>
