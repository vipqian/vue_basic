<!--
 * @Author: wangyunfei
 * @Date: 2022-10-03 20:16:13
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-10-03 20:46:33
 * @Description: file content
 * @FilePath: /vue_test/src/components/demo.vue
-->
<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- 如果带有name那么css中需要把v变成name 如果要让第一次加载就显示动画，添加:appear的值为真 -->
    <!-- <transition :appear="true"> -->
    <transition name="hello" appear>
      <h3 v-show="isShow">你好啊</h3>
    </transition>
  </div>
</template>

<script>
  export default {
      name: 'Demo',
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
  .hello-enter-active {
    animation: atguigu 1s linear;
  }

  .hello-leave-active{
    animation: atguigu 1s linear reverse;
  }
  @keyframes atguigu {
    from{
      transform: translateX(-100%);
    }
    to{
      transform: translateX(0px);
    }
  }
</style>