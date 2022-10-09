<!--
 * @Author: wangyunfei
 * @Date: 2022-10-08 14:38:18
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-10-08 15:45:17
 * @Description: file content
 * @FilePath: /vue_test/src/pages/Message.vue
-->
<template>
  <div>
    <ul>
        <li v-for="msg in messageList" :key="msg.id">
            <!-- 跳转路由并携带query参数，to的字符串写法 -->
            <!-- <router-link :to="`/home/msg/detail?id=${msg.id}&title=${msg.title}`">{{msg.title}}</router-link>&nbsp;&nbsp; -->
            
            <!-- 跳转路由并携带query参数，to的对象写法 -->
            <router-link 
            :to="{
                name: 'detail',
                query: {
                    id: msg.id,
                    title: msg.title,
                }
            }">
                {{msg.title}}
            </router-link>&nbsp;&nbsp;
        </li>
    </ul>
    <hr>
    <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'Message',
        data() {
            return {
                messageList : [
                    {id: '001', title: "消息001"},
                    {id: '002', title: "消息002"},
                    {id: '003', title: "消息003"},
                ]
            }
        },
        mounted() {
            console.log(this.$route);
        },
    }
</script>

<style>

</style>