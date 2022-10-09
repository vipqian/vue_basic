/*
 * @Author: wangyunfei
 * @Date: 2022-10-08 02:04:19
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-10-09 21:26:58
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
                            name: 'detail',
                            path: 'detail',
                            component: Detail,
                            // props的第一种写法，值为对象，该对象中所有的key-value都会以props的方式传递给Detail组件
                            // props: {
                            //     a: '1',
                            //     b: "hello"
                            // }


                            // props的第二种写法，值为布尔类型，若布尔类型为真，就会把路由组件中收到的所有的params参数以props的方式传递给Detail组件
                            // props: true

                            // props的第二种写法
                            props(router){
                                return {
                                    id: router.query.id,
                                    title: router.query.title,
                                }
                            }
                            
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


