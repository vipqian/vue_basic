<!--
 * @Author: wangyunfei
 * @Date: 2022-10-08 14:38:18
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-10-09 22:42:44
 * @Description: file content
 * @FilePath: /vue_test/src/pages/News.vue
-->
<template>
    <ul>
        <li :style="{opacity}">欢迎来到新闻</li>
        <li>new1 <input type="text"></li>
        <li>new2 <input type="text"></li>
        <li>new3 <input type="text"></li>
    </ul>
  </template>
  
  <script>
      export default {
          name: 'News',
          data() {
            return {
                opacity:1
            }
          },
          activated() {
            console.log('news组件激活了')
            this.timer = setInterval(() => {
                console.log('@');
                this.opacity -= 0.1
                if(this.opacity <= 0) this.opacity = 1
            }, 100);
          },
          deactivated() {
            console.log('news组件失活了')
            clearInterval(this.timer)
          },
      }
  </script>
  
  <style>
  
  </style>