/*
 * @Author: wangyunfei
 * @Date: 2022-09-17 19:56:04
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-09-18 11:02:25
 * @Description: file content
 * @FilePath: /vue_test/src/main.js
 */

import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

import { hunhe, hunhe2 } from "./mixin";
Vue.mixin(hunhe)
Vue.mixin(hunhe2)

new Vue({
    render: h => h(App)
}).$mount("#app")
