/*
 * @Author: wangyunfei
 * @Date: 2022-10-08 02:04:19
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-10-08 15:13:32
 * @Description: file content
 * @FilePath: /vue_test/src/ronter/index.js
 */

import vueRonter from 'vue-router'

import About from '../pages/About'
import Home from '../pages/Home'
import Msg from '../pages/Message'
import News from '../pages/News'
import Detail from '../pages/Detail'

export default new vueRonter({
    routes: [
        {
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'msg',
                    component: Msg,
                    children: [
                        {
                            path: 'detail',
                            component: Detail,
                        }

                    ]
                },
                {
                    path: 'news',
                    component: News
                },
            ]
        },
        
    ]
})


