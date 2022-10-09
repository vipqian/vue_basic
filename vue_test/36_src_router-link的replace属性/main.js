/*
 * @Author: wangyunfei
 * @Date: 2022-09-17 19:56:04
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-10-08 02:15:37
 * @Description: file content
 * @FilePath: /vue_test/src/main.js
 */


import Vue from 'vue'
import App from './App'
import VueSource from 'vue-resource'
import VueRouter from 'vue-router'



Vue.config.productionTip = false
// 使用插件
// Vue.use(VueSource)

// 引入store
import store from '../src/store/index'
import ronter from './ronter'

Vue.use(VueRouter)



new Vue({
    render: h => h(App),
    store: store,
    router: ronter,
    beforeCreate(){
        Vue.prototype.$bus = this
    }
}).$mount("#app")
