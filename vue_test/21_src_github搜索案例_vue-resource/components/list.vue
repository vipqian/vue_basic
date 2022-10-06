<!--
 * @Author: wangyunfei
 * @Date: 2022-10-04 15:30:42
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-10-04 20:04:48
 * @Description: file content
 * @FilePath: /vue_test/src/components/list.vue
-->
<template>
  <div class="row">
    <!-- 显示用户信息 -->
    <div 
    class="card"
    v-for="user in info.users" :key="user.id"
    >
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px"/>
      </a>
      <p class="card-text">{{user.login}}</p>
    </div>
    <!-- 显示欢迎信息 -->
    <h3 v-show="info.isFirst">welcome ....</h3>
    <!-- 显示加载信息 -->
    <h3 v-show="info.isLoading">loading ....</h3>
    <!-- 显示错误信息 -->
    <h3 v-show="info.errMsg">{{info.errMsg}}</h3>
  </div>
</template>

<script>
  export default {
    name: 'List',
    data() {
      return {
        info:{
          isFirst: true,
          isLoading: false,
          errMsg: '',
          users: []
        }
        }
    },
    methods: {
      getInfo(userObj){
        // 对象取并集 有更新以后边的为主
        this.info = {...this.info ,...userObj}
      }
    },
    mounted() {
      this.$bus.$on('getInfo', this.getInfo)
    },
    beforeDestroy() {
      this.$bus.$off('getInfo')
    }
  }
</script>

<style>
.album {
    min-height: 50rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
    background-color: #7f7f7f;
  }
.card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }
  
  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }
</style>