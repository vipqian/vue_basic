<!--
 * @Author: wangyunfei
 * @Date: 2022-10-07 10:07:28
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-10-09 22:19:33
 * @Description: file content
 * @FilePath: /vue_test/src/pages/Home.vue
-->
<template>
  <div>
    <h2>我是Home内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link class="list-group-item"  to="/home/msg" active-class="active">Message</router-link>
        </li>
        <li>
          <router-link  class="list-group-item" to="/home/news" active-class="active">News</router-link>
        </li>
      </ul>
      <keep-alive include="News">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Home",
    mounted() {
      console.log('Home组件被挂载了');
    },
    beforeDestroy(){
      console.log('Home组件被销毁了');
    }

  }
</script>

<style>

</style>