<!--
 * @Author: wangyunfei
 * @Date: 2022-09-17 19:56:04
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-10-05 09:07:57
 * @Description: file content
 * @FilePath: /vue_test/src/App.vue
-->
<template>
  <div class="container" >
    <!-- <div v-for="gategory in gategoryList" :key="gategory.title">
      <Category :title='gategory.title' :dataList='gategory.items'/>
    </div> -->
    <Category title="美食" :dataList="foods">
      <img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
      <a slot="footer" href="#">更多美食</a>
    </Category>
    <Category title="游戏">
      <ul slot="center">
        <li v-for="(item, index) in games" :key="index">{{item}}</li>
      </ul>
      <div class="foot" slot="footer">
        <a  href="#">单机游戏</a>
        <a  href="#">网络游戏</a>
      </div>
    </Category>
    <Category title="电影">
      <video  slot="center"  controls src="" ></video>
      <template v-slot:footer>
        <div class="foot" >
          <a  href="#">经典</a>
          <a  href="#">热门</a>
          <a  href="#">推荐</a>
        </div>
        <h4>欢迎观看</h4>
      </template>
    </Category>
  </div>
</template>

<script>


import Category from './components/Category.vue';

export default {
    name: "App",
    components: { Category },
    data() {
      return {
        foods: ['火锅', '小龙虾', '烧烤', '米线'],
        games: ['忍者3', '红色警戒', '穿越火线', '超级玛丽'],
        films: ['《教父》', '《我是谁》', '《底线》', '《烦恼成长》'],
        gategoryList: [
          {title: '美食', items: ['火锅', '小龙虾', '烧烤', '米线'],},
          {title: '游戏', items: ['忍者3', '红色警戒', '穿越火线', '超级玛丽']},
          {title: '电影', items: ['《教父》', '《我是谁》', '《底线》', '《烦恼成长》']},
        ] 
      }
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
