/*
 * @Author: wangyunfei
 * @Date: 2022-10-08 02:04:19
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-10-08 13:57:09
 * @Description: file content
 * @FilePath: /vue_test/src/ronter/index.js
 */

import vueRonter from 'vue-router'

import About from '../pages/About'
import Home from '../pages/Home'

export default new vueRonter({
    routes: [
        {
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home
        }
    ]
})


