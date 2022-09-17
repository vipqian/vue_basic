<!--
 * @Author: wangyunfei
 * @Date: 2022-09-17 19:27:53
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-09-17 19:43:59
 * @Description: file content
 * @FilePath: /vue_basic/19单文件组件/app.vue
-->
<template>
    <div>
        <School></School>
        <Student></Student>
    </div>
</template>

<script>
    import School from "./1School.vue"
    import Student from "./Student.vue";

    export default {
        name: "App",
        components: {
            School,
            Student
        }
    }
</script>

<style>

</style>