<!--
 * @Author: wangyunfei
 * @Date: 2022-09-17 19:56:04
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-09-18 10:59:02
 * @Description: file contentv
 * @FilePath: /vue_test/src/components/Student.vue
-->
<template>
  <div class="demo">
    <h2 @click.once="showName">学生的姓名：{{name}}</h2>
    <h2>学生的年龄：{{age}}</h2>
  </div>
</template>

<script>
import { hunhe } from "../mixin";

export default {
  name: 'Student',
  data() {
    return {
      name: 'Tom',
      age: 18
    }
  },
  mixins: [
    hunhe
  ]
  
}
</script>
