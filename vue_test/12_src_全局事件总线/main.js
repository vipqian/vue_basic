/*
 * @Author: wangyunfei
 * @Date: 2022-09-17 19:56:04
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-10-02 16:58:50
 * @Description: file content
 * @FilePath: /vue_test/src/main.js
 */

import Vue from 'vue'
import App from './App'


Vue.config.productionTip = false


new Vue({
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this  //安装全局总线
    },
}).$mount("#app")
