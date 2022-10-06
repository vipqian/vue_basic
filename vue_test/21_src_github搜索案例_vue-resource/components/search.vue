<!--
 * @Author: wangyunfei
 * @Date: 2022-10-04 15:30:32
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-10-04 20:31:04
 * @Description: file content
 * @FilePath: /vue_test/21_src_github搜索案例_vue-resource/components/search.vue
-->
<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github User</h3>
        <div>
            <input 
            type="text" 
            placeholder="enter the name for search"
            v-model="keyword"
            />
            &nbsp;<button
            @click="searchUser"
            >Search</button>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Search',
        data() {
            return {
                keyword: ''
            }
        },
        methods: {
            searchUser(){         
                this.$bus.$emit('getInfo', {isFirst: false, isLoading:true, errMsg: '',users: []})
                if(!this.keyword.trim()) return alert('输入不能为空')
                this.$http.get(`https://api.github.com/search/users?q=${this.keyword}`).then(
                    response => {
                        this.$bus.$emit('getInfo', {isLoading:false , errMsg: '',users: response.data.items})
                    },
                    error => {
                        console.log(error);
                        this.$bus.$emit('getInfo', {isLoading:false , errMsg: error.message ,users: []})

                    }
                )
            }
        },
    }
</script>

<style>

</style>