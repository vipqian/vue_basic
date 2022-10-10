/*
 * @Author: wangyunfei
 * @Date: 2022-10-08 02:04:19
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-10-10 21:50:17
 * @Description: file content
 * @FilePath: /vue_test/src/ronter/index.js
 */

import vueRonter from 'vue-router'

import About from '../pages/About'
import Home from '../pages/Home'
import Msg from '../pages/Message'
import News from '../pages/News'
import Detail from '../pages/Detail'

 const router = new vueRonter({
    routes: [
        {
            name: 'about',
            path: '/about',
            component: About
        },
        {
            name: 'home',
            path: '/home',
            component: Home,
            children: [
                {
                    name: 'msg',
                    path: 'msg',
                    component: Msg,
                    meta:  {
                        isAuth: true
                    },
                    // 独享路由
                    // beforeEnter(to, from, next) {
                    //     if(to.meta.isAuth){  //判断是否需要鉴权
                    //         console.log(to.name);
                    //         if (localStorage.getItem('school') == 'atguigu'){
                    //             next()
                    //         }
                    //         else{
                    //             alert('school is not atguigu')
                    //         }
                    //     }else{
                    //         next()
                    //     }
                    // },
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
                    name: 'news',
                    path: 'news',
                    component: News
                },
            ]
        },
        
    ]
})


// 全局前置路由守卫-初始化的时候被调用，每次路由切换之前被调用
// router.beforeEach((to, from, next) => {
//     if(to.meta.isAuth){  //判断是否需要鉴权
//         console.log(to.name);
//         if (localStorage.getItem('school') == 'atguigu'){
//             next()
//         }
//         else{
//             alert('school is not atguigu')
//         }
//     }else{
//         next()
//     }
// })

// 全局后置路由守卫-初始化的时候被调用，每次路由切换之后被调用
// router.afterEach((to, from) => {
//     console.log(to, from);
//     document.title = to.name || 'index' //修改网页title
// })

export default router

