/*
 * @Author: wangyunfei
 * @Date: 2022-09-17 19:56:04
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-09-19 22:35:44
 * @Description: file content
 * @FilePath: /vue_test/src/main.js
 */

import Vue from 'vue'
import App from './App'


Vue.config.productionTip = false




new Vue({
    render: h => h(App)
}).$mount("#app")
