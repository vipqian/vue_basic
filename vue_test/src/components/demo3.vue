<!--
 * @Author: wangyunfei
 * @Date: 2022-10-03 20:16:13
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-10-04 09:04:47
 * @Description: 使用第三方库
 * @FilePath: /vue_test/src/components/demo3.vue
-->
<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- 如果带有name那么css中需要把v变成name 如果要让第一次加载就显示动画，添加:appear的值为真 -->
    <!-- <transition :appear="true"> -->
    <transition-group 
    appear 
    name="animate__animated animate__bounce" 
    enter-active-class="animate__rubberBand"
    leave-active-class="animate__backOutUp"
    >
      <h3 v-show="isShow" key="1">你好啊</h3>
      <h3 v-show="!isShow" key="2">尚硅谷</h3>
    </transition-group>
  </div>
</template>

<script>
  import 'animate.css'
  export default {
      name: 'Demo3',
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

</style>