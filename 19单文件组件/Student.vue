<!--
 * @Author: wangyunfei
 * @Date: 2022-09-17 19:07:21
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-09-17 19:30:32
 * @Description: file content
 * @FilePath: /vue_basic/19单文件组件/Student.vue
-->

<!-- 组件的结构 -->
<template>
    <dev>
        <h3>学生姓名:{{name}}</h3>
        <h3>学生年龄:{{age}}</h3>
    </dev>
</template>

<!-- 组件交互相关的代码 -->
<script>
    export default {
        name: 'School',
        data(){
            return {
                name: "张三",
                age: 18 
            }
        },
    }
</script>