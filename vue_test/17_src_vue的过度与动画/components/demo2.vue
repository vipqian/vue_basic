<!--
 * @Author: wangyunfei
 * @Date: 2022-10-03 20:16:13
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-10-03 21:26:30
 * @Description: file content
 * @FilePath: /vue_test/src/components/demo2.vue
-->
<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- 如果带有name那么css中需要把v变成name 如果要让第一次加载就显示动画，添加:appear的值为真 -->
    <!-- <transition :appear="true"> -->
    <transition-group name="hello" appear>
      <h3 v-show="isShow" key="1">你好啊</h3>
      <h3 v-show="!isShow" key="2">尚硅谷</h3>
    </transition-group>
  </div>
</template>

<script>
  export default {
      name: 'Demo2',
      data() {
        return {
          isShow: true
        }
      }, 
  }
</script>

<style>
  h3 {
      background-color: aquamarine;
      
  }

  /* 开始的起点，结束的终点 */
  .hello-enter, .hello-leave-to{
    transform: translateX(-100%);
  }
  .hello-enter-avtive, .hello-leave-active {
    transition: 0.5s linear;
  }
  /* 开始的终点，结束的起点 */
  .hello-enter-to, .hello-leave {
    transform: translateX(0);
  }

</style>