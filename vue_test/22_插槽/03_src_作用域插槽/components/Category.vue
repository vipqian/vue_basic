<!--
 * @Author: wangyunfei
 * @Date: 2022-10-04 20:32:59
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-10-05 10:02:24
 * @Description: file content
 * @FilePath: /vue_test/src/components/Category.vue
-->
<template>
    <div class="category">
        <h3>{{title}}分类</h3>
        <!-- 定义一个插槽，等待使用者进行填充 -->
        <slot :games="games"></slot>
    </div>
  
</template>

<script>
  export default {
    name: 'Category',
    props: ['title'],
    data() {
      return {
        games: ['忍者3', '红色警戒', '穿越火线', '超级玛丽'],
      }
    },

  }
</script>

<style>
  .category{
    background-color: skyblue;
    height: 300px;
    width: 200px;
  }

  h3 {
    text-align: center;
    background-color: burlywood;
  }

</style>