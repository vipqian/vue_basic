/*
 * @Author: wangyunfei
 * @Date: 2022-09-17 19:56:04
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-10-03 08:47:57
 * @Description: file content
 * @FilePath: /vue_test/src/main.js
 */

import Vue from 'vue'
import App from './App'


Vue.config.productionTip = false




new Vue({
    render: h => h(App),
    beforeCreate(){
        Vue.prototype.$bus = this
    }
}).$mount("#app")
