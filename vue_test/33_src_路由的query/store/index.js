/*
 * @Author: wangyunfei
 * @Date: 2022-10-06 22:05:06
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-10-07 23:30:38
 * @Description: 该文件用于vuex的核心store
 * @FilePath: /vue_test/src/store/index.js
 */

// 导入vuex
import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'

Vue.use(Vuex)

import CountOptions from './count'
import PersonOptions from './person'
// 创建并且到处vuex
export default new Vuex.Store({
    modules: {
        PersonOptions,
        CountOptions
    }
})
