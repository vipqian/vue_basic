/*
 * @Author: wangyunfei
 * @Date: 2022-09-17 19:34:01
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-09-17 19:43:09
 * @Description: file content
 * @FilePath: /vue_basic/19单文件组件/main.js
 */

import App from './App.vue'

new Vue({
    name: 'App',
    template: `<App/>`,
    computed: {
        App
    },
}).$mount('#root')

