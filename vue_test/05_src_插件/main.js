/*
 * @Author: wangyunfei
 * @Date: 2022-09-17 19:56:04
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-09-19 22:30:49
 * @Description: file content
 * @FilePath: /vue_test/src/main.js
 */

import Vue from 'vue'
import App from './App'

import plugin from './plugin'

Vue.config.productionTip = false

// 应用插件
Vue.use(plugin, 1,2,3)


new Vue({
    render: h => h(App)
}).$mount("#app")
