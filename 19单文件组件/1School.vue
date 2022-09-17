<!--
 * @Author: wangyunfei
 * @Date: 2022-09-17 19:07:21
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-09-17 19:24:41
 * @Description: file content
 * @FilePath: /vue_basic/19单文件组件/1School.vue
-->

<!-- 组件的结构 -->
<template>
    <dev class="demo">
        <h3>学校的姓名:{{SchoolName}}</h3>
        <h3>学校的地址:{{SchoolAddr}}</h3>
        <button @click="showName">点我提示学习的名称</button>
    </dev>
</template>

<!-- 组件交互相关的代码 -->
<script>
    export default {
        name: 'School',
        data(){
            return {
                SchoolName: "尚硅谷",
                SchoolAddr: "北京昌平"  
            }
        },
        methods: {
            showName(){
                alert(this.SchoolName)
            }
        },
    }
</script>

<!-- 样式相关的代码 -->
<style lang="sss">
    .deme{
        background-color: blueviolet;
    }
</style>