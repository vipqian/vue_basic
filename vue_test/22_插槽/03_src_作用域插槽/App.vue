<!--
 * @Author: wangyunfei
 * @Date: 2022-09-17 19:56:04
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-10-05 09:31:42
 * @Description: file content
 * @FilePath: /vue_test/src/App.vue
-->
<template>
  <div class="container" >
    <!-- <div v-for="gategory in gategoryList" :key="gategory.title">
      <Category :title='gategory.title' :dataList='gategory.items'/>
    </div> -->
    <Category title="游戏">
      <template scope="data">
        <ul>
          <li v-for="(item, index) in data.games" :key="index">{{item}}</li>
        </ul>
      </template>
    </Category>

    <Category title="游戏">
      <template slot-scope="{games}">
        <ol>
          <li v-for="(item, index) in games" :key="index">{{item}}</li>
        </ol>
      </template>
    </Category>

    <Category title="游戏">
      <!-- 结构赋值 -->
      <template scope="{games}">
        <h4 v-for="(item, index) in games" :key="index">{{item}}</h4>
      </template>
    </Category>
    
  </div>
</template>

<script>


import Category from './components/Category.vue';

export default {
    name: "App",
    components: { Category },
    
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
