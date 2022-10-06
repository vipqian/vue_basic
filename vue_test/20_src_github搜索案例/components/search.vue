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
    import axios from 'axios'
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
                axios.get(`https://api.github.com/search/users?q=${this.keyword}`).then(
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