<!--
 * @Author: wangyunfei
 * @Date: 2022-10-04 20:32:59
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-10-05 08:53:05
 * @Description: file content
 * @FilePath: /vue_test/22_插槽/01_src_默认插槽/components/Category.vue
-->
<template>
    <div class="category">
        <h3>{{title}}分类</h3>
        <!-- 定义一个插槽，等待使用者进行填充  如果不往插槽中放元素，则显示默认值-->
        <slot>默认值</slot>
    </div>
  
</template>

<script>
  export default {
    name: 'Category',
    props: ['title', 'dataList']

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