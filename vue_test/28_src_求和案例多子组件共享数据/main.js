/*
 * @Author: wangyunfei
 * @Date: 2022-09-17 19:56:04
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-10-06 22:24:38
 * @Description: file content
 * @FilePath: /vue_test/src/main.js
 */


import Vue from 'vue'
import App from './App'
import VueSource from 'vue-resource'


Vue.config.productionTip = false
// 使用插件
Vue.use(VueSource)

// 引入store
import store from '../src/store/index'



new Vue({
    render: h => h(App),
    store: store,
    beforeCreate(){
        Vue.prototype.$bus = this
    }
}).$mount("#app")
